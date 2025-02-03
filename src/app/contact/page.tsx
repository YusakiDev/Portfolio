export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <div className="max-w-2xl mx-auto">
                <p className="text-lg mb-6">
                    Get in touch with me at:
                </p>
                <div className="space-y-4">
                    <a 
                        href="mailto:puree.marimjie@gmail.com"
                        className="block text-brand-link hover:text-brand-link-hover"
                    >
                        puree.marimjie@gmail.com
                    </a>
                    <a 
                        href="https://github.com/YusakiDev"
                        className="block text-brand-link hover:text-brand-link-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}