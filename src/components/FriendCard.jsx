import { useNavigate } from 'react-router-dom';

function getStatusStyle(status) {
  switch (status) {
    case 'overdue':    return { pill: 'bg-red-500 text-white',    label: 'Overdue' };
    case 'almost due': return { pill: 'bg-amber-400 text-white',  label: 'Almost Due' };
    case 'on-track':   return { pill: 'bg-emerald-500 text-white', label: 'On Track' };
    default:           return { pill: 'bg-gray-400 text-white',   label: status };
  }
}

export default function FriendCard({ friend }) {
  const navigate = useNavigate();
  const s = getStatusStyle(friend.status);

  return (
    <div
      className="flex flex-col items-center text-center cursor-pointer group"
      onClick={() => navigate(`/friend/${friend.id}`)}
    >
      {/* Circular photo */}
      <div className="relative mb-3">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover bg-gray-100 border-2 border-transparent group-hover:border-[#244D3F]/30 transition-all"
          onError={e => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=244D3F&color=fff&size=200`;
          }}
        />
      </div>

      {/* Name */}
      <p className="font-semibold text-sm text-gray-800 leading-tight mb-1 truncate w-full">
        {friend.name}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-1 mb-2">
        {friend.tags.slice(0, 2).map(tag => (
          <span key={tag} className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Status pill */}
      <span className={`text-[10px] font-semibold px-3 py-0.5 rounded-full ${s.pill}`}>
        {s.label}
      </span>
    </div>
  );
}
