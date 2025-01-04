'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { WishlistForm } from '@/app/_components/WishlistForm';
import type { WishlistItem } from '@/app/_components/WishlistTable';

export default function EditItemPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditItemContent />
    </Suspense>
  );
}

function EditItemContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemId = searchParams.get('id');
  const [initialData, setInitialData] = useState<
    Partial<WishlistItem> | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      if (!itemId) {
        router.push('/wishlist');
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
        } else {
          // If no item found, redirect to wishlist
          router.push('/wishlist');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
        router.push('/wishlist');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [itemId, router]);

  if (isLoading) {
    return <div className="container py-10 text-center">Loading...</div>;
  }

  if (!initialData) {
    return null;
  }

  return <WishlistForm initialData={initialData} mode="edit" />;
}
