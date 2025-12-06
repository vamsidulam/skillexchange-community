import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, GraduationCap, Users, Search, Filter } from 'lucide-react';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { UserCard } from '@/components/UserCard';
import { mockUsers, currentUser, getMatchInfo } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TabType = 'swap' | 'teachers' | 'learners';

const tabs = [
  { id: 'swap' as TabType, label: 'Swap Matches', icon: RefreshCw, color: 'text-secondary' },
  { id: 'teachers' as TabType, label: 'Can Teach You', icon: GraduationCap, color: 'text-primary' },
  { id: 'learners' as TabType, label: 'You Can Help', icon: Users, color: 'text-accent' },
];

export function Discover() {
  const [activeTab, setActiveTab] = useState<TabType>('swap');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredUsers = mockUsers.filter(user => {
    const matchInfo = getMatchInfo(user, currentUser);
    
    // Filter by tab
    if (activeTab === 'swap' && !matchInfo.isPerfectSwap) return false;
    if (activeTab === 'teachers' && matchInfo.theyCanTeachYou.length === 0) return false;
    if (activeTab === 'learners' && matchInfo.youCanTeachThem.length === 0) return false;
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = user.name.toLowerCase().includes(query);
      const matchesSkill = [...user.skillsToTeach, ...user.skillsToLearn]
        .some(skill => skill.name.toLowerCase().includes(query));
      const matchesLocation = `${user.location.city} ${user.location.country}`
        .toLowerCase().includes(query);
      
      return matchesName || matchesSkill || matchesLocation;
    }
    
    return true;
  });
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Discover" />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search skills, people, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200',
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredUsers.length} {filteredUsers.length === 1 ? 'person' : 'people'} found
          </p>
        </div>
        
        {/* Users Grid */}
        {filteredUsers.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredUsers.map((user, i) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <UserCard user={user} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No matches found</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Try adjusting your search or explore different skill categories.
            </p>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}
