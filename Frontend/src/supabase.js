import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bqfznzuhzegrhslwmmnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZnpuenVoemVncmhzbHdtbW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyMTQzODMsImV4cCI6MjA0NDc5MDM4M30._vEbQDd3V6demk4i2zOm6oaDEXCCp2AZhNvFCtoF-gY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase