"use client";
import { useParams } from "next/navigation";
import BlogData from "../BlogData";
import SelecltBlog from "../SelecltBlog";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function BlogPostPage() {
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = useState([]);
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
        }
      });
    }
  }, [id]);

  return (
    <>
      <SelecltBlog blog={currentBlog} />
    </>
  );
}
