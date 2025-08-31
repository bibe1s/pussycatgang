import React, { useEffect, useState } from 'react';
import CurvedLoop from './CurvedLoop';
import Image from 'next/image';
import puchicat2 from '../assets/images/puchicat2.svg';
import puchicat1 from '../assets/images/puchicat1.svg';

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
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);


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
    <section className="relative min-h-screen flex flex-col overflow-visible bg-orange-400 dark:bg-black pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24">

      {/* Curved Loop Top Overlay */}
      <div className="absolute inset-x-0 top-0 lg:top-7 pointer-events-none z-30 flex items-center justify-center pt-14 sm:pt-16 md:pb-26">
        <CurvedLoop 
          marqueeText="ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦"
          speed={0.35}
          curveAmount={0}
          direction="left"
          interactive={true}
          className="text-white text-[180px] font-extrabold tracking-widest"
        />
      </div>
      
      
      {/* Main Content - Takes up remaining space */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-8 max-w-4xl w-full border border-gray-700/50 bg-gray-900/50 rounded-lg p-6 shadow-lg min-h-[600px]">

          <div> 
            <h2 className="text-3xl font-bold text-white">Airdrop Projects</h2> 
          </div>

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
        <div className="grid gap-4 p-4"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-[20px] border border-gray-600/30 text-white text-center h-full ${project.bgColor} min-h-[120px] cursor-pointer transition-all duration-300 hover:scale-105`}
            >
              <div className="relative group flex flex-col items-center justify-center text-center space-y-3 h-full p-4">
                <div className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.logo}
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                  {project.name}
                </h3>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {project.category === 'topChoice' ? 'Top' : project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        </div>
      </div>

      {/* Curved Loop Bottom Overlay */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-20 flex items-center justify-center pt-12 sm:pt-16 md:pt-24">
        <CurvedLoop 
          marqueeText="ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦ ᓚᘏᗢ ✦"
          speed={0.35}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="text-white text-[180px] font-extrabold tracking-widest"
        />
      </div>

             {/* Left-side decorative image (desktop only) */}
       <div className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 z-10 airdrop-desktop-image">
         <Image
           src={puchicat1}
           alt="puchicat1"
           width={360}
           height={360}
           className="opacity-90 drop-shadow-xl"
           priority={false}
         />
       </div>

       {/* Right-side decorative image (desktop only) */}
       <div className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 z-10 airdrop-desktop-image">
         <Image
           src={puchicat2}
           alt="puchicat2"
           width={360}
           height={360}
           className="opacity-90 drop-shadow-xl"
           priority={false}
         />
       </div>
    </section>
  );
};

export default Airdrop;