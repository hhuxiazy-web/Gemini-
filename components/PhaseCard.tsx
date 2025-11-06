
import React from 'react';
import type { Phase } from '../types';

interface PhaseCardProps {
  phase: Phase;
}

const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const BookIcon = () => (
    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
);

const ProjectIcon = () => (
    <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
);

const PhaseCard: React.FC<PhaseCardProps> = ({ phase }) => {
  return (
    <div className="bg-gray-800/70 border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-500/50">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-indigo-400">
            Phase {phase.phaseNumber}: {phase.title}
          </h3>
          <span className="text-sm font-medium text-gray-400 bg-gray-700 px-3 py-1 rounded-full">{phase.duration}</span>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-300 mb-2">Goals</h4>
            <ul className="space-y-1">
              {phase.goals.map((goal, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <CheckIcon /> <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <h4 className="font-semibold text-lg text-gray-300 mb-3">Core Topics</h4>
             <div className="space-y-4">
                {phase.topics.map((topic, index) => (
                    <div key={index} className="p-4 bg-gray-900/50 rounded-md border-l-4 border-blue-500">
                       <h5 className="font-bold text-blue-300">{topic.name}</h5>
                       <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400 text-sm">
                         {topic.details.map((detail, i) => <li key={i}>{detail}</li>)}
                       </ul>
                       <div className="mt-3">
                        <h6 className="text-xs font-semibold text-gray-500 uppercase mb-1">Resources</h6>
                        <p className="text-sm text-blue-400 italic">{topic.resources.join(', ')}</p>
                       </div>
                    </div>
                ))}
             </div>
          </div>

          <div className="p-4 bg-gray-900/50 rounded-md border-l-4 border-purple-500">
             <h4 className="font-semibold text-lg text-purple-300 mb-2 flex items-center"><ProjectIcon /><span>Practical Project</span></h4>
              <p className="font-bold text-gray-300">{phase.project.title}</p>
             <p className="text-sm text-gray-400">{phase.project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;
