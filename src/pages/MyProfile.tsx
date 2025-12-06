import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Camera, MapPin, Star, Edit2, Plus, X, Check,
  ChevronRight, LogOut
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SkillTag } from '@/components/SkillTag';
import { currentUser, allSkills } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(currentUser.bio);
  const { toast } = useToast();
  
  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: 'Profile updated',
      description: 'Your changes have been saved.',
    });
  };
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Profile" />
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block mb-4">
            <Avatar className="h-28 w-28 ring-4 ring-border">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback className="text-3xl">{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-1">{currentUser.name}</h1>
          
          <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span>{currentUser.location.city}, {currentUser.location.country}</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-foreground text-lg">{currentUser.sessionsCompleted}</div>
              <div className="text-muted-foreground text-xs">Sessions</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="flex items-center gap-1 font-bold text-foreground text-lg">
                <Star className="h-4 w-4 text-accent fill-accent" />
                {currentUser.rating}
              </div>
              <div className="text-muted-foreground text-xs">Rating</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="font-bold text-foreground text-lg">
                {currentUser.skillsToTeach.length + currentUser.skillsToLearn.length}
              </div>
              <div className="text-muted-foreground text-xs">Skills</div>
            </div>
          </div>
        </motion.div>
        
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl border border-border p-5 mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">About Me</h3>
            <Button 
              variant="ghost" 
              size="icon-sm"
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? <Check className="h-4 w-4 text-secondary" /> : <Edit2 className="h-4 w-4" />}
            </Button>
          </div>
          
          {isEditing ? (
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="resize-none"
              rows={3}
            />
          ) : (
            <p className="text-muted-foreground">{bio}</p>
          )}
        </motion.div>
        
        {/* Skills I Teach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-2xl border border-border p-5 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Skills I Teach</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentUser.skillsToTeach.map(skill => (
              <SkillTag 
                key={skill.id} 
                name={skill.name} 
                category={skill.category}
                level={skill.level}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Skills I Want to Learn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl border border-border p-5 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Skills I Want to Learn</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentUser.skillsToLearn.map(skill => (
              <SkillTag 
                key={skill.id} 
                name={skill.name} 
                category={skill.category}
                priority={skill.priority}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Settings Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-card rounded-2xl border border-border overflow-hidden"
        >
          <button className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Settings</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="h-px bg-border" />
          
          <Link to="/">
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-destructive">
              <div className="flex items-center gap-3">
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Log out</span>
              </div>
              <ChevronRight className="h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </main>
      
      <BottomNav />
    </div>
  );
}
