import { createClient } from '@supabase/supabase-js'; 
const supabaseUrl = 'https://tpkiwzybdotqsnvlnrae.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa2l3enliZG90cXNudmxucmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNTM4MzUsImV4cCI6MjA0NDYyOTgzNX0.BO73WeRe-KBm4robtVLCy1UDtKIKlsiztsd0yBX4Syc'; 
export const supabase = createClient(supabaseUrl, supabaseAnonKey); 

// Sign up function 
export async function signUp(email, password) { 
    const { data, error } = await supabase.auth.signUp({ email, password }); 
    return { data, error }; 
    } 
    // Login function 
    export async function login(email, password) { 
    const { data, error } = await supabase.auth.signInWithPassword({ email, password }); 
    return { data, error }; 
    } 
    // Logout function 
    export async function logout() { 
    const { error } = await supabase.auth.signOut(); 
    return { error }; 
    }