"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

import {
  ArrowLeft,
  Eye,
  Edit3,
  Type,
  AlignLeft,
  FileText,
  ImageIcon,
  Upload,
  X,
  Calendar,
  Save,
} from "lucide-react";
import {
  deleteImageFromStorage,
  uploadImageToStorage,
  uploadMultipleImages,
} from "@/lib/imageupload";

function AddProductContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadingImages, setUploadingImages] = useState(false);
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const isEdit = !!productId;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    images: [],
    moreImage: [],
    rating: "",
    reviews: "",
    highlights: [],
    features: [],
    applications: "",
    aboutProduct: "",
    overview: "",
    premiumQuality: "",
    specifications: "",
    packagingShipping: "",
    nutritionalInfo: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      setIsLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) {
        alert("Failed to load product: " + error.message);
      } else {
        setFormData({
          title: data.title || "",
          description: data.description || "",
          category: data.category || "",
          image: data.image || "",
          images: data.images || [],
          moreImage: data.more_image || [],
          rating: data.rating || "",
          reviews: data.reviews || "",
          highlights: data.highlights || [],
          features: data.features || [],
          applications: data.applications || "",
          aboutProduct: data.about_product || "",
          overview: data.overview || "",
          premiumQuality: data.premium_quality || "",
          specifications: data.specifications || "",
          packagingShipping: data.packaging_shipping || "",
          nutritionalInfo: data.nutritional_info || "",
        });

        if (data.image) {
          setImagePreview(data.image);
        }
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [productId]);

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImages(true);

    try {
      // Upload to Supabase Storage
      const imageUrl = await uploadImageToStorage(file);

      if (imageUrl) {
        // If editing and there's an existing image, delete it
        if (isEdit && formData.image) {
          await deleteImageFromStorage(formData.image);
        }

        setFormData({ ...formData, image: imageUrl });
        setImagePreview(imageUrl);
      } else {
        alert("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploadingImages(false);
    }
  };

  const removeImage = async () => {
    if (formData.image) {
      // Delete from storage if it's a storage URL
      if (formData.image.includes("supabase")) {
        await deleteImageFromStorage(formData.image);
      }
    }
    setFormData({ ...formData, image: "" });
    setImagePreview(null);
  };

  const handleMultiImageChange = async (e, field) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploadingImages(true);

    try {
      // If editing, delete existing images for this field
      if (isEdit && formData[field].length > 0) {
        const deletePromises = formData[field].map((url) =>
          url.includes("supabase")
            ? deleteImageFromStorage(url)
            : Promise.resolve()
        );
        await Promise.all(deletePromises);
      }

      // Upload new images
      const imageUrls = await uploadMultipleImages(files);

      if (imageUrls.length > 0) {
        setFormData({ ...formData, [field]: imageUrls });
      } else {
        alert("Failed to upload some images. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    } finally {
      setUploadingImages(false);
    }
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addArrayItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayItem = (field, index) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" || name === "reviews" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const product = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        image: formData.image,
        images: formData.images,
        more_image: formData.moreImage,
        rating: formData.rating,
        reviews: formData.reviews,
        highlights: formData.highlights,
        features: formData.features,
        applications: formData.applications,
        about_product: formData.aboutProduct,
        overview: formData.overview,
        premium_quality: formData.premiumQuality,
        specifications: formData.specifications,
        packaging_shipping: formData.packagingShipping,
        nutritional_info: formData.nutritionalInfo,
      };

      let error;
      if (productId) {
        ({ error } = await supabase
          .from("products")
          .update(product)
          .eq("id", productId));
      } else {
        ({ error } = await supabase.from("products").insert([product]));
      }

      if (error) throw error;

      alert(`Product ${productId ? "updated" : "added"} successfully!`);
      router.push("/admin/dashboard");
    } catch (error) {
      alert(
        `Failed to ${productId ? "update" : "add"} product: ` + error.message
      );
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading && isEdit) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/dashboard"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    dadu Fresh
                  </h1>
                  <p className="text-xs text-gray-500">Admin Panel</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Eye size={18} />
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Edit3 className="text-green-500" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">
              {isEdit ? "Edit Product" : "Add New Product"}
            </h1>
          </div>
          <p className="text-gray-600">
            {isEdit
              ? "Update your product details and settings"
              : "Fill in the details below to create a new product"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Type className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Basic Information
                  </h2>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-medium"
                    required
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Product Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Product Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <textarea
                    name="aboutProduct"
                    placeholder="About Product"
                    value={formData.aboutProduct}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <textarea
                    name="applications"
                    placeholder="Applications"
                    value={formData.applications}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <textarea
                    name="overview"
                    placeholder="Overview"
                    value={formData.overview}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <textarea
                    name="premiumQuality"
                    placeholder="Premium Quality"
                    value={formData.premiumQuality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <textarea
                    name="specifications"
                    placeholder="Specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <textarea
                    name="packagingShipping"
                    placeholder="Packaging & Shipping"
                    value={formData.packagingShipping}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <textarea
                    name="nutritionalInfo"
                    placeholder="Nutritional Information"
                    value={formData.nutritionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="rating"
                      placeholder="Rating (1-5)"
                      value={formData.rating}
                      onChange={handleChange}
                      min="1"
                      max="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      name="reviews"
                      placeholder="Number of Reviews"
                      value={formData.reviews}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Highlights & Features */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlignLeft className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Highlights & Features
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Highlights */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Product Highlights
                    </label>
                    <div className="space-y-2">
                      {formData.highlights.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) =>
                              handleArrayChange("highlights", i, e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder={`Highlight ${i + 1}`}
                          />
                          <button
                            type="button"
                            onClick={() => removeArrayItem("highlights", i)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addArrayItem("highlights")}
                        className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
                      >
                        + Add Highlight
                      </button>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Product Features
                    </label>
                    <div className="space-y-2">
                      {formData.features.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) =>
                              handleArrayChange("features", i, e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder={`Feature ${i + 1}`}
                          />
                          <button
                            type="button"
                            onClick={() => removeArrayItem("features", i)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addArrayItem("features")}
                        className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
                      >
                        + Add Feature
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ImageIcon className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Main Image
                  </h2>
                </div>

                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <div className="mt-3">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileInput}
                          className="hidden"
                          disabled={uploadingImages}
                        />
                        <span className="inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700 font-medium">
                          <Upload size={16} />
                          <span>
                            {uploadingImages ? "Uploading..." : "Change Image"}
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Upload a product image
                      </p>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileInput}
                          className="hidden"
                          disabled={uploadingImages}
                        />
                        <span className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          <Upload size={16} />
                          <span>
                            {uploadingImages ? "Uploading..." : "Choose File"}
                          </span>
                        </span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>

              {/* Gallery Images */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Gallery Images
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Images
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleMultiImageChange(e, "images")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      disabled={uploadingImages}
                    />
                    {formData.images.length > 0 && (
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {formData.images.map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`Product ${index + 1}`}
                            className="w-full h-20 object-cover rounded border"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Images
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleMultiImageChange(e, "moreImage")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      disabled={uploadingImages}
                    />
                    {formData.moreImage.length > 0 && (
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {formData.moreImage.map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`Additional ${index + 1}`}
                            className="w-full h-20 object-cover rounded border"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {uploadingImages && (
                  <div className="mt-4 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
                    <span className="ml-2 text-sm text-gray-600">
                      Uploading images...
                    </span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <button
                  type="submit"
                  disabled={isLoading || uploadingImages}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Save size={18} />
                      <span>{isEdit ? "Update Product" : "Add Product"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default function AddProduct() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      }
    >
      <AddProductContent />
    </Suspense>
  );
}
