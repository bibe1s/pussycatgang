// components/Airdrop.tsx
import React, { useEffect, useState } from 'react';
import CircularGallery from './CircularGallery';
import TextType from './TextType';
import LetterGlitch from './LetterGlitch';
import DecryptedText from './DecryptedText';
import ShinyText from './ShinyText';

const Airdrop = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const isDark = htmlElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes using MutationObserver
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-orange-400 dark:bg-black">
      
      {/* LetterGlitch Background - Full Screen */}
      <div className="absolute inset-0 z-0">
        
        <LetterGlitch 
          glitchSpeed={100}
          centerVignette={false}
          outerVignette={false}
          topBottomVignette={false}
          eyeVignette={false}
          vignetteStrength={0.8}
          isDarkMode={isDarkMode}
          smooth={false}
        />
      </div>



      {/* Title at the top */}
      <div className="absolute top-25 left-0 right-0 flex justify-center z-20">
        
      </div>
      
      {/* CircularGallery responsive container - centered */}
      <div className="absolute inset-0 flex items-center justify-center z-15">
        <div className="w-full h-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px] xl:h-[700px] flex items-center justify-center">
          <CircularGallery 
            bend={0}
            textColor="black"
            borderRadius={0.05} 
            scrollEase={0.02}
            scrollSpeed={1.5}
          />
        </div>
      </div>

    </section>
  );
};

export default Airdrop;