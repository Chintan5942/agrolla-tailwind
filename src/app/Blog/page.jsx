"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("Blog").select("*");

      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data);
      }
      setLoading(false); // ✅ turn off loading when fetch is done
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 mt-10">
        {/* Page Title */}
        <div className="flex items-center justify-center w-full gap-3">
          <hr className="w-10 border border-[#2E7D32]" />
          <p className="text-xs sm:text-sm text-[#2E7D32] font-medium uppercase tracking-wider">
            Explore Blog
          </p>
          <hr className="w-10 border border-[#2E7D32]" />
        </div>
        <br />
        <div className="text-center mb-16 max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Explore valuable insights
          </h1>
          <p className="text-lg text-gray-600">
            tips, and stories from our team in the world of agriculture. Stay
            updated on the latest trends, farming techniques, and innovations in
            the industry through our blog posts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full mt-10">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse space-y-4 group rounded-lg overflow-hidden"
                >
                  <div className="bg-gray-200 h-48 w-full rounded-lg" />
                  <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto" />
                  <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto" />
                </div>
              ))
            : blogs.map((post) => (
                <article key={post.id} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-4 text-center">
                    <h2 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                    <Link
                      href={`/Blog/${post.id}`}
                      className="inline-flex items-center text-gray-900 font-medium hover:text-green-600 transition-colors group/link"
                    >
                      Read Post
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </>
  );
}
