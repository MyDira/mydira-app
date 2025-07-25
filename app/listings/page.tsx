import Image from 'next/image';

type Listing = {
  id: number;
  title: string;
  price: string;
  address: string;
  image: string;
};

const mockListings: Listing[] = [
  {
    id: 1,
    title: 'Cozy Studio Apartment',
    price: '$1,200/mo',
    address: '123 Elm St, Communityville',
    image: '/mock-images/apt1.jpg'
  },
  {
    id: 2,
    title: '2‑Bedroom Apartment',
    price: '$1,800/mo',
    address: '456 Maple Ave, Communityville',
    image: '/mock-images/apt2.jpg'
  },
  {
    id: 3,
    title: 'Spacious 3‑Bed House',
    price: '$2,500/mo',
    address: '789 Oak Dr, Communityville',
    image: '/mock-images/apt3.jpg'
  }
];

export default function ListingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Available Rentals</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockListings.map((l) => (
          <div key={l.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src={l.image} alt={l.title} fill style={{ objectFit: 'cover' }} />
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