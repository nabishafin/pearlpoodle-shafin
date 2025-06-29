import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RefundRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 10;

  const activeRequests = Array.from({ length: 45 }, (_, index) => ({
    id: `54852025`,
    userId: `User ${index + 1}`,
    userName: "Pearlpoodlee",
    email: "pearlpoodlee@gmail.com",
    reqDate: "12-04-2025",
    amount: "$340",
    status: "pending",
  }));

  const historyRequests = Array.from({ length: 20 }, (_, index) => ({
    id: `54851${String(index + 100).padStart(3, "0")}`,
    userId: `User ${index + 20}`,
    userName: "Pearlpoodlee",
    email: "pearlpoodlee@gmail.com",
    reqDate: `${10 + index}-03-2025`,
    amount: `$${320 + index * 15}`,
    status:
      index % 3 === 0 ? "approved" : index % 3 === 1 ? "rejected" : "completed",
    processedDate: `${12 + index}-03-2025`,
  }));

  const filteredActiveRequests = activeRequests.filter(
    (request) =>
      request.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHistoryRequests = historyRequests.filter(
    (request) =>
      request.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedRequests = filteredActiveRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className=" ">
      <div className="mx-auto">
        <div className="bg-[#017783] text-white p-4 rounded-md mb-4">
          <h1 className="text-lg font-semibold">Refund request</h1>
        </div>

        <div className="">
          <Tabs defaultValue="total-requests" className="w-full">
            <div className="flex items-center justify-between py-4 border-b">
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="total-requests"
                  className="data-[state=active]:bg-[#017783] data-[state=active]:text-white bg-gray-100 text-gray-700 px-4 py-2 rounded"
                >
                  Total request ({filteredActiveRequests.length})
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-[#017783] data-[state=active]:text-white bg-gray-100 text-gray-700 px-4 py-2 rounded ml-2"
                >
                  History ({filteredHistoryRequests.length})
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Items ({filteredActiveRequests.length} |{" "}
                  {filteredHistoryRequests.length})
                </span>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <TabsContent value="total-requests" className="mt-0">
              <Card className="rounded-none border-0">
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
                          Req Date
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center">
                          Amount
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center">
                          Action
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedRequests.map((request, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-center">
                            {request.id}
                          </TableCell>
                          <TableCell className="text-center">
                            {request.userName}
                          </TableCell>
                          <TableCell className="text-center">
                            {request.email}
                          </TableCell>
                          <TableCell className="text-center">
                            {request.reqDate}
                          </TableCell>
                          <TableCell className="font-semibold text-center">
                            {request.amount}
                          </TableCell>
                          <TableCell className="text-center">
                            <Link to={"/dashboard/refunddetails"}>
                              <Button
                                size="sm"
                                className="bg-[#017783] hover:bg-[#017783]0 text-white px-4 py-1 text-xs"
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
            </TabsContent>

            <TabsContent value="history" className="mt-0">
              <Card className="rounded-none border-0">
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
                          Req Date
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center">
                          Amount
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredHistoryRequests.map((request, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-center">
                            {request.id}
                          </TableCell>
                          <TableCell className="text-center">
                            {request.userName}
                          </TableCell>
                          <TableCell className="text-center">
                            {request.email}
                          </TableCell>
                          <TableCell className="text-center">
                            {request.reqDate}
                          </TableCell>
                          <TableCell className="font-semibold text-center">
                            {request.amount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-white border border-t-0 rounded-b-lg p-4">
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="bg-[#017783] text-white border-teal-600 hover:bg-[#017783]"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from(
              {
                length: Math.ceil(filteredActiveRequests.length / itemsPerPage),
              },
              (_, index) => (
                <Button
                  key={index + 1}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(index + 1)}
                  className={
                    currentPage === index + 1
                      ? "bg-[#017783]  text-white hover:bg-teal-700"
                      : "border-gray-300 hover:bg-gray-50"
                  }
                >
                  {index + 1}
                </Button>
              )
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                handlePageChange(
                  Math.min(
                    Math.ceil(filteredActiveRequests.length / itemsPerPage),
                    currentPage + 1
                  )
                )
              }
              disabled={
                currentPage ===
                Math.ceil(filteredActiveRequests.length / itemsPerPage)
              }
              className="bg-[#017783] text-white border-teal-600 hover:bg-[#017783]"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundRequest;
