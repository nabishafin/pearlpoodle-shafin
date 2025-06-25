import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const EarningStats = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyerProtectionFee, setBuyerProtectionFee] = useState(5);
  const [tempFee, setTempFee] = useState(5);

  const handleSaveChanges = () => {
    setBuyerProtectionFee(tempFee);
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setTempFee(buyerProtectionFee);
    setIsModalOpen(true);
  };

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
              Buyer protection Fee : {buyerProtectionFee} %
            </h3>
            <Button
              onClick={handleModalOpen}
              className="mt-2 bg-[#017783] hover:bg-[#017683e5] text-white px-6 py-2 rounded-full"
            >
              Change
            </Button>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="relative">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Buyer Protection
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              The buyer protection fee ensures secure transactions, safeguarding
              buyers against fraud and delivery issues.
            </p>

            <div className="space-y-2">
              <Label
                htmlFor="percentage"
                className="text-sm font-medium text-gray-700"
              >
                Set amount percentage
              </Label>
              <div className="relative">
                <Input
                  id="percentage"
                  type="number"
                  value={tempFee}
                  onChange={(e) => setTempFee(Number(e.target.value))}
                  className="pr-8 border-2 border-blue-200 focus:border-blue-400"
                  min="0"
                  max="100"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  %
                </span>
              </div>
            </div>

            <Button
              onClick={handleSaveChanges}
              className="w-full bg-[#017783] hover:bg-[#016570] text-white py-2 rounded-lg font-medium"
            >
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EarningStats;
