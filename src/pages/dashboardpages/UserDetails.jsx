import React, { useState } from "react";
import { ArrowLeft, Star, Mail, Phone, MapPin } from "lucide-react";

const UserDetails = () => {
  const [userData, setUserData] = useState({
    name: "Pearlpoodiee",
    email: "test.testaccount@gmail.com",
    phone: "09836545346",
    address: "Amhara, New York, USA",
    rating: 4.5,
    reviews: 17,
    avatar: "/api/placeholder/60/60",
    status: "approved",
  });

  const [isLoading, setIsLoading] = useState(false);

  const products = [
    {
      id: 1,
      name: "Shift Dress",
      price: "$45",
      image: "/api/placeholder/80/80",
      description:
        "Elegant shift dress perfect for any occasion with comfortable fit and premium fabric quality.",
    },
    {
      id: 2,
      name: "Sheath Dress",
      price: "$55",
      image: "/api/placeholder/80/80",
      description:
        "Professional sheath dress ideal for business meetings and formal events with modern styling.",
    },
    {
      id: 3,
      name: "Sheath Dress",
      price: "$48",
      image: "/api/placeholder/80/80",
      description:
        "Versatile sheath dress suitable for both casual and semi-formal occasions with premium materials.",
    },
  ];

  const feedback = [
    {
      id: 1,
      name: "Nazmul",
      rating: 5,
      comment:
        "Excellent service and high-quality products. Very satisfied with my purchase and would recommend to others.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "David",
      rating: 4,
      comment:
        "Good quality dresses and fast delivery. The customer service was responsive and helpful throughout.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Jane Cooper",
      rating: 5,
      comment:
        "Amazing collection of dresses with excellent quality. The shipping was fast and packaging was perfect.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const updateUserStatus = async (newStatus) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/users/${userData.id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setUserData((prev) => ({ ...prev, status: newStatus }));
        console.log(`User status updated to: ${newStatus}`);
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusButtons = () => {
    switch (userData.status) {
      case "approved":
        return (
          <div className="flex gap-2">
            <button
              onClick={() => updateUserStatus("blocked")}
              disabled={isLoading}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Block"}
            </button>
            <button
              onClick={() => updateUserStatus("verified")}
              disabled={isLoading}
              className="px-4 py-2 bg-[#017783] text-white rounded-md hover:bg-teal-700 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Verify"}
            </button>
          </div>
        );
      case "verified":
        return (
          <div className="flex gap-2">
            <button
              onClick={() => updateUserStatus("blocked")}
              disabled={isLoading}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Block"}
            </button>
            <button
              onClick={() => updateUserStatus("unverified")}
              disabled={isLoading}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Unverify"}
            </button>
          </div>
        );
      case "unverified":
        return (
          <div className="flex gap-2">
            <button
              onClick={() => updateUserStatus("approved")}
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Approve"}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className=" ">
      {/* Header */}
      <div className="bg-[#017783] text-white p-4 rounded-md">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-6 h-6 cursor-pointer" />
          <h1 className="text-xl font-semibold">User Details</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {userData.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        {renderStars(userData.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {userData.rating} | {userData.reviews} Reviews
                      </span>
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {userData.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {userData.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {userData.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Products */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Latest Products
              </h3>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="font-semibold text-[#017783] mt-2">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Feedback */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Feedback
              </h3>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    userData.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : userData.status === "verified"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {userData.status.charAt(0).toUpperCase() +
                    userData.status.slice(1)}
                </span>
                {getStatusButtons()}
              </div>
              <div className="space-y-4">
                {feedback.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 ml-13">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
