"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Window from "@/components/Window";
import Navbar from "@/components/Navbar";
import HeroContent from "@/components/HeroContent";
import ProjectGrid from "@/components/ProjectGrid";
import Terminal from "@/components/Terminal";
import DesktopIcon from "@/components/DesktopIcon";
import { WindowId, WindowState } from "@/types";
import { INITIAL_WINDOWS, DESKTOP_ICONS } from "@/constants";

const NOW_BUILDING = {
  title: "Portfolio OS",
  description: "Building an interactive portfolio experience",
  link: "#",
  progress: 65,
};

export default function Home() {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(() => {
    const initialState = {} as Record<WindowId, WindowState>;
    let initialZ = 100;

    // Use fixed positions initially to avoid hydration mismatch
    (
      Object.entries(INITIAL_WINDOWS) as [
        WindowId,
        (typeof INITIAL_WINDOWS)["hero"]
      ][]
    ).forEach(([id, config]) => {
      initialState[id] = {
        id: id,
        title: config.title,
        isOpen: config.defaultOpen,
        isMaximized: false,
        zIndex: config.defaultOpen ? initialZ++ : 1,
        position: {
          x: 200, // Fixed initial position
          y: 80, // Fixed initial position
        },
        size: config.size,
      };
    });
    return initialState;
  });

  const [topZIndex, setTopZIndex] = useState(200);
  const [isMounted, setIsMounted] = useState(false);
  const [showNowBuilding, setShowNowBuilding] = useState(true);

  // Randomize positions only on client side after mount
  useEffect(() => {
    setIsMounted(true);
    setWindows(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(id => {
        updated[id as WindowId] = {
          ...updated[id as WindowId],
          position: {
            x: 200 + Math.random() * 200,
            y: 80 + Math.random() * 100,
          },
        };
      });
      return updated;
    });
  }, []);

  const focusWindow = useCallback(
    (id: WindowId) => {
      setWindows(prev => {
        const currentZ = prev[id].zIndex;
        if (currentZ === topZIndex && prev[id].isOpen) return prev;

        const newZ = topZIndex + 1;
        setTopZIndex(newZ);

        return {
          ...prev,
          [id]: { ...prev[id], zIndex: newZ, isOpen: true },
        };
      });
    },
    [topZIndex]
  );

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  }, []);

  const openWindow = useCallback(
    (id: WindowId) => {
      if (id === "signup") {
        window.open("https://github.com/Shr3kx", "_blank");
        return;
      }
      focusWindow(id);
    },
    [focusWindow]
  );

  const toggleNowBuilding = useCallback(() => {
    setShowNowBuilding(prev => !prev);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative select-none">
      {/* Top Navbar */}
      <Navbar
        onOpenWindow={openWindow}
        onToggleNowBuilding={toggleNowBuilding}
      />
      <div className="fixed bottom-0 right-0 w-[60vw] h-[60vh] max-w-[800px] max-h-[800px] pointer-events-none z-0 select-none flex items-end justify-end p-4">
        <img
          src="/keyboard_garden.png"
          alt="PostHog Garden Illustration"
          className="w-full h-full object-contain object-right-bottom transition-opacity duration-1000"
        />
      </div>
      {/* Desktop Icons */}
      <div className="absolute top-20 left-8 flex flex-col flex-wrap h-[calc(100vh-140px)] gap-y-2 z-10 animate-desktop">
        {DESKTOP_ICONS.map(icon => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            onClick={() => openWindow(icon.id)}
          />
        ))}
      </div>

      {/* Now Building Widget */}
      {showNowBuilding && (
        <div className="absolute top-24 right-8 z-15 animate-fade-in">
          <div className="border border-zinc-400/60 p-4 flex flex-col gap-3 transition-colors duration-300 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm group">
            <div className="flex justify-between items-center border-b pb-2 border-dashed border-zinc-400/50">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-700">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                <button
                  onClick={() => setShowNowBuilding(false)}
                  className="w-4 h-4 rounded-full bg-zinc-200 hover:bg-zinc-300 transition-colors flex items-center justify-center group/close"
                >
                  <X
                    className="w-2.5 h-2.5 text-zinc-700 opacity-0 group-hover/close:opacity-100 transition-opacity"
                    strokeWidth={3}
                  />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold leading-tight mb-1 transition-colors duration-300 text-zinc-900">
                {NOW_BUILDING.title}
              </h4>
              <p className="text-xs font-sans italic leading-relaxed transition-colors duration-300 text-zinc-700">
                {NOW_BUILDING.description}
              </p>
            </div>

            <div className="flex flex-col gap-1 mt-1">
              <div className="h-1.5 w-full bg-zinc-300 rounded-sm overflow-hidden">
                <div className="h-full bg-zinc-700 w-[65%] rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <span className="font-mono text-[8px] text-right text-zinc-600">
                65% Complete
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Windows Overlay */}
      <div className="fixed inset-0 pointer-events-none pt-14 z-20">
        {/* HERO / SUMMARY WINDOW */}
        <Window
          window={windows.hero}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <HeroContent onOpenProjects={() => openWindow("projects")} />
        </Window>

        {/* PROJECTS WINDOW */}
        <Window
          window={windows.projects}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <div className="max-w-5xl mx-auto py-6">
            <h2 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter italic mb-8 border-b-4 border-[#f3a033] inline-block">
              Engineering Portfolio
            </h2>
            <ProjectGrid />
          </div>
        </Window>

        {/* TERMINAL WINDOW */}
        <Window
          window={windows.terminal}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <Terminal />
        </Window>

        {/* EDUCATION WINDOW */}
        <Window
          window={windows.about}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <div className="space-y-6 max-w-2xl mx-auto py-8">
            <h2 className="text-4xl font-black text-zinc-900 uppercase italic underline decoration-[#f3a033]">
              Education
            </h2>
            <div className="space-y-8">
              <div className="p-6 border-2 border-black bg-zinc-50 rounded-xl">
                <h3 className="text-xl font-bold uppercase">
                  Bennett University
                </h3>
                <p className="font-bold text-[#f3a033] uppercase text-xs tracking-widest">
                  Master of Computer Applications (MCA)
                </p>
                <p className="mt-2 font-bold text-zinc-500">2024 – Present</p>
              </div>
              <div className="p-6 border-2 border-black bg-white rounded-xl">
                <h3 className="text-xl font-bold uppercase">
                  Bennett University
                </h3>
                <p className="font-bold text-[#f3a033] uppercase text-xs tracking-widest">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="mt-2 font-bold text-zinc-500">
                  Sept 2021 – May 2024
                </p>
              </div>
            </div>
          </div>
        </Window>

        {/* TECH STACK WINDOW */}
        <Window
          window={windows.stack}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <div className="space-y-10 py-6 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-zinc-900 uppercase italic border-b-2 border-black pb-2">
              Capabilities / Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
              ].map(skill => (
                <div
                  key={skill}
                  className="p-4 border-2 border-black bg-white rounded-xl flex items-center gap-3 font-black uppercase text-sm italic shadow-sm hover:bg-yellow-50 transition-colors"
                >
                  <div className="w-3 h-3 bg-[#f3a033] rounded-full" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Window>

        {/* CONTACT WINDOW */}
        <Window
          window={windows.contact}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <div className="space-y-8 py-4">
            <h2 className="text-4xl font-black text-zinc-900 uppercase italic leading-tight">
              Drop a Line
            </h2>
            <div className="space-y-4">
              <div className="p-4 border-2 border-black rounded-xl bg-zinc-50 font-bold">
                <span className="text-xs uppercase text-zinc-400 block mb-1">
                  Email
                </span>
                shrey.kuvera@gmail.com
              </div>
              <div className="p-4 border-2 border-black rounded-xl bg-zinc-50 font-bold">
                <span className="text-xs uppercase text-zinc-400 block mb-1">
                  Phone
                </span>
                9981175111
              </div>
            </div>
            <form
              className="space-y-4"
              onSubmit={e => {
                e.preventDefault();
                alert("Transmission Received.");
              }}
            >
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-zinc-50 border-2 border-black p-4 rounded-xl outline-none focus:bg-yellow-50 transition-all font-bold"
                required
              />
              <textarea
                rows={4}
                placeholder="HOW CAN I HELP?"
                className="w-full bg-zinc-50 border-2 border-black p-4 rounded-xl outline-none focus:bg-yellow-50 transition-all font-bold"
                required
              />
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white p-4 rounded-xl font-black hover:bg-zinc-800 transition-all uppercase tracking-tighter"
              >
                Send Transmission
              </button>
            </form>
          </div>
        </Window>

        {/* EXPERIENCE WINDOW */}
        <Window
          window={windows.resume}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <div className="space-y-8 py-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-zinc-900 uppercase italic border-b-4 border-black inline-block">
              Experience
            </h2>

            <div className="space-y-12">
              <div className="relative pl-8 border-l-4 border-[#f3a033]">
                <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-black border-4 border-white" />
                <h3 className="text-2xl font-black uppercase italic">
                  Excellent Softwares
                </h3>
                <p className="font-bold text-[#f3a033] uppercase text-xs tracking-widest">
                  Front-End Developer Intern
                </p>
                <p className="text-sm font-black text-zinc-400 uppercase mt-1">
                  Aug 2023 – Dec 2024
                </p>
                <ul className="mt-4 space-y-3 text-zinc-600 font-medium list-disc list-inside">
                  <li>
                    Developed secure web applications for healthcare and ERP
                    clients using React.js and Next.js.
                  </li>
                  <li>
                    Automated KYC and scheduling workflows, cutting manual tasks
                    by 50%.
                  </li>
                  <li>
                    Built Modular Next.js API dashboards and Vendor Portals with
                    operational analytics.
                  </li>
                  <li>
                    Implemented AES-CBC encryption for secure sessions and data
                    privacy.
                  </li>
                  <li>
                    Optimized performance using reusable components and Redux
                    state management.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Window>

        {/* DEMO / SHOWCASE WINDOW */}
        <Window
          window={windows.demo}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={closeWindow}
        >
          <div className="flex flex-col h-full space-y-4">
            <div className="aspect-video w-full bg-black rounded-lg flex items-center justify-center relative group overflow-hidden border-2 border-black">
              <img
                src="https://images.unsplash.com/photo-1551288049-bbbda540d3b9?auto=format&fit=crop&q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                alt="Demo preview"
              />
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center z-10 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-white border-b-[20px] border-b-transparent ml-2" />
              </div>
              <div className="absolute bottom-4 left-4 font-black text-white uppercase italic text-2xl drop-shadow-lg">
                ProjectMap Demo
              </div>
            </div>
            <div className="p-4 bg-zinc-50 border-2 border-black rounded-xl">
              <p className="font-bold text-zinc-900 uppercase italic">
                Showcasing: AI-powered roadmap generator and visualization.
              </p>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
