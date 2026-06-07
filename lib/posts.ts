import { supabase } from "./supabase";

export async function getPosts() {
  return supabase.from("posts").select("*");
}