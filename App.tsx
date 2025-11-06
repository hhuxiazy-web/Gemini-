
import React, { useState, useCallback } from 'react';
import { generateLearningPlan } from './services/geminiService';
import type { LearningPlan } from './types';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import LearningPlanDisplay from './components/LearningPlanDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const initialPrompt = `我是一名即将步入研究生的大四本科生，我的专业是电力工程及其自动化，研究方向为基于AI的配电网/微电网灵活调度（如果能实现仿真，特别是构网型技术最好），目前我还不会使用python等软件，请你帮我制订一份学习计划，让我可以熟练的使用python拥有我的专业，如果能实现仿真更好`;

function App() {
  const [prompt, setPrompt] = useState<string>(initialPrompt);
  const [learningPlan, setLearningPlan] = useState<LearningPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter your background and learning goals.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setLearningPlan(null);

    try {
      const plan = await generateLearningPlan(prompt);
      setLearningPlan(plan);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-gray-800 shadow-2xl rounded-xl p-6 md:p-8 space-y-6">
          <PromptInput 
            prompt={prompt} 
            setPrompt={setPrompt} 
            onGenerate={handleGeneratePlan} 
            isLoading={isLoading} 
          />
          {error && <ErrorMessage message={error} />}
          {isLoading && <LoadingSpinner />}
          {learningPlan && <LearningPlanDisplay plan={learningPlan} />}
        </div>
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Powered by Gemini. Plan generated for educational purposes.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
