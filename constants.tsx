import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Music2, 
  Calendar, 
  Users, 
  MapPin, 
  Heart, 
  Star, 
  Camera,
  Mail,
  Phone,
  Clock,
  Zap
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Events & Entertainment', href: '/events-entertainment' },
  { label: 'Locations & Schedule', href: '/locations' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_CATEGORIES = [
  'Salsa Lessons',
  'Bachata Lessons',
  'Tango Lessons',
  'Swing Dance',
  'Line Dancing',
  'Wedding Choreography',
  'Corporate Events',
  'Private Lessons',
  'DJ Services',
  '360 Photo Booth'
];

export const SCHEDULE_DATA = [
  {
    location: "Queen Bee’s North Park",
    address: "3925 Ohio St, San Diego, CA 92104",
    time: "Every Sunday",
    classes: [
      { time: "5:30 PM", name: "Bachata" },
      { time: "6:30 PM", name: "Salsa" },
      { time: "7:30 PM", name: "Rueda de Casino" },
      { time: "8:30 PM", name: "Social Dancing Until Late" }
    ],
    pricing: [
      { count: "Full Experience", price: "$15" }
    ],
    link: "https://maps.google.com/?q=3925+Ohio+St,+San+Diego,+CA+92104"
  },
  {
    location: "Dance Headquarters – Group Classes",
    address: "5035 Shawline St, San Diego, CA 92111",
    time: "Every Thursday",
    classes: [
      { time: "6:30 PM", name: "Salsa" },
      { time: "7:30 PM", name: "Bachata" },
      { time: "8:30 PM", name: "Cha-Cha" }
    ],
    pricing: [
      { count: "1 Class", price: "$15" },
      { count: "2 Classes", price: "$20" },
      { count: "3 Classes", price: "$25" }
    ],
    link: "https://maps.google.com/?q=5035+Shawline+St,+San+Diego,+CA+92111"
  }
];