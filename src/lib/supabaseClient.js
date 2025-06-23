import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// ✅ Validate env variables to avoid build-time crash
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables: 'NEXT_PUBLIC_SUPABASE_URL' or 'NEXT_PUBLIC_SUPABASE_ANON_KEY'. " +
    "Check your .env.local file or environment variable settings."
  );
}

// ✅ Export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
