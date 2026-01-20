# Echo Companion - Mobile App Frontend

A beautiful, modern mobile app frontend for Echo Companion - your companion for meaningful connections. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, polished interface with smooth animations
- 🌓 **Dark Mode** - Full dark mode support with smooth transitions
- 📱 **Mobile-First Design** - Optimized for mobile devices with touch-friendly interactions
- 💬 **Chat Interface** - Real-time chat with Echo AI companion
- 📞 **Voice Call** - Beautiful voice call interface with animations
- 📅 **Activities Discovery** - Find and join activities in your area
- 💚 **Wellness Dashboard** - Track your mood, sleep, steps, and social interactions
- ⚙️ **Settings** - Comprehensive settings with profile management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A modern code editor (VS Code recommended)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   - The app will be available at `http://localhost:3000`
   - Open in mobile view (Chrome DevTools) for the best experience

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
erok.ai ui/
├── echo_companion_ui.tsx  # Main app component
├── main.tsx               # Entry point
├── index.html             # HTML template
├── index.css              # Global styles and Tailwind
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Design Features

### UI Enhancements

- **Gradient Backgrounds** - Beautiful gradient color schemes
- **Glassmorphism** - Backdrop blur effects for modern look
- **Smooth Animations** - Fade-in, scale, and hover animations
- **Micro-interactions** - Button presses, hover states, and transitions
- **Responsive Cards** - Elevated cards with shadows and hover effects
- **Icon Integration** - Lucide React icons throughout

### Mobile Optimizations

- Touch-friendly button sizes
- Swipe-friendly navigation
- Optimized spacing for mobile screens
- Smooth scrolling
- Safe area insets support

## 🔌 Backend Integration

This is a frontend-only project. To connect to your backend:

1. **API Configuration**: Create a `src/config/api.ts` file:
   ```typescript
   export const API_BASE_URL = 'http://your-backend-url/api';
   ```

2. **API Calls**: Use fetch or axios to connect to your backend:
   ```typescript
   import { API_BASE_URL } from './config/api';
   
   const response = await fetch(`${API_BASE_URL}/conversations`);
   ```

3. **Environment Variables**: Create a `.env` file:
   ```
   VITE_API_BASE_URL=http://your-backend-url/api
   ```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## 📱 Screens

### 1. Onboarding
Welcome screen with app features and get started button.

### 2. Setup
Multi-step setup wizard:
- Step 1: Name input
- Step 2: Interests selection
- Step 3: Goals selection

### 3. Home
Dashboard with:
- User stats (streak, activities, mood)
- Quick action buttons
- Recommended activities

### 4. Chat
Conversation interface with:
- Message bubbles
- Suggested actions
- Voice input button
- Crisis support resources

### 5. Voice Call
Voice call interface with:
- Call timer
- Mute/unmute
- End call button

### 6. Activities
Activity discovery with:
- Category filters
- Search functionality
- Activity cards with details

### 7. Wellness
Wellness tracking with:
- Mood tracker
- Sleep, steps, heart rate metrics
- Weekly progress charts
- Professional help suggestions

### 8. Settings
Settings screen with:
- Profile management
- Dark mode toggle
- Preferences
- Privacy settings

## 🎯 Future Enhancements

- [ ] Real-time chat integration
- [ ] WebSocket support for live updates
- [ ] Push notifications
- [ ] Offline support
- [ ] PWA capabilities
- [ ] Advanced analytics
- [ ] Social sharing features

## 📝 Notes

- This frontend is designed to work with a separate backend API
- All data is currently mocked for demonstration
- Replace mock data with actual API calls when integrating with backend
- The app includes crisis support resources and disclaimers

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is part of the Echo Companion application.

---

**Built with ❤️ for meaningful connections**