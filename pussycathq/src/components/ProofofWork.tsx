"use client";
import React from 'react';
import Image from 'next/image';
import ProfileCard from './ProfileCard'
import { bxie, casterr, dooseeh, empress, eyah, eyszi, frenzy, gaia, hanz, hinode, jax, jaypee, jigsaw, kei, kesha, lamce, maying, senorfroggy, shobe, yosh, jrsolis, potato, nicklay, asta } from "../assets/images";


const ProofofWork = () => {

  const heartPattern = [
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0]
  ];

  const memberPlaceholders = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Member ${index + 1}`,
    title: `Role ${index + 1}`,
    handle: `member${index + 1}`,
    status: Math.random() > 0.5 ? "Online" : "Offline",
    avatarUrl: jrsolis
  }));

  // Map: put potato at pixel index 10
  const specialImageMap: Record<number, any> = {
  9: potato,   
  10: kei,    
  11: frenzy, 
  12: bxie,   
  13: yosh,   
  14: casterr, 
  17: empress, 
  18: eyah,    
  19: eyszi,   
  20: jrsolis,    
  21: jax,     
  22: jaypee,  
  25: dooseeh,  
  26: jigsaw,  
  27: kesha,   
  28: lamce,   
  29: maying,  
  30: senorfroggy, 
  34: shobe,   
  35: hinode,  
  36: hanz,
  37: nicklay,
  43: asta,
  44: gaia
};

  return (
    <section className="relative min-h-screen bg-orange-400 dark:bg-black overflow-hidden flex items-center justify-center px-4 md:px-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10 w-full max-w-7xl">
        
        {/* HEADING */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-8">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              PCG
            </span>
            <br />
            <span className="text-gray-700 dark:text-gray-300">Community</span>
          </h1>
        </div>

{/* MAIN CONTENT */}
<div className="flex items-center justify-center">
  <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 p-12">
    
    {/* PROFILE CARD */}
    <div className="cursor-pointer group transition-all duration-300 transform hover:scale-105 flex items-center justify-center  ml-0 sm:ml-12 ">
      <ProfileCard
        name="JR SOLIS"
        title="BUMABATAK NG SHABU"
        status="Online"
        contactText="Contact Me"
        avatarUrl={jrsolis.src}
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
      />
    </div>

    {/* PIXEL HEART */}
    <div className="flex items-center justify-center mt-8">
      <div className="grid grid-cols-8 ">
        {heartPattern.flatMap((row, rowIndex) =>
          row.map((pixel, colIndex) => {
            const pixelIndex = rowIndex * 8 + colIndex;
            if (pixel === 0) {
              return (
                <div
                  key={pixelIndex}
                  className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                />
              );
            }

            const imageSrc =
              specialImageMap[pixelIndex] ||
              memberPlaceholders[pixelIndex % memberPlaceholders.length]
                .avatarUrl;

            return (
              <div
                key={pixelIndex}
                className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20
                           rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 
                           transform hover:scale-110 cursor-pointer border-2 border-gray-400 
                           dark:border-gray-500 hover:border-blue-500 dark:hover:border-blue-400 
                           overflow-hidden"
                onClick={() =>
                  console.log(
                    "Member clicked:",
                    memberPlaceholders[pixelIndex % memberPlaceholders.length]
                      .name
                  )
                }
              >
                <Image
                  src={imageSrc}
                  alt={
                    memberPlaceholders[pixelIndex % memberPlaceholders.length]
                      .name
                  }
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  </div>
</div>


        <div className="text-center">
          {/* Add description or CTA here */}
        </div>
      </div>
    </section>
  );
};

export default ProofofWork;
