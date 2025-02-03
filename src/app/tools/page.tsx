import Image from 'next/image';

export default function Tools() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Web Tools</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-48 mb-4">
                        <Image
                            src="/resources/images/permission-converter.png"
                            alt="Permission Converter"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2">Luckperms {'->'} AxRankMenu Converter</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Convert Luckperms JSON permissions to AxRankMenu YAML format
                    </p>

                    <div className="flex justify-between items-center">
                        <a 
                            href="/tools/permission-converter" 
                            className="text-brand-link hover:text-brand-link-hover"
                        >
                            Launch Tool →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}