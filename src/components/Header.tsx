import { Link } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { currentUser } from '@/data/mockData';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showProfile?: boolean;
}

export function Header({ title = 'SkillSwap', showProfile = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl text-foreground">{title}</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-sm" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
          </Button>
          
          {showProfile && (
            <Link to="/profile">
              <Avatar className="h-8 w-8 ring-2 ring-border hover:ring-primary transition-colors">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
