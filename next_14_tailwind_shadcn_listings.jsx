import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const listings = [
  {
    id: 1,
    title: "Cozy 2BR in Boro Park",
    price: "$1,800/mo",
    address: "1234 45th St, Brooklyn, NY",
    photo: "/listing1.jpg",
  },
  {
    id: 2,
    title: "Modern 3BR near Shul",
    price: "$2,400/mo",
    address: "5678 13th Ave, Brooklyn, NY",
    photo: "/listing2.jpg",
  },
  {
    id: 3,
    title: "Affordable 1BR for Students",
    price: "$1,200/mo",
    address: "910 Ave M, Brooklyn, NY",
    photo: "/listing3.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <nav className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyDira</h1>
        <Link href="/listings" className="text-blue-600 underline">
          View Listings
        </Link>
      </nav>

      <section className="text-center">
        <h2 className="text-xl font-semibold">Welcome to MyDira!</h2>
        <p className="text-gray-600">Find your perfect rental in the Jewish community.</p>
      </section>
    </main>
  );
}

export function ListingsPage() {
  return (
    <main className="min-h-screen p-4">
      <nav className="mb-6 flex justify-between items-center">
        <Link href="/" className="text-blue-600 underline">
          Home
        </Link>
        <h1 className="text-2xl font-bold">Listings</h1>
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <Card key={listing.id} className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src={listing.photo}
              alt={listing.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-blue-600 font-medium">{listing.price}</p>
              <p className="text-sm text-gray-600">{listing.address}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
