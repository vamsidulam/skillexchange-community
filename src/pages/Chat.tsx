import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Phone, Video, MoreHorizontal, Send, Paperclip, 
  Smile, Image, Mic
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SkillTag } from '@/components/SkillTag';
import { mockUsers, currentUser, getMatchInfo } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    senderId: '1',
    content: "Hey! I saw you're learning UI/UX Design. I'd love to help you with that!",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: '2',
    senderId: 'current',
    content: "That's amazing! I've been wanting to learn for a while. What would you like to learn in return?",
    timestamp: new Date(Date.now() - 3500000),
  },
  {
    id: '3',
    senderId: '1',
    content: "I noticed you can teach Guitar! I've always wanted to learn. Would you be interested in a skill swap? 🎸",
    timestamp: new Date(Date.now() - 3400000),
  },
  {
    id: '4',
    senderId: 'current',
    content: "That sounds perfect! A true skill swap. When would you like to start?",
    timestamp: new Date(Date.now() - 3300000),
  },
];

export function Chat() {
  const { chatId } = useParams();
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const otherUser = mockUsers.find(u => u.id === chatId) || mockUsers[0];
  const matchInfo = getMatchInfo(otherUser, currentUser);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    const message: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'current',
      content: newMessage,
      timestamp: new Date(),
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="flex-shrink-0 bg-card border-b border-border">
        <div className="flex items-center gap-3 h-16 px-4">
          <Link to="/messages">
            <Button variant="ghost" size="icon-sm">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to={`/user/${otherUser.id}`} className="flex items-center gap-3 flex-1">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={otherUser.avatar} alt={otherUser.name} />
                <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {otherUser.isOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-secondary border-2 border-card" />
              )}
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{otherUser.name}</h2>
              <p className="text-xs text-muted-foreground">
                {otherUser.isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </Link>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon-sm">
              <Phone className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon-sm">
              <Video className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon-sm">
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        </div>
        
        {/* Mutual Skills Banner */}
        {matchInfo.isPerfectSwap && (
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/10">
              <span className="text-sm">🔄</span>
              <span className="text-xs text-secondary font-medium">
                Perfect Swap: They teach {matchInfo.theyCanTeachYou[0]?.name} • You teach {matchInfo.youCanTeachThem[0]?.name}
              </span>
            </div>
          </div>
        )}
      </header>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message, i) => {
          const isMe = message.senderId === 'current';
          const showAvatar = !isMe && (i === 0 || messages[i - 1].senderId !== message.senderId);
          
          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn('flex items-end gap-2', isMe && 'flex-row-reverse')}
            >
              {!isMe && (
                <Avatar className={cn('h-8 w-8', !showAvatar && 'invisible')}>
                  <AvatarImage src={otherUser.avatar} alt={otherUser.name} />
                  <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              
              <div className={cn('max-w-[75%]', isMe && 'items-end')}>
                <div
                  className={cn(
                    'px-4 py-2.5 rounded-2xl',
                    isMe 
                      ? 'bg-primary text-primary-foreground rounded-br-md' 
                      : 'bg-muted text-foreground rounded-bl-md'
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                <p className={cn(
                  'text-xs text-muted-foreground mt-1',
                  isMe && 'text-right'
                )}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </motion.div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="flex-shrink-0 bg-card border-t border-border p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-sm">
            <Paperclip className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="pr-12"
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Smile className="h-5 w-5" />
            </button>
          </div>
          
          <Button 
            variant="default" 
            size="icon"
            onClick={handleSend}
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
