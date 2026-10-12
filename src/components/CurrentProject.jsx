import React from 'react';
import { 
  Shield, ExternalLink, BookOpen, Sparkles, AlertTriangle, HelpCircle, 
  TrendingUp, Award, Activity, BarChart3, ArrowRight, Layers 
} from 'lucide-react';
import { companyInfo } from '../data/teamData';

export default function CurrentProject() {
  const safelearnUrl = import.meta.env.VITE_SAFELEARN_URL || 'http://localhost:5174';

  const majorAreas = [
    {
      title: "Safety Training Modules",
      icon: BookOpen,
      color: "text-blue-400 bg-blue-950/60 border-blue-800/50",
      desc: "Structured, sequential learning units covering fundamentals, manual handling, PPE, emergency response, and forklift protocols."
    },
    {
      title: "Interactive Learning",
      icon: Sparkles,
      color: "text-cyan-400 bg-cyan-950/60 border-cyan-800/50",
      desc: "Engaging interactive simulations replacing passive manuals with active decision-making challenges."
    },
    {
      title: "Hazard Identification",
      icon: AlertTriangle,
      color: "text-amber-400 bg-amber-950/60 border-amber-800/50",
      desc: "Interactive warehouse scene where learners visually locate real hazards such as fluid spills, blocked exits, and unsafe pallet stacks."
    },
    {
      title: "Safety Quizzes",
      icon: HelpCircle,
      color: "text-emerald-400 bg-emerald-950/60 border-emerald-800/50",
      desc: "Rigorous knowledge assessments with dynamic scoring, instant feedback, and a verifiable 70% passing threshold."
    },
    {
      title: "Employee Progress Tracking",
      icon: TrendingUp,
      color: "text-purple-400 bg-purple-950/60 border-purple-800/50",
      desc: "Personalized learner dashboard displaying completion percentages, quiz histories, safety badges, and pending requirements."
    },
    {
      title: "Prototype Training Records & Certificates",
      icon: Award,
      color: "text-pink-400 bg-pink-950/60 border-pink-800/50",
      desc: "Prototype training records and certificates displaying learner completion details for academic demonstration."
    },
    {
      title: "Administrative Monitoring",
      icon: Activity,
      color: "text-indigo-400 bg-indigo-950/60 border-indigo-800/50",
      desc: "Supervisor console to manage employee rosters, adjust pass criteria, publish curriculum modules, and review individual dossiers."
    },
    {
      title: "Progress and Compliance Reporting",
      icon: BarChart3,
      color: "text-teal-400 bg-teal-950/60 border-teal-800/50",
      desc: "Supervisor progress visibility and CSV report export within the academic prototype; sample dashboard figures are demonstration data."
    }
  ];

  return (
    <section id="current-project" className="py-24 bg-[#07090E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Client Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Current Project
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            EduSpark Technologies is developing an interactive workplace health and safety training solution 
            tailored for logistics and warehousing operations within the automotive sector.
          </p>
        </div>

        {/* Project Overview Feature Card */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0D1424] to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                  Client: {companyInfo.client}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Sector: Automotive Supply Chain
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {companyInfo.projectTitle}
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                Warehousing and logistics facilities in the automotive sector face high operational risks—including 
                heavy forklift traffic, heavy component manual handling, chemical fluid spills, and strict production 
                turnaround schedules. EduSpark Technologies is creating an engaging, gamified training application 
                that transforms obligatory compliance manuals into an interactive, memorable learning experience.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={safelearnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  <Shield className="w-4 h-4" />
                  <span>View SafeLearn Prototype</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Separate client application hosted at: <code className="text-cyan-300">{safelearnUrl}</code></span>
                </div>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-4 bg-black/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Layers className="w-4 h-4" />
                <span>Dual-Portal Architecture</span>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-semibold text-white mb-1">1. Employee / Learner Portal</div>
                  <div className="text-xs text-slate-400">
                    Engaging, visual training interface with gamified hazard spotting, PPE checks, and quizzes.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-semibold text-white mb-1">2. Admin / Supervisor Console</div>
                  <div className="text-xs text-slate-400">
                    Professional management dashboard for compliance tracking, user roster, and reports.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 8 Major Areas Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Major System Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorAreas.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl ${area.color} flex items-center justify-center mb-4 border`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
