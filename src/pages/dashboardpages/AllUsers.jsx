import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for users
const generateMockUsers = () => {
  const statuses = ["New Users", "Approved", "Verified", "Pending"];
  const names = [
    "Jane Cooper",
    "John Doe",
    "Alice Smith",
    "Bob Johnson",
    "Emma Wilson",
    "Michael Brown",
    "Sarah Davis",
    "David Miller",
    "Lisa Anderson",
    "Chris Taylor",
  ];
  const domains = ["@email.com", "@gmail.com", "@yahoo.com", "@outlook.com"];
  const addresses = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
  ];

  return Array.from({ length: 376 }, (_, i) => ({
    id: 584548 + i,
    name: names[i % names.length],
    email: `user${i + 1}${domains[i % domains.length]}`,
    address: addresses[i % addresses.length],
    status: statuses[i % statuses.length],
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
  }));
};

const AllUsers = () => {
  const [users] = useState(generateMockUsers());
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("All Users");
  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage = 12;

  // Filter and search logic
  const filteredUsers = useMemo(() => {
    let filtered = users;

    // Apply filter
    if (filterType !== "All Users") {
      if (filterType === "Recent Users") {
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        filtered = filtered.filter((user) => user.createdAt > sevenDaysAgo);
      } else if (filterType === "Approved Users") {
        filtered = filtered.filter((user) => user.status === "Approved");
      } else if (filterType === "Verified Users") {
        filtered = filtered.filter((user) => user.status === "Verified");
      }
    }

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.id.toString().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [users, filterType, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Reset to first page when filter or search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filterType, searchTerm]);

  const getStatusColor = (status) => {
    switch (status) {
      case "New Users":
        return "bg-blue-100 text-blue-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Verified":
        return "bg-purple-100 text-purple-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          All users ({filteredUsers.length})
        </h1>

        <div className="flex items-center gap-4">
          {/* Filter Dropdown */}
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Users">All Users</SelectItem>
              <SelectItem value="Recent Users">Recent Users</SelectItem>
              <SelectItem value="Approved Users">Approved Users</SelectItem>
              <SelectItem value="Verified Users">Verified Users</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search Name or ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-[250px]"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className=" overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#017783] hover:bg-teal-600">
              <TableHead className="text-white font-semibold">ID</TableHead>
              <TableHead className="text-white font-semibold">
                User Name
              </TableHead>
              <TableHead className="text-white font-semibold">Email</TableHead>
              <TableHead className="text-white font-semibold">
                Address
              </TableHead>
              <TableHead className="text-white font-semibold">Status</TableHead>
              <TableHead className="text-white font-semibold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user, index) => (
              <TableRow
                key={user.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="bg-[#017783] hover:bg-teal-700 text-white"
                  >
                    View details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {/* Page Numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNum);
                      }}
                      isActive={currentPage === pageNum}
                      className={
                        currentPage === pageNum
                          ? "bg-[#017783] text-white hover:bg-teal-700"
                          : ""
                      }
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* No results message */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No users found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default AllUsers;
