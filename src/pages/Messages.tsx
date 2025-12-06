import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { mockUsers, getMatchInfo, currentUser } from '@/data/mockData';
import { cn } from '@/lib/utils';

const conversations = mockUsers.slice(0, 4).map((user, i) => ({
  id: user.id,
  user,
  lastMessage: [
    "That sounds perfect! When would you like to start?",
    "Thanks for the lesson! 🎸",
    "I can teach you the basics tomorrow",
    "Let me know when you're free!",
  ][i],
  timestamp: new Date(Date.now() - i * 3600000),
  unread: i === 0 ? 2 : 0,
}));

export function Messages() {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Messages" />
      
      <main className="max-w-2xl mx-auto px-4 py-4">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-10"
          />
        </div>
        
        {/* Conversation List */}
        <div className="space-y-1">
          {conversations.map((convo, i) => {
            const matchInfo = getMatchInfo(convo.user, currentUser);
            
            return (
              <motion.div
                key={convo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/chat/${convo.id}`}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors',
                    convo.unread > 0 && 'bg-primary/5'
                  )}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={convo.user.avatar} alt={convo.user.name} />
                      <AvatarFallback>{convo.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {convo.user.isOnline && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-secondary border-2 border-background" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className={cn(
                        'font-medium text-foreground truncate',
                        convo.unread > 0 && 'font-semibold'
                      )}>
                        {convo.user.name}
                      </h3>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        {formatTime(convo.timestamp)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <p className={cn(
                        'text-sm truncate flex-1',
                        convo.unread > 0 ? 'text-foreground font-medium' : 'text-muted-foreground'
                      )}>
                        {convo.lastMessage}
                      </p>
                      {convo.unread > 0 && (
                        <span className="flex-shrink-0 h-5 min-w-5 px-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                          {convo.unread}
                        </span>
                      )}
                    </div>
                    
                    {matchInfo.isPerfectSwap && (
                      <span className="inline-flex items-center gap-1 text-xs text-secondary mt-1">
                        🔄 Swap Match
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        {conversations.length === 0 && (
          <div className="text-center py-16">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No messages yet</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Start connecting with skill swappers to begin chatting!
            </p>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}
