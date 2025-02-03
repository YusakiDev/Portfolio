import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-brand-surface dark:bg-brand-surface-dark shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-xl">
        Puree Pangma
    </Link>
    <div className="flex space-x-4">
    <Link href="/" className="hover:text-blue-500">
        Home
        </Link>
        <Link href="/about" className="hover:text-blue-500">
        About
        </Link>
        <Link href="/projects" className="hover:text-blue-500">
        Projects
        </Link>
        <Link href="/tools" className="hover:text-blue-500">
        Tools
        </Link>
        <Link href="/contact" className="hover:text-blue-500">
        Contact
        </Link>
        </div>
        </div>
        </div>
        </nav>
);
};

export default Navbar;
