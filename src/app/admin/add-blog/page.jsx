// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { supabase } from "@/lib/supabaseClient";

// export default function AdminBlogAddEdit() {
//   const [formData, setFormData] = useState({
//     title: "",
//     summary: "",
//     content: "",
//     image: "", // base64 string will be stored
//     date: "",
//   });

//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   const isEdit = !!id;
//   const router = useRouter();

//   useEffect(() => {
//     if (isEdit) {
//       fetchBlog(id);
//     }
//   }, [id]);

//   const fetchBlog = async (blogId) => {
//     const { data, error } = await supabase
//       .from("Blog")
//       .select("*")
//       .eq("id", blogId)
//       .single();
//     if (error) {
//       alert("Failed to fetch blog: " + error.message);
//     } else {
//       setFormData(data);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, image: reader.result }); // set base64 string
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isEdit) {
//       const { error } = await supabase
//         .from("Blog")
//         .update(formData)
//         .eq("id", id);
//       if (error) {
//         alert("Update failed: " + error.message);
//       } else {
//         alert("Blog updated!");
//         router.push("/admin/dashboard");
//       }
//     } else {
//       const { error } = await supabase.from("Blog").insert([formData]);
//       if (error) {
//         alert("Add failed: " + error.message);
//       } else {
//         alert("Blog added!");
//         router.push("/admin/dashboard");
//       }
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded">
//       <h2 className="text-2xl font-bold mb-4">
//         {isEdit ? "Edit Blog" : "Add New Blog"}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         {["title", "summary", "content", "date"].map((field) => (
//           <div className="mb-4" key={field}>
//             <label className="block text-gray-700 capitalize">{field}</label>
//             <input
//               type="text"
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//         ))}

//         {/* Image File Upload */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full"
//           />
//           {formData.image && (
//             <img
//               src={formData.image}
//               alt="Preview"
//               className="mt-2 w-32 h-20 object-cover rounded"
//             />
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           {isEdit ? "Update Blog" : "Add Blog"}
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Upload,
  Image as ImageIcon,
  Calendar,
  FileText,
  AlignLeft,
  Type,
  X,
  Eye,
  Edit3,
} from "lucide-react";

export default function AdminBlogAddEdit() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
    date: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const isEdit = !!id;
  const router = useRouter();

  useEffect(() => {
    if (isEdit) {
      fetchBlog(id);
    } else {
      // Set current date for new blogs
      const today = new Date().toISOString().split("T")[0];
      setFormData((prev) => ({ ...prev, date: today }));
    }
  }, [id]);

  const fetchBlog = async (blogId) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("Blog")
      .select("*")
      .eq("id", blogId)
      .single();

    if (error) {
      alert("Failed to fetch blog: " + error.message);
    } else {
      setFormData(data);
      setImagePreview(data.image);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image: "" });
    setImagePreview("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isEdit) {
        const { error } = await supabase
          .from("Blog")
          .update(formData)
          .eq("id", id);
        if (error) throw error;
        alert("Blog updated successfully!");
      } else {
        const { error } = await supabase.from("Blog").insert([formData]);
        if (error) throw error;
        alert("Blog added successfully!");
      }
      router.push("/admin/dashboard");
    } catch (error) {
      alert(`Operation failed: ${error.message}`);
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Edit3 className="text-green-500" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">
              {isEdit ? "Edit Blog Post" : "Create New Blog Post"}
            </h1>
          </div>
          <p className="text-gray-600">
            {isEdit
              ? "Update your blog post content and settings"
              : "Fill in the details below to create a new blog post"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Type className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">Title</h2>
                </div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter your blog post title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-medium"
                  required
                />
              </div>

              {/* Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlignLeft className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Summary
                  </h2>
                </div>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="Write a brief summary of your blog post..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Content */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Content
                  </h2>
                </div>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your full blog post content here..."
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  required
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Featured Image */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ImageIcon className="text-gray-400" size={20} />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Featured Image
                  </h2>
                </div>

                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-[2px] right-0 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors cursor-pointer"
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
                        />
                        <span className="inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700 font-medium">
                          <Upload size={16} />
                          <span>Change Image</span>
                        </span>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
                      dragActive
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Drag and drop an image here, or
                      </p>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileInput}
                          className="hidden"
                        />
                        <span className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          <Upload size={16} />
                          <span>Choose File</span>
                        </span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>

              {/* Publish Settings */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Publish Settings
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="flex items-center space-x-3 text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={16} />
                      <span>Publication Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 mt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Save size={18} />
                        <span>{isEdit ? "Update Post" : "Publish Post"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
