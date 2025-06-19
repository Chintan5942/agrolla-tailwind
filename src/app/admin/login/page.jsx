"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";

export default function GoogleLogin() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://agrollaimpex.com/auth/callback", // ✅ Set this in your Supabase dashboard too
      },
    });

    if (error) console.error("Google login error:", error.message);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-red-500 text-white rounded shadow hover:bg-red-600"
      >
        Sign in with Google
      </button>
    </div>
  );
}
