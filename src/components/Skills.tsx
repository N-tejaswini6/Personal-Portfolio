import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

const Skill: React.FC<SkillProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`} 
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90, color: 'bg-blue-600' },
    { name: 'CSS', level: 85, color: 'bg-yellow-500' },
    { name: 'SASS', level: 70, color: 'bg-cyan-500' },
   
  ];

  const otherSkills = [
    { name: 'Python', level: 70, color: 'bg-blue-500' },
    { name: 'Microsoft Office', level: 75, color: 'bg-purple-500' },
    { name: 'Responsive Design', level: 85, color: 'bg-pink-500' },
    
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Skills</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            Technical Proficiency
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
            A showcase of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <Skill 
                key={index}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Backend & other Skills</h3>
            {otherSkills.map((skill, index) => (
              <Skill 
                key={index}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;