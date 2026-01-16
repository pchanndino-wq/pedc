
// This file is now a static data provider to support legacy imports if they exist.
// Dynamic CMS features and localStorage persistence have been removed.

import { SITE_SETTINGS, INSTRUCTORS, EVENTS } from './data/siteContent';

export const db = {
  settings: {
    get: async () => SITE_SETTINGS,
    // Added data parameter to resolve 'Expected 0 arguments, but got 1' error in Dashboard.tsx
    update: async (data: any) => true
  },
  leads: {
    submit: async (data: any) => {
      console.log('Static lead submission:', data);
      return true;
    },
    // Added getAll method to resolve Property 'getAll' does not exist error in Dashboard.tsx
    getAll: async () => []
  },
  // Added instructors object to resolve Property 'instructors' does not exist error in Dashboard.tsx
  instructors: {
    getAdminAll: async () => INSTRUCTORS,
    save: async (data: any) => true,
    delete: async (id: string) => true
  },
  // Added events object to resolve Property 'events' does not exist error in Dashboard.tsx
  events: {
    getAdminAll: async () => EVENTS,
    save: async (data: any) => true,
    delete: async (id: string) => true
  }
};

export const auth = {
  isAuthenticated: () => false,
  // Added email and password parameters to resolve 'Expected 0 arguments, but got 2' error in Login.tsx
  login: async (email?: string, password?: string) => { throw new Error('Portal Disabled') },
  logout: () => {}
};
