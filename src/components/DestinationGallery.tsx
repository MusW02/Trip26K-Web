import { useState } from "react";

interface Destination {
  name: string;
  image: string;
}

const destinations: Destination[] = [
  { name: "Karachi Train Station", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80" },
  { name: "Business Class Train", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80" },
  { name: "Islamabad", image: "/images/islamaabd.jpeg" },
  { name: "Margalla Hills", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
  { name: "Muzaffarabad", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" },
  { name: "Azad Kashmir", image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80" },
  { name: "Sharda", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80" },
  { name: "Keran Valley", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80" },
  { name: "Kel", image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80" },
  { name: "Arang Kel", image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&q=80" },
  { name: "Swat Valley", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" },
  { name: "Kalam", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80" },
  { name: "Mahodand Lake", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80" },
  { name: "Ushu Forest", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" },
  { name: "Malam Jabba", image: "/images/malam.jpeg" },
  { name: "Lahore", image: "/images/lahore.jpeg" },
  { name: "Badshahi Mosque", image: "/images/Badshahi_Mosque_front_picture.jpg" },
  { name: "Food Street Lahore", image: "/images/Food_Street_Lahore.jpg" },
];

const DestinationGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-foreground">
        Destinations We'll Explore
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        From the bustling streets of Karachi to the serene valleys of Kashmir and the historic beauty of Lahore
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {destinations.map((dest, index) => (
          <div
            key={dest.name}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/40 to-transparent transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-60'
            }`} />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-primary-foreground font-medium text-sm leading-tight">
                {dest.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationGallery;
