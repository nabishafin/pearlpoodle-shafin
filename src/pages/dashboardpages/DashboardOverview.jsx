import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import StatsCard from "../../components/dashboardcomponent/StatsCard";
import EarningsChart from "../../components/dashboardcomponent/EarningsChart";
import RecentUsers from "../../components/dashboardcomponent/RecentUsers";

const recentUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Oak Ave, Town",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    address: "789 Pine Rd, Village",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    address: "321 Elm St, City",
    status: "Active",
  },
];

const earningsData = [
  { month: "Jan", amount: 8000 },
  { month: "Feb", amount: 6000 },
  { month: "Mar", amount: 10000 },
  { month: "Apr", amount: 7000 },
  { month: "May", amount: 12000 },
  { month: "Jun", amount: 9000 },
  { month: "Jul", amount: 11000 },
  { month: "Aug", amount: 8500 },
  { month: "Sep", amount: 13000 },
  { month: "Oct", amount: 10500 },
  { month: "Nov", amount: 12500 },
  { month: "Dec", amount: 14000 },
];

export default function DashboardOverview() {
  const maxAmount = Math.max(...earningsData.map((d) => d.amount));

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white bg-[#017783] p-5 rounded-lg">
          Overview
        </h2>
      </div>

      {/* Stats Cards - Responsive Grid */}
      <StatsCard />

      {/* Earnings Chart - Mobile Responsive */}
      <EarningsChart />

      {/* Recent Users Table - Mobile Responsive */}
      <RecentUsers />
    </div>
  );
}
