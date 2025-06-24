import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const EarningStats = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-gray-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Total Earnings
            </h3>
            <p className="text-3xl font-bold text-gray-900">$12030</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Withdrawal Amount
            </h3>
            <p className="text-3xl font-bold text-gray-900">$12030</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Buyer protection Fee : 5 %
            </h3>
            <Button className="mt-2 bg-[#017783] hover:bg-[#017683e5] text-white px-6 py-2 rounded-full">
              Change
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EarningStats;
