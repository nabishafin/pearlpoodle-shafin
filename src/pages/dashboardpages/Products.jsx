import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const recentProducts = [
  {
    id: 1,
    serial: "REC001",
    name: "Jane Cooper",
    category: "Health",
    email: "jane@email.com",
    contact: "United Kingdom",
    status: "Pending",
  },
  {
    id: 2,
    serial: "REC002",
    name: "Robert Smith",
    category: "Electronics",
    email: "robert@email.com",
    contact: "Canada",
    status: "Pending",
  },
  {
    id: 3,
    serial: "REC003",
    name: "Alice Johnson",
    category: "Books",
    email: "alice@email.com",
    contact: "Australia",
    status: "Pending",
  },
  {
    id: 4,
    serial: "REC004",
    name: "Michael Brown",
    category: "Toys",
    email: "michael@email.com",
    contact: "Germany",
    status: "Pending",
  },
  {
    id: 5,
    serial: "REC005",
    name: "Emma Wilson",
    category: "Beauty",
    email: "emma@email.com",
    contact: "France",
    status: "Pending",
  },
  {
    id: 6,
    serial: "REC006",
    name: "Noah Davis",
    category: "Sports",
    email: "noah@email.com",
    contact: "Italy",
    status: "Pending",
  },
  {
    id: 7,
    serial: "REC007",
    name: "Olivia Miller",
    category: "Fashion",
    email: "olivia@email.com",
    contact: "Spain",
    status: "Pending",
  },
  {
    id: 8,
    serial: "REC008",
    name: "Liam Garcia",
    category: "Garden",
    email: "liam@email.com",
    contact: "Mexico",
    status: "Pending",
  },
  {
    id: 9,
    serial: "REC009",
    name: "Sophia Martinez",
    category: "Home",
    email: "sophia@email.com",
    contact: "Brazil",
    status: "Pending",
  },
  {
    id: 10,
    serial: "REC010",
    name: "James Rodriguez",
    category: "Furniture",
    email: "james@email.com",
    contact: "Argentina",
    status: "Pending",
  },
];

const approvedProducts = [
  {
    id: 1,
    serial: "APP001",
    name: "John Cooper",
    category: "Electronics",
    email: "john@email.com",
    contact: "United States",
    status: "Approved",
  },
  {
    id: 2,
    serial: "APP002",
    name: "Sarah Wilson",
    category: "Clothing",
    email: "sarah@email.com",
    contact: "Canada",
    status: "Approved",
  },
  {
    id: 3,
    serial: "APP003",
    name: "Mike Johnson",
    category: "Books",
    email: "mike@email.com",
    contact: "Australia",
    status: "Approved",
  },
  {
    id: 4,
    serial: "APP004",
    name: "Emily Davis",
    category: "Home & Garden",
    email: "emily@email.com",
    contact: "United Kingdom",
    status: "Approved",
  },
  {
    id: 5,
    serial: "APP005",
    name: "David Brown",
    category: "Sports",
    email: "david@email.com",
    contact: "Germany",
    status: "Approved",
  },
  {
    id: 6,
    serial: "APP006",
    name: "Lisa Anderson",
    category: "Beauty",
    email: "lisa@email.com",
    contact: "France",
    status: "Approved",
  },
  {
    id: 7,
    serial: "APP007",
    name: "Tom Wilson",
    category: "Electronics",
    email: "tom@email.com",
    contact: "Japan",
    status: "Approved",
  },
  {
    id: 8,
    serial: "APP008",
    name: "Anna Taylor",
    category: "Fashion",
    email: "anna@email.com",
    contact: "Italy",
    status: "Approved",
  },
  {
    id: 9,
    serial: "APP009",
    name: "Henry Moore",
    category: "Health",
    email: "henry@email.com",
    contact: "Sweden",
    status: "Approved",
  },
  {
    id: 10,
    serial: "APP010",
    name: "Grace Lee",
    category: "Stationery",
    email: "grace@email.com",
    contact: "Norway",
    status: "Approved",
  },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const currentProducts =
    activeFilter === "recent" ? recentProducts : approvedProducts;

  const filteredProducts = currentProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (productId) => {
    alert(`Viewing details for product ID: ${productId}`);
  };

  return (
    <div className="w-full mx-auto">
      <div className=" overflow-hidden">
        {/* Header */}
        <div className="bg-[#017783] text-white rounded-md mb-4">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-semibold mr-2">Products</h1>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center justify-between px-2 pb-2 ">
            {/* Filter Dropdown - Now on Left */}
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm font-medium"></span>
              <Select value={activeFilter} onValueChange={handleFilterChange}>
                <SelectTrigger className="w-48 bg-white text-gray-900">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">
                    Recent products ({recentProducts.length})
                  </SelectItem>
                  <SelectItem value="approved">
                    Approved products ({approvedProducts.length})
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Input - Now on Right */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name, email, category, or contact..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 pr-10 border text-white border-gray-300 rounded-md  focus:ring-2  focus:border-white "
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#017783] hover:bg-[#017783]  text-center">
                <TableHead className="text-white font-semibold text-center">
                  Serial
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  Name
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  Category
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  Email
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  Contact
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  Status
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  View Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:bg-gray-50 text-center"
                >
                  <TableCell className="text-center font-medium">
                    {product.serial}
                  </TableCell>
                  <TableCell className="text-center">{product.name}</TableCell>
                  <TableCell className="text-center">
                    {product.category}
                  </TableCell>
                  <TableCell className="text-center">{product.email}</TableCell>
                  <TableCell className="text-center">
                    {product.contact}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      size="sm"
                      className={
                        product.status === "Approved"
                          ? "bg-green-300 hover:bg-green-400 text-white"
                          : "bg-red-200 hover:bg-red-300 text-white"
                      }
                    >
                      {product.status}
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      size="sm"
                      onClick={() => handleViewDetails(product.id)}
                      className="bg-[#017783] text-white border-[#017783]"
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t">
          <div className="flex items-center space-x-2"></div>

          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <Button
                  key={pageNum}
                  size="sm"
                  onClick={() => handlePageChange(pageNum)}
                  className={`h-8 w-8 p-0 ${
                    currentPage === pageNum
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : ""
                  }`}
                >
                  {pageNum}
                </Button>
              );
            })}

            {totalPages > 5 && (
              <>
                <Button size="sm" className="h-8 w-8 p-0" disabled>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handlePageChange(totalPages)}
                  className="h-8 w-8 p-0"
                >
                  {totalPages}
                </Button>
              </>
            )}

            <Button
              size="sm"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredProducts.length)} of{" "}
            {filteredProducts.length} entries
          </div>
        </div>
      </div>
    </div>
  );
}
