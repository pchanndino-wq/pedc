
import { Instructor, Event, SiteSettings } from '../types';

/**
 * 🖼️ IMAGE INSTRUCTIONS for GitHub Deployment:
 * 
 * 1. Put your images in the 'assets/images/' folder.
 * 2. Update 'photoUrl' to 'assets/images/your-filename.jpg'.
 */

export const INSTRUCTORS: Instructor[] = [
  {
    id: '1',
    name: 'Michael John Saltus',
    role: 'Director / Lead Choreographer',
    bio: `Dance Champion Michael John Saltus brings over 25 years of professional performance and technical expertise to the San Diego event scene. As the founder of Positive Energy, Michael has choreographed for world-class stages and trained thousands of dancers, specializing in technical precision and high-impact social movement.`,
    styles: ['Salsa (On1/On2)', 'Bachata', 'Cha-Cha', 'Swing', 'Wedding Choreography'],
    photoUrl: 'assets/images/michael-saltus.jpg', 
    instagram: 'https://www.instagram.com/michaeljsaltus/',
    showSocials: true,
    active: true,
    sortOrder: 1
  },
  {
    id: '2',
    name: 'Anjali Villarini',
    role: 'Lead Female Instructor / Professional Performer',
    bio: `A cornerstone of the Positive Energy technical team, Anjali is recognized for her elite styling and technical mastery. Her background in professional performance brings a sophisticated layer to her instruction, focusing on the intersection of grace and technical accuracy.`,
    styles: ['Ladies Styling', 'Salsa', 'Bachata Moderna', 'Social Technique'],
    photoUrl: 'assets/images/anjali.jpg', 
    instagram: 'https://www.instagram.com/anjali.villarini/',
    showSocials: true,
    active: true,
    sortOrder: 2
  },
  {
    id: '3',
    name: 'Ron',
    role: 'Senior Technical Specialist',
    bio: `Known for technical precision and high-energy social mastery, Ron specializes in breaking down complex patterns into accessible, high-impact movements. His focus on lead-and-follow dynamics makes him a favorite for students looking to excel in social environments.`,
    styles: ['Salsa On1/On2', 'Bachata Moderna', 'Turn Technique'],
    photoUrl: 'assets/images/ron.jpg', 
    instagram: 'https://instagram.com/ron_pedc',
    showSocials: true,
    active: true,
    sortOrder: 3
  },
  {
    id: '4',
    name: 'Sinai',
    role: 'Professional Instructor / Styling Specialist',
    bio: `Crystal brings a dynamic energy to the collective, specializing in the nuances of Latin movement. Her teaching philosophy emphasizes the 'sabor' (flavor) of dance, ensuring that students not only move correctly but feel the rhythm of the music.`,
    styles: ['Salsa', 'Bachata', 'Body Movement', 'Styling'],
    photoUrl: 'assets/images/sinai.jpg', 
    instagram: 'https://instagram.com/crystal_pedc',
    showSocials: true,
    active: true,
    sortOrder: 4
  },
  {
    id: '5',
    name: 'Kat & Chuck',
    role: 'Technical Specialist / Rueda Lead',
    bio: `An expert in timing and group dynamics, Joe leads many of our specialized Rueda de Casino sessions. His deep understanding of the historical and rhythmic roots of Salsa provides students with a comprehensive cultural and technical education.`,
    styles: ['Rueda de Casino', 'Cuban Salsa', 'Rhythm & Timing'],
    photoUrl: 'assets/images/kat-chuck.jpg', 
    instagram: 'https://instagram.com/joe_pedc',
    showSocials: true,
    active: true,
    sortOrder: 5
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Precision Series 2026',
    date: 'Jan 2026',
    time: '6:30 PM',
    location: 'Dance Headquarters',
    description: 'Elevate your technical proficiency with our signature training series.',
    flyerUrl: 'assets/images/event-flyer.jpg', 
    status: 'Published',
    featured: true
  }
];

export const SITE_SETTINGS: SiteSettings = {
  phone: '619-251-8863',
  email: 'positivesalsa2@yahoo.com',
  address: 'San Diego, CA 92101',
  instagram: 'https://instagram.com/positiveenergydance',
  facebook: 'https://facebook.com/positiveenergydance',
  tiktok: 'https://tiktok.com/@positiveenergydance',
  youtube: 'https://youtube.com/@positiveenergydance',
  showSocialIcons: true
};
