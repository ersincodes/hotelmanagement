import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://giayesammceicqeuoyhx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpYXllc2FtbWNlaWNxZXVveWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTk0MjUsImV4cCI6MjAyMTU5NTQyNX0.o31M-FZszkP9a69HTz4r68HNEzJnLoxFEWJgySExJLo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
