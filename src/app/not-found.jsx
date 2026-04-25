"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="border-b">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          {/* 404 Title */}
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4">
            404
          </h2>

          {/* Headline */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable. Please check the URL or explore the latest
            news from our homepage.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Go to Homepage
            </Link>

            <Link
              href="/news"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Latest News
            </Link>
          </div>

          {/* Divider */}
          <div className="my-10 border-t"></div>

          {/* Suggested Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/politics" className="hover:underline">
              Politics
            </Link>
            <Link href="/sports" className="hover:underline">
              Sports
            </Link>
            <Link href="/technology" className="hover:underline">
              Technology
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dragon News. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
