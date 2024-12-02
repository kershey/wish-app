'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WishlistForm() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setItemName('');
    setItemDescription('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add to Wishlist</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Item description"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Add to Wishlist
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
