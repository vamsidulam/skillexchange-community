import { User, Skill, SkillCategory } from '@/types';

export const skillIcons: Record<SkillCategory, string> = {
  tech: '💻',
  music: '🎵',
  language: '🌍',
  art: '🎨',
  fitness: '💪',
  cooking: '🍳',
  business: '📊',
  other: '✨',
};

export const allSkills: Skill[] = [
  { id: '1', name: 'React', category: 'tech' },
  { id: '2', name: 'Python', category: 'tech' },
  { id: '3', name: 'JavaScript', category: 'tech' },
  { id: '4', name: 'UI/UX Design', category: 'tech' },
  { id: '5', name: 'Guitar', category: 'music' },
  { id: '6', name: 'Piano', category: 'music' },
  { id: '7', name: 'Singing', category: 'music' },
  { id: '8', name: 'Spanish', category: 'language' },
  { id: '9', name: 'French', category: 'language' },
  { id: '10', name: 'Japanese', category: 'language' },
  { id: '11', name: 'Mandarin', category: 'language' },
  { id: '12', name: 'Photography', category: 'art' },
  { id: '13', name: 'Illustration', category: 'art' },
  { id: '14', name: 'Yoga', category: 'fitness' },
  { id: '15', name: 'Weight Training', category: 'fitness' },
  { id: '16', name: 'Italian Cooking', category: 'cooking' },
  { id: '17', name: 'Baking', category: 'cooking' },
  { id: '18', name: 'Marketing', category: 'business' },
  { id: '19', name: 'Public Speaking', category: 'business' },
  { id: '20', name: 'Meditation', category: 'other' },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sofia Martinez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Product designer by day, guitar enthusiast by night. Love sharing design knowledge and learning new languages!',
    location: { city: 'Barcelona', country: 'Spain', timezone: 'CET' },
    skillsToTeach: [
      { id: '4', name: 'UI/UX Design', category: 'tech', level: 'expert' },
      { id: '8', name: 'Spanish', category: 'language', level: 'expert' },
      { id: '12', name: 'Photography', category: 'art', level: 'intermediate' },
    ],
    skillsToLearn: [
      { id: '5', name: 'Guitar', category: 'music', priority: 1 },
      { id: '10', name: 'Japanese', category: 'language', priority: 2 },
    ],
    isOnline: true,
    isVerified: true,
    rating: 4.9,
    sessionsCompleted: 47,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Full-stack developer passionate about music. Teaching code, learning to play the piano.',
    location: { city: 'San Francisco', country: 'USA', timezone: 'PST' },
    skillsToTeach: [
      { id: '1', name: 'React', category: 'tech', level: 'expert' },
      { id: '2', name: 'Python', category: 'tech', level: 'expert' },
      { id: '11', name: 'Mandarin', category: 'language', level: 'intermediate' },
    ],
    skillsToLearn: [
      { id: '6', name: 'Piano', category: 'music', priority: 1 },
      { id: '4', name: 'UI/UX Design', category: 'tech', priority: 2 },
    ],
    isOnline: true,
    isVerified: true,
    rating: 4.8,
    sessionsCompleted: 63,
  },
  {
    id: '3',
    name: 'Amara Okonkwo',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
    bio: 'Professional pianist and yoga instructor. Balancing creativity with wellness.',
    location: { city: 'London', country: 'UK', timezone: 'GMT' },
    skillsToTeach: [
      { id: '6', name: 'Piano', category: 'music', level: 'expert' },
      { id: '14', name: 'Yoga', category: 'fitness', level: 'expert' },
      { id: '20', name: 'Meditation', category: 'other', level: 'intermediate' },
    ],
    skillsToLearn: [
      { id: '1', name: 'React', category: 'tech', priority: 1 },
      { id: '18', name: 'Marketing', category: 'business', priority: 3 },
    ],
    isOnline: false,
    isVerified: true,
    rating: 5.0,
    sessionsCompleted: 89,
  },
  {
    id: '4',
    name: 'Luca Romano',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Chef and fitness enthusiast from Rome. Cook amazing Italian dishes and stay fit!',
    location: { city: 'Rome', country: 'Italy', timezone: 'CET' },
    skillsToTeach: [
      { id: '16', name: 'Italian Cooking', category: 'cooking', level: 'expert' },
      { id: '15', name: 'Weight Training', category: 'fitness', level: 'intermediate' },
    ],
    skillsToLearn: [
      { id: '3', name: 'JavaScript', category: 'tech', priority: 2 },
      { id: '9', name: 'French', category: 'language', priority: 1 },
    ],
    isOnline: true,
    isVerified: false,
    rating: 4.7,
    sessionsCompleted: 31,
  },
  {
    id: '5',
    name: 'Yuki Tanaka',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Digital artist and Japanese language teacher. Let\'s create beautiful things together!',
    location: { city: 'Tokyo', country: 'Japan', timezone: 'JST' },
    skillsToTeach: [
      { id: '13', name: 'Illustration', category: 'art', level: 'expert' },
      { id: '10', name: 'Japanese', category: 'language', level: 'expert' },
    ],
    skillsToLearn: [
      { id: '8', name: 'Spanish', category: 'language', priority: 1 },
      { id: '19', name: 'Public Speaking', category: 'business', priority: 2 },
    ],
    isOnline: true,
    isVerified: true,
    rating: 4.9,
    sessionsCompleted: 52,
  },
  {
    id: '6',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Marketing specialist who loves baking. Teach you how to grow your brand while making croissants!',
    location: { city: 'Miami', country: 'USA', timezone: 'EST' },
    skillsToTeach: [
      { id: '18', name: 'Marketing', category: 'business', level: 'expert' },
      { id: '17', name: 'Baking', category: 'cooking', level: 'intermediate' },
      { id: '19', name: 'Public Speaking', category: 'business', level: 'expert' },
    ],
    skillsToLearn: [
      { id: '12', name: 'Photography', category: 'art', priority: 1 },
      { id: '7', name: 'Singing', category: 'music', priority: 3 },
    ],
    isOnline: false,
    isVerified: true,
    rating: 4.6,
    sessionsCompleted: 28,
  },
];

