import { Car } from "lucide-react";

const transportImages = [
  "/images/greenline.jpeg",
  "/images/grandcabin.jpeg",
  "/images/faisalmovers.jpeg",
];

const TransportSection = () => {
  return (
    <section className="py-16 bg-muted/30 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Car className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Our Transport
          </h2>
        </div>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Travel in comfort with the Toyota Grand Cabin - perfect for our mountain adventures
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {transportImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={image}
                alt={`Toyota Grand Cabin ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground font-medium">Toyota Grand Cabin</p>
                <p className="text-primary-foreground/70 text-sm">Comfort for the journey</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
