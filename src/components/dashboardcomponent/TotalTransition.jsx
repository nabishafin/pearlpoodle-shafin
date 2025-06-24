import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// Sample transaction data
const transactionData = [
  {
    id: 1,
    trId: "45678",
    userId: "54852025",
    userName: "perapoodle",
    email: "pearl@gmail.com",
    phone: "3678363932",
    amount: "$10",
  },
  {
    id: 2,
    trId: "45678",
    userId: "54852025",
    userName: "perapoodle",
    email: "pearl@gmail.com",
    phone: "3678363932",
    amount: "$10",
  },
  {
    id: 3,
    trId: "45678",
    userId: "54852025",
    userName: "perapoodle",
    email: "pearl@gmail.com",
    phone: "3678363932",
    amount: "$10",
  },
  {
    id: 4,
    trId: "45678",
    userId: "54852025",
    userName: "perapoodle",
    email: "pearl@gmail.com",
    phone: "3678363932",
    amount: "$10",
  },
  {
    id: 5,
    trId: "45679",
    userId: "54852026",
    userName: "johnsmith",
    email: "john@gmail.com",
    phone: "3678363933",
    amount: "$25",
  },
  {
    id: 6,
    trId: "45680",
    userId: "54852027",
    userName: "maryjane",
    email: "mary@gmail.com",
    phone: "3678363934",
    amount: "$15",
  },
  {
    id: 7,
    trId: "45681",
    userId: "54852028",
    userName: "bobwilson",
    email: "bob@gmail.com",
    phone: "3678363935",
    amount: "$30",
  },
  {
    id: 8,
    trId: "45682",
    userId: "54852029",
    userName: "alicegreen",
    email: "alice@gmail.com",
    phone: "3678363936",
    amount: "$20",
  },
];

const TotalTransition = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(transactionData.length / itemsPerPage);

  const filteredTransactions = transactionData.filter(
    (transaction) =>
      transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.trId.includes(searchTerm) ||
      transaction.userId.includes(searchTerm)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 5;

    if (totalPages <= maxButtons) {
      // Show all pages if total pages is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // Show 5 buttons with current page in the middle when possible
      let start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxButtons - 1);

      // Adjust start if we're near the end
      if (end - start < maxButtons - 1) {
        start = Math.max(1, end - maxButtons + 1);
      }

      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }
    }

    return buttons;
  };

  return (
    <div className="w-full mx-auto ">
      <Card className=" ">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-bold">
            Total Transition (534)
          </CardTitle>
          <div className="relative flex items-center">
            <Input
              placeholder="Search Name or ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-12 w-64"
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button
              onClick={handleSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#017783] hover:bg-[#017683e5] text-white p-2 rounded-md"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#017783] hover:bg-[#017783]">
                <TableHead className="text-white text-center font-medium">
                  #Tr.ID
                </TableHead>
                <TableHead className="text-white text-center font-medium">
                  User ID
                </TableHead>
                <TableHead className="text-white text-center font-medium">
                  User Name
                </TableHead>
                <TableHead className="text-white text-center font-medium">
                  Email
                </TableHead>
                <TableHead className="text-white text-center font-medium">
                  Phone No
                </TableHead>
                <TableHead className="text-white text-center font-medium">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentTransactions.length > 0 ? (
                currentTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="hover:bg-gray-50">
                    <TableCell className="text-center">
                      {transaction.trId}
                    </TableCell>
                    <TableCell className="text-center">
                      {transaction.userId}
                    </TableCell>
                    <TableCell className="text-center">
                      {transaction.userName}
                    </TableCell>
                    <TableCell className="text-center">
                      {transaction.email}
                    </TableCell>
                    <TableCell className="text-center">
                      {transaction.phone}
                    </TableCell>
                    <TableCell className="text-center font-medium">
                      {transaction.amount}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-8 text-gray-500"
                  >
                    No transactions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 py-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="bg-[#017783] text-white hover:bg-[#017683e5] disabled:bg-gray-300 disabled:text-gray-500"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            {getPaginationButtons().map((pageNum) => (
              <Button
                key={pageNum}
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-8 ${
                  currentPage === pageNum
                    ? "bg-[#017783] text-white hover:bg-[#017683e5]"
                    : "hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="bg-[#017783] text-white hover:bg-[#017683e5] disabled:bg-gray-300 disabled:text-gray-500"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TotalTransition;
