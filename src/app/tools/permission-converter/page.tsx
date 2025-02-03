'use client';
import Script from 'next/script';
import Image from 'next/image';

declare global {
    interface Window {
        convertToYaml: () => void;
        copyToClipboard: () => void;
        loadSampleJson: () => void;
    }
}

export default function PermissionConverter() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Script 
                src="/js/converter.js"
                strategy="afterInteractive"
            />
            <div className="flex justify-center mb-4">
                <div className="relative w-[800px] h-[600px]">
                    <Image
                        src="/resources/images/permission-converter.png"
                        alt="Permission Converter"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">Luckperms -> AxRankMenu Converter</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Input Luckperms JSON</h2>
                    <textarea
                        id="inputJson"
                        className="w-full h-96 p-4 border rounded-lg font-mono text-sm bg-white dark:bg-gray-800"
                        placeholder="Paste your JSON here..."
                    />
                    <div className="flex space-x-4">
                        <button
                            onClick={() => window.loadSampleJson?.()}
                            className="px-4 py-2 bg-brand-cta text-white rounded hover:bg-brand-cta-hover transition-colors"
                        >
                            Load Sample
                        </button>
                        <button
                            onClick={() => window.convertToYaml?.()}
                            className="px-4 py-2 bg-brand-cta text-white rounded hover:bg-brand-cta-hover transition-colors"
                        >
                            Convert
                        </button>
                    </div>
                </div>

                {/* Output Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Output AxRankMenu YAML</h2>
                    <textarea
                        id="outputYaml"
                        className="w-full h-96 p-4 border rounded-lg font-mono text-sm bg-white dark:bg-gray-800"
                        readOnly
                        placeholder="Converted YAML will appear here..."
                    />
                    <div>
                        <button
                            onClick={() => window.copyToClipboard?.()}
                            className="px-4 py-2 bg-brand-cta text-white rounded hover:bg-brand-cta-hover transition-colors"
                        >
                            Copy to Clipboard
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                <div 
                    id="errorMessage" 
                    className="hidden col-span-full p-4 bg-red-100 text-red-700 rounded-lg"
                />
            </div>
        </div>
    );
}