import { supabase } from "./supabase";

export async function getSlots() {
  const { data, error } = await supabase
    .from("slots")
    .select("*")
    .order("slot_date");

  if (error) throw error;

  return data;
}

export async function createSlot(
  slot_date: string,
  slot_time: string
) {
  const { data, error } = await supabase
    .from("slots")
    .insert([
      {
        slot_date,
        slot_time,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return data;
}