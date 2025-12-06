export type SkillCategory = 
  | 'tech' 
  | 'music' 
  | 'language' 
  | 'art' 
  | 'fitness' 
  | 'cooking' 
  | 'business' 
  | 'other';

export type SkillLevel = 'beginner' | 'intermediate' | 'expert';

export type PriorityLevel = 1 | 2 | 3;

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
}

export interface UserSkill extends Skill {
  level: SkillLevel;
}

export interface WantedSkill extends Skill {
  priority: PriorityLevel;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  skillsToTeach: UserSkill[];
  skillsToLearn: WantedSkill[];
  isOnline: boolean;
  isVerified: boolean;
  rating: number;
  sessionsCompleted: number;
}

export interface MatchType {
  type: 'perfect-swap' | 'can-teach' | 'can-learn';
  theyCanTeachYou: Skill[];
  youCanTeachThem: Skill[];
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'file' | 'call-started' | 'call-ended';
}

export interface Conversation {
  id: string;
  participants: User[];
  messages: Message[];
  lastMessage?: Message;
  mutualSkills: {
    theyTeach: Skill[];
    youTeach: Skill[];
  };
}
