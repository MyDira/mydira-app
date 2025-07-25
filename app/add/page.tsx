'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function AddListingPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    price: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    image: '',
    contactName: '',
    contactPhone: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('listings').insert([
      {
        title: form.title,
        price: form.price,
        address: form.address,
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        squareFeet: form.squareFeet ? Number(form.squareFeet) : null,
        image: form.image,
        contactName: form.contactName,
        contactPhone: form.contactPhone,
        notes: form.notes
      }
    ]);
    if (error) {
      alert('Error saving listing: ' + error.message);
    } else {
      router.push('/listings');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2" required />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2" required />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full border p-2" required />
        <input name="bedrooms" type="number" placeholder="Bedrooms" value={form.bedrooms} onChange={handleChange} className="w-full border p-2" required />
        <input name="bathrooms" type="number" placeholder="Bathrooms" value={form.bathrooms} onChange={handleChange} className="w-full border p-2" required />
        <input name="squareFeet" type="number" placeholder="Square Feet (optional)" value={form.squareFeet} onChange={handleChange} className="w-full border p-2" />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="w-full border p-2" />
        <input name="contactName" placeholder="Contact Name" value={form.contactName} onChange={handleChange} className="w-full border p-2" required />
        <input name="contactPhone" placeholder="Contact Phone" value={form.contactPhone} onChange={handleChange} className="w-full border p-2" required />
        <textarea name="notes" placeholder="Notes or Description" value={form.notes} onChange={handleChange} className="w-full border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
