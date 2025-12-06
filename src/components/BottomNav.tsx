import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, MessageCircle, User, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/discover', icon: Compass, label: 'Discover' },
  { path: '/messages', icon: MessageCircle, label: 'Messages' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={path}
              to={path}
              className="relative flex flex-col items-center gap-1 py-2 px-4 group"
            >
              <div className="relative">
                <Icon 
                  className={cn(
                    'h-6 w-6 transition-colors duration-200',
                    isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                  )}
                />
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </div>
              <span 
                className={cn(
                  'text-xs font-medium transition-colors duration-200',
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
