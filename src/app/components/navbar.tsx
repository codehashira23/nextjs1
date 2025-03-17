import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-xl font-bold">Exam Portal</h1>
                <div className="space-x-6">
                    <NavLink href="/dashboard" label="Dashboard" />
                    <NavLink href="/exams" label="Exams" />
                    <NavLink href="/results" label="Results" />
                    <NavLink href="/monitoring" label="Monitoring" />
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className="hover:underline hover:text-gray-200 transition-all">
        {label}
    </Link>
);

export default Navbar;
