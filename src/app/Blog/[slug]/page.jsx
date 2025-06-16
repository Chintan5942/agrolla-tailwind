"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const { slug } = useParams();

  return (
    <div className="max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold capitalize">
        Blog: {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-gray-600">
        This is a placeholder blog content for: <strong>{slug}</strong>
      </p>
    </div>
  );
}
