import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  badge, 
  title, 
  highlight, 
  description, 
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-4xl ${className}`}>
      {badge && (
        <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[1.1]">
        {title} {highlight && <span className="text-primary-400 italic">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;