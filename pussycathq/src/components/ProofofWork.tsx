"use client";
import React from 'react';
import Image from 'next/image';
import ProfileCard from './ProfileCard'
import jrsolis from '../assets/images/jrsolis1.png';

const Meow = () => {
  const handleXClick = () => {
    // Replace this with your actual X (Twitter) profile URL
    window.open('https://x.com/yourusername', '_blank');
  };

  return (
    // MAIN SECTION: Full screen with orange background (light mode) and black (dark mode)
    <section className="relative min-h-screen bg-orange-400 dark:bg-black overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      {/* Grid pattern overlay with low opacity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 text-center">
        
        {/* HEADING: PCG Community title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-8">
          {/* PCG text with orange-to-red gradient */}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            PCG
          </span>
          <br />
          {/* Community text in dark gray (light mode) and light gray (dark mode) */}
          <span className="text-gray-700 dark:text-gray-300">Community</span>
        </h1>
        
        {/* SUBTITLE: Description text */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Join our amazing community of traders and enthusiasts
        </p>

        {/* CLICKABLE COMMUNITY PICTURE CONTAINER */}
        <div 
          onClick={handleXClick}
          className="relative w-80 h-80 md:w-96 md:h-96 mx-auto cursor-pointer group transition-all duration-300 transform hover:scale-105"
        >
          
<ProfileCard
  name="JR SOLIS"
  title="Batak pa"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl={jrsolis}
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
        </div>

        {/* ADDITIONAL INFO SECTION: Below the picture */}
        <div className="mt-12 text-center">
          {/* Description text */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Stay connected with the latest updates, trading insights, and community events
          </p>
          
          {/* BUTTONS CONTAINER */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* FOLLOW ON X BUTTON: Black background (light mode), white background (dark mode) */}
            <button 
              onClick={handleXClick}
              className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              {/* X icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow on X
            </button>
            
            {/* LEARN MORE BUTTON: Transparent with black border (light mode), white text (dark mode) */}
            <button className="border-2 border-black hover:border-gray-600 dark:text-white dark:hover:border-gray-300 text-black hover:text-gray-600 dark:hover:text-gray-300 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-black/10 dark:hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meow;
