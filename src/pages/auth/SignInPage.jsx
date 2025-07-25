import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, User } from "lucide-react";
import authlogo from "../../assets/bro.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

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

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (!emailErr && !passwordErr) {
      // Form is valid, proceed with login
      console.log("Login attempt:", { email, password });
      alert("Login successful!"); // Replace with actual login logic
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-12">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <img src={authlogo} alt="" />
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="flex-1 max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Sign in
              </CardTitle>
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
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(""); // Clear error when user starts typing
                    }}
                    className={`h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${emailError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                      }`}
                  />
                  {emailError && (
                    <p className="text-sm text-red-600 mt-1">{emailError}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (passwordError) setPasswordError(""); // Clear error when user starts typing
                      }}
                      className={`h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500 pr-12 ${passwordError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                        }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-sm text-red-600 mt-1">{passwordError}</p>
                  )}
                </div>

                <Button
                  className="w-full h-12 bg-[#017783] hover:bg-[#017683e5] text-white font-medium rounded-lg"
                  type="submit"
                >
                  Sign in
                </Button>

                <div className="text-center">
                  <Link to={"/forgotpass"}>
                    <button
                      href="#"
                      className="text-sm text-[#017783] hover:text-teal-700 font-medium"
                    >
                      Forgot your password?
                    </button>
                  </Link>
                </div>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
