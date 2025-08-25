// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import pcgLogo from '../assets/images/pcglogo.svg';

import TextType from './TextType';
import DecryptedText from './DecryptedText';


const Hero = () => {
  return (
    <section className="relative min-h-screen bg-orange-400 dark:bg-black overflow-hidden flex items-center justify-center">
      {/* Background pattern or texture */}
      
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[70vh] lg:min-h-[50vh]">
          
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white leading-tight">

                {/* Example 2: Customized speed and characters */}
                <DecryptedText
                text="Meow meow "
                speed={50}
                maxIterations={20}
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                />

              <br />
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white leading-tight">

                {/* Example 2: Customized speed and characters */}
                <DecryptedText
                text="Meow"
                speed={50}
                maxIterations={20}
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                />

              </span>

              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white leading-tight">

                {/* Example 2: Customized speed and characters */}
                <DecryptedText
                text="Meoowwwww."
                speed={50}
                maxIterations={20}
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                />

              </span>
            </h1>

           

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <button className="group relative overflow-hidden bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join Our Community
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group border-2 border-black hover:border-gray-600 dark:border-white dark:hover:border-gray-300 text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-black/10 dark:hover:bg-white/10">
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Logo Section - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] flex-shrink-0">
              <Image
                src={pcgLogo}
                alt="OBS Circle Logo"
                fill
                style={{ objectFit: 'contain' }}
                className=""
                priority
              />
            </div>
          </div>
        </div>
      </div>

      
      {/* Optional: Scroll indicator for desktop */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <div className="block lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;