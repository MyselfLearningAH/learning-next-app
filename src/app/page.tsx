"use client"
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();
  setTimeout(() => router.push('/approuter'), 5000)

  return (
    <div className="p-4">
      <p className="text-white">Loading approuter...</p>
      <p className="text-white">Path of redux set to /approuter as catch-all-segments</p>
    </div>
  );
}
