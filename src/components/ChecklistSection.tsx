import { Check } from 'lucide-react';
import { useState } from 'react';

interface ChecklistItem {
  name: string;
  description?: string;
  critical?: boolean;
}

interface ChecklistSectionProps {
  title: string;
  icon: React.ReactNode;
  items: ChecklistItem[];
  index: number;
}

const ChecklistSection = ({ title, icon, items, index }: ChecklistSectionProps) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemName: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemName)) {
      newChecked.delete(itemName);
    } else {
      newChecked.add(itemName);
    }
    setCheckedItems(newChecked);
  };

  const progress = (checkedItems.size / items.length) * 100;

  return (
    <div
      className="group bg-card rounded-2xl p-6 md:p-8 card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-up border border-border/50 hover:border-primary/30"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{title}</h3>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {checkedItems.size}/{items.length}
            </span>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isChecked = checkedItems.has(item.name);
          return (
            <div
              key={idx}
              onClick={() => toggleItem(item.name)}
              className={`group/item flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                isChecked
                  ? 'bg-primary/5 border border-primary/20'
                  : 'bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-border'
              }`}
            >
              {/* Checkbox */}
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                  isChecked
                    ? 'bg-primary border-2 border-primary'
                    : 'bg-background border-2 border-muted-foreground/30 group-hover/item:border-primary/50'
                }`}
              >
                {isChecked && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />}
              </div>

              {/* Item Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isChecked ? 'text-muted-foreground line-through' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </span>
                  {item.critical && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-destructive/10 text-destructive rounded-full whitespace-nowrap">
                      CRITICAL
                    </span>
                  )}
                </div>
                {item.description && (
                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${
                      isChecked ? 'text-muted-foreground/60' : 'text-muted-foreground'
                    }`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChecklistSection;