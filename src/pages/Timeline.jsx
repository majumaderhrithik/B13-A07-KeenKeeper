import { useState } from 'react';
import { Clock, Filter } from 'lucide-react';
import { useTimeline } from '../context/TimelineContext';

const TYPE_STYLES = {
  call:  { asset: '/assets/call.png',  bg: 'bg-emerald-100', label: 'Call' },
  text:  { asset: '/assets/text.png',  bg: 'bg-blue-100',    label: 'Text' },
  video: { asset: '/assets/video.png', bg: 'bg-purple-100',  label: 'Video' },
};

const FILTERS = ['all', 'call', 'text', 'video'];

export default function Timeline() {
  const { entries } = useTimeline();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? entries : entries.filter(e => e.type === activeFilter);

  return (
    <div className="page-enter bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-900">Timeline</h1>
            <p className="text-gray-400 text-sm mt-1">Your interaction history with friends</p>
          </div>

          {/* Filter — Challenge C2 */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
            <Filter size={13} className="text-gray-400 ml-1" />
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  activeFilter === f ? 'bg-[#244D3F] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Clock size={28} className="text-gray-300" />
            </div>
            <p className="text-gray-400 font-medium">No interactions yet</p>
            <p className="text-gray-300 text-sm mt-1">Log a call, text, or video from a friend's profile</p>
          </div>
        ) : (
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-4">
              {filtered.map(entry => {
                const t = TYPE_STYLES[entry.type] || TYPE_STYLES.call;
                const date = new Date(entry.date);
                return (
                  <div key={entry.id} className="flex gap-5 items-start">
                    {/* Icon bubble with asset image */}
                    <div className={`relative z-10 w-14 h-14 rounded-2xl ${t.bg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <img
                        src={t.asset}
                        alt={t.label}
                        className="w-6 h-6 object-contain"
                        onError={e => { e.target.style.display='none'; }}
                      />
                    </div>

                    {/* Entry card */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{entry.title}</p>
                          <span className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${t.bg} text-gray-600`}>
                            {t.label}
                          </span>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs text-gray-400 font-mono">
                            {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                          <p className="text-xs text-gray-300 font-mono mt-0.5">
                            {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
