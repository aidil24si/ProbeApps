import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {frameworkData.map((item) => (
                <div key={item.id} className="border p-6 mb-6 rounded-xl shadow-sm bg-white">
                    {/* Judul & Deskripsi */}
                    <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    
                    {/* Info Developer & Tahun */}
                    <p className="text-sm text-gray-500 mt-2">
                        Developed by: <span className="font-bold text-gray-700">{item.details.developer}</span> ({item.details.releaseYear})
                    </p>

                    {/* Link Website */}
                    <div className="mt-2">
                        <a 
                            href={item.details.officialWebsite} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm font-medium"
                        >
                            Visit Website
                        </a>
                    </div>

                    {/* Menampilkan Tags (Array Mapping) */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}