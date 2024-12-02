'use client';

import { useState } from 'react';
import { WishlistTable } from '../_components/WishlistTable';
import Link from 'next/link';

const WishlistPage = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
        <Link href="/add-item">
          <button className="mb-4 bg-zinc-950 text-white px-4 py-2 rounded">
            Add Item
          </button>
        </Link>
      </div>
      <WishlistTable />
    </main>
  );
};

export default WishlistPage;
