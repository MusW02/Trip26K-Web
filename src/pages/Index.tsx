import { Mountain, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TravelerCard from "@/components/TravelerCard";
import { travelers } from "@/data/travelers";
const Index = () => {
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-up">
              <Mountain className="w-4 h-4" />
              <span>January 9-20, 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">Welcome</span>
              <br />
              <span className="text-foreground">to Our Adventure</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              An epic 12-day journey through the majestic landscapes of Pakistan — 
              from the valleys of Kashmir to the historic streets of Lahore
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/itinerary"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                View Itinerary
              </Link>
              <Link
                to="/costs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Cost Breakdown
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Travelers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Travel Squad
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            9 adventurers ready to explore the beauty of Pakistan together
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {/* 👇 UPDATED MAP FUNCTION */}
            {travelers.map((traveler, index) => (
              <TravelerCard 
                key={index} 
                name={traveler.name} 
                image={traveler.image} 
                role={traveler.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "12", label: "Days" },
              { value: "9", label: "Travelers" },
              { value: "1200+", label: "Kilometers" },
              { value: "15+", label: "Destinations" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card card-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
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

export default Index;