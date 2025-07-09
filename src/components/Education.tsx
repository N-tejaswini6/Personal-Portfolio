import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

interface EducationItemProps {
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  accentColor: string;
  index: number;
  total: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  title, 
  institution, 
  location, 
  period, 
  description,
  accentColor,
  index,
  total
}) => {
  return (
    <div className="relative flex items-start group">
      {/* Timeline connector */}
      <div className="flex flex-col items-center mr-6">
        {/* Top line (except for first item) */}
        {index !== 0 && (
          <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-blue-500 dark:from-gray-600 dark:to-blue-400"></div>
        )}
        
        {/* Timeline dot */}
        <div className={`relative w-12 h-12 rounded-full ${accentColor} border-4 border-white dark:border-gray-900 shadow-lg transform group-hover:scale-110 transition-all duration-300 flex items-center justify-center z-10`}>
          <GraduationCap className="w-5 h-5 text-white" />
          <div className={`absolute inset-0 rounded-full ${accentColor} opacity-30 animate-pulse`}></div>
        </div>
        
        {/* Bottom line (except for last item) */}
        {index !== total - 1 && (
          <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-gray-300 dark:from-blue-400 dark:to-gray-600"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transform group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
          {/* Header with period and location */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <Calendar size={14} className="mr-2" />
              {period}
            </div>
            <div className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
              <MapPin size={14} className="mr-2" />
              {location}
            </div>
          </div>
          
          {/* Title and institution */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-3">
            {institution}
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationItems = [
    {
      title: 'Master of Computer Application',
      institution: 'Chadalawada Ramanamma Engineering College',
      location: 'Tirupati',
      period: '2023 - 2025',
      description: 'Graduated with a strong academic record, specializing in web technologies and software development.',
      accentColor: 'bg-blue-500'
    },
    {
      title: 'Bachelor of Computer Application',
      institution: 'SDHR Degree & pg College',
      location: 'Tirupati',
      period: '2020 - 2023',
      description: 'Completed a specialization in web technologies and software development with active involvement in coding clubs and Workshops.',
      accentColor: 'bg-green-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Education</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            Academic Journey
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
            My educational background and certifications.
          </p>
        </div>

        <div className="relative">
          {/* Education Items */}
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <EducationItem 
                title={item.title}
                institution={item.institution}
                location={item.location}
                period={item.period}
                description={item.description}
                accentColor={item.accentColor}
                index={index}
                total={educationItems.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;