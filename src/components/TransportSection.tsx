import { Car } from "lucide-react";

const transportImages = [
  "/Trip26K-Web/images/greenline.jpeg",
  "/Trip26K-Web/images/grandcabin.jpeg",
  "/Trip26K-Web/images/faisalmovers.jpeg",
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
        
        {/* 👇 Changed to generic text */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Traveling in comfort from Karachi to the Mountains.
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
                alt={`Transport mode ${index + 1}`} // Generic Alt text
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* I REMOVED the "div" that was here previously. 
                 Now nothing will pop up on hover. 
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
