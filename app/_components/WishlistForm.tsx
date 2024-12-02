'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { WishlistItem } from '@/app/_components/WishlistTable';

interface WishlistFormProps {
  initialData?: Partial<WishlistItem>;
  mode: 'add' | 'edit';
}

export function WishlistForm({ initialData, mode }: WishlistFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<WishlistItem>>(
    initialData || {
      name: '',
      description: '',
      price: 0,
      priority: 'MEDIUM',
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'edit' && initialData?.id) {
        // Update existing item
        const { error } = await supabase
          .from('wishlist_items')
          .update(formData)
          .eq('id', initialData.id);

        if (error) throw error;
      } else {
        // Create new item
        const { error } = await supabase
          .from('wishlist_items')
          .insert([formData]);

        if (error) throw error;
      }

      router.push('/wishlist');
      router.refresh();
    } catch (error) {
      console.error('Error saving item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl py-10 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>
            {mode === 'edit' ? 'Edit Item' : 'Add New Item'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description">Description</label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: parseFloat(e.target.value),
                  }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="priority">Priority</label>
              <Select
                value={formData.priority}
                onValueChange={(value: 'HIGH' | 'MEDIUM' | 'LOW') =>
                  setFormData((prev) => ({
                    ...prev,
                    priority: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading
                  ? 'Saving...'
                  : mode === 'edit'
                  ? 'Update Item'
                  : 'Add Item'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
