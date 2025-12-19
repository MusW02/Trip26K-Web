import { LucideIcon } from "lucide-react";

interface CostCardProps {
  icon: LucideIcon;
  category: string;
  details: string;
  totalCost: string;
  perHead: string;
  index: number;
  accent?: boolean;
}

const CostCard = ({ icon: Icon, category, details, totalCost, perHead, index, accent }: CostCardProps) => {
  return (
    <div 
      className={`group relative rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-up border ${
        accent 
          ? 'bg-gradient-to-br from-primary to-secondary text-primary-foreground border-transparent' 
          : 'bg-card border-border/50 hover:border-primary/30'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          accent ? 'bg-primary-foreground/20' : 'bg-primary/10'
        }`}>
          <Icon className={`w-6 h-6 ${accent ? 'text-primary-foreground' : 'text-primary'}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-serif text-xl font-bold mb-1 ${accent ? 'text-primary-foreground' : 'text-foreground'}`}>
            {category}
          </h3>
          <p className={`text-sm mb-4 leading-relaxed ${accent ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            {details}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div>
              <span className={`text-xs uppercase tracking-wide ${accent ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                Total
              </span>
              <p className={`font-bold text-lg ${accent ? 'text-primary-foreground' : 'text-foreground'}`}>
                {totalCost}
              </p>
            </div>
            <div>
              <span className={`text-xs uppercase tracking-wide ${accent ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                Per Head
              </span>
              <p className={`font-bold text-lg ${accent ? 'text-primary-foreground' : 'text-secondary'}`}>
                {perHead}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCard;
