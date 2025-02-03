import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative min-h-[70vh]">
            {/* Background Image with Next.js Image */}
            <Image
                src="/resources/images/wichard.png"
                alt="Background"
                fill
                className="object-cover z-0"
                priority  // Loads image first
                quality={100}  // Maximum quality
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-[70vh] text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    Hi, I&apos;m <span className="text-brand-accent">Puree Pangma</span>
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-gray-200">
                    Software Developer / Game Developer
                </h2>
                <button className="bg-brand-cta text-white px-6 py-2 rounded-lg hover:bg-brand-cta-hover transition-colors">
                    View My Work
                </button>
            </div>
        </div>
    );
};

export default Hero;
