// components/Navbar.tsx
"use client";

import type { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import pcgLogo from '../assets/images/pcglogo.svg';

import DecryptedText from './DecryptedText';

// Sun icon for light mode
const SunIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Moon icon for dark mode
const MoonIcon: FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

// Hamburger menu icon
const MenuIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

// Close icon
const XIcon: FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-orange-400 dark:bg-black text-gray-800 dark:text-white shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Section: Logo with SVG */}
        <a href="/" onClick={handleLinkClick} className="flex items-center space-x-3">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src={pcgLogo}
              alt="OBS Circle Logo"
              fill
              style={{ objectFit: 'contain' }}
              className=""
              priority
            />
          </div>
          <span className="font-bold text-xl tracking-tight">                
            {/* Example 2: Customized speed and characters */}
                <DecryptedText
                text="Pussycat Gang"
                speed={50}
                maxIterations={20}
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
                /></span>
        </a>

        {/* Center Section: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-24">
          <a href="/airdrops" onClick={handleLinkClick} className="font-medium hover:text-white dark:hover:text-orange-400 transition-colors">
            Airdrops
          </a>
          <a href="/trading" onClick={handleLinkClick} className="font-medium hover:text-white dark:hover:text-orange-400 transition-colors">
            Trading
          </a>
          <a href="/testimonies" onClick={handleLinkClick} className="font-medium hover:text-white dark:hover:text-orange-400 transition-colors">
            Meow
          </a>
        </div>

        {/* Right Section: CTA Button and Theme Toggle (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/community"
            onClick={handleLinkClick}
            className="border border-black dark:border-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-orange-400 dark:hover:text-black transition-all duration-300"
          >
            Join Our Community
          </a>
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme" 
            className="hover:text-white dark:hover:text-orange-400 p-2 rounded-full"
          >
            {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle theme" 
              className="hover:text-blue-600 dark:hover:text-gray-300 p-2 rounded-full mr-2"
            >
                {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu (collapsible) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-orange-400 dark:bg-black pb-4 px-4">
            <nav className="flex flex-col space-y-4">
                <a href="/airdrops" onClick={handleLinkClick} className="font-medium hover:text-blue-600 dark:hover:text-gray-300 transition-colors block text-center py-2">
                    Airdrops
                </a>
                <a href="/trading" onClick={handleLinkClick} className="font-medium hover:text-blue-600 dark:hover:text-gray-300 transition-colors block text-center py-2">
                    Trading
                </a>
                <a href="/testimonies" onClick={handleLinkClick} className="font-medium hover:text-blue-600 dark:hover:text-gray-300 transition-colors block text-center py-2">
                    Testimonies
                </a>
                <a
                    href="/community"
                    onClick={handleLinkClick}
                    className="border border-black dark:border-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 block text-center"
                >
                    Join Our Community
                </a>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;