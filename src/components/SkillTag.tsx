import { cn } from '@/lib/utils';
import { SkillCategory } from '@/types';
import { skillIcons } from '@/data/mockData';

interface SkillTagProps {
  name: string;
  category: SkillCategory;
  level?: 'beginner' | 'intermediate' | 'expert';
  priority?: 1 | 2 | 3;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const categoryStyles: Record<SkillCategory, string> = {
  tech: 'bg-primary/10 text-primary hover:bg-primary/20 border-primary/20',
  music: 'bg-skill-music/10 text-skill-music hover:bg-skill-music/20 border-skill-music/20',
  language: 'bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20',
  art: 'bg-accent/10 text-accent hover:bg-accent/20 border-accent/20',
  fitness: 'bg-skill-fitness/10 text-skill-fitness hover:bg-skill-fitness/20 border-skill-fitness/20',
  cooking: 'bg-skill-cooking/10 text-skill-cooking hover:bg-skill-cooking/20 border-skill-cooking/20',
  business: 'bg-skill-business/10 text-skill-business hover:bg-skill-business/20 border-skill-business/20',
  other: 'bg-skill-other/10 text-skill-other hover:bg-skill-other/20 border-skill-other/20',
};

const levelBadges = {
  beginner: '🌱',
  intermediate: '🌿',
  expert: '🌳',
};

const priorityStars = {
  1: '⭐',
  2: '⭐⭐',
  3: '⭐⭐⭐',
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-3 py-1.5 gap-1.5',
  lg: 'text-base px-4 py-2 gap-2',
};

export function SkillTag({
  name,
  category,
  level,
  priority,
  size = 'md',
  showIcon = true,
  className,
}: SkillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-all duration-200 border',
        categoryStyles[category],
        sizeStyles[size],
        className
      )}
    >
      {showIcon && <span>{skillIcons[category]}</span>}
      <span>{name}</span>
      {level && <span className="opacity-70 ml-0.5">{levelBadges[level]}</span>}
      {priority && <span className="opacity-70 ml-0.5 text-xs">{priorityStars[priority]}</span>}
    </span>
  );
}
