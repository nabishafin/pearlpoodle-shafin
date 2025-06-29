import StatsCard from "../../components/dashboardcomponent/StatsCard";
import EarningsChart from "../../components/dashboardcomponent/EarningsChart";
import RecentUsers from "../../components/dashboardcomponent/RecentUsers";

export default function DashboardOverview() {
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
