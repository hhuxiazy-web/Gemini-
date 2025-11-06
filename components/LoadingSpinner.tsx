
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="text-lg text-gray-300 font-medium">Crafting your personalized learning plan...</p>
      <p className="text-sm text-gray-500">This may take a moment.</p>
    </div>
  );
};

export default LoadingSpinner;
