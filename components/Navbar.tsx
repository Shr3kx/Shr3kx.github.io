import React from "react";
import { AlertCircle } from "lucide-react";
import { WindowId } from "../types";

interface NavbarProps {
  onOpenWindow: (id: WindowId) => void;
  onToggleNowBuilding?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onOpenWindow,
  onToggleNowBuilding,
}) => {
  const menuItems = [
    { label: "Work", windowId: "projects" },
    { label: "Stack", windowId: "stack" },
    { label: "Education", windowId: "about" },
    { label: "Experience", windowId: "resume" },
    { label: "Terminal", windowId: "terminal" },
    { label: "Summary", windowId: "hero" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-[#e6e4d9] border-b border-zinc-400/30 z-[10000] flex items-center px-4 justify-between select-none">
      <div className="flex items-center gap-6">
        {/* Logo - Matching the PostHog-style icon in the screenshot */}
        <div
          className="flex flex-col gap-0.5 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onOpenWindow("hero")}
        >
          <div className="flex gap-0.5">
            <div className="w-1.5 h-3 bg-zinc-800 rotate-12" />
            <div className="w-1.5 h-4 bg-zinc-800 rotate-12" />
            <div className="w-1.5 h-5 bg-zinc-800 rotate-12" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map(item => (
            <button
              key={item.label}
              onClick={() => onOpenWindow(item.windowId as WindowId)}
              className="text-[15px] font-semibold text-zinc-800 hover:text-black transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Primary CTA */}
        <button
          onClick={() => onOpenWindow("contact")}
          className="bg-[#f3a033] hover:bg-[#e0912d] text-zinc-900 px-4 py-1.5 rounded-lg text-[14px] font-bold border border-zinc-900/10 shadow-sm active:translate-y-px transition-all"
        >
          Contact me
        </button>

        {/* Icons */}
        <div className="flex items-center gap-3 text-zinc-700">
          <button className="p-1.5 hover:bg-zinc-800/5 rounded-md transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button
            className="p-1.5 hover:bg-zinc-800/5 rounded-md transition-colors"
            onClick={onToggleNowBuilding}
          >
            <AlertCircle className="w-5 h-5" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center border border-zinc-400/40 rounded bg-zinc-100/50 hover:bg-zinc-100 transition-colors">
            <span className="text-xs font-bold text-zinc-500">1</span>
          </button>

          <button
            className="p-1 hover:bg-zinc-800/5 rounded-full transition-colors"
            onClick={() => onOpenWindow("hero")}
          >
            <div className="w-7 h-7 rounded-full border-2 border-zinc-700 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
