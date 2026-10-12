import React from 'react';
import { Shield, CheckCircle2, UserCheck } from 'lucide-react';
import { teamMembers } from '../data/teamData';

export default function OurTeam() {
  return (
    <section id="team" className="py-24 bg-[#07090E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Team 9
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Meet Our Development Team
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            EduSpark Technologies is driven by four dedicated student developers collaborating on the CET257 Enterprise Project, 
            each spearheading specialized functional roles to deliver an industry-standard health and safety training system.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                {/* Avatar Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.avatarBg} flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-cyan-950/50 group-hover:scale-105 transition-transform`}>
                    {member.initials}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    Team 9
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-medium text-cyan-400/90 mb-4 h-9 flex items-center">
                  {member.role}
                </div>

                {/* Genuine Role Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 pb-5 border-b border-slate-800">
                  {member.description}
                </p>
              </div>

              {/* Skills / Key Responsibilities */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Responsibilities</span>
                </div>
                <ul className="space-y-1.5">
                  {member.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500/80 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Academic Governance Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>
              Academic Supervision: <strong className="text-slate-200">Dr. Becky Allen</strong> • Module: <strong className="text-slate-200">CET257 – Enterprise Project</strong> • University of Sunderland
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
