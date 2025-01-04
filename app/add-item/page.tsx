'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { WishlistForm } from '@/app/_components/WishlistForm';
import type { WishlistItem } from '@/app/_components/WishlistTable';

function AddItemPageClient() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get('id');
  const [initialData, setInitialData] = useState<
    Partial<WishlistItem> | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      if (!itemId) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('wishlist_items')
          .select('*')
          .eq('id', itemId)
          .single();

        if (error) throw error;
        if (data) {
          setInitialData(data);
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (isLoading) {
    return <div className="container py-10 text-center">Loading...</div>;
  }

  return (
    <WishlistForm initialData={initialData} mode={itemId ? 'edit' : 'add'} />
  );
}

export default function AddItemPage() {
  return (
    <Suspense
      fallback={<div className="container py-10 text-center">Loading...</div>}
    >
      <AddItemPageClient />
    </Suspense>
  );
}
