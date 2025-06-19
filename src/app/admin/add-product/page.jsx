"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Papa from "papaparse";

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
import { useParams } from "next/navigation";
export default function AddProduct() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
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
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) {
        alert("Failed to load product");
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
    };

    fetchProduct();
  }, [productId]);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await fileToBase64(file);
    setFormData({ ...formData, image: base64 });
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setFormData({ ...formData, image: "" });
    setImagePreview(null);
  };

  const handleMultiImageChange = async (e, field) => {
    const files = Array.from(e.target.files);
    const base64Images = await Promise.all(files.map(fileToBase64));
    setFormData({ ...formData, [field]: base64Images });
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addArrayItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
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
      console.log("Update product with ID:", productId);
      ({ error } = await supabase
        .from("products")
        .update(product)
        .eq("id", productId));
    } else {
      console.log("Add new product");
      ({ error } = await supabase.from("products").insert([product]));
    }

    setIsLoading(false);
    if (error) {
      alert(
        `Failed to ${productId ? "update" : "add"} product: ` + error.message
      );
    } else {
      alert(`Product ${productId ? "updated" : "added"} successfully!`);
      router.push("/admin/dashboard");
    }
  };
  const handleCSVUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        const products = results.data.map((row) => ({
          title: row.title || "",
          description: row.description || "",
          category: row.category || "",
          image: row.image || "",
          images: row.images ? JSON.parse(row.images) : [],
          more_image: row.moreImage ? JSON.parse(row.moreImage) : [],
          rating: row.rating ? Number(row.rating) : 0,
          reviews: row.reviews ? Number(row.reviews) : 0,
          highlights: row.highlights ? JSON.parse(row.highlights) : [],
          features: row.features ? JSON.parse(row.features) : [],
          applications: row.applications || "",
          about_product: row.aboutProduct || "",
          overview: row.overview || "",
          premium_quality: row.premiumQuality || "",
          specifications: row.specifications || "",
          packaging_shipping: row.packagingShipping || "",
          nutritional_info: row.nutritionalInfo || "",
        }));

        const { error } = await supabase.from("products").insert(products);

        if (error) {
          alert("Upload failed: " + error.message);
        } else {
          alert(`${products.length} products added successfully.`);
          router.push("/admin/dashboard");
        }
      },
      error: function (err) {
        console.error("CSV parse error:", err);
        alert("Failed to parse CSV.");
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Agrolla Impex
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Edit3 className="text-green-500" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">
              Add New Product
            </h1>
          </div>
          <p className="text-gray-600">
            Fill in the details below to create a new product.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Basic Info
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                    required
                  />
                  <textarea
                    name="applications"
                    placeholder="Applications"
                    value={formData.applications}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                  <textarea
                    name="aboutProduct"
                    placeholder="About Product"
                    value={formData.aboutProduct}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <textarea
                    name="overview"
                    placeholder="Overview"
                    value={formData.overview}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                  <textarea
                    name="premiumQuality"
                    placeholder="Premium Quality"
                    value={formData.premiumQuality}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                  <textarea
                    name="specifications"
                    placeholder="Specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                  <textarea
                    name="packagingShipping"
                    placeholder="Packaging & Shipping"
                    value={formData.packagingShipping}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                  <textarea
                    name="nutritionalInfo"
                    placeholder="Nutritional Info"
                    value={formData.nutritionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="number"
                    name="reviews"
                    placeholder="Reviews"
                    value={formData.reviews}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Highlights & Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Highlights
                    </label>
                    {formData.highlights.map((item, i) => (
                      <input
                        key={i}
                        type="text"
                        value={item}
                        onChange={(e) =>
                          handleArrayChange("highlights", i, e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2"
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem("highlights")}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      + Add Highlight
                    </button>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Features
                    </label>
                    {formData.features.map((item, i) => (
                      <input
                        key={i}
                        type="text"
                        value={item}
                        onChange={(e) =>
                          handleArrayChange("features", i, e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2"
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem("features")}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      + Add Feature
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Main Image
                </h2>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  className="w-full"
                />
                {imagePreview && (
                  <div className="mt-4 relative">
                    <img
                      src={imagePreview}
                      className="rounded-lg object-cover w-full"
                    />
                    <button
                      onClick={removeImage}
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Gallery Images
                </h2>
                <label className="block text-sm text-gray-700 mb-1">
                  Product Images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleMultiImageChange(e, "images")}
                  className="w-full mb-4"
                />
                <label className="block text-sm text-gray-700 mb-1">
                  More Images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleMultiImageChange(e, "moreImage")}
                  className="w-full"
                />
              </div>
              {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Upload Products via CSV
                </h2>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCSVUpload}
                  className="w-full"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Must be a CSV with field names like:{" "}
                  <code>title, description, images</code> etc. Use JSON arrays
                  for fields like <code>images</code>, <code>highlights</code>,
                  etc.
                </p>
              </div> */}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Save size={18} />
                    <span className="ml-2">Add Product</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
