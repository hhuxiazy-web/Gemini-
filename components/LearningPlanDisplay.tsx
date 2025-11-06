
import React from 'react';
import type { LearningPlan } from '../types';
import PhaseCard from './PhaseCard';

interface LearningPlanDisplayProps {
  plan: LearningPlan;
}

const LearningPlanDisplay: React.FC<LearningPlanDisplayProps> = ({ plan }) => {
  return (
    <div className="mt-8 space-y-8 animate-fade-in">
      <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mb-2">
          {plan.title}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{plan.introduction}</p>
      </div>

      <div className="space-y-6">
        {plan.phases.map((phase) => (
          <PhaseCard key={phase.phaseNumber} phase={phase} />
        ))}
      </div>

      <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-700">
         <h3 className="text-xl font-bold text-indigo-400 mb-2">Conclusion & Next Steps</h3>
        <p className="text-gray-400 whitespace-pre-wrap">{plan.conclusion}</p>
      </div>
    </div>
  );
};

export default LearningPlanDisplay;
