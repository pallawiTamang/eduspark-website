import React from 'react';
import { CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { timelineStages } from '../data/timelineData';

export default function ProjectProgress() {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'Current Stage':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-500/80 animate-pulse">
            <Clock className="w-3 h-3 text-cyan-400" />
            Current Stage
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-400 border border-amber-800/60">
            <Clock className="w-3 h-3" />
            In Progress
          </span>
        );
      case 'Planned':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
            <Calendar className="w-3 h-3" />
            Planned
          </span>
        );
    }
  };

  return (
    <section id="progress" className="py-24 bg-[#0A0E17]/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Development Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Our Work & Project Progress
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A transparent timeline reflecting the progressive milestones of EduSpark Technologies 
            throughout the CET257 Enterprise Project.
          </p>
        </div>

        {/* Development Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-8 pb-4">
          {timelineStages.map((stage) => {
            const isCurrent = stage.status === 'Current Stage';
            const isCompleted = stage.status === 'Completed';

            return (
              <div key={stage.id} className="relative pl-8 md:pl-10 group">
                
                {/* Node Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isCurrent
                      ? 'bg-cyan-400 border-cyan-300 ring-4 ring-cyan-500/20'
                      : isCompleted
                      ? 'bg-emerald-500 border-emerald-400'
                      : 'bg-[#0A0E17] border-slate-600'
                  }`}
                />

                {/* Left Phase indicator on desktop */}
                <div className="hidden md:block absolute -left-28 top-1 text-xs font-mono text-slate-500 text-right w-20">
                  {stage.phase}
                </div>

                {/* Card */}
                <div
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-950/40'
                      : isCompleted
                      ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      : 'bg-slate-900/20 border-slate-800/40 opacity-75'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500">
                        Stage {stage.id.toString().padStart(2, '0')}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {stage.title}
                      </h4>
                    </div>
                    {getStatusBadge(stage.status)}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
