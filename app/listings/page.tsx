'use client';
import { createClient } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Listing = {
  id: number;
  title: string;
  price: string;
  address: string;
  image: string;
};

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from('listings').select('*');
      if (error) console.error('Error fetching listings:', error);
      else setListings(data);
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Available Rentals</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((l) => (
          <div key={l.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src={l.image || '/mock-images/apt1.jpg'} alt={l.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-medium">{l.title}</h2>
              <p className="text-gray-600">{l.address}</p>
              <p className="text-blue-600 font-semibold mt-2">{l.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
