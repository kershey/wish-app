import './globals.css';
import { Inter } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wishlist App',
  description: 'Track your wishlist items',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
