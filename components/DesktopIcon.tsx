
import React from 'react';
import { DesktopIconDef } from '../types';

interface DesktopIconProps {
  icon: DesktopIconDef;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, onClick }) => {
  const renderIcon = () => {
    switch (icon.iconType) {
      case 'file':
        return (
          <div className="w-10 h-12 bg-white border-2 border-zinc-800 rounded-sm relative shadow-sm">
            <div className="absolute top-0 right-0 w-3 h-3 bg-zinc-200 border-l-2 border-b-2 border-zinc-800" />
            <div className="mt-4 px-1 space-y-1">
              <div className="h-0.5 bg-zinc-300 w-full" />
              <div className="h-0.5 bg-zinc-300 w-3/4" />
              <div className="h-0.5 bg-zinc-300 w-full" />
            </div>
          </div>
        );
      case 'folder':
        return (
          <div className="w-12 h-10 bg-[#f4d48c] border-2 border-zinc-800 rounded-sm relative shadow-sm">
            <div className="absolute -top-1.5 left-0 w-5 h-2 bg-[#f4d48c] border-2 border-zinc-800 border-b-0 rounded-t-sm" />
          </div>
        );
      case 'calc':
        return (
          <div className="w-10 h-12 bg-zinc-100 border-2 border-zinc-800 rounded-md p-1.5 grid grid-cols-2 gap-1 shadow-sm">
            <div className="col-span-2 h-2 bg-zinc-800 rounded-sm" />
            <div className="h-2 bg-zinc-300" />
            <div className="h-2 bg-zinc-300" />
            <div className="h-2 bg-zinc-300" />
            <div className="h-2 bg-zinc-300" />
          </div>
        );
      case 'media':
        return (
          <div className="w-12 h-10 bg-black border-2 border-zinc-800 rounded-sm flex items-center justify-center shadow-sm relative overflow-hidden">
             <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/seed/demo/100/100')]" />
             <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent z-10" />
          </div>
        );
      case 'mail':
        return (
          <div className="w-12 h-8 bg-zinc-50 border-2 border-zinc-800 rounded-sm relative shadow-sm">
            <div className="absolute inset-0 border-t-2 border-zinc-800 mt-1" style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }} />
          </div>
        );
      case 'chat':
        return (
          <div className="w-12 h-10 flex flex-col items-center">
            <div className="w-10 h-8 bg-white border-2 border-zinc-800 rounded-lg relative shadow-sm">
               <div className="absolute -bottom-1.5 left-2 w-3 h-3 bg-white border-r-2 border-b-2 border-zinc-800 rotate-45" />
            </div>
          </div>
        );
      case 'compass':
        return (
          <div className="w-10 h-10 rounded-full bg-white border-2 border-zinc-800 flex items-center justify-center shadow-sm relative">
             <div className="w-1 h-8 bg-red-500 rounded-full rotate-45 absolute" />
             <div className="w-1 h-8 bg-zinc-300 rounded-full -rotate-[135deg] absolute origin-center" />
             <div className="w-2 h-2 rounded-full bg-zinc-800 z-10" />
          </div>
        );
      default:
        return <div className="w-10 h-10 bg-zinc-400" />;
    }
  };

  return (
    <div 
      className="flex flex-col items-center gap-1.5 cursor-pointer group w-24 py-3"
      onClick={onClick}
    >
      <div className="transition-transform group-hover:scale-110 active:scale-95">
        {renderIcon()}
      </div>
      <span className="text-[11px] font-bold text-zinc-900 bg-white/0 group-hover:bg-blue-600 group-hover:text-white px-1.5 py-0.5 rounded transition-colors desktop-icon-label whitespace-nowrap">
        {icon.label}
      </span>
    </div>
  );
};

export default DesktopIcon;
