
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://paynbdffrqktuapbhgbm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBheW5iZGZmcnFrdHVhcGJoZ2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1OTUzNzksImV4cCI6MjAxNDE3MTM3OX0.ShAsGYviI7eL1EZ_3IfSzinAFVCheTWzRJGaWeHxUoI'
export const supabase = createClient(supabaseUrl, supabaseKey)