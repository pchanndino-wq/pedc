import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { SITE_SETTINGS } from '../data/siteContent';
import { resolveImageUrl } from '../utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const logoUrl = resolveImageUrl('https://drive.google.com/file/d/1Logo_ID_Placeholder/view?usp=sharing');

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || isOpen ? 'bg-black border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group shrink-0 relative z-[110]">
          <img 
            src={logoUrl} 
            alt="Positive Energy Dance Co. Logo" 
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="text-base font-black tracking-tighter text-white uppercase leading-none">
            POSITIVE ENERGY <span className="text-primary-400 block sm:inline">DANCE CO.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className={`text-[9px] font-black uppercase tracking-[0.2em] hover:text-primary-400 transition-colors ${location.pathname === item.href ? 'text-primary-400' : 'text-zinc-400'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1 border-l border-white/10 pl-8">
            <Link to="/book" className="bg-primary-400 hover:bg-white text-black px-5 py-2 rounded-full text-[9px] font-black tracking-widest transition-all shadow-lg shadow-primary-900/20">
              BOOK NOW
            </Link>
            <a href={`tel:${SITE_SETTINGS.phone.replace(/[^0-9]/g, '')}`} className="text-[8px] font-black tracking-[0.2em] text-primary-400 hover:text-white transition-colors">
              {SITE_SETTINGS.phone}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-400 p-2 relative z-[110]" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black transition-all duration-500 ease-in-out z-[100] ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <div className="flex flex-col h-full pt-24 pb-12 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item, index) => (
              <Link 
                key={item.href} 
                to={item.href}
                className={`text-lg font-black uppercase tracking-widest py-3 px-4 rounded-xl transition-all ${location.pathname === item.href ? 'text-primary-400 bg-white/5' : 'text-zinc-400 active:bg-white/5'}`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(15px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-6 pt-12" style={{ 
              transitionDelay: isOpen ? `${NAV_ITEMS.length * 40}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(15px)',
              opacity: isOpen ? 1 : 0
            }}>
            <Link to="/book" className="block w-full bg-primary-400 text-black text-center py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl">
              BOOK SESSION NOW
            </Link>
            <div className="flex flex-col items-center gap-4 text-center">
              <a href={`tel:${SITE_SETTINGS.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-primary-400 font-black uppercase tracking-[0.3em] text-xs">
                <Phone size={16} className="fill-primary-400/20" /> {SITE_SETTINGS.phone}
              </a>
              <p className="text-zinc-700 text-[9px] font-black uppercase tracking-[0.2em]">San Diego's Elite Event Production</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;