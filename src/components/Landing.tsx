import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MessageCircle, Video, Sparkles, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-illustration.png';

const features = [
  {
    icon: Users,
    title: 'Smart Matching',
    description: 'Find people who know what you want to learn, and want to learn what you know.',
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat',
    description: 'Connect instantly with learners and teachers through our seamless messaging.',
  },
  {
    icon: Video,
    title: 'Video Sessions',
    description: 'Learn face-to-face with high-quality audio and video calls.',
  },
];

const stats = [
  { value: '50K+', label: 'Learners' },
  { value: '200+', label: 'Skills' },
  { value: '100K+', label: 'Sessions' },
  { value: '95%', label: 'Satisfaction' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Landing() {
  return (
    <div className="min-h-screen bg-hero-pattern">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl text-foreground">SkillSwap</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/register">
              <Button variant="default" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Exchange knowledge. Grow together.
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight"
            >
              Learn Any Skill.{' '}
              <span className="gradient-text">Teach Your Own.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Join a global community where everyone is both a mentor and a learner. 
              Swap skills, make friends, and grow together.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button variant="hero" size="xl" className="group">
                  Start Learning Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/discover">
                <Button variant="hero-secondary" size="xl">
                  <Globe className="h-5 w-5" />
                  Explore Skills
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
            <img 
              src={heroImage} 
              alt="SkillSwap - Connect and learn together" 
              className="relative rounded-3xl shadow-2xl border border-border/50"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 px-4 border-y border-border bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Learn & Teach
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Powerful features designed to make skill sharing simple, fun, and effective.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center"
          >
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
            <div className="relative">
              <Heart className="h-12 w-12 text-primary-foreground/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                Join thousands of learners and teachers who are growing together. 
                It's free to start!
              </p>
              <Link to="/register">
                <Button variant="secondary" size="xl" className="shadow-lg">
                  Create Free Account
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">S</span>
            </div>
            <span className="font-semibold text-foreground">SkillSwap</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SkillSwap. Exchange knowledge. Grow together.
          </p>
        </div>
      </footer>
    </div>
  );
}
