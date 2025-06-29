import EarningStats from "../../components/dashboardcomponent/EarningStats";
import EarningsChart from "../../components/dashboardcomponent/EarningsChart";
import TotalTransition from "../../components/dashboardcomponent/TotalTransition";

const Earnings = () => {
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
