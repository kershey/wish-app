'use client';

import { useState } from 'react';
import { addWishlistItem } from '../_actions/wishlist';
import { useRouter } from 'next/navigation';

const AddItemPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    priority: 'LOW',
  });

  const handleSubmit = async (formData: FormData) => {
    try {
      const result = await addWishlistItem({
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string),
        priority: formData.get('priority') as string,
      });

      if (!result.success) throw result.error;

      // Redirect to wishlist page after successful submission
      router.push('/wishlist');
    } catch (error) {
      console.error('Error adding wishlist item:', error);
      // You might want to show an error message to the user here
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add Wishlist Item</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Item name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Item description"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-zinc-950 text-white rounded-md"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
