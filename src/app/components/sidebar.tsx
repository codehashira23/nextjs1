"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`h-screen bg-gray-800 text-white p-4 ${isOpen ? "w-60" : "w-16"}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="mb-4 p-2 bg-gray-700 rounded">
                {isOpen ? "Close" : "☰"}
            </button>

            <nav className="space-y-4">
                <NavItem href="/dashboard" label="Dashboard" />
                <NavItem href="/exams" label="Exams" />
                <NavItem href="/results" label="My Result" />
                <NavItem href="/reports" label="Student Reports" />
                <NavItem href="/monitoring" label="Monitoring" />

            </nav>
        </div>
    );
};

// Reusable Sidebar Link
const NavItem = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
        {label}
    </Link>
);

export default Sidebar;
