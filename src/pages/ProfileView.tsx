import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, MessageCircle, Phone, Video, CheckCircle2, 
  ArrowLeft, MoreHorizontal, Flag, UserX, Share2
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SkillTag } from '@/components/SkillTag';
import { mockUsers, currentUser, getMatchInfo } from '@/data/mockData';
import { BottomNav } from '@/components/BottomNav';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ProfileView() {
  const { userId } = useParams();
  const user = mockUsers.find(u => u.id === userId) || mockUsers[0];
  const matchInfo = getMatchInfo(user, currentUser);
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to="/discover">
            <Button variant="ghost" size="icon-sm">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Flag className="h-4 w-4 mr-2" />
                Report User
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <UserX className="h-4 w-4 mr-2" />
                Block User
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Profile Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block mb-4">
            <Avatar className="h-28 w-28 ring-4 ring-border">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-3xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {user.isOnline && (
              <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
            )}
            {matchInfo.isPerfectSwap && (
              <div className="absolute -top-2 -right-2">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-secondary-foreground text-lg shadow-md">
                  🔄
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
            {user.isVerified && <CheckCircle2 className="h-5 w-5 text-primary" />}
          </div>
          
          <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>{user.location.city}, {user.location.country}</span>
            <span className="mx-1">•</span>
            <span>{user.location.timezone}</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="font-semibold">{user.rating}</span>
              <span className="text-muted-foreground">rating</span>
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">{user.sessionsCompleted}</span> sessions
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
          <p className="text-muted-foreground leading-relaxed">{user.bio}</p>
        </motion.div>
        
        {/* Match Info */}
        {(matchInfo.theyCanTeachYou.length > 0 || matchInfo.youCanTeachThem.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl border border-border p-5 mb-6"
          >
            <h3 className="font-semibold text-foreground mb-4">Your Match</h3>
            
            {matchInfo.theyCanTeachYou.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-secondary mb-2">They can teach you:</p>
                <div className="flex flex-wrap gap-2">
                  {matchInfo.theyCanTeachYou.map(skill => (
                    <SkillTag key={skill.id} name={skill.name} category={skill.category} />
                  ))}
                </div>
              </div>
            )}
            
            {matchInfo.youCanTeachThem.length > 0 && (
              <div>
                <p className="text-sm font-medium text-primary mb-2">You can teach them:</p>
                <div className="flex flex-wrap gap-2">
                  {matchInfo.youCanTeachThem.map(skill => (
                    <SkillTag key={skill.id} name={skill.name} category={skill.category} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
        
        {/* Skills I Can Teach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl border border-border p-5 mb-6"
        >
          <h3 className="font-semibold text-foreground mb-4">Skills I Teach</h3>
          <div className="flex flex-wrap gap-2">
            {user.skillsToTeach.map(skill => (
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
          transition={{ delay: 0.25 }}
          className="bg-card rounded-2xl border border-border p-5 mb-6"
        >
          <h3 className="font-semibold text-foreground mb-4">Skills I Want to Learn</h3>
          <div className="flex flex-wrap gap-2">
            {user.skillsToLearn.map(skill => (
              <SkillTag 
                key={skill.id} 
                name={skill.name} 
                category={skill.category}
                priority={skill.priority}
              />
            ))}
          </div>
        </motion.div>
      </main>
      
      {/* Action Buttons */}
      <div className="fixed bottom-20 left-0 right-0 z-30 px-4 pb-4">
        <div className="max-w-2xl mx-auto flex gap-3">
          <Button variant="outline" size="lg" className="flex-1">
            <Phone className="h-5 w-5" />
            Audio
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            <Video className="h-5 w-5" />
            Video
          </Button>
          <Button variant="hero" size="lg" className="flex-[2]">
            <MessageCircle className="h-5 w-5" />
            Message
          </Button>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}
