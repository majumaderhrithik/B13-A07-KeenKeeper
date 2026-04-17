import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Phone, MessageSquare, Video, BarChart2 } from 'lucide-react';
import { useTimeline } from '../context/TimelineContext';
import friendsData from '../data/friends.json';

const COLORS = { call: '#10B981', text: '#3B82F6', video: '#8B5CF6' };

export default function Stats() {
  const { entries } = useTimeline();

  const callCount = entries.filter(e => e.type === 'call').length;
  const textCount = entries.filter(e => e.type === 'text').length;
  const videoCount = entries.filter(e => e.type === 'video').length;

  const pieData = [
    { name: 'Call', value: callCount || 0, color: COLORS.call },
    { name: 'Text', value: textCount || 0, color: COLORS.text },
    { name: 'Video', value: videoCount || 0, color: COLORS.video },
  ].filter(d => d.value > 0);

  const overdue = friendsData.filter(f => f.status === 'overdue').length;
  const almostDue = friendsData.filter(f => f.status === 'almost due').length;
  const onTrack = friendsData.filter(f => f.status === 'on-track').length;

  const statusData = [
    { name: 'On Track', value: onTrack, color: '#10B981' },
    { name: 'Almost Due', value: almostDue, color: '#F59E0B' },
    { name: 'Overdue', value: overdue, color: '#EF4444' },
  ];

  const interactionStats = [
    { label: 'Calls', value: callCount, icon: <Phone size={18} />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Texts', value: textCount, icon: <MessageSquare size={18} />, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Video Calls', value: videoCount, icon: <Video size={18} />, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="page-enter max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#244D3F] flex items-center justify-center">
            <BarChart2 size={20} className="text-white" />
          </div>
          <h1 className="font-display text-3xl font-bold text-[#244D3F]">Friendship Analytics</h1>
        </div>
        <p className="text-gray-400 text-sm">Insights into how you nurture your relationships</p>
      </div>

      {/* Interaction summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {interactionStats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mx-auto mb-3`}>
              {stat.icon}
            </div>
            <p className="font-display font-bold text-3xl text-[#244D3F]">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interaction type pie */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-display font-semibold text-[#244D3F] text-lg mb-1">Interaction Breakdown</h3>
          <p className="text-xs text-gray-400 mb-6">Call / Text / Video distribution</p>

          {entries.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-52 text-gray-300">
              <BarChart2 size={40} className="mb-2" />
              <p className="text-sm">No interactions logged yet</p>
              <p className="text-xs mt-1">Visit a friend's profile to log check-ins</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontFamily: 'DM Sans' }}
                />
                <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: '13px' }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Status breakdown pie */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-display font-semibold text-[#244D3F] text-lg mb-1">Friend Status Overview</h3>
          <p className="text-xs text-gray-400 mb-6">How your friendships are doing right now</p>

          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontFamily: 'DM Sans' }}
              />
              <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: '13px' }} />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend details */}
          <div className="flex justify-center gap-6 mt-2">
            {statusData.map(s => (
              <div key={s.name} className="text-center">
                <p className="font-display font-bold text-xl" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs text-gray-400">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
