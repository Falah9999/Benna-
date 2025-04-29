"use client";

import Link from "next/link";

export default function ArabicHome() {
  return (
    <main dir="rtl" className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">مرحبًا بكم في كولينك</h1>
      <p className="mb-6 text-center">استئجار، شراء، أو عرض معدات البناء بسهولة</p>
      <div className="flex gap-4">
        <Link href="/ar/equipment" className="bg-blue-600 text-white p-3 rounded">تصفح المعدات</Link>
        <Link href="/ar/dashboard/owner" className="border border-blue-600 text-blue-600 p-3 rounded">لوحة تحكم المالك</Link>
      </div>
      <div className="absolute top-4 left-4">
        <Link href="/en" className="text-blue-600 font-bold underline">English</Link>
      </div>
    </main>
  );
}
