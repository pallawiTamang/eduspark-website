import React from 'react';
import { Shield, ExternalLink, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/teamData';

export default function Footer() {
  const safelearnUrl = import.meta.env.VITE_SAFELEARN_URL || 'http://localhost:5174';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] border-t border-slate-800 text-slate-400 text-xs sm:text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-cyan-500/40 bg-black flex items-center justify-center">
                <img
                  src="/assets/eduspark-logo.jpg"
                  alt="EduSpark Technologies Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white">EduSpark</span>
                <span className="text-cyan-400 font-bold ml-1.5 text-xs">Technologies</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Building interactive digital solutions for safer workplaces. Developed by student software 
              engineers at the University of Sunderland for the CET257 Enterprise Project.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Academic Supervision: <strong className="text-slate-300">Dr. Becky Allen</strong>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-400 transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#progress" className="hover:text-cyan-400 transition-colors">Project Progress</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>UI/UX Accessible Design</li>
              <li>Interactive Prototyping</li>
              <li>Hazard Spotting Engines</li>
              <li>Requirements & PACT</li>
              <li>Role-Based Systems</li>
              <li>Compliance Reporting</li>
            </ul>
          </div>

          {/* Current Client Project */}
          <div>
            <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-4">
              Client Prototype
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Interactive Health & Safety Training System for the Automotive Logistics Sector.
            </p>
            <a
              href={safelearnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 hover:text-white hover:border-cyan-400 text-xs font-semibold transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Launch Prototype</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-slate-400">EduSpark Technologies</strong> • Team 9 • CET257 Enterprise Project • University of Sunderland.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
