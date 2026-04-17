import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart2 } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', icon: <Home size={13} /> },
  { to: '/timeline', label: 'Timeline', icon: <Clock size={13} /> },
  { to: '/stats', label: 'Stats', icon: <BarChart2 size={13} /> },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo — uses logo.png asset */}
          <NavLink to="/" className="flex items-center gap-2.5">
            <img
              src="/assets/logo.png"
              alt="KeenKeeper logo"
              className="h-8 w-auto object-contain"
              onError={e => { e.style.display = 'none'; }}
            />
            <img
              src="/assets/logo-xl.png"
              alt="KeenKeeper"
              className="h-6 w-auto object-contain"
              onError={e => { e.style.display = 'none'; }}
            />
            {/* Fallback text if images not loaded */}
            <span className="font-display font-bold text-lg text-[#244D3F] tracking-tight logo-text-fallback hidden">
              KeenKeeper
            </span>
          </NavLink>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#244D3F] text-white'
                      : 'text-gray-500 hover:text-[#244D3F] hover:bg-gray-50'
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
