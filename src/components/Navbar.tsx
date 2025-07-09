import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Handle scroll event for navbar transparency
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#" 
              className={`text-xl font-bold ${
                scrolled 
                  ? 'text-blue-600 dark:text-white' 
                  : 'text-blue-600 dark:text-white'
              }`}
            >
              Portfolio
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-300' 
                    : 'text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="https://github.com/N-tejaswini6"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-900 dark:text-gray-100'
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1C8GDFxEB3oWbSGIjnJcUdBYPtppUSgKk/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Resume
            </a>
            
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-900 dark:text-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-900 dark:text-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-900 dark:text-gray-100'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="https://github.com/N-tejaswini6"
            target="_blank"
            rel="noopener noreferrer"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Github size={16} className="mr-2" />
              GitHub
            </div>
          </a>
          
          <a 
            href="https://drive.google.com/file/d/1C8GDFxEB3oWbSGIjnJcUdBYPtppUSgKk/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Download size={16} className="mr-2" />
              Resume
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;