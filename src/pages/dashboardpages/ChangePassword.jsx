import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Lock, Eye, EyeOff } from "lucide-react";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSaveChanges = () => {
    // Validate passwords
    if (
      !passwords.oldPassword ||
      !passwords.newPassword ||
      !passwords.confirmPassword
    ) {
      alert("Please fill in all password fields");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    if (passwords.newPassword.length < 6) {
      alert("New password must be at least 6 characters long");
      return;
    }

    // Handle save logic here
    console.log("Changing password...");
    alert("Password changed successfully!");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log("Forgot password clicked");
    alert("Forgot password functionality would be implemented here");
  };

  const handleGoBack = () => {
    // Handle navigation back
    console.log("Going back...");
    window.history.back();
  };

  return (
    <div className="  font-sans">
      {/* Header */}
      <div className="bg-[#017783] text-white p-4 flex items-center space-x-3">
        <button
          onClick={handleGoBack}
          className="hover:bg-white/10 p-1 rounded"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <span className="text-xl font-medium">Change password</span>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-[calc(80vh-80px)] p-4">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Change Password
          </h2>

          <div className="space-y-6">
            {/* Old Password */}
            <div>
              <Label htmlFor="oldPassword" className="sr-only">
                Enter old password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="oldPassword"
                  type={showPasswords.oldPassword ? "text" : "password"}
                  value={passwords.oldPassword}
                  onChange={(e) =>
                    handlePasswordChange("oldPassword", e.target.value)
                  }
                  placeholder="Enter old password"
                  className="pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#017783] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("oldPassword")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPasswords.oldPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <Label htmlFor="newPassword" className="sr-only">
                Enter new Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="newPassword"
                  type={showPasswords.newPassword ? "text" : "password"}
                  value={passwords.newPassword}
                  onChange={(e) =>
                    handlePasswordChange("newPassword", e.target.value)
                  }
                  placeholder="Enter new Password"
                  className="pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#017783] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("newPassword")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPasswords.newPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <Label htmlFor="confirmPassword" className="sr-only">
                Re-enter new Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="confirmPassword"
                  type={showPasswords.confirmPassword ? "text" : "password"}
                  value={passwords.confirmPassword}
                  onChange={(e) =>
                    handlePasswordChange("confirmPassword", e.target.value)
                  }
                  placeholder="Re-enter new Password"
                  className="pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#017783] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPasswords.confirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-left">
              <button
                onClick={handleForgotPassword}
                className="text-red-500 hover:text-red-600 text-sm font-medium"
              >
                Forgot password?
              </button>
            </div>

            {/* Save Changes Button */}
            <Button
              onClick={handleSaveChanges}
              className="w-full bg-[#017783] hover:bg-[#015a63] text-white py-3 rounded-md font-medium text-lg"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
