import React, { useEffect, useState, useRef } from 'react';
import LetterGlitch from './LetterGlitch';
import CurvedLoop from './CurvedLoop';

// StarBorder Component
type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
  }

const StarBorder = <T extends React.ElementType = "div">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "div";
  return (
    <Component 
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`} 
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 border border-gray-600/30 text-white text-center rounded-[20px] h-full">
        {children}
      </div>
    </Component>
  );
};

// Sample project data
const projects = [
  {
    id: 1,
    name: "Aster",
    logo: "🌟",
    category: "featured",
    bgColor: "bg-green-600"
  },
  {
    id: 2,
    name: "Backpack",
    logo: "🎒",
    category: "all",
    bgColor: "bg-red-600"
  },
  {
    id: 3,
    name: "Pharos",
    logo: "⚡",
    category: "topChoice",
    bgColor: "bg-blue-600"
  },
  {
    id: 4,
    name: "Chakra",
    logo: "✖️",
    category: "featured",
    bgColor: "bg-gray-800"
  },
  {
    id: 5,
    name: "Gradient Network",
    logo: "🔗",
    category: "featured",
    bgColor: "bg-purple-600"
  },
  {
    id: 6,
    name: "Grass Protocol",
    logo: "🌿",
    category: "topChoice",
    bgColor: "bg-green-500"
  },
  {
    id: 7,
    name: "Example Project",
    logo: "💎",
    category: "all",
    bgColor: "bg-indigo-600"
  },
  {
    id: 8,
    name: "Demo App",
    logo: "🚀",
    category: "topChoice",
    bgColor: "bg-pink-600"
  }
];

const Airdrop = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const isDark = htmlElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const filterButtons = [
    { key: 'all', label: 'All', icon: '📋' },
    { key: 'featured', label: 'Featured', icon: '🏆' },
    { key: 'topChoice', label: 'Top Choice', icon: '⭐' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-orange-400 dark:bg-black">
      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 min-h-screen">
          
          <div className="flex flex-col items-center space-y-8 max-w-4xl w-full">

            <div> <h2 className="text-2xl font-bold">Airdrop Projects</h2> </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => setActiveFilter(button.key)}
                className={`
                  px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2
                  ${activeFilter === button.key 
                    ? 'bg-lime-400 text-black shadow-lg scale-105' 
                    : 'bg-gray-700/50 text-white hover:bg-gray-600/50 hover:scale-102'
                  }
                `}
              >
                <span className="text-lg">{button.icon}</span>
                <span className="hidden sm:inline">{button.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="flex-1 w-full max-w-4xl overflow-auto items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {filteredProjects.map((project) => (
                <StarBorder
                  key={project.id}
                  className={`${project.bgColor} min-h-[120px] cursor-pointer transition-all duration-300 hover:scale-105`}
                  color={isDarkMode ? "#FF6B35" : "#1E40AF"}
                  speed="4s"
                  thickness={2}
                >
                  <div className="relative group flex flex-col items-center justify-center text-center space-y-3 h-full p-4">
                    {/* Project Logo */}
                    <div className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.logo}
                    </div>
                    
                    {/* Project Name */}
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                      {project.name}
                    </h3>

                    {/* Category Badge */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        {project.category === 'topChoice' ? 'Top' : project.category}
                      </span>
                    </div>
                  </div>
                </StarBorder>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Curved Loop Overlay */}
        {/* <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          <CurvedLoop 
            marqueeText="MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW"
            speed={2}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="text-white text-2xl sm:text-2xl font-bold tracking-widest"
          />
        </div> */}
      </section>
  );
};

export default Airdrop;