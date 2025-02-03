export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Add your project cards here */}
                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-2">Project Name</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Project description...
                    </p>
                </div>
            </div>
        </div>
    );
} 