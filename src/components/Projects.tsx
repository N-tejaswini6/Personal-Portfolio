import React, { useState } from 'react';
import { ExternalLink, Layers, Code, Layout } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  category: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  demoLink,
  category
}) => {
  return (
    <div className="group perspective-1000">
      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transform-gpu transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-1 preserve-3d">
        {/* Gradient overlay for 3D effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        
        <div className="relative overflow-hidden h-48 sm:h-64">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              {category}
            </span>
          </div>

          {/* Floating demo button */}
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg backdrop-blur-sm"
            >
              <ExternalLink size={14} className="mr-1" />
              Demo
            </a>
          </div>
        </div>
        
        <div className="relative p-6 z-20">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transform group-hover:scale-105 transition-transform duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-200"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Live Project</span>
            </div>
            
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 transform hover:translate-x-1"
            >
              View Project
              <ExternalLink size={14} className="ml-1 transform group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* 3D shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: 'Women Safety',
      description: 'A Holistic Framework for crime prevention, Response and analysis. Emphasis women safety Technology and Social Participation',
      image: 'https://blog.56secure.com/hubfs/02_06.jpg#keepProtocol',
      tags: ['Python', 'HTML', 'CSS','MYSQL'],
      demoLink: 'https://drive.google.com/file/d/1dApJqsCod1tvNxMAJwFJs2OomsmjXA1F/view?usp=sharing',
      category: 'Backend'
    },
    {
      title: 'Restaurant Website',
      description: 'Designed a user-friendly restaurant website, incorporating features For menu display and reservation management, to enhance the user experience',
      image: 'https://wallpaperbat.com/img/34239-bbq-desktop-wallpaper-top-free-bbq-desktop-background.jpg',
      tags: ['HTML', 'CSS', 'Javascript'],
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7126532893006336000?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7126532893006336000%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29',
      category: 'Web Design'
    },
    {
      title: 'University Website',
      description: 'A task management application with features like task creation, categorization, due dates, and notifications.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.u8BKK9n2ee-K0iB2cYkmRgHaC4&pid=Api&P=0&h=180',
      tags: ['HTML', 'CSS', 'Javascript'],
      demoLink: 'https://www.linkedin.com/posts/nasimsetty-lakshmi-tejaswini-72a574247_website-html-css-activity-7126499349420789760-zrN5?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAD0hQhIBQQI68jG2G-AMTwDGUPqYRsOW6fk&utm_campaign=copy_link',
      category: 'Web Design'
    },
   
  ];

  const categories = ['All', 'Backend', 'Web Design', 'Mobile App'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Backend ':
        return <Code size={16} className="mr-2" />;
      case 'Web Design':
        return <Layout size={16} className="mr-2" />;
      case 'Mobile App':
        return <Layers size={16} className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Projects</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            My Recent Work
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
            A selection of projects that showcase my skills and capabilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoLink={project.demoLink}
                category={project.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;