// Current user for demo
export const currentUser: User = {
  id: 'current',
  name: 'You',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face',
  bio: 'Eager learner, passionate teacher. Let\'s grow together!',
  location: { city: 'New York', country: 'USA', timezone: 'EST' },
  skillsToTeach: [
    { id: '5', name: 'Guitar', category: 'music', level: 'intermediate' },
    { id: '12', name: 'Photography', category: 'art', level: 'expert' },
  ],
  skillsToLearn: [
    { id: '1', name: 'React', category: 'tech', priority: 1 },
    { id: '8', name: 'Spanish', category: 'language', priority: 2 },
    { id: '16', name: 'Italian Cooking', category: 'cooking', priority: 3 },
  ],
  isOnline: true,
  isVerified: true,
  rating: 4.5,
  sessionsCompleted: 12,
};

export function getMatchInfo(user: User, currentUserData: User = currentUser) {
  const theyCanTeachYou = user.skillsToTeach.filter(skill =>
    currentUserData.skillsToLearn.some(wanted => wanted.id === skill.id)
  );
  
  const youCanTeachThem = currentUserData.skillsToTeach.filter(skill =>
    user.skillsToLearn.some(wanted => wanted.id === skill.id)
  );
  
  const isPerfectSwap = theyCanTeachYou.length > 0 && youCanTeachThem.length > 0;
  
  return {
    type: isPerfectSwap ? 'perfect-swap' : theyCanTeachYou.length > 0 ? 'can-teach' : 'can-learn',
    theyCanTeachYou,
    youCanTeachThem,
    isPerfectSwap,
  };
}
