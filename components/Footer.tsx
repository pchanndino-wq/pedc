import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin } from 'lucide-react';
import { SITE_SETTINGS } from '../data/siteContent';
import { resolveImageUrl } from '../utils';

const Footer: React.FC = () => {
  const logoUrl = resolveImageUrl('https://drive.google.com/file/d/1Logo_ID_Placeholder/view?usp=sharing');

  return (
    <footer className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src={logoUrl} 
                alt="Positive Energy Dance Co. Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h2 className="text-2xl font-black tracking-tighter uppercase text-white">
                POSITIVE ENERGY <span className="text-primary-400">DANCE CO.</span>
              </h2>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              Based in San Diego. Delivering elite performance production, cinematic event experiences, and high-impact technical excellence globally.
            </p>
            <div className="flex gap-6">
              <a href={SITE_SETTINGS.instagram} className="text-zinc-400 hover:text-primary-400 transition-colors" aria-label="Instagram"><Instagram /></a>
              <a href={SITE_SETTINGS.facebook} className="text-zinc-400 hover:text-primary-400 transition-colors" aria-label="Facebook"><Facebook /></a>
              <a href={SITE_SETTINGS.youtube} className="text-zinc-400 hover:text-primary-400 transition-colors" aria-label="YouTube"><Youtube /></a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-primary-400 mb-8">Service Verticals</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
              <li><Link to="/lessons" className="hover:text-white transition-colors">Elite Development</Link></li>
              <li><Link to="/weddings" className="hover:text-white transition-colors">Signature Event Prep</Link></li>
              <li><Link to="/events-entertainment" className="hover:text-white transition-colors">Full-Service Production</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Elite Venues</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-primary-400 mb-8">Operational Presence</h4>
            <ul className="space-y-6 text-sm text-zinc-500 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
                <span>North Park HQ<br/>3925 Ohio St, San Diego, CA</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
                <span>Kearny Mesa Studio<br/>5035 Shawline St, San Diego, CA</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
                <span>
                  <strong className="text-zinc-300">Follow My Lead Performance Hub</strong><br/>
                  2775 N. Howard St. CDA Idaho<br/>
                  221 E. Railroad Ave Post Falls, Idaho
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-700 font-black uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Positive Energy Dance Company. Elite Excellence in San Diego.</p>
          <div className="flex gap-8">
            {/* Technical Credits Removed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;