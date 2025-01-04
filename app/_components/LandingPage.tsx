import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List, PenSquare, Plus, Trash2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Manage Your Wishes with Ease
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Create, organize, and share your wishlists effortlessly. Never
                forget a gift idea again!
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/wishlist">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Plus className="h-6 w-6 mb-2" />
                <CardTitle>Create</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Easily add new items to your wishlist with just a few clicks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <List className="h-6 w-6 mb-2" />
                <CardTitle>Read</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  View and organize your wishlists in a clean, intuitive
                  interface.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PenSquare className="h-6 w-6 mb-2" />
                <CardTitle>Update</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Modify your wishlist items anytime as your preferences change.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Trash2 className="h-6 w-6 mb-2" />
                <CardTitle>Delete</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Remove items from your wishlist with a simple delete action.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            How It Works
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Sign Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Create your account and start your first wishlist in minutes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Add Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Easily add items to your wishlist with names, descriptions,
                  and links.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Manage & Share</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Organize your items, update as needed, and share your lists
                  with friends and family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section
        id="get-started"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Start Managing Your Wishlist Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of users who have simplified their gift-giving
                and personal shopping with our Wishlist App.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="#">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
