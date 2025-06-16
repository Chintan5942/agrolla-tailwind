"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/admin/login");
    } else {
      // Optional: validate token or fetch user data here
      router.push("/admin/dashboard");
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) return <p>Checking access...</p>;

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <p>Welcome to the admin dashboard. Use the sidebar to navigate.</p>
      </main>
    </div>
  );
}
