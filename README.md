# 🌿 KeenKeeper — Keep Your Friendships Alive

> Your personal tool to nurture friendships, track connections, and cultivate the relationships that matter most.

---

## 📸 Project Overview

KeenKeeper helps you stay connected with the people who matter. Never let a friendship drift by tracking when you last reached out, setting contact goals, and logging every call, text, and video chat.

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **React Router DOM v6** | Client-side navigation |
| **Tailwind CSS** | Utility-first styling |
| **Recharts** | Analytics pie charts |
| **react-hot-toast** | Toast notifications |
| **lucide-react** | Icon library |
| **Vite** | Build tool |

---

## ✨ Key Features

1. **Friend Dashboard** — View all friends in a responsive 4-column grid with status indicators (On Track / Almost Due / Overdue)
2. **Interaction Logging** — Log Calls, Texts, and Video calls directly from a friend's profile; each action creates a timeline entry and triggers a toast notification
3. **Friendship Analytics** — Pie charts showing interaction type distribution and friend status overview using Recharts

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── FriendCard.jsx
├── context/
│   └── TimelineContext.jsx
├── data/
│   └── friends.json
├── pages/
│   ├── Home.jsx
│   ├── FriendDetail.jsx
│   ├── Timeline.jsx
│   ├── Stats.jsx
│   └── NotFound.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment

Deploy on [Vercel](https://vercel.com) — add a `vercel.json` for SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 🎨 Design System

- **Primary**: `#244D3F` (deep forest green)
- **Font Display**: Playfair Display
- **Font Body**: DM Sans
- **Status Colors**: Emerald (on-track) · Amber (almost due) · Red (overdue)

---

*© 2026 KeenKeeper. All rights reserved.*
