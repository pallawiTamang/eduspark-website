import React from 'react';
import { ArrowRight, Users, Mail, Sparkles, Shield, CheckCircle2, ChevronDown } from 'lucide-react';
import { companyInfo } from '../data/teamData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients & Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle glowing ambient spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Prominent Official Crescent Logo Display */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Glowing ring animation behind logo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-cyan-400/50 bg-[#07090E] p-1 shadow-2xl flex items-center justify-center">
              <img
                src="/assets/eduspark-logo.jpg"
                alt="EduSpark Technologies Official Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Academic Context Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-semibold text-cyan-400">CET257 Enterprise Project</span>
          <span className="text-slate-500">•</span>
          <span>Team 9</span>
          <span className="text-slate-500">•</span>
          <span>University of Sunderland</span>
        </div>

        {/* Main Company Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="block">{companyInfo.name}</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-3xl sm:text-5xl lg:text-6xl font-bold">
            {companyInfo.tagline}
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed font-light">
          {companyInfo.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#current-project"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#team"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
          >
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Meet the Team</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Modern Technology Hero Visual / Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-2">
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-white">Client-Focused</div>
            <div className="text-xs text-slate-400">Automotive Logistics Sector</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-white">Interactive Learning</div>
            <div className="text-xs text-slate-400">Gamified Hazard Modules</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-2">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-white">HCI & PACT Design</div>
            <div className="text-xs text-slate-400">Usability & Accessibility</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-800/50 flex items-center justify-center text-purple-400 mb-2">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-white">Role-Based UX</div>
            <div className="text-xs text-slate-400">Learner & Supervisor Portals</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#about" className="text-slate-500 hover:text-cyan-400 transition-colors animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
