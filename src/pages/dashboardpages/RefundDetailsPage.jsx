import { useState } from "react";
import { ChevronLeft, X } from "lucide-react";

export default function RefundDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const refundData = {
    productName: "Shift Dress",
    refundReason: "Incorrect products",
    requestText:
      "I am requesting to cancel my order and receive a full refund due to several issues I've experienced. Firstly, the product/service did not meet the expectations as described, and there were significant delays in delivery, which disrupted my schedule. I attempted to contact support to resolve the issue, but the response was either delayed or unhelpful. Given these circumstances, I no longer wish to proceed with this order. I believe I've been patient and have given ample time for a resolution, but the lack of communication and quality has left me dissatisfied. Therefore, I kindly ask you to process a full refund at the earliest convenience. I hope this matter can be resolved quickly and professionally. Thank you for your understanding and cooperation.",
  };

  const productImages = [
    { id: 1, name: "Images.jpg", src: "/placeholder.svg?height=400&width=400" },
    { id: 2, name: "Images.jpg", src: "/placeholder.svg?height=400&width=400" },
    { id: 3, name: "Images.jpg", src: "/placeholder.svg?height=400&width=400" },
    { id: 4, name: "Images.jpg", src: "/placeholder.svg?height=400&width=400" },
    { id: 5, name: "Images.jpg", src: "/placeholder.svg?height=400&width=400" },
  ];

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setModalImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className=" ">
      {/* Header */}
      <div className="bg-[#017783] text-white p-4 flex items-center rounded-md">
        <ChevronLeft className="w-6 h-6 mr-2" />
        <h1 className="text-lg font-semibold">Details</h1>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Info and Refund Button */}
        <div className="bg-white rounded-lg p-4 mb-4 flex justify-between items-start">
          <div>
            <div className="mb-2">
              <span className="text-gray-600 text-sm">Products Name: </span>
              <span className="font-medium">{refundData.productName}</span>
            </div>
            <div>
              <span className="text-gray-600 text-sm">Refund reason: </span>
              <span className="font-medium">{refundData.refundReason}</span>
            </div>
          </div>
          <button className="bg-[#017783] text-white px-6 py-2 rounded-full font-medium hover:bg-[#017783]transition-colors">
            Refund
          </button>
        </div>

        {/* Refund Request Text */}
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {refundData.requestText}
          </p>
        </div>

        {/* Product Images */}
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {productImages.map((image, index) => (
            <div
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => openModal(index)}
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                <div className="w-20 h-24 bg-black rounded flex items-center justify-center">
                  {/* T-shirt silhouette */}
                  <div className="w-16 h-20 bg-gray-800 rounded-t-lg relative">
                    <div className="absolute -top-1 left-2 right-2 h-2 bg-gray-800 rounded-t-full"></div>
                    <div className="absolute top-2 -left-2 w-6 h-8 bg-gray-800 rounded-l"></div>
                    <div className="absolute top-2 -right-2 w-6 h-8 bg-gray-800 rounded-r"></div>
                  </div>
                </div>
              </div>

              {/* Image Name */}
              <div className="bg-[#017783] text-white text-xs py-2 px-3 text-center">
                {image.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 transform rotate-180" />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Full Size Image */}
              <div className="flex items-center justify-center bg-gray-100 min-h-[400px] max-h-[70vh]">
                <div className="w-48 h-56 bg-black rounded flex items-center justify-center">
                  {/* T-shirt silhouette - larger version */}
                  <div className="w-40 h-48 bg-gray-800 rounded-t-lg relative">
                    <div className="absolute -top-2 left-4 right-4 h-4 bg-gray-800 rounded-t-full"></div>
                    <div className="absolute top-4 -left-4 w-12 h-16 bg-gray-800 rounded-l"></div>
                    <div className="absolute top-4 -right-4 w-12 h-16 bg-gray-800 rounded-r"></div>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4 bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {productImages[modalImageIndex].name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Image {modalImageIndex + 1} of {productImages.length}
                    </p>
                  </div>
                  <div className="bg-[#017783] text-white px-3 py-1 rounded-full text-sm">
                    Product Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
