import { useState, useEffect } from 'react';
import { UserPlus } from 'lucide-react';
import FriendCard from '../components/FriendCard';
import friendsData from '../data/friends.json';

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const onTrack   = friends.filter(f => f.status === 'on-track').length;
  const almostDue = friends.filter(f => f.status === 'almost due').length;

  const summaryStats = [
    { label: 'Total Friends',           value: friends.length },
    { label: 'On Track',                value: onTrack },
    { label: 'Need Attention',          value: almostDue },
    { label: 'Interactions This Month', value: 12 },
  ];

  return (
    <div className="page-enter bg-white min-h-screen">

      {/* ── Banner ── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">

        {/* Logo-xl as hero brand mark */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/logo-xl.png"
            alt="KeenKeeper"
            className="h-10 w-auto object-contain"
            onError={e => { e.style.display='none'; }}
          />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <button className="inline-flex items-center gap-2 bg-[#244D3F] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#2D6A4F] transition-colors shadow-sm">
          <UserPlus size={15} />
          Add a Friend
        </button>

        {/* Horizontal stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-200 border border-gray-200 rounded-2xl mt-10 overflow-hidden">
          {summaryStats.map((stat, i) => (
            <div key={i} className="py-6 px-4 text-center">
              <p className="text-3xl font-display font-bold text-gray-900">
                {loading ? '—' : stat.value}
              </p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Friends Grid ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-xl font-bold text-gray-800 mb-6">Your Friends</h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-10 h-10 rounded-full border-4 border-[#244D3F]/20 border-t-[#244D3F] spinner" />
            <p className="text-gray-400 text-sm">Loading your friends...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
