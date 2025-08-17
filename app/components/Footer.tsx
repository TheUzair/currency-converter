"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Currency Converter. All rights reserved.</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </li>
          <li>
            <Link href="/support" className="hover:text-white">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
