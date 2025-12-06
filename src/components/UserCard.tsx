import { motion } from 'framer-motion';
import { MapPin, Star, MessageCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { User } from '@/types';
import { SkillTag } from './SkillTag';
import { getMatchInfo, currentUser } from '@/data/mockData';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface UserCardProps {
  user: User;
  onClick?: () => void;
  className?: string;
}

export function UserCard({ user, onClick, className }: UserCardProps) {
  const matchInfo = getMatchInfo(user, currentUser);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group relative bg-card rounded-2xl border border-border p-5 cursor-pointer',
        'shadow-card hover:shadow-lg transition-all duration-300',
        className
      )}
      onClick={onClick}
    >
      {/* Match Badge */}
      {matchInfo.isPerfectSwap && (
        <div className="absolute -top-2 -right-2 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-secondary text-secondary-foreground shadow-md">
            🔄 Perfect Swap
          </span>
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <Avatar className="h-14 w-14 ring-2 ring-border">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {user.isOnline && (
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-secondary border-2 border-card" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground truncate">{user.name}</h3>
            {user.isVerified && (
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
            <MapPin className="h-3.5 w-3.5" />
            <span>{user.location.city}, {user.location.country}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-accent fill-accent" />
              <span className="text-sm font-medium">{user.rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">• {user.sessionsCompleted} sessions</span>
          </div>
        </div>
      </div>
      
      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{user.bio}</p>
      
      {/* Match Skills */}
      {matchInfo.theyCanTeachYou.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-medium text-secondary mb-2">Can teach you:</p>
          <div className="flex flex-wrap gap-1.5">
            {matchInfo.theyCanTeachYou.map(skill => (
              <SkillTag key={skill.id} name={skill.name} category={skill.category} size="sm" />
            ))}
          </div>
        </div>
      )}
      
      {matchInfo.youCanTeachThem.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-medium text-primary mb-2">You can teach:</p>
          <div className="flex flex-wrap gap-1.5">
            {matchInfo.youCanTeachThem.map(skill => (
              <SkillTag key={skill.id} name={skill.name} category={skill.category} size="sm" />
            ))}
          </div>
        </div>
      )}
      
      {/* Action Button */}
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <MessageCircle className="h-4 w-4" />
        Connect
      </Button>
    </motion.div>
  );
}
