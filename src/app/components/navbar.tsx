import Link from "next/link";


const userRole = "admin"; // Replace this with dynamic role fetching logic if needed

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                <Link href="/" className="text-xl font-bold">
                    <span className="text-xl font-bold">Exam Portal</span></Link>
                <div className="space-x-6">
                    <NavLink href="/dashboard" label="Dashboard" />
                    <NavLink href="/exams" label="Exams" />
                    <NavLink href="/results" label="My Results" />
                    {userRole !== "admin" && <NavLink href="/monitoring" label="Monitoring" />}
                    <NavLink href="/signup" label="sign up" />
                    <NavLink href="/login" label="login" />
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className="hover:underline hover:text-gray-300 transition-all">
        {label}
    </Link>
);

export default Navbar;
