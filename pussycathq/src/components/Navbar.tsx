// components/Navbar.tsx
"use client";

import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import pcgLogo from '../assets/images/pcglogo.svg';
import DecryptedText from './DecryptedText';
import CommunityPopup from './CommunityPopup';

const SunIcon: FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const MoonIcon: FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const MenuIcon: FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const XIcon: FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("ProofofWork"); // Start with first section
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navbarRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Order sections as they appear in your navbar and on the page
    const sections = ["ProofofWork", "trading", "airdrop"];
    
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      const scrollPos = window.scrollY + navbarHeight + 100;
      
      // Find which section we're currently in
      let currentSection = sections[0]; // Default to first section
      
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          
          // Check if we're within this section's boundaries
          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            currentSection = sectionId;
            break;
          }
          
          // If we're past all sections, highlight the last one
          if (i === sections.length - 1 && scrollPos >= sectionTop) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveLink(currentSection);
    };
    
    // Debounce scroll handler for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };
    
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    window.addEventListener("resize", debouncedHandleScroll, { passive: true });
    handleScroll(); // Call immediately to set initial state
    
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("resize", debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const linkClasses = (link: string) =>
    `font-medium transition-colors ${activeLink === link ? "text-white dark:text-orange-400" : "hover:text-white dark:hover:text-orange-400"}`;

  // Custom smooth scroll with adjustable speed
  const smoothScrollTo = (targetY: number, duration: number = 1500) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startY + difference * ease);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  // FIXED smooth scroll for all device sizes with custom speed
  const handleScrollClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Immediately set active link to prevent getting stuck
    setActiveLink(id);
    
    // Wait a tiny bit for menu to close, then scroll
    setTimeout(() => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      const windowWidth = window.innerWidth;
      
      // Dynamic offset based on actual window size
      let offset;
      if (windowWidth < 640) { // Very small screens (phone-like)
        offset = navbarHeight + 27;
      } else if (windowWidth < 1024) { // Tablet-like
        offset = navbarHeight + 30;
      } else { // Desktop
        offset = navbarHeight - 26;
      }
      
      const y = Math.max(0, el.offsetTop - offset); // Ensure we don't scroll to negative position
      
      // Use custom smooth scroll with slower speed (1500ms duration)
      // You can adjust the duration: higher = slower, lower = faster
      smoothScrollTo(y, 1500); // Change this number to adjust speed
      
      // Alternative: Use native smooth scroll (faster)
      // window.scrollTo({ top: y, behavior: "smooth" });
    }, 100); // Small delay to let mobile menu close
  };

  return (
    <header ref={navbarRef} className="sticky top-0 z-50 bg-orange-400 dark:bg-black text-gray-800 dark:text-white shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <button 
          onClick={() => {
            // Smooth scroll to top
            smoothScrollTo(0, 2000);
            setActiveLink("ProofofWork"); // Set to first section
          }}
          className="flex items-center space-x-3 cursor-pointer hover:text-white transition-opacity duration-300"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image src={pcgLogo} alt="OBS Circle Logo" fill style={{ objectFit: 'contain' }} priority />
          </div>
          <span className="font-bold text-xl tracking-tight">
            <DecryptedText
              text="Pussycat Gang"
              speed={50}
              maxIterations={20}
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              animateOn="view"
            />
          </span>
        </button>

        <div className="hidden lg:flex items-center space-x-24">
          <a href="#ProofofWork" onClick={handleScrollClick("ProofofWork")} className={linkClasses("ProofofWork")}>Pussycats</a>
          <a href="#trading" onClick={handleScrollClick("trading")} className={linkClasses("trading")}>Trading</a>
          <a href="#airdrop" onClick={handleScrollClick("airdrop")} className={linkClasses("airdrop")}>Airdrop</a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="border border-black dark:border-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-orange-400 dark:hover:text-black transition-all duration-300"
          >
            Join Our Community
          </button>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="hover:text-white dark:hover:text-orange-400 p-2 rounded-full">
            {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="hover:text-blue-600 dark:hover:text-gray-300 p-2 rounded-full mr-2">
            {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-orange-400 dark:bg-black pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#ProofofWork" onClick={handleScrollClick("ProofofWork")} className={linkClasses("ProofofWork") + " block text-center py-2"}>Proof of Work</a>
            <a href="#trading" onClick={handleScrollClick("trading")} className={linkClasses("trading") + " block text-center py-2"}>Trading</a>
            <a href="#airdrop" onClick={handleScrollClick("airdrop")} className={linkClasses("airdrop") + " block text-center py-2"}>Airdrop</a>
            <button 
              onClick={() => {
                setIsPopupOpen(true);
                setIsMenuOpen(false);
              }}
              className="border border-black dark:border-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 block text-center w-full"
            >
              Join Our Community
            </button>
          </nav>
        </div>
      )}
      
      {/* Community Popup */}
      <CommunityPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </header>
  );
};

export default Navbar;