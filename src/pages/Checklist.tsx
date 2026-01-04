import Navigation from '@/components/Navigation';
import ChecklistSection from '@/components/ChecklistSection';
import { Mountain, Train, Car, Droplets, Shirt, FileText, Backpack, AlertTriangle } from 'lucide-react';

const checklistData = [
  {
    title: 'Train Travel Essentials',
    icon: <Train className="w-6 h-6 text-primary" />,
    items: [
      { name: 'Light Shawl / Chadar', description: 'For warmth and comfort during the overnight train journey' },
      { name: 'Earphones / Headphones', description: 'Entertainment for the long ride' },
      { name: 'Power Bank', description: 'Fully charged - Train journey is 22+ hours', critical: true },
      { name: 'Phone Charger & Cable', description: 'Keep your devices powered' },
      { name: 'Slippers', description: 'Comfortable footwear for the train' },
    ],
  },
  {
    title: 'Road Travel Must-Haves',
    icon: <Car className="w-6 h-6 text-primary" />,
    items: [
      { name: 'Torch / Flashlight', description: 'Useful during night stops and emergencies' },
      { name: 'Large Garbage Bags (5-7)', description: 'For trash and dirty laundry during the trip', critical: true },
      { name: 'Sunglasses', description: 'Snow glare can be blinding - protect your eyes' },
      { name: 'Snacks & Energy Bars', description: 'Quick energy during long drives' },
    ],
  },
  {
    title: 'Personal Hygiene & Care',
    icon: <Droplets className="w-6 h-6 text-primary" />,
    items: [
      {
        name: 'Cold Cream / Vaseline',
        description: 'CRITICAL - Skin cracks in -10°C. Apply morning and night.',
        critical: true,
      },
      { name: 'Lip Balm (Chapstick)', description: 'Apply every 2 hours to prevent bleeding lips', critical: true },
      {
        name: 'Sunblock SPF 50+',
        description: 'Snow reflects UV rays - you can get sunburned even in freezing weather',
        critical: true,
      },
      { name: 'Deodorant / Perfume', description: '9 guys in a van for 12 days... absolutely essential' },
      { name: 'Hand Sanitizer', description: 'For use before eating on the road' },
      { name: 'Toothbrush & Toothpaste', description: 'Basic dental hygiene' },
      { name: 'Soap / Body Wash', description: 'Travel-sized or small bar' },
      { name: 'Towel', description: 'Quick-dry towel preferred' },
      { name: 'Toilet Paper / Tissues', description: 'Important - Not all places have proper facilities', critical: true },
      { name: 'Wet Wipes', description: 'For quick cleaning when water is not available' },
      { name: 'Comb / Hair Brush', description: 'Keep yourself presentable' },
    ],
  },
  {
    title: 'Clothing (Winter & Adventure)',
    icon: <Shirt className="w-6 h-6 text-primary" />,
    items: [
      {
        name: 'Heavy Jacket (Water-resistant)',
        description: 'Windproof and water-resistant is best. Your outer shield.',
        critical: true,
      },
      {
        name: 'Thermals / Inners (Upper & Lower)',
        description: 'THE MOST IMPORTANT LAYER. Wear under everything. Buy good quality.',
        critical: true,
      },
      {
        name: 'Woollen Socks (4-5 Pairs)',
        description: 'If socks get wet, your feet freeze. Bring extras.',
        critical: true,
      },
      { name: 'Beanie / Woollen Cap', description: 'Must cover your ears. Heat loss from head is maximum.', critical: true },
      {
        name: 'Gloves (Waterproof)',
        description: 'Leather/Parachute preferred. Wool gloves get wet in snow.',
        critical: true,
      },
      {
        name: 'Muffler / Scarf',
        description: 'To cover nose and neck from icy winds. Essential for -10°C.',
        critical: true,
      },
      {
        name: 'Hiking Boots / Joggers',
        description: 'Good grip essential for Arang Kel. NO flat-sole shoes.',
        critical: true,
      },
      { name: 'Hoodies', description: 'Mid-layer for warmth. Cotton or fleece.' },
      { name: 'Sweatshirts', description: 'Additional layering option' },
      { name: 'Extra Pants / Jeans', description: 'Comfortable for long drives and hiking' },
      { name: 'Casual T-shirts', description: 'Base layer under thermals' },
      { name: 'Undergarments (Sufficient for 12 days)', description: 'Thermal or regular' },
      { name: 'Extra Pair of Shoes', description: 'In case primary shoes get wet or damaged' },
    ],
  },
  {
    title: 'Important Documents & Essentials',
    icon: <FileText className="w-6 h-6 text-primary" />,
    items: [
      {
        name: 'Original CNIC',
        description: 'MANDATORY for checkpoints and hotels. Keep in waterproof pouch.',
        critical: true,
      },
      { name: 'Cash (PKR 3000-10,000)', description: 'For emergencies, snacks, and personal expenses' },
      { name: 'Emergency Contact Numbers', description: 'Written on paper - in case phone dies' },
      { name: 'Medical Prescriptions', description: 'If you take regular medication' },
    ],
  },
  {
    title: 'Backpack & Utilities',
    icon: <Backpack className="w-6 h-6 text-primary" />,
    items: [
      { name: 'Bag', description: 'One bag per person. Pack light.', critical: true },
      { name: 'Backpack', description: 'One bag per person. Pack light.', critical: true },
      { name: 'Water Bottle (1L)', description: 'Reusable bottle - stay hydrated at altitude', critical: true },
      { name: 'Ziplock Bags', description: 'Keep electronics and documents dry' },
      { name: 'Duct Tape (Small Roll)', description: 'Fixes everything - shoes, bags, jackets' },
      { name: 'Multi-tool / Swiss Knife', description: 'Handy for various situations' },
    ],
  },
  {
    title: 'Medical & First Aid',
    icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
    items: [
      {name: 'Fever, Headache, Body Ache, Muscle Fatigue',description:'Panadol / Paracetamol / Brufen / Ponstan', critical: true},
      {name: 'Motion Sickness (Nausea, Vomiting, Winding Roads)',description:'Gravinate / Motilium', critical: true},
      {name: 'Stomach Issues (Diarrhea, Food Poisoning, "Pait Kharab")',description:'Imodium / Flagyl / Eno / Risek', critical: true},
      {name:'Cold, Flu & Throat (Freezing Temperatures)', description:'Arinac / Panadol CF / Rigix / Softin / Strepsils', critical: true},      
      {name:'First Aid & Physical Injury (Cuts, Blisters, Sprains)', description:'Saniplast / Band-Aids / Pyodine / Pain Spray / Crepe Bandage', critical: true},
      {name:'High Altitude & Dehydration (Mandatory Addition)', description:'ORS Sachets / Lip Balm / Vaseline', critical: true},
    ],
  },
  {
    title: 'Electronics & Photography',
    icon: <Mountain className="w-6 h-6 text-primary" />,
    items: [
      { name: 'Smartphone (Fully Charged)', description: 'Your camera, GPS, and communication device' },
      { name: 'Camera (Optional)', description: 'If you prefer dedicated camera over phone' },
      { name: 'Portable Power Bank (20,000mAh)', description: 'High capacity - charging opportunities are limited', critical: true },
      { name: 'Extra Charging Cables', description: 'Cables break - bring backup' },
      { name: 'Waterproof Phone Pouch', description: 'Protect phone from snow and water' },
    ],
  },
];

