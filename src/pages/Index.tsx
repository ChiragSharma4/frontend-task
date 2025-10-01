import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Code2, Database, Lock, Zap } from 'lucide-react';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Full-Stack Task Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            A scalable web application with authentication, CRUD operations, and modern UI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6"
              onClick={() => navigate('/auth')}
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 animate-in fade-in duration-1000 delay-500">
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-primary" />}
              title="Secure Authentication"
              description="JWT-based auth with email/password"
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-accent" />}
              title="PostgreSQL Database"
              description="Scalable data storage with RLS"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Real-time CRUD"
              description="Create, read, update & delete tasks"
            />
            <FeatureCard
              icon={<Code2 className="h-8 w-8 text-accent" />}
              title="Modern Stack"
              description="React, TypeScript & Tailwind CSS"
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
              title="Search & Filter"
              description="Advanced task filtering options"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-accent" />}
              title="Responsive Design"
              description="Works on all devices"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Index;
