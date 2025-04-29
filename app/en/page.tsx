"use client";

import Link from "next/link";

export default function EnglishHome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to CoLink</h1>
      <p className="mb-6 text-center">Find, Rent, or Buy Heavy Equipment Easily</p>
      <div className="flex gap-4">
        <Link href="/en/equipment" className="bg-blue-600 text-white p-3 rounded">Browse Equipment</Link>
        <Link href="/en/dashboard/owner" className="border border-blue-600 text-blue-600 p-3 rounded">Owner Dashboard</Link>
      </div>
      <div className="absolute top-4 right-4">
        <Link href="/ar" className="text-blue-600 font-bold underline">العربية</Link>
      </div>
    </main>
  );
}
