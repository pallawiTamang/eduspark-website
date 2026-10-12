import React from 'react';
import { 
  Target, Eye, Sparkles, Users, Compass, Award, ShieldCheck, TrendingUp, CheckCircle 
} from 'lucide-react';
import { companyInfo, companyValues } from '../data/teamData';

export default function AboutUs() {
  const iconMap = {
    Sparkles: Sparkles,
    Users: Users,
    Compass: Compass,
    Award: Award,
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp
  };

  return (
    <section id="about" className="py-24 bg-[#0A0E17]/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About EduSpark Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            EduSpark Technologies is a student software development enterprise established as part of the{' '}
            <span className="text-cyan-400 font-medium">CET257 Enterprise Project</span> at the{' '}
            <span className="text-white font-medium">University of Sunderland</span> under academic supervision.
          </p>
        </div>

        {/* Narrative & Capabilities Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Collaborative Student Enterprise
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                Our team operates as an agile, multidisciplinary unit collaborating to analyse complex client requirements, 
                design user-centred solutions, develop interactive web prototypes, conduct rigorous usability testing, and 
                communicate enterprise solutions professionally to industry stakeholders.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Focusing on the automotive logistics and warehousing sector, we apply Human-Computer Interaction (HCI) 
                principles and PACT (People, Activities, Contexts, Technologies) analysis to craft training systems 
                that make safety education practical, effective, and engaging for diverse shift personnel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Client Requirements Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Interactive Prototyping</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Usability & Accessibility Considerations</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Professional Documentation</span>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Mission */}
            <div className="bg-gradient-to-br from-slate-900/90 to-cyan-950/30 border border-cyan-900/50 p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Our Mission</h4>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{companyInfo.mission}"
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-slate-900/90 to-blue-950/30 border border-blue-900/50 p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Our Vision</h4>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{companyInfo.vision}"
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Our Core Values</h3>
            <p className="text-slate-400 text-sm">
              The foundational principles guiding Team 9 in every design decision and project milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((val) => {
              const IconComponent = iconMap[val.icon] || Sparkles;
              return (
                <div
                  key={val.id}
                  className="bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.color} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-[#0E131F] rounded-[10px] flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {val.description}
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
