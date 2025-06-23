import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import authlogo from "../../assets/bro.svg";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateNewPassword = (password) => {
    if (!password) {
      return "New password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return "Password must contain uppercase, lowercase and number";
    }
    return "";
  };

  const validateConfirmPassword = (confirmPass, newPass) => {
    if (!confirmPass) {
      return "Please confirm your password";
    }
    if (confirmPass !== newPass) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPassErr = validateNewPassword(newPassword);
    const confirmPassErr = validateConfirmPassword(
      confirmPassword,
      newPassword
    );

    setNewPasswordError(newPassErr);
    setConfirmPasswordError(confirmPassErr);

    if (!newPassErr && !confirmPassErr) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        console.log("Password reset successful");
      }, 2000);
    }
  };

  const handleBackToOTP = () => {
    console.log("Navigate back to OTP verification");
  };

  const handleGoToSignIn = () => {
    console.log("Navigate to sign in");
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Password Reset Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Your password has been reset successfully. You can now sign in
                with your new password.
              </p>
              <Button
                onClick={handleGoToSignIn}
                className="w-full h-12 bg-[#017783] hover:bg-[#017683e5] text-white font-medium rounded-lg"
              >
                Go to Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-12">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <img src={authlogo || "/placeholder.svg"} alt="" />
        </div>

        {/* Right side - Reset Password form */}
        <div className="flex-1 max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={handleBackToOTP}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Reset Password
                </CardTitle>
              </div>
              <p className="text-gray-600 text-sm">
                Your password must be 8 characters long
              </p>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="newPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    New Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                        if (newPasswordError) setNewPasswordError("");
                      }}
                      className={`h-12 pl-12 pr-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                        newPasswordError
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {newPasswordError && (
                    <p className="text-sm text-red-600 mt-1">
                      {newPasswordError}
                    </p>
                  )}

                  {/* Password strength indicator */}
                  {newPassword && (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            newPassword.length >= 8
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span
                          className={
                            newPassword.length >= 8
                              ? "text-green-600"
                              : "text-gray-500"
                          }
                        >
                          At least 8 characters
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            /(?=.*[a-z])(?=.*[A-Z])/.test(newPassword)
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span
                          className={
                            /(?=.*[a-z])(?=.*[A-Z])/.test(newPassword)
                              ? "text-green-600"
                              : "text-gray-500"
                          }
                        >
                          Upper & lowercase letters
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            /(?=.*\d)/.test(newPassword)
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span
                          className={
                            /(?=.*\d)/.test(newPassword)
                              ? "text-green-600"
                              : "text-gray-500"
                          }
                        >
                          At least one number
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    Re-enter Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (confirmPasswordError) setConfirmPasswordError("");
                      }}
                      className={`h-12 pl-12 pr-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                        confirmPasswordError
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {confirmPasswordError && (
                    <p className="text-sm text-red-600 mt-1">
                      {confirmPasswordError}
                    </p>
                  )}

                  {/* Password match indicator */}
                  {confirmPassword && newPassword && (
                    <div className="flex items-center gap-2 text-xs">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          confirmPassword === newPassword
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span
                        className={
                          confirmPassword === newPassword
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {confirmPassword === newPassword
                          ? "Passwords match"
                          : "Passwords do not match"}
                      </span>
                    </div>
                  )}
                </div>

                <Button
                  className="w-full h-12 bg-[#017783] hover:bg-[#017683e5] text-white font-medium rounded-lg"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Confirming..." : "Confirm"}
                </Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
