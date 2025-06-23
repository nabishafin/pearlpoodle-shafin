import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
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

// Mock data for recent users (users created in the last 7 days)
const generateRecentUsers = () => {
  const names = [
    "Jane Cooper",
    "John Smith",
    "Alice Johnson",
    "Bob Wilson",
    "Emma Davis",
    "Michael Brown",
    "Sarah Miller",
    "David Garcia",
    "Lisa Anderson",
    "James Taylor",
    "Maria Rodriguez",
    "Robert Martinez",
    "Jennifer Lee",
    "William Clark",
    "Elizabeth White",
    "Christopher Hall",
    "Jessica Young",
    "Daniel King",
    "Ashley Wright",
    "Matthew Lopez",
    "Amanda Hill",
    "Joshua Green",
    "Stephanie Adams",
    "Andrew Baker",
    "Michelle Nelson",
  ];

  const domains = ["@email.com", "@gmail.com", "@yahoo.com", "@outlook.com"];
  const addresses = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
  ];

  return Array.from({ length: 87 }, (_, i) => ({
    id: 584548 + i,
    name: names[i % names.length],
    email: `${names[i % names.length].toLowerCase().replace(" ", ".")}${
      domains[i % domains.length]
    }`,
    address: addresses[i % addresses.length],
    createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // Random date within last 7 days
  }));
};

const RecentUsers = () => {
  const [users] = useState(generateRecentUsers());
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const sortedUsers = useMemo(() => {
    return [...users].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }, [users]);

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = sortedUsers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="mt-9 mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white bg-[#017783] p-5 rounded-lg">
          Recent Users
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#017783] hover:bg-[#017783] text-center">
              <TableHead className="text-white font-semibold text-center">
                ID
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                User Name
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Email
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Address
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user, index) => (
              <TableRow
                key={user.id}
                className={
                  index % 2 === 0
                    ? "bg-gray-50 text-center"
                    : "bg-white text-center"
                }
              >
                <TableCell className="font-medium text-center">
                  {user.id}
                </TableCell>
                <TableCell className="text-center">{user.name}</TableCell>
                <TableCell className="text-center">{user.email}</TableCell>
                <TableCell className="text-center">{user.address}</TableCell>
                <TableCell className="text-center">
                  <Button size="sm" className="bg-[#017783] text-white">
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
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {getVisiblePages().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "..." ? (
                    <span className="px-3 py-2">...</span>
                  ) : (
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      isActive={currentPage === page}
                      className={currentPage === page ? "bg-[#017783]" : ""}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      handlePageChange(currentPage + 1);
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

      {/* Empty state */}
      {sortedUsers.length === 0 && (
        <div className="bg-white border rounded-lg p-8 text-center text-gray-500">
          No recent users found.
        </div>
      )}
    </div>
  );
};

export default RecentUsers;
