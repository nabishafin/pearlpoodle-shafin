import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Plus, Edit, Trash2, Upload } from "lucide-react";

const Category = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Electronics",
      image: "/placeholder.svg?height=80&width=80",
    },
    { id: 2, name: "Fashion", image: "/placeholder.svg?height=80&width=80" },
    {
      id: 3,
      name: "Home & Garden",
      image: "/placeholder.svg?height=80&width=80",
    },
    { id: 4, name: "Sports", image: {} },
    {
      id: 5,
      name: "Books",
      image: "https://images.app.goo.gl/mrJyRYZVPjsik1j19",
    },
    { id: 6, name: "Toys", image: "/placeholder.svg?height=80&width=80" },
    { id: 7, name: "Health", image: "/placeholder.svg?height=80&width=80" },
    { id: 8, name: "Automotive", image: "/placeholder.svg?height=80&width=80" },
    { id: 9, name: "Beauty", image: "/placeholder.svg?height=80&width=80" },
    { id: 10, name: "Food", image: "/placeholder.svg?height=80&width=80" },
    { id: 11, name: "Travel", image: "/placeholder.svg?height=80&width=80" },
    { id: 12, name: "Music", image: "/placeholder.svg?height=80&width=80" },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({ name: "", image: "" });

  const handleAddCategory = () => {
    if (formData.name.trim()) {
      const newCategory = {
        id: Date.now(),
        name: formData.name,
        image: formData.image || "/placeholder.svg?height=80&width=80",
      };
      setCategories([...categories, newCategory]);
      setFormData({ name: "", image: "" });
      setIsAddModalOpen(false);
    }
  };

  const handleEditCategory = () => {
    if (formData.name.trim() && selectedCategory) {
      setCategories(
        categories.map((cat) =>
          cat.id === selectedCategory.id
            ? {
                ...cat,
                name: formData.name,
                image: formData.image || cat.image,
              }
            : cat
        )
      );
      setFormData({ name: "", image: "" });
      setIsEditModalOpen(false);
      setSelectedCategory(null);
    }
  };

  const handleDeleteCategory = () => {
    if (selectedCategory) {
      setCategories(categories.filter((cat) => cat.id !== selectedCategory.id));
      setIsDeleteModalOpen(false);
      setSelectedCategory(null);
    }
  };

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setFormData({ name: category.name, image: category.image });
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (category) => {
    setSelectedCategory(category);
    setIsDeleteModalOpen(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Add Category ({categories.length})
          </h1>
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#017783] hover:bg-[#016570] text-white px-6 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-3 gap-2">
          {categories.map((category) => (
            <Card key={category.id} className="shadow-none border-none ">
              <CardContent className="p-0">
                <div className="flex items-center">
                  {/* Category Image */}
                  <div className="w-20 h-16 flex-shrink-0 ml-4">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full  "
                    />
                  </div>

                  {/* Category Name */}
                  <div className="flex-1 px-4">
                    <h3 className="text-lg font-medium text-[#017783]">
                      {category.name}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pr-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                      onClick={() => openEditModal(category)}
                    >
                      <Edit className="h-4 w-4 text-gray-600" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:bg-red-50"
                      onClick={() => openDeleteModal(category)}
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Category Modal */}
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="relative">
              <DialogTitle className="text-lg font-semibold text-gray-900">
                Add category
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="add-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Category Name
                </Label>
                <Input
                  id="add-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter category name"
                  className="border-2 border-gray-200 focus:border-[#017783]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Category Image
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {formData.image ? (
                    <div className="space-y-2">
                      <img
                        src={formData.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-20 h-20 mx-auto rounded-lg object-cover"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setFormData({ ...formData, image: "" })}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <div>
                        <label htmlFor="add-image" className="cursor-pointer">
                          <span className="text-[#017783] hover:text-[#016570] font-medium">
                            Upload an image
                          </span>
                          <input
                            id="add-image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={handleAddCategory}
                className="w-full bg-[#017783] hover:bg-[#016570] text-white py-2 rounded-lg font-medium"
              >
                Add
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Category Modal */}
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="relative">
              <DialogTitle className="text-lg font-semibold text-gray-900">
                Edit category
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="edit-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Category Name
                </Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter category name"
                  className="border-2 border-gray-200 focus:border-[#017783]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Category Image
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {formData.image ? (
                    <div className="space-y-2">
                      <img
                        src={formData.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-20 h-20 mx-auto rounded-lg object-cover"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setFormData({ ...formData, image: "" })}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <div>
                        <label htmlFor="edit-image" className="cursor-pointer">
                          <span className="text-[#017783] hover:text-[#016570] font-medium">
                            Upload an image
                          </span>
                          <input
                            id="edit-image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={handleEditCategory}
                className="w-full bg-[#017783] hover:bg-[#016570] text-white py-2 rounded-lg font-medium"
              >
                Save changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Modal */}
        <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-gray-900">
                Delete
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Are you sure you want to delete this category item?
              </p>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="flex-1"
                >
                  No
                </Button>
                <Button
                  onClick={handleDeleteCategory}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  Yes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Category;
