import { createClient } from '@supabase/supabase-js'

const URL = 'https://nympnpxpllpzwmimjkph.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55bXBucHhwbGxwendtaW1qa3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjczMDQsImV4cCI6MjAyODAwMzMwNH0.2BF3Oilr9s5hRQXPhVdD7GQXGtHg_7Mrjmaxp_THnL4';

export const supabase = createClient(URL, API_KEY);