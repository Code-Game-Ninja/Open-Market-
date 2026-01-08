import Link from 'next/link';
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Monitor, 
  Gamepad2, 
  Shield, 
  Wrench, 
  BrainCircuit, 
  Layers,
  LayoutGrid,
  ArrowRight,
  DollarSign,
  MessageSquare,
  Film,
  CheckCircle2
} from 'lucide-react';

const categories = [
  { 
    id: 'web-apps', 
    name: 'Web Apps', 
    icon: Code2, 
    description: 'Applications that run smoothly in your modern web browser',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  { 
    id: 'cli-tools', 
    name: 'CLI Tools', 
    icon: Terminal, 
    description: 'Powerful command line utilities and developer instruments',
    color: 'text-slate-500',
    bgColor: 'bg-slate-500/10'
  },
  { 
    id: 'android', 
    name: 'Mobile', 
    icon: Smartphone, 
    description: 'Native applications designed for Android and iOS devices',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  { 
    id: 'desktop', 
    name: 'Desktop', 
    icon: Monitor, 
    description: 'Robust native software for Windows, macOS, and Linux',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  { 
    id: 'games', 
    name: 'Games', 
    icon: Gamepad2, 
    description: 'Entertaining open source games and recreational software',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  { 
    id: 'security', 
    name: 'Security', 
    icon: Shield, 
    description: 'Privacy-focused tools to protect your digital life',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10'
  },
  { 
    id: 'developer-tools', 
    name: 'Dev Tools', 
    icon: Wrench, 
    description: 'Essential utilities to help you build better software',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10'
  },
  { 
    id: 'ai-ml', 
    name: 'AI & ML', 
    icon: BrainCircuit, 
    description: 'Cutting-edge Artificial Intelligence and Machine Learning',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  },
  { 
    id: 'productivity', 
    name: 'Productivity', 
    icon: CheckCircle2, 
    description: 'Tools to boost your efficiency and organize your workflow',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  { 
    id: 'media', 
    name: 'Media', 
    icon: Film, 
    description: 'Video, audio, and multimedia creation tools',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10'
  },
  { 
    id: 'communication', 
    name: 'Communication', 
    icon: MessageSquare, 
    description: 'Chat, messaging, and collaboration platforms',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10'
  },
  { 
    id: 'finance', 
    name: 'Finance', 
    icon: DollarSign, 
    description: 'Personal finance, budgeting, and expense tracking tools',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  { 
    id: 'utilities', 
    name: 'Utilities', 
    icon: Layers, 
    description: 'General purpose productivity boosters & system tools',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
        
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <LayoutGrid className="h-4 w-4" />
              Explore Collections
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              Browse by Category
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover the perfect open source solution for your needs. 
              Our curated collection spans from developer tools to entertainment.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/apps?category=${category.id}`}
              className="group relative overflow-hidden glass-card rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${category.bgColor} ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity -mr-2">
                    <div className="p-2 rounded-full bg-muted text-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative gradient blob */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${category.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
