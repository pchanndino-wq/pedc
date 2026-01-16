import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '',
  showArrow = false
}) => {
  const baseStyles = "px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary-400 text-black hover:bg-white shadow-primary-900/20",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/20",
    white: "bg-white text-black hover:bg-primary-400"
  };

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={14} />}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={combinedClasses}>{content}</Link>;
  if (href) return <a href={href} className={combinedClasses}>{content}</a>;
  return <button onClick={onClick} className={combinedClasses}>{content}</button>;
};

export default Button;