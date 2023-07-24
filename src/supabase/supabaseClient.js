import { createClient } from '@supabase/supabase-js'



// const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL;
const supabaseUrl = "https://myxiklaowgdbpvlonfkf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15eGlrbGFvd2dkYnB2bG9uZmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5NjcwNTcsImV4cCI6MjAwNDU0MzA1N30.umgHrpJNTXDfMfIGFTJL57QNMlmx16o5y32cglIrz2E";

// creating client;
const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
}
const supabase = createClient(supabaseUrl, supabaseAnonKey, options)

export default supabase;