
import React, { useState } from 'react';
import { Camera, Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { resolveImageUrl } from '../utils';

/**
 * 🖼️ GALLERY CONFIGURATION:
 * 
 * 1. url: The path to your image (e.g., 'assets/images/photo1.jpg')
 * 2. link: (Optional) A website or video URL if you want the image to be clickable
 * 3. cat: Category for filtering ('Lessons', 'Events', or 'Weddings')
 */
const GALLERY_ITEMS = [
  { 
    id: 1, 
    cat: 'Lessons', 
    url: 'assets/images/gallery-1.jpg', 
    link: 'https://instagram.com/positiveenergydance' 
  },
  { 
    id: 2, 
    cat: 'Events', 
    url: 'assets/images/gallery-2.jpg', 
    link: '' // Leave empty if you don't want a link
  },
  { 
    id: 3, 
    cat: 'Weddings', 
    url: 'assets/images/gallery-3.jpg', 
    link: '' 
  },
  { 
    id: 4, 
    cat: 'Lessons', 
    url: 'assets/images/gallery-4.jpg', 
    link: '' 
  },
  { 
    id: 5, 
    cat: 'Events', 
    url: 'assets/images/gallery-5.jpg', 
    link: '' 
  },
  { 
    id: 6, 
    cat: 'Weddings', 
    url: 'assets/images/gallery-6.jpg', 
    link: '' 
  },
  { 
    id: 7, 
    cat: 'Lessons', 
    url: 'assets/images/gallery-7.jpg', 
    link: '' 
  },
  { 
    id: 8, 
    cat: 'Events', 
    url: 'assets/images/gallery-8.jpg', 
    link: '' 
  },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Lessons' | 'Events' | 'Weddings'>('all');

  const filtered = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === filter);

  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-20">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Visual Journey</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10">Photo <span className="text-primary-400">Vault</span></h1>
          
          <div className="flex flex-wrap gap-4">
            {['all', 'Lessons', 'Events', 'Weddings'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${filter === cat ? 'bg-primary-400 border-primary-400 text-black shadow-lg shadow-primary-400/20' : 'border-white/10 text-zinc-500 hover:text-white hover:border-white/20 bg-zinc-900/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => {
            const Content = (
              <div className="group relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                <img 
                  src={resolveImageUrl(item.url)} 
                  className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100`} 
                  alt={`${item.cat} gallery`}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=400";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border border-primary-400/50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <ImageIcon size={18} className="text-primary-400" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">{item.cat}</span>
                    </div>
                    {item.link && <ExternalLink size={14} className="text-primary-400" />}
                  </div>
                </div>
              </div>
            );

            return item.link ? (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                {Content}
              </a>
            ) : (
              <div key={item.id}>{Content}</div>
            );
          })}
        </div>

        <section className="mt-40 text-center border-t border-white/5 pt-24">
          <p className="text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px] mb-12">Follow the Energy</p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center gap-6 group cursor-default">
              <div className="w-20 h-20 rounded-[1.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-primary-400/50 group-hover:bg-primary-400/5 transition-all duration-500">
                <Play className="text-primary-400 w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-primary-400 transition-colors">Watch Reels</span>
            </div>
            <div className="flex flex-col items-center gap-6 group cursor-default">
              <div className="w-20 h-20 rounded-[1.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-primary-400/50 group-hover:bg-primary-400/5 transition-all duration-500">
                <Camera className="text-primary-400 w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-primary-400 transition-colors">Instagram Feed</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
