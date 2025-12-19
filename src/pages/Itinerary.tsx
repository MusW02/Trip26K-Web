import Navigation from "@/components/Navigation";
import ItineraryCard from "@/components/ItineraryCard";
import DestinationGallery from "@/components/DestinationGallery";
import TransportSection from "@/components/TransportSection";
import { Calendar, Mountain } from "lucide-react";

const itineraryData = [
  { date: "09 Jan", day: "Friday", route: "Departure: Green Line Train (10:00 PM)", nightStay: "On Train" },
  { date: "10 Jan", day: "Saturday", route: "Arrival in Islamabad (8:00 PM). Dinner & Rest.", nightStay: "Islamabad" },
  { date: "11 Jan", day: "Sunday", route: "Travel: Islamabad → Muzaffarabad → Keran/Upper Neelum", nightStay: "Keran/Upper Neelum" },
  { date: "12 Jan", day: "Monday", route: "Travel: Keran → Sharda → Kel → Arang Kel", nightStay: "Kel/Arang Kel" },
  { date: "13 Jan", day: "Tuesday", route: "Long Travel: Kel → Sharda → Muzaffarabad → Balakot", nightStay: "Balakot" },
  { date: "14 Jan", day: "Wednesday", route: "Travel: Balakot → Swat → Malam Jabba", nightStay: "Malam Jabba" },
  { date: "15 Jan", day: "Thursday", route: "Travel: Malam Jabba → Bahrain → Kalam", nightStay: "Kalam" },
  { date: "16 Jan", day: "Friday", route: "Explore Kalam (Ushu Forest, Mahodand Lake)", nightStay: "Kalam" },
  { date: "17 Jan", day: "Saturday", route: "Return: Kalam → Khanpur Dam → Islamabad → Lahore", nightStay: "Lahore" },
  { date: "18 Jan", day: "Sunday", route: "Explore Lahore (Food & Sightseeing)", nightStay: "Lahore" },
  { date: "19 Jan", day: "Monday", route: "Departure: Shalimar Express (7:00 AM) → Karachi", nightStay: "On Train" },
  { date: "20 Jan", day: "Tuesday", route: "Arrival in Karachi (3:00 AM)", nightStay: "Home Sweet Home" },
];

const Itinerary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6 animate-fade-up">
              <Calendar className="w-4 h-4" />
              <span>12-Day Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Our Complete <span className="text-gradient">Itinerary</span>
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
              From Karachi to Kashmir to Lahore — every stop of our epic adventure
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {itineraryData.map((item, index) => (
              <ItineraryCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <TransportSection />

      {/* Destination Gallery */}
      <div className="container mx-auto px-4">
        <DestinationGallery />
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Mountain className="w-4 h-4 text-primary" />
            From my backpack to yours — Mustafa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Itinerary;
