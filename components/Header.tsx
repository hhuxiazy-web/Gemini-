
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          AI Power Grid Learning Planner
        </h1>
        <p className="text-center text-gray-400 mt-1 text-sm md:text-base">Your Personalized Roadmap to AI in Power Systems</p>
      </div>
    </header>
  );
};

export default Header;
