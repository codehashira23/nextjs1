import React from "react";
import Navbar from "../app/components/navbar";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2025 Exam Portal. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}

