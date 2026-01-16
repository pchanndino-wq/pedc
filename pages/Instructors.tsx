import React from 'react';
import { Instagram, Facebook, Music2, ShieldCheck, Zap, Star, Users } from 'lucide-react';
import { INSTRUCTORS } from '../data/siteContent';
import { resolveImageUrl } from '../utils';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const Instructors: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 pb-32">
        <header className="mb-24">
          <SectionHeader 
            align="center"
            badge="Elite Expert Talent"
            title="The"
            highlight="Collective"
            description="World-class choreographers, performance artists, and technical experts dedicated to the Positive Energy standard of event excellence."
          />
        </header>

        <div className="space-y-32">
          {INSTRUCTORS.map((inst, idx) => (
            <div key={inst.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
              <div className="w-full lg:w-1/3 aspect-[3/4] overflow-hidden rounded-[2.5rem] relative grayscale hover:grayscale-0 transition-all duration-700 bg-zinc-900 border border-white/5 shadow-2xl shrink-0 group">
                <img 
                  src={resolveImageUrl(inst.photoUrl)} 
                  alt={inst.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                  <div>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">{inst.name}</h3>
                    <p className="text-primary-400 text-xs font-black uppercase tracking-[0.3em]">{inst.role}</p>
                  </div>
                  
                  <div className="flex gap-4">
                    {inst.instagram && (
                      <a href={inst.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-primary-400 transition-all hover:-translate-y-1">
                        <Instagram size={20} />
                      </a>
                    )}
                    {inst.facebook && (
                      <a href={inst.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-primary-400 transition-all hover:-translate-y-1">
                        <Facebook size={20} />
                      </a>
                    )}
                    {inst.tiktok && (
                      <a href={inst.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-primary-400 transition-all hover:-translate-y-1">
                        <Music2 size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="text-zinc-400 text-lg leading-relaxed font-medium space-y-6 whitespace-pre-line max-w-3xl">
                  {inst.bio}
                </div>
                
                <div className="pt-8">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-6 flex items-center gap-2">
                     <ShieldCheck size={14} className="text-primary-400" /> Technical Competencies
                   </h4>
                   <div className="flex flex-wrap gap-2">
                    {inst.styles.map(style => (
                      <span key={style} className="px-5 py-2 rounded-full border border-white/10 bg-zinc-950 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:border-primary-400/30 hover:text-white transition-colors">
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Standards Section */}
        <section className="mt-48 py-24 bg-zinc-950 rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeader 
                  badge="The Positive Standard"
                  title="Talent With"
                  highlight="Purpose"
                  description="Our experts are more than just performers. They are creative consultants, technical directors, and brand ambassadors dedicated to the success of your event."
                />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <Zap className="text-primary-400 shrink-0" size={24} />
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Technicality</h5>
                      <p className="text-zinc-500 text-xs">Decades of combined mastery in global dance disciplines.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Star className="text-primary-400 shrink-0" size={24} />
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Presence</h5>
                      <p className="text-zinc-500 text-xs">High-impact stage presence and crowd engagement skills.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="text-primary-400 shrink-0" size={24} />
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Pedagogy</h5>
                      <p className="text-zinc-500 text-xs">Specialized in breaking down complex movement for any level.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ShieldCheck className="text-primary-400 shrink-0" size={24} />
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Reliability</h5>
                      <p className="text-zinc-500 text-xs">Professional, punctual, and precision-focused execution.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 text-center bg-black/40 p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-xl">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Join the Collective</h3>
                <p className="text-zinc-500">Are you an elite performance artist or event technician looking for high-impact opportunities?</p>
                <Button to="/contact" variant="primary" className="mx-auto">Apply to Partner</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}; export default Instructors;