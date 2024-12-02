'use server';

import { supabase } from '../lib/supabase';

interface WishlistItemData {
  name: string;
  description: string;
  price: number;
  priority: string;
}

export async function addWishlistItem(data: WishlistItemData) {
  try {
    const { error } = await supabase.from('wishlist_items').insert([
      {
        name: data.name,
        description: data.description,
        price: data.price,
        priority: data.priority,
      },
    ]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error adding wishlist item:', error);
    return { success: false, error };
  }
}
