import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface TravelerCardProps {
  name: string;
  image: string;
  role?: string;
}
const TravelerCard = ({ name, image, role }: TravelerCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-card/50 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Image */}
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Dark Overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          
          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <h3 className="font-serif font-bold text-lg">{name}</h3>
            {role && <p className="text-sm text-white/80">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelerCard;