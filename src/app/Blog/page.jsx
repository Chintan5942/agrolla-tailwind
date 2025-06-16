"use client";
import React from "react";
import Link from "next/link";
import BlogData from "../Blog/BlogData";
import Footer from "../HomePage/Footer";

export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen px-4 py-16 bg-gray-50">
        <div className="mx-auto max-w-[80%] relative left-[10%] ">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <br />
            <h1 className="mb-4 text-5xl font-bold text-gray-900"> Blog</h1>
          </div>
          <br />
          <br />
          {/* Blog Grid */}
          <div className="flex justify-center ">
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%]">
              {BlogData.map((post) => (
                <div key={post.id} className="overflow-hidden rounded-xl ">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-65 sm:h-64 md:h-60 rounded-xl"
                  />
                  <div className="p-6">
                    <br />
                    <p className="mb-4 font-semibold leading-5 text-gray-600">
                      {post.summary}
                    </p>

                    <Link
                      href={`/Blog/${post.id}`}
                      className="inline-flex items-center font-bold leading-10 tracking-wide"
                    >
                      Read more <b>↗</b>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
