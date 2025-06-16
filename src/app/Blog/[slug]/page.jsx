"use client";
import { useParams } from "next/navigation";
import BlogData from "../BlogData";
import SelecltBlog from "../SelecltBlog";

export default function BlogPostPage() {
  const { id } = useParams();
  // Ensure both sides are strings for comparison
  const blog = BlogData.find((e) => String(e.id) === String(id));
  return (
    <>
      <SelecltBlog blog={blog} />
    </>
  );
}