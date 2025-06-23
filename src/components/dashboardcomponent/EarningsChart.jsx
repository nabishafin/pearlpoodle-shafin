import { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const earningsData = [
  { month: "Jan", earnings: 13000, shortMonth: "Jan" },
  { month: "Feb", earnings: 6000, shortMonth: "Feb" },
  { month: "Mar", earnings: 21000, shortMonth: "Mar" },
  { month: "Apr", earnings: 13000, shortMonth: "Apr" },
  { month: "May", earnings: 23000, shortMonth: "May" },
  { month: "Jun", earnings: 22000, shortMonth: "Jun" },
  { month: "Jul", earnings: 22000, shortMonth: "Jul" },
  { month: "Aug", earnings: 24000, shortMonth: "Aug" },
  { month: "Sept", earnings: 14000, shortMonth: "Sept" },
  { month: "Oct", earnings: 6000, shortMonth: "Oct" },
  { month: "Nov", earnings: 21000, shortMonth: "Nov" },
  { month: "Dec", earnings: 23000, shortMonth: "Dec" },
];

const EarningsChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const formatEarnings = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString();
  };

  const chartConfig = {
    earnings: {
      label: "Earnings",
      color: "#017783",
    },
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm border">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Earnings</h2>

        {/* Calendar Popover */}
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              {format(selectedDate, "yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                if (date) {
                  setSelectedDate(date);
                  setIsCalendarOpen(false);
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Chart using shadcn/ui */}
      <div className="w-full h-96">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={earningsData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="shortMonth"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#017783" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#017783" }}
                tickFormatter={formatEarnings}
                domain={[0, 25000]}
                ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                        <p className="font-medium text-gray-900 mb-1">
                          {label} {format(selectedDate, "yyyy")}
                        </p>
                        <p className="text-[#017783] font-semibold text-lg">
                          ${payload[0].value?.toLocaleString()}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="earnings"
                fill="#017783"
                radius={[2, 2, 0, 0]}
                barSize={45}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default EarningsChart;
