import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, MessageCircle, TrendingUp, Calendar, Users, Settings, Heart, Mic, Send, Phone, Video, ChevronRight, Bell, User, Award, Target, Activity, Moon, Sun, Shield, HelpCircle, LogOut, Plus, MapPin, Clock, Star, CheckCircle, AlertCircle, Zap, Filter, Search, Sparkles, ArrowLeft } from 'lucide-react';

// TypeScript types
type Screen = 'onboarding' | 'setup' | 'home' | 'chat' | 'voice' | 'activities' | 'wellness' | 'settings';

interface UserProfile {
  name: string;
  streak: number;
  activitiesCompleted: number;
  conversationMinutes: number;
}

interface Conversation {
  id: number;
  text: string;
  time: string;
  sender: 'user' | 'echo';
}

interface Activity {
  id: number;
  title: string;
  location: string;
  time: string;
  attendees: number;
  category: string;
  interest: string;
}

interface WellnessData {
  moodScore: number;
  sleepHours: number;
  stepCount: number;
  heartRate: number;
  socialInteractions: number;
}

const EchoApp: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Alex',
    streak: 7,
    activitiesCompleted: 12,
    conversationMinutes: 145
  });

  const [conversations, setConversations] = useState<Conversation[]>([
    { id: 1, text: "I've been feeling lonely lately...", time: '2 min ago', sender: 'user' },
    { id: 2, text: "I hear you, Alex. Loneliness can be really challenging. Would you like to talk about what's been going on?", time: '2 min ago', sender: 'echo' },
    { id: 3, text: "I just moved to a new city and don't know anyone here.", time: '1 min ago', sender: 'user' },
    { id: 4, text: "Moving to a new place is a big transition. It's completely normal to feel this way. I've found some local meetup groups that match your interests. Would you like to explore them together?", time: 'Just now', sender: 'echo' }
  ]);

  const [activities] = useState<Activity[]>([
    { id: 1, title: 'Coffee Meetup - Book Lovers', location: 'Downtown Cafe', time: 'Tomorrow, 3 PM', attendees: 8, category: 'Social', interest: 'reading' },
    { id: 2, title: 'Hiking Group', location: 'Mountain Trail', time: 'Saturday, 8 AM', attendees: 12, category: 'Fitness', interest: 'outdoor' },
    { id: 3, title: 'Board Game Night', location: 'Game Cafe', time: 'Friday, 7 PM', attendees: 15, category: 'Entertainment', interest: 'games' },
    { id: 4, title: 'Volunteer at Animal Shelter', location: 'Local Shelter', time: 'Sunday, 10 AM', attendees: 6, category: 'Volunteering', interest: 'animals' }
  ]);

  const [wellnessData] = useState<WellnessData>({
    moodScore: 7.2,
    sleepHours: 7.5,
    stepCount: 8420,
    heartRate: 72,
    socialInteractions: 3
  });

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (currentScreen === 'chat' && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversations, currentScreen]);

  // Handle sending messages
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Conversation = {
        id: conversations.length + 1,
        text: message,
        time: 'Just now',
        sender: 'user'
      };
      setConversations([...conversations, newMessage]);
      setMessage('');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const OnboardingScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="bg-slate-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 p-6 md:p-8 max-w-md w-full text-center relative z-10 transform transition-all duration-300">
        <div className="mb-6 animate-fade-in">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-700 via-slate-700 to-slate-900 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg border-2 border-amber-500/30 transform hover:scale-110 transition-transform duration-300">
            <Heart className="w-12 h-12 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-blue-400 to-amber-500 mb-2 tracking-tight">
            Echo
          </h1>
          <p className="text-slate-300 text-base">Your companion for meaningful connections</p>
        </div>
        
        <div className="space-y-4 mb-8 text-left">
          <div className="flex items-start group hover:bg-slate-700/50 p-3 rounded-xl transition-all duration-200 border border-slate-700/30">
            <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-slate-100 text-base">Empathetic Conversations</h3>
              <p className="text-sm text-slate-400 mt-1">AI-powered support that truly understands</p>
            </div>
          </div>
          <div className="flex items-start group hover:bg-slate-700/50 p-3 rounded-xl transition-all duration-200 border border-slate-700/30">
            <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-slate-100 text-base">Real Connections</h3>
              <p className="text-sm text-slate-400 mt-1">Discover activities and meet new people</p>
            </div>
          </div>
          <div className="flex items-start group hover:bg-slate-700/50 p-3 rounded-xl transition-all duration-200 border border-slate-700/30">
            <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-slate-100 text-base">Holistic Wellness</h3>
              <p className="text-sm text-slate-400 mt-1">Track your emotional and physical health</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setCurrentScreen('setup')}
          className="w-full bg-gradient-to-r from-blue-700 to-slate-700 hover:from-blue-600 hover:to-slate-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group border border-amber-500/20"
        >
          <span className="relative z-10 flex items-center justify-center">
            Get Started
            <Sparkles className="w-5 h-5 ml-2 text-amber-400 group-hover:rotate-12 transition-transform" />
          </span>
        </button>
        
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          Echo is a companion, not a replacement for professional care
        </p>
      </div>
    </div>
  );

  const SetupScreen = () => {
    const [step, setStep] = useState(1);
    const [setupData, setSetupData] = useState<{
      name: string;
      interests: string[];
      goals: string[];
    }>({
      name: '',
      interests: [],
      goals: []
    });

    const interests = ['Reading', 'Fitness', 'Gaming', 'Cooking', 'Music', 'Art', 'Outdoor', 'Tech', 'Animals', 'Sports'];
    const goals = ['Make new friends', 'Join activities', 'Improve wellbeing', 'Build confidence', 'Stay active'];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 md:p-6">
        <div className="bg-slate-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 p-6 md:p-8 max-w-md w-full transform transition-all duration-300">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
                Let's get to know you
              </h2>
              <span className="text-sm font-medium text-amber-400 bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full">
                Step {step}/3
              </span>
            </div>
            <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-amber-500 h-3 rounded-full transition-all duration-500 ease-out shadow-sm" 
                style={{width: `${(step/3)*100}%`}}
              ></div>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  What should we call you?
                </label>
                <input
                  type="text"
                  value={setupData.name}
                  onChange={(e) => setSetupData({...setupData, name: e.target.value})}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-slate-700/50 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-base text-slate-100 placeholder-slate-500"
                  autoFocus
                />
              </div>
              <div className="flex items-start space-x-2 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                <Sparkles className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">This helps Echo personalize your experience</p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3">
                  What are you interested in?
                </label>
                <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => {
                        const newInterests = setupData.interests.includes(interest)
                          ? setupData.interests.filter(i => i !== interest)
                          : [...setupData.interests, interest];
                        setSetupData({...setupData, interests: newInterests});
                      }}
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                        setupData.interests.includes(interest)
                          ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-lg border border-amber-500/30'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:shadow-md border border-slate-600'
                      }`}
                    >
                      {setupData.interests.includes(interest) && (
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                      )}
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-2 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                <Sparkles className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">Select all that apply (you can change these later)</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3">
                  What are your goals with Echo?
                </label>
                <div className="space-y-2">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => {
                        const newGoals = setupData.goals.includes(goal)
                          ? setupData.goals.filter(g => g !== goal)
                          : [...setupData.goals, goal];
                        setSetupData({...setupData, goals: newGoals});
                      }}
                      className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 flex items-center justify-between transform hover:scale-[1.02] active:scale-100 ${
                        setupData.goals.includes(goal)
                          ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-lg border border-amber-500/30'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:shadow-md border-2 border-slate-600 hover:border-amber-500/30'
                      }`}
                    >
                      <span>{goal}</span>
                      {setupData.goals.includes(goal) && (
                        <CheckCircle className="w-5 h-5 animate-scale-in" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
            )}
            <button
              onClick={() => {
                if (step < 3) setStep(step + 1);
                else {
                  if (setupData.name && setupData.interests.length > 0) {
                    setCurrentScreen('home');
                  }
                }
              }}
              disabled={step === 1 && !setupData.name}
              className={`flex-1 px-6 py-3 bg-gradient-to-r from-blue-700 to-slate-700 hover:from-blue-600 hover:to-slate-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center border border-amber-500/20 ${
                step === 1 && !setupData.name ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {step === 3 ? (
                <>
                  Complete Setup
                  <CheckCircle className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const HomeScreen = () => (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'} pb-24 transition-colors duration-300`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-slate-800/95 backdrop-blur-lg' : 'bg-slate-800/95 backdrop-blur-lg'} shadow-sm sticky top-0 z-10 border-b ${darkMode ? 'border-slate-700' : 'border-slate-700'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-700 via-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-lg border border-amber-500/30 transform hover:scale-110 transition-transform duration-200">
                <Heart className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>
                  Welcome back, {userProfile.name}! 👋
                </h1>
                <p className={`text-sm flex items-center ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                  <span className="mr-1">🔥</span>
                  {userProfile.streak} day streak
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200 relative`}>
                <Bell className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}
              >
                <Menu className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border backdrop-blur-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-medium uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-400'} mb-1`}>
                  Conversation Time
                </p>
                <p className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>
                  {userProfile.conversationMinutes}
                  <span className="text-lg text-slate-500 ml-1">m</span>
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-900/40 border border-blue-700/30 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border backdrop-blur-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-medium uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-400'} mb-1`}>
                  Activities Joined
                </p>
                <p className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>
                  {userProfile.activitiesCompleted}
                </p>
              </div>
              <div className="w-12 h-12 bg-amber-900/40 border border-amber-700/30 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border backdrop-blur-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-medium uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-400'} mb-1`}>
                  Mood Score
                </p>
                <p className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>
                  {wellnessData.moodScore}
                  <span className="text-lg text-slate-500 ml-1">/10</span>
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-900/40 border border-emerald-700/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}>
          <h2 className={`text-lg font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'} mb-4 flex items-center`}>
            <Sparkles className="w-5 h-5 mr-2 text-amber-400" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button 
              onClick={() => setCurrentScreen('chat')}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-br from-blue-700 to-slate-700 border border-amber-500/20 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              <MessageCircle className="w-8 h-8 mb-2 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium">Chat</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('voice')}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-br from-slate-700 to-blue-800 border border-amber-500/20 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              <Phone className="w-8 h-8 mb-2 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium">Voice</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('activities')}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-br from-emerald-800 to-slate-700 border border-amber-500/20 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              <Calendar className="w-8 h-8 mb-2 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium">Activities</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('wellness')}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-br from-amber-700 to-slate-700 border border-amber-500/20 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              <Activity className="w-8 h-8 mb-2 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium">Wellness</span>
            </button>
          </div>
        </div>

        {/* Recommended Activities */}
        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'} flex items-center`}>
              <Star className="w-5 h-5 mr-2 text-amber-400 fill-amber-400" />
              Recommended for You
            </h2>
            <button 
              onClick={() => setCurrentScreen('activities')}
              className="text-amber-400 text-sm font-medium hover:underline flex items-center group"
            >
              View All
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="space-y-3">
            {activities.slice(0, 3).map((activity) => (
              <div 
                key={activity.id} 
                className={`${darkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-700/50 border-slate-600'} rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border backdrop-blur-sm`}
                onClick={() => setCurrentScreen('activities')}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-900/40 text-blue-300 border border-blue-700/30 text-xs font-medium rounded-full">
                        {activity.category}
                      </span>
                    </div>
                    <h3 className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-100'} mb-2`}>
                      {activity.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {activity.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {activity.attendees}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${darkMode ? 'text-slate-400' : 'text-slate-400'} ml-2`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav currentScreen="home" setCurrentScreen={setCurrentScreen} darkMode={darkMode} />
    </div>
  );

  const ChatScreen = () => (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'} pb-24 transition-colors duration-300`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-slate-800/95 backdrop-blur-lg' : 'bg-slate-800/95 backdrop-blur-lg'} shadow-sm sticky top-0 z-10 border-b ${darkMode ? 'border-slate-700' : 'border-slate-700'}`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setCurrentScreen('home')} 
                className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}
              >
                <ArrowLeft className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
              </button>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-700 via-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-lg border border-amber-500/30">
                <Heart className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h1 className={`font-bold text-lg ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>Echo</h1>
                <p className="text-xs text-emerald-400 flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentScreen('voice')} 
                className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}
              >
                <Phone className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
              </button>
              <button className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}>
                <Video className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4 pb-32">
        {conversations.map((conv) => (
          <div 
            key={conv.id} 
            className={`flex ${conv.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`max-w-[85%] sm:max-w-[75%] ${
              conv.sender === 'user' 
                ? 'bg-gradient-to-r from-blue-700 to-slate-700 border border-amber-500/30 text-white rounded-2xl rounded-tr-sm' 
                : darkMode 
                  ? 'bg-slate-800 text-white border border-slate-700 rounded-2xl rounded-tl-sm' 
                  : 'bg-slate-800 text-white border border-slate-700 rounded-2xl rounded-tl-sm'
            } px-4 py-3 shadow-lg`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{conv.text}</p>
              <p className={`text-xs mt-2 ${conv.sender === 'user' ? 'text-slate-300' : 'text-slate-400'}`}>
                {conv.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
        
        {/* Suggested Actions */}
        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-4 shadow-lg border backdrop-blur-sm`}>
          <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-300'} mb-3 flex items-center`}>
            <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
            Echo suggests:
          </p>
          <div className="space-y-2">
            {[
              { icon: '📚', text: 'Explore book clubs in your area' },
              { icon: '🎯', text: 'Set a goal for this week' },
              { icon: '💭', text: 'Talk about how you\'re feeling' }
            ].map((suggestion, idx) => (
              <button 
                key={idx}
                className={`w-full text-left px-4 py-3 ${darkMode ? 'bg-slate-700/50 hover:bg-slate-600' : 'bg-slate-700/50 hover:bg-slate-600'} rounded-xl text-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-100 border border-slate-600 hover:border-amber-500/30 text-slate-200`}
              >
                <span className="mr-2">{suggestion.icon}</span>
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>

        {/* Crisis Support */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-700/50 rounded-xl p-4 shadow-md backdrop-blur-sm">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-300 text-sm mb-1">Need immediate support?</h3>
              <p className="text-xs text-red-200 mb-2">
                If you're in crisis, please contact: <span className="font-bold">988 (Suicide & Crisis Lifeline)</span>
              </p>
              <button className="text-xs text-red-400 underline font-medium hover:text-red-300">
                View all crisis resources →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-slate-800/95 backdrop-blur-lg' : 'bg-slate-800/95 backdrop-blur-lg'} border-t ${darkMode ? 'border-slate-700' : 'border-slate-700'} px-4 py-3 shadow-2xl`}>
        <div className="max-w-4xl mx-auto flex items-center space-x-3">
          <button 
            onClick={() => setIsListening(!isListening)}
            className={`p-3 rounded-full ${isListening ? 'bg-red-600 animate-pulse ring-4 ring-red-900/50' : 'bg-gradient-to-r from-blue-700 to-slate-700 hover:shadow-lg border border-amber-500/20'} text-white shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95`}
          >
            <Mic className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className={`flex-1 px-4 py-3 ${darkMode ? 'bg-slate-700 text-white placeholder-slate-400' : 'bg-slate-700 text-white placeholder-slate-400'} rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 text-base`}
          />
          <button 
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className={`p-3 rounded-full bg-gradient-to-r from-blue-700 to-slate-700 text-white shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95 border border-amber-500/20 ${
              !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const VoiceCallScreen = () => {
    const [callDuration, setCallDuration] = useState(0);
    const [isCallActive, setIsCallActive] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
      if (isCallActive) {
        const interval = setInterval(() => {
          setCallDuration(d => d + 1);
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [isCallActive]);

    const formatTime = (seconds: number): string => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-between p-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="w-full max-w-md pt-12 relative z-10">
          <button 
            onClick={() => setCurrentScreen('chat')} 
            className="text-slate-200 p-2 hover:bg-white/10 rounded-xl mb-8 transition-all duration-200 backdrop-blur-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="text-center text-white">
            {/* Pulsing avatar */}
            <div className="relative mx-auto mb-6 w-40 h-40">
              <div className="absolute inset-0 bg-amber-500/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 bg-slate-800/60 backdrop-blur-lg rounded-full flex items-center justify-center border border-amber-500/30">
                <Heart className="w-20 h-20 text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2 drop-shadow-lg text-slate-100">Echo</h1>
            <p className="text-lg mb-8 opacity-90 text-slate-300">Voice Call Active</p>
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 inline-block border border-amber-500/20">
              <p className="text-6xl font-mono font-bold drop-shadow-lg text-white">{formatTime(callDuration)}</p>
            </div>
          </div>

          <div className="mt-12 bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 shadow-xl">
            <p className="text-slate-200 text-center mb-4 text-lg italic">
              "I'm here to listen. Take your time..."
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-slate-600/50 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full animate-pulse w-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md relative z-10">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`w-16 h-16 rounded-full ${isMuted ? 'bg-red-600/80' : 'bg-slate-700/60'} backdrop-blur-lg text-white flex items-center justify-center hover:bg-slate-600/80 transition-all duration-200 shadow-xl transform hover:scale-110 active:scale-95 border border-slate-600/50`}
            >
              <Mic className={`w-7 h-7 ${isMuted ? 'line-through' : ''}`} />
            </button>
            <button 
              onClick={() => {
                setIsCallActive(false);
                setCurrentScreen('chat');
              }}
              className="w-24 h-24 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-all duration-200 shadow-2xl transform hover:scale-110 active:scale-95 ring-4 ring-red-900/50"
            >
              <Phone className="w-10 h-10 transform rotate-135" />
            </button>
            <button className="w-16 h-16 rounded-full bg-slate-700/60 backdrop-blur-lg text-white flex items-center justify-center hover:bg-slate-600/80 transition-all duration-200 shadow-xl transform hover:scale-110 active:scale-95 border border-slate-600/50">
              <Video className="w-7 h-7" />
            </button>
          </div>
          <p className="text-center text-slate-300 text-sm font-medium">Tap the red button to end call</p>
        </div>
      </div>
    );
  };

  const ActivitiesScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = ['All', 'Social', 'Fitness', 'Entertainment', 'Volunteering'];

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'} pb-24 transition-colors duration-300`}>
        <div className={`${darkMode ? 'bg-slate-800/95 backdrop-blur-lg' : 'bg-slate-800/95 backdrop-blur-lg'} shadow-sm sticky top-0 z-10 border-b ${darkMode ? 'border-slate-700' : 'border-slate-700'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setCurrentScreen('home')} 
                  className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}
                >
                  <ArrowLeft className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
                </button>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>
                  Discover Activities
                </h1>
              </div>
              <button className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}>
                <Filter className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
              </button>
            </div>

            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} />
              <input
                type="text"
                placeholder="Search activities..."
                className={`w-full pl-10 pr-4 py-3 ${darkMode ? 'bg-slate-700 text-white placeholder-slate-400' : 'bg-slate-700 placeholder-slate-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 text-base`}
              />
            </div>

            <div className="flex space-x-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-lg border border-amber-500/30'
                      : darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600' : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border backdrop-blur-sm transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-blue-900/40 border border-blue-700/30 text-blue-300 text-xs font-semibold rounded-full">
                        {activity.category}
                      </span>
                      <span className="flex items-center text-sm text-slate-400">
                        <Users className="w-4 h-4 mr-1" />
                        {activity.attendees} going
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'} mb-3`}>
                      {activity.title}
                    </h3>
                    <div className="space-y-2">
                      <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-400'} flex items-center`}>
                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                        {activity.location}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-400'} flex items-center`}>
                        <Clock className="w-4 h-4 mr-2 text-amber-400" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  <button className="ml-3">
                    <Star className="w-6 h-6 text-slate-400 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
                  </button>
                </div>
                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 py-3 bg-gradient-to-r from-blue-700 to-slate-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 border border-amber-500/20">
                    Join Activity
                  </button>
                  <button className={`px-6 py-3 ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-700 hover:bg-slate-600'} rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 text-slate-200`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-4 border-2 border-dashed border-slate-600 rounded-2xl text-slate-400 hover:border-amber-500 hover:text-amber-400 transition-all duration-200 flex items-center justify-center space-x-2 font-medium transform hover:scale-105 active:scale-95">
            <Plus className="w-5 h-5" />
            <span>Suggest an Activity</span>
          </button>
        </div>

        <BottomNav currentScreen="activities" setCurrentScreen={setCurrentScreen} darkMode={darkMode} />
      </div>
    );
  };

  const WellnessScreen = () => (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'} pb-24 transition-colors duration-300`}>
      <div className={`${darkMode ? 'bg-slate-800/95 backdrop-blur-lg' : 'bg-slate-800/95 backdrop-blur-lg'} shadow-sm sticky top-0 z-10 border-b ${darkMode ? 'border-slate-700' : 'border-slate-700'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentScreen('home')} 
              className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}
            >
              <ArrowLeft className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
            </button>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>
              Wellness Dashboard
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Mood Tracker */}
        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}>
          <h2 className={`text-lg font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'} mb-4 flex items-center`}>
            <Heart className="w-5 h-5 mr-2 text-amber-400" />
            Today's Mood
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {['😢', '😕', '😐', '🙂', '😊'].map((emoji, i) => (
                <button 
                  key={i} 
                  className={`text-4xl p-3 rounded-xl transition-all duration-200 transform hover:scale-125 active:scale-100 ${
                    i === 3 
                      ? 'bg-gradient-to-br from-blue-900/40 to-amber-900/40 ring-2 ring-amber-500/50 border border-amber-500/30' 
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <div className="text-right">
              <p className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400`}>
                {wellnessData.moodScore}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">out of 10</p>
            </div>
          </div>
        </div>

        {/* Wellness Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Sleep</h3>
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{wellnessData.sleepHours}h</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Last night</p>
          </div>

          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Steps</h3>
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{wellnessData.stepCount.toLocaleString()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Today</p>
          </div>

          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Heart Rate</h3>
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{wellnessData.heartRate} <span className="text-lg text-gray-500">bpm</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Average</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>Social</h3>
              <div className="w-10 h-10 bg-amber-900/40 border border-amber-700/30 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <p className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>{wellnessData.socialInteractions}</p>
            <p className="text-xs text-slate-400 mt-1">Interactions today</p>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-sm`}>
          <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Weekly Progress</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Mood Consistency</span>
                  <span className="font-semibold text-amber-400">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-600 to-amber-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Social Activity</span>
                <span className="font-semibold text-green-600">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '72%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Physical Wellness</span>
                <span className="font-semibold text-blue-600">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/80 to-slate-800/80 border border-amber-500/30 rounded-2xl p-6 text-white backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2 text-slate-100">Connect with a Professional</h3>
              <p className="text-sm text-slate-300 mb-4">
                Based on your wellness data, speaking with a therapist could be beneficial
              </p>
              <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-lg font-semibold hover:shadow-lg transition-all">
                Find Therapists
              </button>
            </div>
            <Shield className="w-12 h-12 text-amber-400" />
          </div>
        </div>
      </div>

      <BottomNav currentScreen="wellness" setCurrentScreen={setCurrentScreen} darkMode={darkMode} />
    </div>
  );

  const SettingsScreen = () => (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'} pb-24 transition-colors duration-300`}>
      <div className={`${darkMode ? 'bg-slate-800/95 backdrop-blur-lg' : 'bg-slate-800/95 backdrop-blur-lg'} shadow-sm sticky top-0 z-10 border-b ${darkMode ? 'border-slate-700' : 'border-slate-700'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentScreen('home')} 
              className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-700'} transition-all duration-200`}
            >
              <ArrowLeft className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-300'}`} />
            </button>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>
              Settings
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-700 via-slate-700 to-slate-900 rounded-full flex items-center justify-center border border-amber-500/30">
              <User className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h2 className={`text-xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'}`}>{userProfile.name}</h2>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>Member since Jan 2026</p>
            </div>
          </div>
          <button className="w-full py-3 border-2 border-amber-500/50 text-amber-400 rounded-xl font-semibold hover:bg-amber-500/10 transition-all">
            Edit Profile
          </button>
        </div>

        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}>
          <h3 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'} mb-4`}>Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {darkMode ? <Moon className="w-5 h-5 text-slate-400" /> : <Sun className="w-5 h-5 text-slate-400" />}
                <span className={darkMode ? 'text-slate-100' : 'text-slate-100'}>Dark Mode</span>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-7 rounded-full transition-all ${darkMode ? 'bg-amber-500' : 'bg-slate-600'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-slate-400" />
                <span className={darkMode ? 'text-slate-100' : 'text-slate-100'}>Notifications</span>
              </div>
              <button className="w-14 h-7 rounded-full bg-amber-500">
                <div className="w-5 h-5 bg-white rounded-full shadow-md transform translate-x-8"></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5 text-slate-400" />
                <span className={darkMode ? 'text-slate-100' : 'text-slate-100'}>Voice Features</span>
              </div>
              <button className="w-14 h-7 rounded-full bg-amber-500">
                <div className="w-5 h-5 bg-white rounded-full shadow-md transform translate-x-8"></div>
              </button>
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}>
          <h3 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'} mb-4`}>Privacy & Data</h3>
          <div className="space-y-3">
            <button className={`w-full text-left px-4 py-3 ${darkMode ? 'bg-slate-700/50 hover:bg-slate-600' : 'bg-slate-700/50 hover:bg-slate-600'} rounded-lg transition-all flex items-center justify-between`}>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-slate-400" />
                <span className={darkMode ? 'text-slate-100' : 'text-slate-100'}>Privacy Settings</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            <button className={`w-full text-left px-4 py-3 ${darkMode ? 'bg-slate-700/50 hover:bg-slate-600' : 'bg-slate-700/50 hover:bg-slate-600'} rounded-lg transition-all flex items-center justify-between`}>
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-slate-400" />
                <span className={darkMode ? 'text-slate-100' : 'text-slate-100'}>Data & Storage</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            <button className={`w-full text-left px-4 py-3 ${darkMode ? 'bg-slate-700/50 hover:bg-slate-600' : 'bg-slate-700/50 hover:bg-slate-600'} rounded-lg transition-all flex items-center justify-between`}>
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-slate-400" />
                <span className={darkMode ? 'text-slate-100' : 'text-slate-100'}>Help & Support</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-800/80 border-slate-700'} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}>
          <h3 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-100'} mb-4`}>Subscription</h3>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className={darkMode ? 'text-slate-100' : 'text-slate-100'}>Free Plan</span>
              <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full border border-slate-600">Current</span>
            </div>
            <p className="text-sm text-slate-400">30 minutes voice/month</p>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-blue-700 to-slate-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 border border-amber-500/20">
            <Zap className="w-5 h-5" />
            <span>Upgrade to Premium</span>
          </button>
        </div>

        <button className="w-full py-3 text-red-400 hover:text-red-300 font-semibold flex items-center justify-center space-x-2 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>

        <div className="text-center text-xs text-slate-500">
          <p>Echo v1.0.0</p>
          <p className="mt-1">Echo is not a replacement for professional mental health care</p>
        </div>
      </div>

      <BottomNav currentScreen="settings" setCurrentScreen={setCurrentScreen} darkMode={darkMode} />
    </div>
  );

  const BottomNav = ({ currentScreen, setCurrentScreen, darkMode }: { 
    currentScreen: Screen; 
    setCurrentScreen: (screen: Screen) => void; 
    darkMode: boolean;
  }) => (
    <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-slate-800/95 backdrop-blur-lg' : 'bg-slate-800/95 backdrop-blur-lg'} border-t ${darkMode ? 'border-slate-700' : 'border-slate-700'} px-4 py-2 shadow-2xl z-50`}>
      <div className="max-w-7xl mx-auto flex justify-around">
        {[
          { screen: 'home' as Screen, icon: Home, label: 'Home' },
          { screen: 'chat' as Screen, icon: MessageCircle, label: 'Chat' },
          { screen: 'activities' as Screen, icon: Calendar, label: 'Activities' },
          { screen: 'wellness' as Screen, icon: TrendingUp, label: 'Wellness' },
          { screen: 'settings' as Screen, icon: Settings, label: 'Settings' }
        ].map(({ screen, icon: Icon, label }) => {
          const isActive = currentScreen === screen;
          return (
            <button 
              key={screen}
              onClick={() => setCurrentScreen(screen)} 
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-amber-400' 
                  : 'text-slate-400'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform duration-200`} />
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>{label}</span>
              {isActive && (
                <div className="w-1 h-1 bg-amber-400 rounded-full mt-0.5"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      {currentScreen === 'onboarding' && <OnboardingScreen />}
      {currentScreen === 'setup' && <SetupScreen />}
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'chat' && <ChatScreen />}
      {currentScreen === 'voice' && <VoiceCallScreen />}
      {currentScreen === 'activities' && <ActivitiesScreen />}
      {currentScreen === 'wellness' && <WellnessScreen />}
      {currentScreen === 'settings' && <SettingsScreen />}
    </div>
  );
};

export default EchoApp;