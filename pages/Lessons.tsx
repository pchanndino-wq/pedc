import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, User, Zap, Clock, DollarSign } from 'lucide-react';
import { resolveImageUrl } from '../utils';

/**
 * 🖼️ IMAGE CONFIGURATION (GitHub Ready):
 * Place your images in assets/images/ and update the paths below.
 */
const LATIN_IMAGE = 'assets/images/latin-dance.jpg';
const BALLROOM_IMAGE = 'assets/images/ballroom-dance.jpg';
const COUNTRY_IMAGE = 'assets/images/country-dance.jpg';
const QUEEN_BEES_IMAGE = 'assets/images/queen-bees-social.jpg';

const StyleSection = ({ title, description, styles, imageUrl }: any) => (
  <div className="py-24 border-b border-white/5 last:border-0 group">
    <div className="grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5">
        <span className="text-primary-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Dance Style</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 group-hover:text-primary-400 transition-colors">{title}</h2>
        <p className="text-zinc-500 text-lg leading-relaxed mb-10">{description}</p>
        <div className="flex flex-wrap gap-3">
          {styles.map((s: string) => (
            <span key={s} className="px-5 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="aspect-video rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative bg-zinc-900 border border-white/5">
          <img 
            src={resolveImageUrl(imageUrl)} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1545229831-489e26e63289?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-400/20 group-hover:scale-110 transition-transform">
              <Zap className="text-primary-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Lessons: React.FC = () => {
  return (
    <div className="pt-40 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mb-24">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Join the Classes. <br/><span className="text-primary-400 text-6xl">Feel the Energy.</span></h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">
            From your very first basic step to high-level performance technicality. Our curriculum is designed to build confidence, skill, and connection.
          </p>
        </header>

        <StyleSection 
          title="Latin Dances"
          imageUrl={LATIN_IMAGE}
          description="Awaken the Sabor within and step into a dance style celebrated worldwide. Learn essential basics, practice technique drills, develop lead and follow styling, and master social dancing patterns."
          styles={['Salsa', 'Bachata', 'Cha-cha-cha', 'Rueda de Casino', 'Argentine Tango', 'Kizomba', 'Mambo']}
        />

        <StyleSection 
          title="Ballroom & Social Dances"
          imageUrl={BALLROOM_IMAGE}
          description="Elegance meets energy. Master the classic styles with a focus on practical social application and beautiful floor movement."
          styles={['Swing', 'Waltz', 'Tango (American & Argentine)', 'Hustle', 'Rumba', 'Fusion']}
        />

        <StyleSection 
          title="Country & Party Dances"
          imageUrl={COUNTRY_IMAGE}
          description="High energy, accessible, and perfect for events. We specialize in bringing the party to life through structured community dances."
          styles={['Line Dancing', 'Country Line Dancing', '2 Step', 'Country Swing', 'Blues', 'Rueda de Casino']}
        />

        {/* Queen Bees Highlight */}
        <section className="py-32">
          <div className="bg-zinc-950 p-12 md:p-20 rounded-[3rem] border border-primary-400/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400/5 rounded-bl-full group-hover:bg-primary-400/10 transition-all duration-700"></div>
            <div className="max-w-4xl relative z-10">
              <span className="text-primary-400 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Highlight Location</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">Sundays at <span className="text-primary-400">Queen Bees</span></h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 uppercase tracking-widest text-zinc-300">Sunday Schedule</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                          <span className="text-zinc-400 font-bold">Bachata</span>
                          <span className="text-primary-400 text-xs font-black uppercase">5:30 - 6:30 PM</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                          <span className="text-zinc-400 font-bold">Salsa</span>
                          <span className="text-primary-400 text-xs font-black uppercase">6:30 - 7:30 PM</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                          <span className="text-zinc-400 font-bold">Rueda Casino</span>
                          <span className="text-primary-400 text-xs font-black uppercase">7:30 - 8:30 PM</span>
                        </li>
                        <li className="flex justify-between items-center bg-primary-400/10 p-3 rounded-lg border border-primary-400/20">
                          <span className="text-white font-black uppercase tracking-widest text-[10px]">Social Dancing</span>
                          <span className="text-primary-400 text-xs font-black uppercase">8:30 PM - Late</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-6 pt-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center shrink-0">
                      <DollarSign className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 uppercase tracking-widest text-zinc-300">Admission</h4>
                      <p className="text-zinc-500 font-bold">$15 Cover at the door</p>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Includes all classes and social entrance</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/5">
                  <img 
                    src={resolveImageUrl(QUEEN_BEES_IMAGE)} 
                    className="w-full h-full object-cover" 
                    alt="Queen Bees Social"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private vs Group */}
        <section className="py-32 grid md:grid-cols-2 gap-12">
          <div className="p-16 rounded-[3rem] bg-zinc-900/30 border border-white/5 relative group overflow-hidden text-center">
            <Users className="text-primary-400 w-12 h-12 mb-8 mx-auto" />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Group Dynamics</h3>
            <p className="text-zinc-500 mb-8 leading-relaxed">Join a vibrant community of dancers. Perfect for social interaction, learning fundamentals, and having fun in a low-pressure environment.</p>
            <Link to="/locations" className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-xs">
              View All Locations <ArrowRight size={16} />
            </Link>
          </div>
          <div className="p-16 rounded-[3rem] bg-white text-black relative group overflow-hidden text-center shadow-2xl">
            <User className="text-black w-12 h-12 mb-8 mx-auto" />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Private Coaching</h3>
            <p className="text-zinc-800 mb-8 leading-relaxed">Pricing: $65 - $150. Lessons can be conducted with one or two instructors at our two studio locations or at your location.</p>
            <Link to="/book" className="inline-flex items-center gap-2 text-black font-black uppercase tracking-widest text-xs">
              Book Private Session <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lessons;