const Checklist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 animate-fade-up"
            >
              <Backpack className="w-4 h-4" />
              <span>Pack Smart, Travel Light</span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Essential <span className="text-gradient">Checklist</span>
            </h1>

            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Everything you need to pack for our 12-day adventure across Pakistan's mountains and valleys
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-destructive/10 via-destructive/5 to-transparent border border-destructive/20 animate-fade-up">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-bold text-destructive mb-2">⚠️ Critical Weather Warning</h3>
                <p className="text-foreground leading-relaxed mb-2">
                  We'll be traveling through sub-zero temperatures (-10°C to 5°C). Proper winter gear is{' '}
                  <strong>mandatory</strong>, not optional. Exposed skin can get frostbite in minutes.
                </p>
                <p className="text-sm text-muted-foreground">
                  Items marked as <span className="text-destructive font-semibold">CRITICAL</span> are absolutely
                  essential for your safety and comfort. Do not skip these.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {checklistData.map((section, index) => (
              <ChecklistSection
                key={section.title}
                title={section.title}
                icon={section.icon}
                items={section.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Pro Packing Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Layering is Key',
                description:
                  'Wear thermals as base layer, then regular clothes, then hoodie, then jacket. Multiple thin layers trap heat better than one thick layer.',
                icon: '🧥',
              },
              {
                title: 'Keep Docs Safe',
                description:
                  'Original CNIC is mandatory for checkpoints. Keep it in a waterproof ziplock bag along with emergency cash and contacts.',
                icon: '📄',
              },
              {
                title: 'Pack Light, Pack Right',
                description:
                  "We're moving locations every day. If you can't carry it for 30 minutes, it's too heavy.",
                icon: '🎒',
              },
              {
                title: 'Test Your Gear',
                description:
                  'Try on all winter clothes before the trip. Make sure jackets zip properly and boots are broken in. No time for surprises.',
                icon: '✅',
              },
              {
                title: 'Waterproof Everything',
                description:
                  'Use ziplock bags for electronics, documents, and clothes. Snow melts and bags get wet. Water damage ruins trips.',
                icon: '💧',
              },
              {
                title: 'Backup Your Backups',
                description:
                  'Extra phone cable, extra socks, extra power bank. When something breaks at 10,000 ft, there are no shops.',
                icon: '🔄',
              },
            ].map((tip, index) => (
              <div
                key={tip.title}
                className="p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 animate-scale-in border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{tip.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Reminder */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">💪 The 15kg Rule</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your entire backpack should weigh <strong>under 15kg</strong>. We'll be doing hikes and moving daily.
              Heavy bags = miserable trip. When in doubt, leave it out.
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

export default Checklist;
