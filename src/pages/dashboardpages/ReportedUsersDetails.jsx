import { ChevronLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ReportedUsersDetails = () => {
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const products = [
    {
      id: 1,
      name: "Shift Dress",
      price: 45,
      image: "/placeholder.svg?height=120&width=120",
      description:
        "Transform your look with expert cuts, styling, and personalized service at our premier salon, designed for your ultimate satisfaction. Transform your look with expert cuts, styling, and personalized service at our premier salon, designed for your ultimate satisfaction. Transform your look with expert cuts, styling and personalized service at our premier salon, designed for your ultimate satisfaction.",
      badge: "399 x 60 Hug",
      discount: "59 Hkr 428 Hug",
    },
    {
      id: 2,
      name: "Straight Dress",
      price: 45,
      image: "/placeholder.svg?height=120&width=120",
      description:
        "Transform your look with expert cuts, styling, and personalized service at our premier salon, designed for your ultimate satisfaction. Transform your look with expert cuts, styling, and personalized service at our premier salon, designed for your ultimate satisfaction. Transform your look with expert cuts, styling and personalized service at our premier salon, designed for your ultimate satisfaction.",
      discount: "59 Hkr 428 Hug",
    },
    {
      id: 3,
      name: "Sheath Dress",
      price: 45,
      image: "/placeholder.svg?height=120&width=120",
      description:
        "Transform your look with expert cuts, styling, and personalized service at our premier salon, designed for your ultimate satisfaction. Transform your look with expert cuts, styling, and personalized service at our premier salon, designed for your ultimate satisfaction. Transform your look with expert cuts, styling and personalized service at our premier salon, designed for your ultimate satisfaction.",
    },
  ];

  const feedbacks = [
    {
      id: 1,
      name: "Isabella",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Feedback is constructive information given to improve performance, behaviour, or understanding in various situations.",
    },
    {
      id: 2,
      name: "David",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      text: "Feedback is constructive information given to improve performance, behaviour, or understanding in various situations.",
    },
    {
      id: 3,
      name: "Petrik",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      text: "Feedback is constructive information given to improve performance, behaviour, or understanding in various situations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#017783] text-white p-4 flex items-center gap-3 rounded-md">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-medium">Reported users details</h1>
      </div>

      <div className=" mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - User Profile and Products */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Profile */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src="/placeholder.svg?height=64&width=64"
                      alt="Jane Cooper"
                    />
                    <AvatarFallback>JC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 ">Jane-cooper</h2>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Email: janecooper@gmail.com</p>
                      <p>Phone: 9558349</p>
                      <p>Address: New York, USA</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {renderStars(5)}
                      <span className="font-semibold">5.00</span>
                      <span className="text-sm text-gray-500">45 Reviews</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-6">
                    Block
                  </Button>
                  <Button className="bg-[#017783] hover:bg-[#258A8A] text-white px-6">
                    Verified
                  </Button>
                </div>
              </div>
            </Card>

            {/* Latest Products */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 border-b border-black pb-4 ">
                Latest products
              </h3>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-4 border rounded-lg"
                  >
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{product.name}</h4>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">
                          Price: $ {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Section - Feedback */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Feedback</h3>
              <div className="space-y-4">
                {feedbacks.map((feedback) => (
                  <div key={feedback.id} className="flex gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={feedback.avatar || "/placeholder.svg"}
                        alt={feedback.name}
                      />
                      <AvatarFallback>{feedback.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">
                          {feedback.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars(feedback.rating)}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feedback.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedUsersDetails;
