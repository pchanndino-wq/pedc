import React from 'react';
import { MapPin, Phone, Zap, ChevronRight, Users, Building2, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import { resolveImageUrl } from '../utils';

/**
 * GITHUB IMAGE LOADING:
 * 1. Place your image in: assets/images/hero-bg.jpg
 * 2. The code below will find it automatically.
 */
const HERO_IMAGE_PATH = 'assets/images/hero-bg.jpg';

const Home: React.FC = () => {
  const heroImageUrl = resolveImageUrl(HERO_IMAGE_PATH);

  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl} 
            className="w-full h-full object-cover opacity-60 scale-100 animate-[kenburns_30s_ease-in-out_infinite]"
            alt="Premier Event Entertainment"
            onError={(e) => { 
              // Fallback to high-end professional placeholder if local file is missing
              e.currentTarget.src = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1920"; 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-400/10 border border-primary-400/30 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-xl animate-in fade-in slide-in-from-left-4 duration-1000">
              <Zap size={14} className="fill-primary-400" />
              Premier Event Entertainment & Production
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-black mb-8 leading-[0.85] tracking-tighter drop-shadow-2xl animate-in fade-in slide-in-from-left-6 duration-1000 delay-100">
              Partner With <br />
              <span className="text-primary-400 italic">Positive Energy</span>
            </h1>
            
            <p className="max-w-2xl text-xl md:text-2xl text-zinc-100 mb-12 leading-relaxed font-light drop-shadow-lg animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              An elite professional entertainment agency delivering world-class event production, technical choreography, and creative performance solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Button to="/events-entertainment" showArrow>Explore Services</Button>
              <Button to="/book" variant="ghost">Book for Event</Button>
            </div>

            <div className="inline-flex items-center gap-6 bg-black/60 p-1.5 pr-8 rounded-full border border-white/10 backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-primary-400 flex items-center justify-center text-black shadow-lg">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.5em] text-primary-400/70">Production Consultation</span>
                <a href="tel:6192518863" className="text-xl font-black uppercase tracking-[0.1em] hover:text-primary-400 transition-colors">(619) 251-8863</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader 
                badge="Global Presence"
                title="Delivering A"
                highlight="Positive Experience"
                description="Headquartered in San Diego and available for global tours. Positive Energy provides high-impact entertainment solutions, from award-winning choreography to elite technical production."
              />
              <div className="mt-12 space-y-6">
                <div className="p-8 rounded-3xl bg-black border border-white/5 flex gap-6">
                  <MapPin className="text-primary-400 shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Regional Operations</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      <strong>Follow My Lead Performance Hub:</strong><br />
                      2775 N. Howard St. CDA Idaho<br />
                      221 E. Railroad Ave Post Falls, Idaho
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5">
               <img 
                src={resolveImageUrl('assets/images/global-presence.jpg')} 
                className="w-full h-full object-cover" 
                alt="Positive Energy Network"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1545229831-489e26e63289?auto=format&fit=crop&q=80&w=800"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Hook */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            align="center"
            title="Elite Services."
            highlight="Unmatched Energy."
            description="Specializing in high-end brand entertainment, technical choreography, and professional training across the nation."
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceLink to="/lessons" icon={Users} title="Performance Strategy" desc="Technical training and creative consulting for performers." />
            <ServiceLink to="/events-entertainment" icon={Building2} title="Event Production" desc="Professional company for large-scale corporate galas." />
            <ServiceLink to="/weddings" icon={Heart} title="Signature Events" desc="Bespoke choreographies for high-net-worth celebrations." />
            <ServiceLink to="/book" icon={User} title="Technical Coaching" desc="One-on-one professional coaching and development." />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

const ServiceLink = ({ to, icon: Icon, title, desc }: any) => (
  <Link to={to} className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all hover:-translate-y-2">
    <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-400/20 transition-colors">
      <Icon className="text-primary-400 w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-zinc-500 text-sm mb-8">{desc}</p>
    <div className="flex items-center gap-2 text-primary-400 font-black text-xs uppercase tracking-widest">
      Details <ChevronRight className="w-4 h-4" />
    </div>
  </Link>
);

export default Home;