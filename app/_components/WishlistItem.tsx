'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Trash2, Edit2 } from 'lucide-react';

// Example wishlist items
const items = [
  {
    id: 1,
    name: 'MacBook Pro',
    description: '14-inch MacBook Pro with M2 chip',
  },
  {
    id: 2,
    name: 'AirPods Pro',
    description: 'Wireless earbuds with noise cancellation',
  },
];

export function WishlistItems() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Your Wishlist</h2>
      {items.map((item) => (
        <Card key={item.id} className="group">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
