export default function Footer() {
  const socials = [
    { name: 'twitter',   src: '/assets/twitter.png',   href: '#' },
    { name: 'facebook',  src: '/assets/facebook.png',  href: '#' },
    { name: 'instagram', src: '/assets/instagram.png', href: '#' },
  ];

  return (
    <footer className="bg-[#244D3F] text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col items-center text-center gap-5">

        {/* Logo xl */}
        <div className="flex items-center gap-3">
        
          <img
            src="/assets/logo-xl.png"
            alt="KeenKeeper"
            className="h-8 w-auto object-contain brightness-0 invert"
            onError={e => {
              e.style.display='none';
              document.getElementById('footer-text-fallback').classList.remove('hidden');
            }}
          />
          <span id="footer-text-fallback" className="font-display font-bold text-3xl hidden">KeenKeeper</span>
        </div>

        <p className="text-white/50 text-sm max-w-sm leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social links with actual icons */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/30 text-xs tracking-wider uppercase">Social Links</p>
          <div className="flex items-center gap-3">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 flex items-center justify-center transition-all"
              >
                <img
                  src={s.src}
                  alt={s.name}
                  className="w-4 h-4 object-contain"
                  onError={e => { e.target.style.display='none'; }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
