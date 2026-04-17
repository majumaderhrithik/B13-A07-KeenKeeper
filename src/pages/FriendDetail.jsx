import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Archive, Trash2, Bell, Edit, Mail, Tag } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTimeline } from '../context/TimelineContext';
import friendsData from '../data/friends.json';

function getStatusStyle(status) {
  switch (status) {
    case 'overdue':    return { pill: 'bg-red-500 text-white',     label: 'Overdue' };
    case 'almost due': return { pill: 'bg-amber-400 text-white',   label: 'Almost Due' };
    case 'on-track':   return { pill: 'bg-emerald-500 text-white', label: 'On Track' };
    default:           return { pill: 'bg-gray-400 text-white',    label: status };
  }
}

const checkInActions = [
  { type: 'call',  asset: '/assets/call.png',  label: 'Call',  hover: 'hover:border-emerald-300 hover:bg-emerald-50', iconBg: 'group-hover:bg-emerald-100' },
  { type: 'text',  asset: '/assets/text.png',  label: 'Text',  hover: 'hover:border-blue-300 hover:bg-blue-50',       iconBg: 'group-hover:bg-blue-100'    },
  { type: 'video', asset: '/assets/video.png', label: 'Video', hover: 'hover:border-purple-300 hover:bg-purple-50',   iconBg: 'group-hover:bg-purple-100'  },
];

export default function FriendDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addEntry } = useTimeline();

  const friend = friendsData.find(f => f.id === Number(id));

  if (!friend) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-gray-400 text-lg">Friend not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-[#244D3F] font-medium hover:underline">Go Back</button>
      </div>
    );
  }

  const s = getStatusStyle(friend.status);

  const handleCheckIn = (type) => {
    addEntry(type, friend.name);
    const icons = { call: '📞', text: '💬', video: '🎥' };
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name} logged!`, {
      icon: icons[type],
      style: { borderRadius: '10px', background: '#244D3F', color: '#fff', fontFamily: 'DM Sans' },
    });
  };

  const statCards = [
    { label: 'Days Since Contact', value: friend.days_since_contact },
    { label: 'Goal (Days)',        value: friend.goal },
    { label: 'Next Due',           value: new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
  ];

  const progressPct = Math.min((friend.days_since_contact / friend.goal) * 100, 100);
  const progressColor = friend.status === 'overdue' ? 'bg-red-500' : friend.status === 'almost due' ? 'bg-amber-400' : 'bg-emerald-500';

  return (
    <div className="page-enter bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-gray-400 hover:text-[#244D3F] mb-6 text-sm transition-colors">
          <ArrowLeft size={15} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ──────────── LEFT ──────────── */}
          <div className="space-y-4">

            {/* Profile card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-24 h-24 rounded-full object-cover bg-gray-100 ring-4 ring-gray-50"
                  onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=244D3F&color=fff&size=200`; }}
                />
              </div>

              <div className="text-center mb-4">
                <h1 className="font-display font-bold text-xl text-gray-900 mb-2">{friend.name}</h1>
                <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${s.pill}`}>{s.label}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {friend.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                    <Tag size={9} /> {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-3 text-center">{friend.bio}</p>

              <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs">
                <Mail size={12} />
                <a href={`mailto:${friend.email}`} className="hover:text-[#244D3F] transition-colors truncate">{friend.email}</a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-1.5">
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-amber-50 hover:text-amber-700 transition-all text-left">
                <Bell size={14} /> Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-700 transition-all text-left">
                <Archive size={14} /> Archive
              </button>
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-50 hover:text-red-600 transition-all text-left">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>

          {/* ──────────── RIGHT ──────────── */}
          <div className="lg:col-span-2 space-y-4">

            {/* ① Stats */}
            <div className="grid grid-cols-3 gap-4">
              {statCards.map((card, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                  <p className="font-display font-bold text-2xl text-gray-900 mb-1">{card.value}</p>
                  <p className="text-xs text-gray-400">{card.label}</p>
                </div>
              ))}
            </div>

            {/* ② Relationship Goal */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-0.5">Relationship Goal</h3>
                  <p className="text-xs text-gray-400">
                    Connect every <span className="font-semibold text-[#244D3F]">{friend.goal} days</span>
                  </p>
                </div>
                <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#244D3F] border border-gray-200 rounded-lg px-2.5 py-1 transition-colors">
                  <Edit size={11} /> Edit
                </button>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className={`h-2 rounded-full transition-all ${progressColor}`} style={{ width: `${progressPct}%` }} />
              </div>
              <p className="text-[11px] text-gray-400 mt-2">{friend.days_since_contact} of {friend.goal} days elapsed</p>
            </div>

            {/* ③ Quick Check-In — uses call.png / text.png / video.png */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 text-sm mb-1">Quick Check-In</h3>
              <p className="text-xs text-gray-400 mb-5">
                Log an interaction with {friend.name.split(' ')[0]}
              </p>

              <div className="grid grid-cols-3 gap-3">
                {checkInActions.map(({ type, asset, label, hover, iconBg }) => (
                  <button
                    key={type}
                    onClick={() => handleCheckIn(type)}
                    className={`flex flex-col items-center gap-2 py-4 rounded-xl border border-gray-200 transition-all group ${hover}`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center transition-colors ${iconBg}`}>
                      <img
                        src={asset}
                        alt={label}
                        className="w-5 h-5 object-contain"
                        onError={e => { e.target.style.display='none'; }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700">{label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
