# Gateway to IT - Application Architecture

## Overview

**Gateway to IT** is a community learning platform where junior developers connect, collaborate, and showcase their skills. The architecture follows modern React best practices with a **frontend-first** approach using Supabase as a serverless backend.

---

## 📋 Core Features

### Main Sections
1. **Start Learning** - Resources & collaborative learning spaces
2. **Build Projects** - Portfolio showcase & project repository
3. **Community (Connect)** - Forum discussions & networking
4. **Chat** - Real-time messaging (embedded in Community)
5. **Education** - Curated learning resources
6. *(Optional)* **Contribute** - Code review & collaborative practice (PR-like workflows)

---

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│            React Frontend (Vite)                │
│  - React Router for navigation                  │
│  - Context API + Custom Hooks for state         │
│  - Tailwind CSS for styling                     │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│         Supabase (Serverless Backend)           │
│  - PostgreSQL Database                          │
│  - Real-time Subscriptions (Chat, Notifications)│
│  - Authentication & Authorization               │
│  - Row Level Security (RLS)                     │
│  - Storage (User Avatars, Project Images)       │
└─────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── shared/          # Global components (Navigation, Footer)
│   │   ├── Forum/           # Forum-specific components
│   │   ├── Chat/            # Chat components
│   │   ├── Projects/        # Project showcase components
│   │   ├── Education/       # Learning resources components
│   │   └── Auth/            # Auth-related components
│   │
│   ├── pages/               # Page-level components (1:1 with routes)
│   │   ├── LandingPage.tsx
│   │   ├── StartLearningPage.tsx
│   │   ├── BuildProjectsPage.tsx
│   │   ├── CommunityPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   └── ContributePage.tsx (optional)
│   │
│   ├── layouts/             # Layout wrappers
│   │   ├── PublicLayout.tsx
│   │   └── AuthLayout.tsx
│   │
│   ├── context/             # Context API for state management
│   │   ├── AuthContext.tsx
│   │   ├── ChatContext.tsx
│   │   ├── ForumContext.tsx
│   │   └── UserContext.tsx
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useChat.ts
│   │   ├── useForum.ts
│   │   ├── useUser.ts
│   │   └── useSupabase.ts
│   │
│   ├── lib/                 # Utility libraries & configurations
│   │   ├── supabaseClient.ts
│   │   ├── api/             # Supabase API functions
│   │   │   ├── auth.ts
│   │   │   ├── forum.ts
│   │   │   ├── chat.ts
│   │   │   ├── projects.ts
│   │   │   ├── users.ts
│   │   │   └── education.ts
│   │   ├── types.ts         # TypeScript interfaces & types
│   │   └── constants.ts     # App-wide constants
│   │
│   ├── styles/              # Global styles
│   │   ├── index.css
│   │   └── App.css
│   │
│   ├── App.tsx              # Main app with routes
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts
│
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

---

## 🔐 State Management Strategy

### Use Context API + Custom Hooks (Recommended)

**Why?** For this app's complexity, Context API is sufficient and simpler than Redux. Custom hooks encapsulate Supabase logic cleanly.

### Architecture:

```typescript
// Context for global state
- AuthContext: Current user, auth status
- UserContext: User profile data, preferences
- ChatContext: Real-time messages, active conversations
- ForumContext: Forum threads, posts, notifications

// Custom hooks to use contexts
- useAuth()      → Get auth functions & user
- useUser()      → Get/update user data
- useChat()      → Send/receive messages
- useForum()     → Get/post forum content
```

**Example Pattern:**

```typescript
// hooks/useAuth.ts
export function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) setUser(data.user);
    return { data, error };
  };
  
  return { user, login, logout, signup };
}
```

---

## 📊 Supabase Database Schema (MVP)

### Core Tables:

```sql
-- Users (Managed by Auth, extended with profile)
users
  - id (UUID, PK)
  - email
  - username
  - avatar_url
  - bio
  - skill_level (beginner, intermediate, advanced)
  - created_at

-- Forum Posts
forum_posts
  - id (UUID, PK)
  - user_id (FK → users)
  - title
  - content
  - created_at
  - updated_at
  - views_count

-- Forum Replies
forum_replies
  - id (UUID, PK)
  - post_id (FK → forum_posts)
  - user_id (FK → users)
  - content
  - created_at
  - helpful_count (for upvotes)

-- Chat Messages
chat_messages
  - id (UUID, PK)
  - sender_id (FK → users)
  - recipient_id (FK → users)
  - content
  - read (boolean)
  - created_at

-- Projects
projects
  - id (UUID, PK)
  - user_id (FK → users)
  - title
  - description
  - github_url
  - live_url
  - image_url
  - tags (array of tech stack)
  - created_at

-- Education Resources
education_resources
  - id (UUID, PK)
  - title
  - description
  - url
  - category (frontend, backend, fullstack, etc.)
  - difficulty (beginner, intermediate, advanced)
  - created_at

-- (Optional) Code Review / Contributions
contributions
  - id (UUID, PK)
  - project_id (FK → projects)
  - user_id (FK → users)
  - status (open, approved, rejected)
  - description
  - created_at
```

---

## 🔌 Frontend-Backend Split

### What Stays in Frontend:
- ✅ Navigation & routing
- ✅ Form validation (client-side)
- ✅ UI state (theme, modals, filters)
- ✅ Caching with Context (lightweight)

