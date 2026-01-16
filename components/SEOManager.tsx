import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOManager = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    /* Standardized SEO titles for premium event positioning */
    const titles: Record<string, string> = {
      '/': 'Positive Energy Dance Company | Premier Event Entertainment San Diego',
      '/lessons': 'Professional Dance Instruction San Diego | Salsa, Bachata & More',
      '/weddings': 'Wedding Choreography & Event Production San Diego | First Dance Elite',
      '/events-entertainment': 'Elite Corporate Entertainment & DJ Services | San Diego',
      '/locations': 'Performance Venues & Schedule | North Park San Diego',
      '/instructors': 'Master Choreographers & Instructors | Meet the Team',
      '/gallery': 'Visual Portfolio | Positive Energy Dance Company',
      '/reviews': 'Client Testimonials | Professional Excellence in San Diego',
      '/book': 'Book a Consultation | Positive Energy Dance Company',
      '/contact': 'Contact Us | Professional Event Production San Diego',
    };

    const descriptions: Record<string, string> = {
      '/': 'San Diego\'s premier full-service entertainment company specializing in event production, professional dance performances, DJ services, and choreography.',
      '/lessons': 'Master the art of Salsa, Bachata, and Tango with professional instruction led by Michael Saltus and world-class performers in San Diego.',
      '/weddings': 'Make your wedding unforgettable with bespoke choreography, professional music production, and expert event coordination.',
      '/events-entertainment': 'Premium entertainment solutions for corporate events, team building, and themed galas including professional DJs and 360 photo booth experiences.',
    };

    document.title = titles[pathname] || 'Positive Energy Dance Company';
    
    // Update Meta Description dynamically for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[pathname] || 'Positive Energy Dance Company - Professional Entertainment and Event Production in San Diego.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = descriptions[pathname] || 'Positive Energy Dance Company - Professional Entertainment and Event Production in San Diego.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [pathname]);
  
  return null;
};

export default SEOManager;
