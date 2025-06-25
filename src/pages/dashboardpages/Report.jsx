import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Report = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Sample data for reports
  const reportsData = [
    {
      id: "54852025",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852024",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852023",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852022",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852021",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852020",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852019",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852018",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852017",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852016",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852015",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852014",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
    {
      id: "54852013",
      userName: "Pearlpoodles",
      email: "pearlpoodles@gmail.com",
      reqDate: "12-04-2025",
    },
  ];

  // Filter data based on search term
  const filteredData = reportsData.filter(
    (item) =>
      item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Reset to first page when search term changes
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Reset to first page when items per page changes
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number.parseInt(value));
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="">
      <div className=" mx-auto">
        {/* Header */}
        <div className="bg-[#017783] text-white p-4 rounded-md mb-5">
          <h1 className="text-xl font-semibold">Report</h1>
        </div>

        {/* Controls Section */}
        <div className=" border-x ">
          <div className="flex justify-between items-center p-4">
            {/* All reports count */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                All reports ({filteredData.length})
              </h2>
            </div>

            {/* Date and Search */}
            <div className="flex items-center gap-4">
              {/* Date Picker with Calendar */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-40 justify-start text-left font-normal border-gray-300"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate
                      ? format(selectedDate, "dd-MM-yyyy")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name or id"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 w-64 border-gray-300"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#017783] hover:bg-[#016570] h-8 w-8 p-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <Card className="rounded-none border-t-0">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#017783] hover:bg-[#017783]">
                  <TableHead className="text-white font-semibold text-center">
                    User ID
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center">
                    User Name
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center">
                    Email
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center">
                    Req. Date
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((report, index) => (
                  <TableRow
                    key={report.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <TableCell className="font-medium text-center">
                      {report.id}
                    </TableCell>
                    <TableCell className="text-center">
                      {report.userName}
                    </TableCell>
                    <TableCell className="text-center">
                      {report.email}
                    </TableCell>
                    <TableCell className="text-center">
                      {report.reqDate}
                    </TableCell>
                    <TableCell className="text-center">
                      <Link to={"/dashboard/reportdetails"}>
                        <Button
                          onClick={() => handleViewDetails(report.id)}
                          className="bg-[#017783] hover:bg-[#016570] text-white px-4 py-1 rounded text-sm"
                        >
                          Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination Controls */}
        {filteredData.length > 0 && (
          <div className="bg-white border border-t-0 p-4">
            <div className="flex items-center justify-between">
              {/* Items per page selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Show</span>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={handleItemsPerPageChange}
                >
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-700">entries</span>
              </div>

              {/* Page info */}
              <div className="text-sm text-gray-700">
                Showing {startIndex + 1} to{" "}
                {Math.min(endIndex, filteredData.length)} of{" "}
                {filteredData.length} entries
              </div>

              {/* Pagination buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                {/* Page numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, index) => (
                    <div key={index}>
                      {page === "..." ? (
                        <span className="px-2 py-1 text-gray-500">...</span>
                      ) : (
                        <Button
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => goToPage(page)}
                          className={`w-8 h-8 p-0 ${
                            currentPage === page
                              ? "bg-[#017783] hover:bg-[#016570]"
                              : ""
                          }`}
                        >
                          {page}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Show message if no results */}
        {filteredData.length === 0 && (
          <div className="bg-white border border-t-0 p-8 text-center">
            <p className="text-gray-500">
              No reports found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
