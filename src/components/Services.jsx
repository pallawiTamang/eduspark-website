import React from 'react';
import { 
  Code2, Layout, Cpu, FileCheck, BookOpen, CheckCircle2, GraduationCap, HeartHandshake, ArrowUpRight 
} from 'lucide-react';
import { servicesList } from '../data/servicesData';

export default function Services() {
  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Cpu: Cpu,
    FileCheck: FileCheck,
    BookOpen: BookOpen,
    CheckCircle2: CheckCircle2,
    GraduationCap: GraduationCap,
    HeartHandshake: HeartHandshake
  };

  return (
    <section id="services" className="py-24 bg-[#0A0E17]/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Our Software Engineering Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            EduSpark Technologies provides structured digital solution design from initial user requirements 
            and interactive prototyping to rigorous testing and delivery.
          </p>
        </div>

        {/* 8 Modern Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => {
            const IconComp = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-cyan-950/30 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:bg-cyan-950 group-hover:border-cyan-600 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 mb-5 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