### What Goes in Backend (Supabase):
- 🔒 Authentication & session management
- 🔒 Data persistence (all tables)
- 🔒 Row Level Security (RLS policies)
- 🔒 Real-time subscriptions (chat, notifications)
- 🔒 File storage (images, avatars)
- 🔒 Business logic validation (via Postgres triggers/functions)

### Recommendation: Hybrid Approach
Most features are fine as frontend-first, but implement **Supabase RLS policies** for security:
- Users can only edit their own posts/messages
- Private messages stay private
- Admins can moderate content

---

## 🔄 Data Flow Example: Creating a Forum Post

```
User writes post in UI
         ↓
Form validation (frontend)
         ↓
POST request to Supabase API
         ↓
Supabase RLS checks auth & user permissions
         ↓
Data stored in PostgreSQL
         ↓
Real-time listener updates other users' feeds
         ↓
UI reflects new post (via Context/hook)
```

---

## 🛣️ React Router Setup

```typescript
// App.tsx
<Routes>
  <Route element={<PublicLayout />}>
    <Route path="/" element={<LandingPage />} />
    <Route path="/start-learning" element={<StartLearningPage />} />
    <Route path="/build-projects" element={<BuildProjectsPage />} />
    <Route path="/community" element={<CommunityPage />} />
    <Route path="/community/:postId" element={<ForumPostDetail />} />
    <Route path="/education" element={<EducationPage />} />
    <Route path="/profile/:userId" element={<ProfilePage />} />
    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
    <Route path="/contribute" element={<ContributePage />} /> {/* Optional */}
  </Route>
  
  <Route element={<AuthLayout />}>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Route>
</Routes>
```

---

## 🔑 Authentication Flow

1. **User signs up** → Supabase Auth + User Profile created
2. **User logs in** → Session token stored in Context
3. **Protected routes** check auth status
4. **RLS policies** ensure users can only access their data
5. **Logout** clears Context & session

```typescript
// hooks/useAuth.ts
export function useAuth() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  }, []);
  
  return { user, /* ... methods ... */ };
}
```

---

## 📡 Real-Time Features with Supabase

### Chat & Notifications:

```typescript
// hooks/useChat.ts
useEffect(() => {
  const channel = supabase
    .channel('messages')
    .on('postgres_changes', 
      { event: 'INSERT', schema: 'public', table: 'chat_messages' },
      (payload) => setMessages(prev => [...prev, payload.new])
    )
    .subscribe();
    
  return () => channel.unsubscribe();
}, []);
```

---

## 🚀 Deployment

### Frontend:
- Deploy to **Vercel** or **Netlify**
- Auto-deploy on git push

### Backend:
- Supabase hosting (included in Supabase project)
- PostgreSQL managed automatically
- Environment variables in `.env.local`

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📦 Dependencies (Current + Recommended Additions)

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.11.0",
    "@supabase/supabase-js": "^2.89.0",
    "framer-motion": "^12.23.24",
    "zustand": "^4.x.x" // (Optional alternative to Context)
  },
  "devDependencies": {
    "typescript": "~5.9.3",
    "tailwindcss": "^4.1.18",
    "@vitejs/plugin-react": "^5.0.4",
    "vite": "^7.1.7"
  }
}
```

---

## ✅ Development Workflow

### 1. Feature Development:
```bash
git checkout -b feature/new-feature
# Develop in local env
# Test with Supabase dev instance
git push & create PR
```

### 2. Local Setup:
```bash
npm install
cp .env.example .env.local
npm run dev
```

### 3. Testing:
- Unit tests for hooks & utilities (Jest)
- E2E tests for critical flows (Cypress/Playwright)
- Manual testing with real Supabase

---

## 🎯 Phase Rollout (Recommended)

### Phase 1 (MVP):
- ✅ Authentication
- ✅ User profiles
- ✅ Forum (posts/replies)
- ✅ Projects showcase

### Phase 2:
- ✅ Chat functionality
- ✅ Notifications
- ✅ Education resources

### Phase 3 (Optional):
- 📋 Contributions/Code review system
- 📋 Advanced search & filtering
- 📋 User recommendations

---

## 🏆 Best Practices Applied

1. **Type Safety**: Full TypeScript throughout
2. **Component Composition**: Reusable, small components
3. **Separation of Concerns**: Logic in hooks, rendering in components
4. **DRY**: API functions centralized in `lib/api/`
5. **Security**: Supabase RLS policies + auth checks
6. **Performance**: Lazy loading pages, memoization where needed
7. **Scalability**: Context + Hooks pattern scales better than prop drilling
8. **Accessibility**: Semantic HTML, ARIA labels
9. **Code Organization**: Feature-based folder structure

---

## 📚 Key Files to Create/Update

- [ ] `lib/api/forum.ts` - Forum CRUD operations
- [ ] `lib/api/chat.ts` - Chat API functions
- [ ] `lib/api/projects.ts` - Project management
- [ ] `context/AuthContext.tsx` - Auth state
- [ ] `context/ChatContext.tsx` - Chat state with real-time
- [ ] `hooks/useChat.ts` - Chat hook
- [ ] `pages/EducationPage.tsx` - Education resources
- [ ] `components/Forum/` - Forum components
- [ ] `components/Chat/` - Chat components

---

## 🔗 Resources

- **React**: https://react.dev
- **React Router**: https://reactrouter.com
- **Supabase**: https://supabase.com/docs
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com

---

**Version**: 1.0  
**Last Updated**: January 2026
