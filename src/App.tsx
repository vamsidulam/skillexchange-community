import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { AuthForm } from "./components/AuthForm";
import { Discover } from "./pages/Discover";
import { ProfileView } from "./pages/ProfileView";
import { MyProfile } from "./pages/MyProfile";
import { Messages } from "./pages/Messages";
import { Chat } from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthForm mode="login" />} />
          <Route path="/register" element={<AuthForm mode="register" />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/user/:userId" element={<ProfileView />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
