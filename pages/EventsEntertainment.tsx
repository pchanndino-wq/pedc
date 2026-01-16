import React, { useState } from 'react';
import { Building2, Camera, Music, Zap, ArrowRight, Play, Star, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resolveImageUrl } from '../utils';

/**
 * 🎬 CHANGE VIDEO HERE:
 * 
 * 1. For YouTube: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
 * 2. For Vimeo:  'https://player.vimeo.com/video/YOUR_VIDEO_ID'
 * 3. For Local MP4: 'assets/video/production-reel.mp4' (Upload to GitHub)
 */
const PRODUCTION_REEL_URL = 'https://youtu.be/LVhUmyU3k5Q'; 

/**
 * 🖼️ CHANGE BACKGROUND IMAGE:
 * Place your image in: assets/images/experience-reel-bg.jpg
 */
const REEL_BACKGROUND_IMAGE = 'assets/images/experience-reel-bg.jpg';

const ServiceCard = ({ icon: Icon, title, description, features }: any) => (
  <div className="p-12 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/20 transition-all group">
    <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-400/20 transition-colors">
      <Icon className="text-primary-400 w-8 h-8" />
    </div>
    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{title}</h3>
    <p className="text-zinc-500 mb-8 leading-relaxed">{description}</p>
    <ul className="space-y-3 mb-10">
      {features.map((f: string) => (
        <li key={f} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
          <Zap size={10} className="text-primary-400" /> {f}
        </li>
      ))}
    </ul>
    <Link to="/book" className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors">
      Request Proposal <ArrowRight size={14} />
    </Link>
  </div>
);

const EventsEntertainment: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const bgImageUrl = resolveImageUrl(REEL_BACKGROUND_IMAGE);

  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-24">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Event Solutions</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">The <span className="text-primary-400 italic">Positive Energy Experience</span></h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">
            A full-service elite entertainment agency. We provide breathtaking brand entertainment, expert event production, and technical creative direction that defines the moment.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <ServiceCard 
            icon={Building2}
            title="Corporate Brand Strategy"
            description="Elevate your brand with interactive performance workshops and team building. We transform corporate environments into high-energy hubs of engagement."
            features={['Strategic Workshops', 'Performance Showcases', 'Engagement Activations', 'Leadership Development']}
          />
          <ServiceCard 
            icon={Star}
            title="Signature Productions"
            description="From luxury anniversaries to high-profile product launches, we bring the experts, the technical precision, and the themed energy to make your event legendary."
            features={['Custom Themed Concepts', 'Performance Activations', 'Technical Hosting', 'Signature Launches']}
          />
          <ServiceCard 
            icon={Music}
            title="Elite Event Sound"
            description="Our world-class DJs specialize in atmospheric control. We know exactly how to read a room, encourage participation, and maintain peak energy."
            features={['Multi-Genre Specialization', 'Technical Crowd Work', 'Premium Audio Systems', 'Custom Cinematic Lighting']}
          />
          <ServiceCard 
            icon={Camera}
            title="Next-Gen 360 Studio"
            description="Capture every angle of your event. Our premium 360 booth experience is the perfect technical takeaway for instant social sharing."
            features={['Instant Social Amplification', 'Custom Motion Overlays', 'Cinematic Lighting', 'Expert Attendants']}
          />
        </div>

        {/* Video Production Reel Section */}
        <section className="relative rounded-[3rem] overflow-hidden aspect-[21/9] bg-zinc-900 flex items-center justify-center group mb-40 border border-white/5 shadow-2xl">
          <img 
            src={bgImageUrl} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" 
            alt="Positive Energy Atmosphere"
            onError={(e) => {
              // Fallback if local file not uploaded yet
              e.currentTarget.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920";
            }}
          />
          <div className="relative z-10 text-center">
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-24 h-24 bg-primary-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform mb-6 group-active:scale-95"
            >
              <Play className="text-black fill-black ml-1" />
            </button>
            <p className="text-white font-black uppercase tracking-[0.4em] text-xs">Watch The Production Reel</p>
          </div>
        </section>

        {/* Video Modal - The code handles the source from the constant above */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-10 right-10 text-white hover:text-primary-400 transition-colors z-[210]"
            >
              <X size={40} />
            </button>
            <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black animate-in zoom-in-95 duration-500">
              {PRODUCTION_REEL_URL.includes('youtube') || PRODUCTION_REEL_URL.includes('vimeo') ? (
                <iframe 
                  src={`${PRODUCTION_REEL_URL}?autoplay=1`}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Production Reel"
                />
              ) : (
                <video 
                  src={PRODUCTION_REEL_URL} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsEntertainment;