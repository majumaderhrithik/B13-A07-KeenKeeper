# 👥 KeenKeeper — Keep Your Friendships Alive

**Never let a good friendship quietly fade away.**

KeenKeeper is a simple, beautiful web app that helps you stay consistent with the people who matter most. Track your last contact, set contact goals, log calls/texts/video calls, and see your friendship health at a glance.

---

## 🛠️ Technologies Used

- **React 18** + **Vite**  
- **React Router DOM v6** (for navigation)  
- **Tailwind CSS** (styling + responsive design)  
- **Recharts** (analytics pie chart)  
- **react-hot-toast** (notifications)  
- **lucide-react** (icons)  

---
## 👨‍💻 Built by

**Hrithik Majumader**

## 🚀 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/keenkeeper.git

# 2. Go into the project folder
cd keenkeeper

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
Open http://localhost:5173 in my browser.

🌐 Live Demo
Live Link: https://keen-keeper-nu-three.vercel.app
(Deployed on Vercel)

## 📁 Project Structure

```bash
keenKeeper/
├── public/
│   └── assets/                  # Static images and icons
│       ├── call.png
│       ├── facebook.png
│       ├── instagram.png
│       ├── logo-xl.png
│       ├── logo.png
│       ├── text.png
│       ├── twitter.png
│       └── video.png
│
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── FriendCard.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/                 # React Context providers
│   │   └── TimelineContext.jsx
│   │
│   ├── data/                    # Mock data / static content
│   ├── pages/                   # Page-level components
│   │
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles + Tailwind imports
│   └── main.jsx                 # Vite entry point (React root)
│
├── .vercel/                     # Vercel deployment configuration
├── dist/                        # Production build output (generated)
├── node_modules/                # Dependencies (ignored in git)
│
├── .gitignore
├── index.html                   # Vite entry HTML
├── package.json
├── package-lock.json
├── postcss.config.js
├── README-SETUP.md              # Additional setup guide
├── README.md                    # ← You are here
├── tailwind.config.js
└── vercel.json                  # SPA routing rules for Vercel

---


## 🔥 Key Features

1. **Smart Friend Dashboard**  
   Beautiful illustrated friend cards with tags, status badges (On Track / Overdue / Almost Due), and quick actions.

2. **Relationship Stats**  
   Real-time overview: Total Friends, On Track, Need Attention, and Interactions This Month — all at a glance.

3. **Timeline & Tracking**  
   Built-in timeline to log and visualize your interactions, keeping every relationship healthy and intentional.

---
