"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Phone, Mail, MapPin, ChevronLeft } from "lucide-react";

const ProductDetails = () => {
  const productImages = [
    "/images/black-tshirt.png",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const latestProducts = [
    {
      id: 1,
      name: "Shift Dress",
      price: "$40",
      image: "/placeholder.svg?height=80&width=80",
      description:
        "Elevate your style with this exquisite dress from our premium collection. Perfect for any occasion, offering elegance and comfort.",
    },
    {
      id: 2,
      name: "Sheath Dress",
      price: "$40",
      image: "/placeholder.svg?height=80&width=80",
      description:
        "Make a statement with our stunning sheath dress. A blend of timeless fashion and modern flair, crafted with care and quality.",
    },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="bg-[#017783] text-white p-4 flex items-center gap-3 mb-5 rounded-md">
        <ChevronLeft className="h-6 w-6" />
        <h1 className="text-lg font-medium">View Product Details</h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* User Profile */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Pearlpoodlee
                  </h2>
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>pearlpoodlee@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>9555849</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>New York, USA</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                    <span className="font-semibold">4.74</span>
                    <span className="text-sm text-gray-500">177 Reviews</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latest Products */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Latest products
            </h3>
            <div className="space-y-4">
              {latestProducts.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4 flex gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover bg-pink-100"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {product.name}
                        </h4>
                        <span className="font-bold text-gray-900">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              variant="destructive"
              className="flex-1 bg-red-500 hover:bg-red-600"
            >
              Reject
            </Button>
            <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
              Approve
            </Button>
          </div>

          {/* Product Carousel */}
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <Carousel
                  className="w-full max-w-md mx-auto"
                  opts={{ align: "start", loop: true }}
                  onSlideChange={(index) => setCurrentImageIndex(index)}
                >
                  <CarouselContent>
                    {productImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="flex items-center justify-center p-4">
                          <img
                            src={image}
                            alt={`Product image ${index + 1}`}
                            className="w-64 h-64 object-contain rounded-md"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>

                {/* Image Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  {productImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-gray-800"
                          : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Sheath Dress
                  </h2>
                  <span className="text-lg font-bold text-gray-900">$21</span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="text-gray-900">Shirt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Brand:</span>
                    <span className="text-gray-900">Lotto</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="text-gray-900">S (Small)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchase price:</span>
                    <span className="text-gray-900">$40</span>
                  </div>
                  <div className="flex justify-between col-span-2">
                    <span className="text-gray-600">Condition:</span>
                    <span className="text-gray-900">Brand New</span>
                  </div>
                  <div className="flex justify-between col-span-2">
                    <span className="text-gray-600">Price type:</span>
                    <Badge variant="secondary" className="text-xs">
                      Negotiable
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Description
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This facial cream is specially formulated to target and
                    reduce dark spots, blemishes, and uneven skin tone. With its
                    powerful ingredients, it helps brighten and promotes a
                    smoother, clearer complexion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
