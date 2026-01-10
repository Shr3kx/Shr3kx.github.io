
import { DesktopIconDef, Project, WindowId, NavItem } from './types';

export const DESKTOP_ICONS: DesktopIconDef[] = [
  { id: 'hero', label: 'summary.mdx', iconType: 'file' },
  { id: 'projects', label: 'Projects', iconType: 'folder' },
  { id: 'stack', label: 'Stack.json', iconType: 'calc' },
  { id: 'resume', label: 'experience.mdx', iconType: 'file' },
  { id: 'demo', label: 'project_map.mov', iconType: 'media' },
  { id: 'about', label: 'Education', iconType: 'file' },
  { id: 'contact', label: 'Contact', iconType: 'mail' },
  { id: 'terminal', label: 'Terminal', iconType: 'chat' },
  { id: 'signup', label: 'GitHub ↗', iconType: 'compass' },
];

export const PROJECTS: Project[] = [
  {
    id: 'socialping',
    title: 'SocialPing',
    description: 'Full-stack social platform with real-time posts, likes, and notifications via Socket.io and JWT auth.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  },
  {
    id: 'projectmap',
    title: 'ProjectMap',
    description: 'AI-powered roadmap generator with interactive chatbot and dynamic visualization using React Flow.',
    tags: ['Next.js', 'TypeScript', 'ConvexDB', 'Clerk'],
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  },
  {
    id: 'ninjasketch',
    title: 'Ninja Sketch',
    description: 'Collaborative whiteboard supporting drawing, text, shapes, and export using Canvas API.',
    tags: ['Next.js', 'Canvas API', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  },
  {
    id: 'scribo',
    title: 'Scribo',
    description: 'Minimal Notion-inspired note-taking app with real-time markdown editing and fast sync.',
    tags: ['Next.js', 'TypeScript', 'ConvexDB', 'Edgestore'],
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  },
  {
    id: 'odysseyui',
    title: 'Odyssey UI',
    description: 'Animated UI library focusing on motion-rich components and interactive transitions.',
    tags: ['Framer Motion', 'GSAP', 'Tailwind', 'shadcn'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  }
];

export const INITIAL_WINDOWS: Record<WindowId, { title: string; size: { width: string; height: string }; defaultOpen: boolean }> = {
  hero: { title: 'summary.mdx', size: { width: '800px', height: '700px' }, defaultOpen: false },
  projects: { title: 'Project Explorer', size: { width: '900px', height: '600px' }, defaultOpen: false },
  stack: { title: 'Tech Stack', size: { width: '600px', height: '500px' }, defaultOpen: false },
  resume: { title: 'experience.mdx', size: { width: '750px', height: '700px' }, defaultOpen: false },
  about: { title: 'Education', size: { width: '600px', height: '450px' }, defaultOpen: false },
  contact: { title: 'Contact Information', size: { width: '450px', height: '550px' }, defaultOpen: false },
  terminal: { title: 'shrey@portfolio: ~', size: { width: '700px', height: '400px' }, defaultOpen: true },
  demo: { title: 'project_map_demo.mov', size: { width: '800px', height: '550px' }, defaultOpen: false },
  // Unused in desktop icons but kept for type safety
  pricing: { title: 'Pricing', size: { width: '500px', height: '400px' }, defaultOpen: false },
  customers: { title: 'Customers', size: { width: '600px', height: '500px' }, defaultOpen: false },
  docs: { title: 'Docs', size: { width: '700px', height: '600px' }, defaultOpen: false },
  signup: { title: 'Sign Up', size: { width: '400px', height: '300px' }, defaultOpen: false },
};

export const NAV_LINKS: NavItem[] = [
  {
    label: 'Explore',
    items: [
      { label: 'Work', windowId: 'projects' },
      { label: 'Education', windowId: 'about' },
      { label: 'Stack', windowId: 'stack' },
    ],
  },
  {
    label: 'Experience',
    items: [
      { label: 'Work History', windowId: 'resume' },
      { label: 'Demo Reel', windowId: 'demo' },
    ],
  },
  { label: 'Terminal', windowId: 'terminal' },
];
