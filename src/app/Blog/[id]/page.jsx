"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [currentBlog, setCurrentBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  // Ensure both sides are strings for comparison
  // const blog = BlogData.find((e) => String(e.id) === String(id));
  const fetchBlog = async (id) => {
    const { data, error } = await supabase
      .from("Blog")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching blog:", error.message);
      return null;
    }

    return data;
  };
  useEffect(() => {
    if (id) {
      fetchBlog(id).then((blogData) => {
        if (blogData) {
          setCurrentBlog(blogData); // Or setBlog(blogData) if you're storing it
          setLoading(false);
        }
      });
    }
  }, [id]);
  const handleGoBack = () => {
    router.back();
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  if (!currentBlog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Blog not found</p>
      </div>
    );
  }
  if (loading) {
    return (
      <>
        {/* Top Loading Bar */}
        <div className="fixed top-0 left-0 w-full h-2 bg-green-500 animate-pulse z-50"></div>

        {/* Skeleton Loader */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 animate-pulse">
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-48 w-full bg-gray-200 rounded-xl"></div>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-5 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 font-medium transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Blog</span>
          </button>
        </div>

        {/* Article Header */}
        <article className="bg-white">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {currentBlog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span className="text-sm">{formatDate(currentBlog.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span className="text-sm">5 min read</span>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {currentBlog.summary}
              </p>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-10">
            <img
              src={currentBlog.image}
              alt={currentBlog.title}
              className="w-full max-h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {currentBlog?.content?.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p key={index} className="text-lg leading-8">
                      {paragraph}
                    </p>
                  )
              )}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">
                  Share this article:
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
