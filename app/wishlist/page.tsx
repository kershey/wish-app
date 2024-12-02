'use client';

import { useState } from 'react';
import { WishlistTable } from '../_components/WishlistTable';
import AddWishlistItemModal from '../_components/AddWishlistItemModal';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
        <button
          onClick={openModal}
          className="mb-4 bg-zinc-950 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>
      <WishlistTable />
      <AddWishlistItemModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default Page;
