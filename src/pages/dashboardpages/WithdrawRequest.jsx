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
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const WithdrawRequest = () => {
  const [activeTab, setActiveTab] = useState("total");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const totalRequestsData = new Array(12).fill(null).map((_, i) => ({
    id: `548520${25 - i}`,
    userName: "Henryboodles",
    email: "henryboodles@gmail.com",
    reqDate: "12-04-2025",
    amount: "$340",
    status: "pending",
  }));

  const historyData = new Array(12).fill(null).map((_, i) => ({
    id: `5485200${5 - i}`,
    userName: "Jane Cooper",
    email: "janecooper@gmail.com",
    reqDate: "12-04-2025",
    amount: "$340",
    status: "completed",
  }));

  const getCurrentData = () =>
    activeTab === "total" ? totalRequestsData : historyData;

  const filteredData = getCurrentData().filter(
    (item) =>
      item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const handlePayNow = (request) => {
    setSelectedRequest(request);
    setIsPaymentModalOpen(true);
  };

  const handleConfirmPayment = () => {
    if (selectedRequest) {
      alert(
        `Payment processed for ${selectedRequest.userName} - ${selectedRequest.amount}`
      );
      setIsPaymentModalOpen(false);
      setSelectedRequest(null);
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    pages.push(
      <Button
        key="prev"
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-2"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    );

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="sm"
          onClick={() => setCurrentPage(i)}
          className={`px-3 ${
            currentPage === i ? "bg-[#017783] hover:bg-[#016570]" : ""
          }`}
        >
          {i}
        </Button>
      );
    }

    pages.push(
      <Button
        key="next"
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-2"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    );

    return pages;
  };

  return (
    <div className="">
      <div className="mx-auto">
        {/* Header */}
        <div className="bg-[#017783] text-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Withdraw request</h1>
        </div>

        {/* Tabs and Search */}
        <div className="">
          <div className="flex justify-between items-center py-4">
            <div className="flex">
              <Button
                onClick={() => handleTabChange("total")}
                className={`mr-2 px-4 py-2 rounded-lg font-medium ${
                  activeTab === "total"
                    ? "bg-[#017783] text-white hover:bg-[#016570]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Total request ({totalRequestsData.length})
              </Button>
              <Button
                onClick={() => handleTabChange("history")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "history"
                    ? "bg-[#017783] text-white hover:bg-[#016570]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                History
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Name or ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <Card className="rounded-none bg-none">
          <CardContent className="p-0 rounded-none">
            <Table className="rounded-none">
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
                    Amount
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((request, index) => (
                  <TableRow
                    key={request.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
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
                      {activeTab === "total" ? (
                        <Button
                          onClick={() => handlePayNow(request)}
                          className="bg-[#017783] hover:bg-[#016570] text-white px-4 py-1 rounded text-sm"
                        >
                          Pay Now
                        </Button>
                      ) : (
                        <span className="text-green-600 font-medium">
                          Completed
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="bg-white p-4">
          <div className="flex justify-center items-center gap-2">
            {renderPagination()}
          </div>
        </div>

        {/* Payment Modal */}
        <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-red-600">
                Pay Now
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 text-center">
                Are you sure to pay now
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  No
                </Button>
                <Button
                  onClick={handleConfirmPayment}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  Yes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default WithdrawRequest;
