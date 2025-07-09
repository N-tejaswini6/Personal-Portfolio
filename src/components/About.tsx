import React from 'react';
import { BookOpen, Award, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">About Me</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            My Background
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
            Get to know more about me, my interests, and the skills I've developed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Education Card */}
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 border border-blue-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Master of Computer Application 
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
               Chadalawada Ramanamma Engineering College, 2023-2025
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-cyan-50 dark:bg-gray-800 rounded-xl p-6 border border-cyan-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Proficient in C, Python, HTML, CSS and Micrososft Office.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              
            </p>
          </div>

          {/* Achievements Card */}
          <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-6 border border-indigo-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Achievements</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Completed multiple certifications in web development, Python and Data Science.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I'm Lakshmi tejaswini Nasimsetty, a passionate Developer with a strong foundation in technologies. I recently graduated with a Master degree in Computer Science and I'm excited to bring my skills and creativity to a professional environment.

During my academic journey, I've worked on various projects that have helped me develop a solid understanding on technologies like c, python, Html and CSS. I enjoy creating responsive, accessible, and user-friendly web applications and Real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;