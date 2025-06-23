import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import authlogo from "../../assets/bro.svg";

export default function OTPVerification({ email = "user@example.com" }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on first input when component mounts
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    setOtpError(""); // Clear error when user starts typing

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }

    setOtp(newOtp);

    // Focus on the next empty input or last input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const validateOtp = () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      return "Please enter complete 6-digit OTP";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpErr = validateOtp();
    setOtpError(otpErr);

    if (!otpErr) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        console.log("OTP verified:", otp.join(""));
      }, 2000);
    }
  };

  const handleBackToForgotPassword = () => {
    console.log("Navigate back to forgot password");
  };

  const handleResendOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
    console.log("Resend OTP to:", email);
    // Focus on first input
    inputRefs.current[0]?.focus();
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Email Verified!
              </h2>
              <p className="text-gray-600 mb-6">
                Your email has been successfully verified. You can now reset
                your password.
              </p>
              <Button className="w-full h-12 bg-[#017783] hover:bg-[#017683e5] text-white font-medium rounded-lg">
                Continue to Reset Password
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

        {/* Right side - OTP Verification form */}
        <div className="flex-1 max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={handleBackToForgotPassword}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Verify Email
                </CardTitle>
              </div>
              <p className="text-gray-600 text-sm">
                Please enter the otp we have sent you in your email
              </p>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* OTP Input Fields */}
                  <div className="flex justify-center gap-3">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className={`w-12 h-12 text-center text-lg font-semibold border-2 rounded-full ${
                          otpError
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        }`}
                      />
                    ))}
                  </div>
                  {otpError && (
                    <p className="text-sm text-red-600 text-center">
                      {otpError}
                    </p>
                  )}
                </div>

                <Button
                  className="w-full h-12 bg-[#017783] hover:bg-[#017683e5] text-white font-medium rounded-lg"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Didn't receive the code?
                  </p>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-sm text-[#017783] hover:text-[#017683e5] font-medium"
                  >
                    Resend OTP
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
