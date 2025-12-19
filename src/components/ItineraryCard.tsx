import { MapPin, Moon, Calendar } from "lucide-react";

interface ItineraryCardProps {
  date: string;
  day: string;
  route: string;
  nightStay: string;
  index: number;
}

const ItineraryCard = ({ date, day, route, nightStay, index }: ItineraryCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-up border border-border/50 hover:border-primary/30"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-20 group-hover:opacity-40 transition-opacity" />
      
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-shrink-0 flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex flex-col items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Calendar className="w-4 h-4 text-primary mb-0.5" />
            <span className="text-xs font-bold text-primary">{date}</span>
          </div>
          <div className="text-sm font-semibold text-secondary px-3 py-1 rounded-full bg-secondary/10">
            {day}
          </div>
        </div>

        <div className="flex-1 pl-4 md:pl-0">
          <div className="flex items-start gap-2 mb-2">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground font-medium leading-relaxed">{route}</p>
          </div>
          
          <div className="flex items-center gap-2 pl-7">
            <Moon className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Night Stay: <span className="text-accent font-medium">{nightStay}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
