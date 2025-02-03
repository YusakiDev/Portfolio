const Footer = () => {
    return (
        <footer className="bg-brand-surface dark:bg-brand-surface-dark py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Puree Pangma. All rights reserved.
    </p>
    <div className="flex justify-center space-x-4 mt-4">
    <a href="https://github.com/YusakiDev" className="text-gray-600 hover:text-blue-500">
        GitHub
        </a>
        <a href="mailto:puree.marimjie@gmail.com" className="text-gray-600 hover:text-blue-500">
        Mail
        </a>
        </div>
        </div>
        </footer>
);
};

export default Footer;
