
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectGrid: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group flex flex-col bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-yellow-400 transition-colors">
            <div className="aspect-video relative overflow-hidden bg-zinc-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="bg-white text-zinc-900 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-tighter shadow-xl">View Details</button>
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl font-black text-zinc-900 group-hover:text-yellow-600 transition-colors uppercase tracking-tight">{project.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-white border border-zinc-200 rounded text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-800">
        <div className="space-y-2">
          <h4 className="text-2xl font-black text-white uppercase italic">Want to see more?</h4>
          <p className="text-zinc-400 font-medium">I have over 40+ private repositories of production-grade experiments.</p>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 px-8 py-4 rounded-xl font-black transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter">
          Request Full Portfolio
        </button>
      </div>
    </div>
  );
};

export default ProjectGrid;
