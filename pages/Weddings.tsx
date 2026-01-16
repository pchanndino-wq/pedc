import React from 'react';
import { CheckCircle2, Zap, Heart, MapPin, Globe, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resolveImageUrl } from '../utils';

/**
 * 🖼️ IMAGE CONFIGURATION (GitHub Ready):
 * Place your wedding hero image in assets/images/wedding-hero.jpg
 */
const WEDDING_HERO_IMAGE = 'assets/images/wedding-hero.jpg';

const Weddings: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-6xl mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Celebrate Your Love</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Make Your Wedding Dance <span className="text-primary-400 italic">Unforgettable</span></h1>
            <p className="text-zinc-500 text-xl leading-relaxed max-w-xl mb-10">
              We create personalized wedding choreographies that celebrate the unique bond between you and your partner. No prior dance experience is needed.
            </p>
            <div className="inline-block bg-primary-400/10 border border-primary-400/30 px-6 py-2 rounded-full text-primary-400 font-black uppercase tracking-widest text-xs">
              Pricing for privates: $65 - $150
            </div>
          </div>
          <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5 relative group">
            <img 
              src={resolveImageUrl(WEDDING_HERO_IMAGE)} 
              alt="Professional Wedding Choreography"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-40 items-stretch">
          <div className="bg-zinc-900/30 border border-white/5 p-12 rounded-[2.5rem] flex flex-col hover:border-primary-400/20 transition-all">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">The Starter</h3>
            <div className="text-3xl font-black mb-10 uppercase tracking-tighter text-primary-400">First Dance Forever</div>
            <ul className="space-y-5 mb-12 flex-1">
              {[
                '5-8 Private coaching sessions',
                'Basic training in dance of choice',
                'Simple, safe & easy tricks and patterns',
                'Personalized choreography for your song',
                'Guidance for practice at home'
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-400 font-medium">
                  <CheckCircle2 size={16} className="text-primary-400 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book" className="w-full text-center py-4 rounded-xl border border-white/10 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Get Started</Link>
          </div>

          <div className="bg-primary-400 text-black p-12 rounded-[2.5rem] flex flex-col scale-105 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-bl-full"></div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Premier Choice</h3>
            <div className="text-3xl font-black mb-10 uppercase tracking-tighter">The Perfect Pair</div>
            <ul className="space-y-5 mb-12 flex-1">
              {[
                '5-8 Technical coaching sessions',
                'Advanced performance choreography',
                'Signature tricks, styling, and jaw-dropping moves',
                'Emphasis on precision & floor navigation',
                'Full dress rehearsal direction'
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-black font-black uppercase tracking-widest">
                  <Zap size={16} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book" className="w-full text-center py-4 rounded-xl bg-black text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Book Now</Link>
          </div>

          <div className="bg-zinc-900/30 border border-white/5 p-12 rounded-[2.5rem] flex flex-col hover:border-primary-400/20 transition-all">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Elite Production</h3>
            <div className="text-3xl font-black mb-10 uppercase tracking-tighter text-primary-400">Happily Ever After</div>
            <ul className="space-y-4 mb-12 flex-1">
              {[
                'Customized private coaching sessions',
                'Parent/Bridal party performance prep',
                'Professional music production & editing',
                'Master of Ceremonies & DJ services',
                'Premium 360 Video Experience',
                'Full day-of artistic coordination'
              ].map((item) => (
                <li key={item} className="flex gap-3 text-xs text-zinc-400 font-medium">
                  <CheckCircle2 size={14} className="text-primary-400 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book" className="w-full text-center py-4 rounded-xl border border-white/10 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Inquire Now</Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <div className="text-center group">
            <MapPin className="text-primary-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h4 className="font-black uppercase tracking-widest mb-4">Two Locations</h4>
            <p className="text-zinc-500 text-sm">Instruction conducted at two professional studio locations in San Diego.</p>
          </div>
          <div className="text-center group">
            <Globe className="text-primary-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h4 className="font-black uppercase tracking-widest mb-4">We Come To You</h4>
            <p className="text-zinc-500 text-sm">Available for international travel or virtual coaching sessions worldwide.</p>
          </div>
          <div className="text-center group">
            <Users className="text-primary-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h4 className="font-black uppercase tracking-widest mb-4">Master Instruction</h4>
            <p className="text-zinc-500 text-sm">Sessions provided with single or dual instructors for comprehensive technical coverage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weddings;