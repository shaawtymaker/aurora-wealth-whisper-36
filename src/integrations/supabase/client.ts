// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://atthmviavmhomtptwese.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0dGhtdmlhdm1ob210cHR3ZXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MTc2OTAsImV4cCI6MjA1OTk5MzY5MH0.EsYKPYxaiZh9OY4v4DEaxmjD9e8C2aRrYNRDlPxhreM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);