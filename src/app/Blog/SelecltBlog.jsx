"use client";
import React, { useState } from "react";
import Footer from "../HomePage/Footer";

export default function BlogDetailPage({blog}) {
    const [currentBlog , setCurrentBlog] = useState(blog);
    
  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Blog not found</p>
      </div>
    );
  }

  return (
    <>
    <div className="flex justify-center px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-800 leading-15">{currentBlog.title}</h1> 
        <h1 className="mb-6 font-bold text-gray-800  text-md w-[18%] leading-8">{currentBlog.date}</h1> 
        <img
          src={currentBlog.image}
          alt={currentBlog.title}
          className="mx-auto mb-10 rounded-xl shadow-lg object-cover w-full max-h-[400px]"
        /> <br />
        <p className="text-lg leading-7 text-left text-gray-700">{currentBlog.content}</p>
        <p className="text-lg leading-7 text-left text-gray-700">{currentBlog.summary}</p>
      </div>
    </div>
      </>
  );
}
