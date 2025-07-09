import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-lg opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-200 dark:bg-indigo-800 rounded-lg opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative max-w-5xl w-full z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
             
              {/* Floating dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
          <h2 className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 mb-2 tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            <span className="block">Lakshmi tejaswini Nasimsetty</span>
            <span className="block mt-1 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
           A Fresher graduate with a strong foundation in computer science, eager to contribute and learn in a professional environment.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
            >
              View Projects
            </a>
          </div>
        </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;