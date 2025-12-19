import Navigation from "@/components/Navigation";
import CostCard from "@/components/CostCard";
import PaymentCard from "@/components/PaymentCard";
import { Train, Car, Fuel, Hotel, Utensils, Mountain, Calculator, CreditCard } from "lucide-react";

const costData = [
  {
    icon: Train,
    category: "Transport",
    details: "Green Line (PKR 13,260) + Shalimar (PKR 8,700) + Faisal Movers (PKR 2,000)",
    totalCost: "PKR 23,960",
    perHead: "≈ PKR 24,000",
  },
  {
    icon: Car,
    category: "Grand Cabin",
    details: "11th - 17th January (7 Days @ PKR 12,000/day)",
    totalCost: "PKR 84,000",
    perHead: "≈ PKR 9,500",
  },
  {
    icon: Fuel,
    category: "Fuel",
    details: "Estimated 1200km @ 7km/L",
    totalCost: "PKR 55,000",
    perHead: "≈ PKR 6,200",
  },
  {
    icon: Hotel,
    category: "Hotels",
    details: "7 Nights (2 Rooms @ PKR 5,000/room)",
    totalCost: "PKR 70,000",
    perHead: "≈ PKR 7,800",
  },
  {
    icon: Utensils,
    category: "Food",
    details: "Breakfast & Dinner (8 Days @ PKR 1,500/day) Excluding Lahore",
    totalCost: "PKR 108,000",
    perHead: "≈ PKR 12,000",
  },
  {
    icon: Mountain,
    category: "Jeeps",
    details: "Kel & Mahodand Lake (Estimate)",
    totalCost: "PKR 30,000",
    perHead: "≈ PKR 3,400",
  },
];

const paymentData = [
  { amount: "PKR 22,000", purpose: "Train Tickets", transferTo: "MUSTAFA", deadline: "14th December" },
  { amount: "PKR 25,500", purpose: "Grand Cabin, Faisal Movers, Fuel & Hotels", transferTo: "BILAL", deadline: "7th January" },
  { amount: "PKR 12,000", purpose: "Food Pool", transferTo: "SHEHARYAR", deadline: "On Arrival (Islamabad)" },
  { amount: "PKR 3,000", purpose: "Jeep Expenses (Variable)", transferTo: "Keep as Cash", deadline: "On Requirement" },
];

const Costs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 animate-fade-up">
              <Calculator className="w-4 h-4" />
              <span>Budget Breakdown</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Trip <span className="text-gradient">Costs</span>
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Complete cost breakdown and payment schedule for our adventure
            </p>
          </div>
        </div>
      </section>

      {/* Total Summary */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-gradient-to-br from-primary to-secondary text-primary-foreground card-shadow animate-scale-in">
            <h2 className="text-lg font-medium opacity-80 mb-2">Total Trip Cost</h2>
            <div className="text-5xl md:text-6xl font-serif font-bold mb-4">PKR 563,000</div>
            <div className="text-xl opacity-90">≈ PKR 62,555 per person</div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 text-foreground">
            Detailed Breakdown
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {costData.map((item, index) => (
              <CostCard key={item.category} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CreditCard className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Payment Schedule
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Please transfer the amounts to the designated persons by the deadlines
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {paymentData.map((item, index) => (
              <PaymentCard key={item.purpose} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-center">
            <h3 className="font-serif text-xl font-bold text-destructive mb-2">Important Reminder</h3>
            <p className="text-foreground">
              Please ensure all payments are made on time to avoid any last-minute issues. 
              Contact the respective person if you have any questions!
            </p>
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

export default Costs;
