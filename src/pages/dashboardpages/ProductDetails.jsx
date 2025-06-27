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
import { Star, Phone, Mail, MapPin } from "lucide-react";

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
        "Elevate your style with this exquisite, striking, and sophisticated piece of our premium dress collection. This stunning dress is designed to make you stand out, offering both elegance and comfort. Perfect for any occasion, this dress combines timeless fashion with modern flair, ensuring you look and feel your best. Crafted with expert care, styling, and unmatched attention to our premium quality design and our very own unique collections.",
    },
    {
      id: 2,
      name: "Sheath Dress",
      price: "$40",
      image: "/placeholder.svg?height=80&width=80",
      description:
        "Elevate your style with this exquisite, striking, and sophisticated piece of our premium dress collection. This stunning dress is designed to make you stand out, offering both elegance and comfort. Perfect for any occasion, this dress combines timeless fashion with modern flair, ensuring you look and feel your best. Crafted with expert care, styling, and unmatched attention to our premium quality design and our very own unique collections.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Profile and Latest Products */}
      <div className="w-1/2  border-r border-gray-200">
        <div className="max-w-2xl mx-auto ">
          {/* Profile Section */}
          <Card className="mb-6  ">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Pearlpoodlee"
                  />
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
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      <span className="ml-1 font-semibold">4.74</span>
                    </div>
                    <span className="text-sm text-gray-500">177 Reviews</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latest Products Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Latest products
            </h3>

            <div className="space-y-4">
              {latestProducts.map((product) => (
                <Card key={product.id} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover bg-pink-100"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {product.name}
                          </h4>
                          <span className="font-bold text-gray-900">
                            {product.price}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Product Approval Interface */}
      <div className="w-1/2">
        <div className="mx-auto bg-gray-50 min-h-screen">
          {/* Status Buttons */}
          <div className="flex gap-2 p-4">
            <Button
              variant="destructive"
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium"
            >
              Reject
            </Button>
            <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium">
              Approved
            </Button>
          </div>

          {/* Product Image Carousel */}
          <div className="px-4 pb-4">
            <div className="bg-gray-100 rounded-lg p-4 relative">
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {productImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="flex items-center justify-center p-4">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Product image ${index + 1}`}
                          width={200}
                          height={200}
                          className="object-contain rounded-md"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              {/* Image Counter */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {productImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex
                          ? "bg-gray-800"
                          : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <Card className="mx-4 mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Sheath Dress
                </h2>
                <span className="text-lg font-bold text-gray-900">$21</span>
              </div>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
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
                  <span className="text-gray-900">S(Small)</span>
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
            </CardContent>
          </Card>

          {/* Description Section */}
          <div className="px-4 pb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Description
            </h3>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                This facial cream is specially formulated to target and reduce
                dark spots, blemishes, and uneven skin tone. With its powerful
                ingredients, it helps brighten and promotes a smoother, clearer
                complexion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
