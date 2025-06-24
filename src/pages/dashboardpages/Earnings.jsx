import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import EarningStats from "../../components/dashboardcomponent/EarningStats";
import EarningsChart from "../../components/dashboardcomponent/EarningsChart";
import TotalTransition from "../../components/dashboardcomponent/TotalTransition";

// Sample data for the chart
const chartData = [
  { month: "Jan", value: 14000 },
  { month: "Feb", value: 7000 },
  { month: "Mar", value: 21000 },
  { month: "Apr", value: 14000 },
  { month: "May", value: 23000 },
  { month: "Jun", value: 21000 },
  { month: "Jul", value: 21000 },
  { month: "Aug", value: 22000 },
  { month: "Sep", value: 13000 },
  { month: "Oct", value: 7000 },
  { month: "Nov", value: 20000 },
  { month: "Dec", value: 23000 },
];

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
];

const Earnings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(13);
  const [selectedYear, setSelectedYear] = useState("2025");

  const maxValue = Math.max(...chartData.map((item) => item.value));

  const filteredTransactions = transactionData.filter(
    (transaction) =>
      transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.trId.includes(searchTerm) ||
      transaction.userId.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className=" mx-auto space-y-6">
        {/* Header */}
        <div className="text-xl sm:text-2xl font-bold mb-5 text-white bg-[#017783] p-5 rounded-lg">
          <h1 className="text-xl font-semibold">Earnings</h1>
        </div>

        {/* Summary Cards */}
        <EarningStats />

        {/* Chart Section */}
        <EarningsChart />

        {/* Transaction Table */}
        <TotalTransition />
      </div>
    </div>
  );
};

export default Earnings;
