import { useNavigate } from 'react-router-dom';
import { Home, Leaf } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-3xl bg-[#244D3F]/10 flex items-center justify-center mb-6">
        <Leaf size={36} className="text-[#244D3F]/40" />
      </div>
      <h1 className="font-display text-7xl font-bold text-[#244D3F]/20 mb-2">404</h1>
      <h2 className="font-display text-2xl font-semibold text-[#244D3F] mb-3">Page Not Found</h2>
      <p className="text-gray-400 text-sm max-w-xs mb-8">
        Looks like this friendship path doesn't exist. Let's get you back on track.
      </p>
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 bg-[#244D3F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2D6A4F] transition-colors shadow-lg"
      >
        <Home size={18} />
        Back to Home
      </button>
    </div>
  );
}
