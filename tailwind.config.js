/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#244D3F',
        darkAlt: '#64748B',
        cream: '#F8FAFC',
        accent: '#2D6A4F',
        muted: '#E9E9E9',
        overdue: '#EF4444',
        almostDue: '#F59E0B',
        onTrack: '#10B981',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
