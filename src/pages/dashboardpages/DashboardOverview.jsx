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
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
            Recent Users
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 sm:p-6">
          {/* Mobile Card View */}
          <div className="block sm:hidden">
            <div className="space-y-3 p-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="bg-gray-50 rounded-lg p-3 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{user.name}</h4>
                    <Badge
                      variant={
                        user.status === "Active" ? "default" : "secondary"
                      }
                      className={
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                    >
                      {user.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-xs text-gray-500">{user.address}</p>
                  <div className="flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Address
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {user.email}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell max-w-[250px] truncate">
                      {user.address}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "Active" ? "default" : "secondary"
                        }
                        className={
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
