import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, User } from "lucide-react";
import authlogo from "../../assets/bro.svg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    setEmailError(emailErr);

    if (!emailErr) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        console.log("OTP sent to:", email);
      }, 2000);
    }
  };

  const handleBackToSignIn = () => {
    // Navigate back to sign in page
    console.log("Navigate to sign in");
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-600 mb-6">
                We've sent a password reset OTP to <strong>{email}</strong>
              </p>
              <Button
                onClick={handleBackToSignIn}
                className="w-full h-12 bg-[#017783] hover:bg-[#017683e5] text-white font-medium rounded-lg"
              >
                Back to Sign In
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
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <img src={authlogo} alt="" />
          </div>
        </div>

        {/* Right side - Forgot Password form */}
        <div className="flex-1 max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={handleBackToSignIn}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Forgot Password
                </CardTitle>
              </div>
              <p className="text-gray-600 text-sm">
                Please enter your email address to reset your password
              </p>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError(""); // Clear error when user starts typing
                      }}
                      className={`h-12 pl-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                        emailError
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {emailError && (
                    <p className="text-sm text-red-600 mt-1">{emailError}</p>
                  )}
                </div>

                <Button
                  className="w-full h-12 bg-[#017783] hover:bg-[#017683e5] text-white font-medium rounded-lg"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </Button>

                <div className="text-center">
                  <span className="text-sm text-gray-600">
                    Already have an account?{" "}
                  </span>
                  <button
                    type="button"
                    onClick={handleBackToSignIn}
                    className="text-sm text-[#017783] hover:text-[#017683e5] font-medium"
                  >
                    Sign In
                  </button>
                </div>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
