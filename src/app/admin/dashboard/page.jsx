// /app/admin/dashboard/page.jsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Edit3,
  Eye,
  FileText,
  Filter,
  ImageIcon,
  LayoutDashboard,
  PlusCircle,
  Search,
  Trash2,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);
  const [authenticated, setAuthenticated] = useState(null); // null = checking, false = not logged in
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("blogs");
  const router = useRouter();

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("Blog")
      .select("*")
      .order("date", { ascending: false });
    if (error) console.error("Error fetching blogs:", error.message);
    else setBlogs(data);
  };
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error("Error fetching products:", error.message);
    else setProducts(data);
  };
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setAuthenticated(false);
      router.push("/admin/login");
    } else {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      setLoading(true);
      fetchBlogs();
      fetchProducts();
      setLoading(false);
    }
  }, [authenticated]);

  const deleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    const { error } = await supabase.from("Blog").delete().eq("id", id);
    if (error) alert("Delete failed: " + error.message);
    else fetchBlogs();
  };
  //   const formatDate = (dateString) => {
  //     return new Date(dateString).toLocaleDateString("en-US", {
  //       year: "numeric",
  //       month: "short",
  //       day: "numeric",
  //     });
  //   };

  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  // ✅ Wait until authentication is resolved before rendering
  if (authenticated === null) {
    return <p>Checking access...</p>;
  }
  const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) alert("Delete failed: " + error.message);
    else fetchProducts(); // Refresh list
  };
  return (
    <div className="flex min-h-screen bg-gray-50 mt-10">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Agrolla Impex</h2>
              <p className="text-sm text-gray-500">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="p-6 space-y-2">
          <Link
            href="/admin/dashboard"
            className="flex items-center space-x-3 px-4 py-3 text-gray-900 bg-green-50 border-r-2 border-green-500 rounded-l-lg font-medium"
          >
            <LayoutDashboard size={20} className="text-green-500" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/admin/add-blog"
            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <PlusCircle size={20} />
            <span>Add Blog</span>
          </Link>
          <Link
            href="/admin/add-product"
            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <PlusCircle size={20} />
            <span>Add Product</span>
          </Link>
          <div className="pt-6 border-t border-gray-200 mt-6">
            <div className="flex items-center space-x-3 px-4 py-2 text-gray-500 text-sm">
              <TrendingUp size={16} />
              <span>Analytics</span>
            </div>
            <div className="ml-4 mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Posts</span>
                <span className="font-medium text-gray-900">
                  {blogs.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">This Month</span>
                <span className="font-medium text-green-600">
                  +
                  {
                    blogs.filter((blog) => {
                      const blogDate = new Date(blog.created_at || blog.date);
                      const thisMonth = new Date();
                      return (
                        blogDate.getMonth() === thisMonth.getMonth() &&
                        blogDate.getFullYear() === thisMonth.getFullYear()
                      );
                    }).length
                  }
                </span>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto ">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4  py-6">
          <div className="flex items-center justify-between p-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Blog Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your blog posts and content
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/admin/add-blog"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <PlusCircle size={18} />
                <span>New Post</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/add-product"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <PlusCircle size={18} />
                <span>New Product</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 mt-5">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Posts</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {blogs.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-500" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Published</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {blogs.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <Eye className="text-green-500" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {
                      blogs.filter((blog) => {
                        const blogDate = new Date(blog.created_at || blog.date);
                        const thisMonth = new Date();
                        return (
                          blogDate.getMonth() === thisMonth.getMonth() &&
                          blogDate.getFullYear() === thisMonth.getFullYear()
                        );
                      }).length
                    }
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Calendar className="text-purple-500" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Views</p>
                  <p className="text-2xl font-bold text-gray-900">12.5K</p>
                </div>
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-orange-500" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  All Blog Posts
                </h2>
                {/* <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter size={18} />
                    <span>Filter</span>
                  </button>
                </div> */}
              </div>
            </div>

            {/* Table */}
            {/* <div className="overflow-x-auto">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Post
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Summary
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Date
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Status
                      </th>
                      <th className="text-right py-4 px-6 font-medium text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {blogs.map((post) => (
                      <tr
                        key={post.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                              {post.image ? (
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <ImageIcon
                                    className="text-gray-400"
                                    size={20}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-medium text-gray-900 truncate">
                                {post.title || "Untitled"}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">
                                ID: {post.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-sm text-gray-600 max-w-xs">
                            {truncateText(post.summary, 80)}
                          </p>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} className="text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {post.date || post.created_at}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Published
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-end space-x-2">
                            <Link
                              href={`/Blog/${post.id}`}
                              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="View Post"
                            >
                              <Eye size={16} />
                            </Link>
                            <Link
                              href={`/admin/add-blog?id=${post.id}`}
                              className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Edit Post"
                            >
                              <Edit3 size={16} />
                            </Link>
                            <button
                              onClick={() => deleteBlog(post.id)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Post"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div> */}
            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("blogs")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "blogs"
                    ? "bg-green-500 text-white"
                    : "bg-white border"
                }`}
              >
                Blogs
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "products"
                    ? "bg-green-500 text-white"
                    : "bg-white border"
                }`}
              >
                Products
              </button>
            </div>

            {/* Blog Table */}
            {activeTab === "blogs" && (
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Post
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Summary
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Date
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Status
                      </th>
                      <th className="text-right py-4 px-6 font-medium text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {blogs.map((post) => (
                      <tr
                        key={post.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                              {post.image ? (
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <ImageIcon
                                    className="text-gray-400"
                                    size={20}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-medium text-gray-900 truncate">
                                {post.title || "Untitled"}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">
                                ID: {post.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-sm text-gray-600 max-w-xs">
                            {truncateText(post.summary, 80)}
                          </p>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} className="text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {post.date || post.created_at}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Published
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-end space-x-2">
                            <Link
                              href={`/Blog/${post.id}`}
                              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="View Post"
                            >
                              <Eye size={16} />
                            </Link>
                            <Link
                              href={`/admin/add-blog?id=${post.id}`}
                              className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Edit Post"
                            >
                              <Edit3 size={16} />
                            </Link>
                            <button
                              onClick={() => deleteBlog(post.id)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Post"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Products Table Placeholder */}
            {activeTab === "products" && (
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Title
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Category
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">
                        Rating
                      </th>
                      <th className="text-right py-4 px-6 font-medium text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6 font-medium text-gray-900">
                          {product.title}
                        </td>
                        <td className="py-4 px-6 text-gray-700">
                          {product.category}
                        </td>
                        <td className="py-4 px-6 text-gray-700">
                          {product.rating ?? "-"}
                        </td>

                        <td className="py-4 px-6">
                          <div className="flex items-center justify-end space-x-2">
                            <Link
                              href={`/Product/${product.id}`}
                              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="View Post"
                            >
                              <Eye size={16} />
                            </Link>
                            <Link
                              href={`/admin/add-product?id=${product.id}`}
                              className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Edit Post"
                            >
                              <Edit3 size={16} />
                            </Link>
                            <button
                              onClick={() => deleteProduct(post.id)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Post"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
