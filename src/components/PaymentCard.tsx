import { Wallet, Calendar, User } from "lucide-react";

interface PaymentCardProps {
  amount: string;
  purpose: string;
  transferTo: string;
  deadline: string;
  index: number;
}

const PaymentCard = ({ amount, purpose, transferTo, deadline, index }: PaymentCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-up border border-border/50 hover:border-primary/30"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Wallet className="w-5 h-5 text-accent" />
        </div>
        <div className="text-3xl font-bold text-primary font-serif">{amount}</div>
      </div>
      
      <h3 className="font-semibold text-foreground mb-4">{purpose}</h3>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Transfer to:</span>
          <span className="font-medium text-secondary">{transferTo}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Deadline:</span>
          <span className="font-medium text-destructive">{deadline}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
