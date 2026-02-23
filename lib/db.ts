import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://erpweaiypimorcunaimz.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_21J6H7rVe81Ray_WLUDgEA_WU9iTNsG";


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
