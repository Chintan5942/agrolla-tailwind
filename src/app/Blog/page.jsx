"use client";
import React from "react";
import Link from "next/link";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Agriculture",
    excerpt:
      "Explore how modern technology is shaping the future of farming and food production.",
    image: "/agrolla-logo.png",
    slug: "future-of-agriculture",
  },
  {
    id: 2,
    title: "Sustainable Farming Practices",
    excerpt:
      "Discover eco-friendly farming techniques that help protect our planet and ensure food security.",
    image: "/agrolla-logo.png",
    slug: "sustainable-farming",
  },
  {
    id: 3,
    title: "Agro-Export Market Trends",
    excerpt:
      "An in-depth look at how global demand for agro products is evolving and impacting trade.",
    image: "/agrolla-logo.png",
    slug: "agro-export-trends",
  },
  {
    id: 4,
    title: "Innovations in Irrigation",
    excerpt:
      "How smart irrigation systems are saving water and boosting yields for farmers worldwide.",
    image: "/agrolla-logo.png",
    slug: "smart-irrigation",
  },
  {
    id: 5,
    title: "Empowering Small Farmers",
    excerpt:
      "Learn how community-driven solutions are helping small farmers thrive.",
    image: "/agrolla-logo.png",
    slug: "empowering-farmers",
  },
  {
    id: 6,
    title: "Climate & Crop Management",
    excerpt:
      "Understanding the role of climate-smart agriculture in adapting to environmental challenges.",
    image: "/agrolla-logo.png",
    slug: "climate-crop-management",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-900">
        Blog
      </h1>

      <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="object-contain w-full h-48 bg-gray-100"
            />
            <div className="p-6">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                {post.title}
              </h2>
              <p className="mb-4 text-gray-600">{post.excerpt}</p>
              <Link
                href={`/Blog/${post.slug}`}
                className="inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
