
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onGenerate, isLoading }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="prompt-input" className="block text-lg font-semibold text-gray-300 mb-2">
          Your Background & Goals
        </label>
        <p className="text-sm text-gray-400 mb-3">
          Describe your current skills, major, and research interests. The more detail you provide, the better the generated plan will be.
        </p>
        <textarea
          id="prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., I am a power engineering student interested in using reinforcement learning for microgrid energy management..."
          className="w-full h-40 p-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-200 resize-none"
          disabled={isLoading}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? 'Generating...' : 'Generate My Plan'}
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
