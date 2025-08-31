"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProfileCard from './ProfileCard';

import { okx1, bxie, casterr, dooseeh, empress, eyah, eyszi, frenzy, gaia, hanz, hinode, jax, jaypee, jigsaw, kei, kesha, lamce, maying, senorfroggy, shobe, yosh, jrsolis, potato, nicklay, asta, tpBxie, tpCasterr, tpDooseeh, tpEmpress, tpEyah, tpEyszi, tpFrenzy, tpGaia, tpHanz, tpHinode, tpJax, tpJaypee, tpJigsaw, tpKei, tpKesha, tpLamce, tpMaying, tpSenorfroggy, tpShobe, tpYosh, tpPotato, tpNicklay, tpAsta, pcglogo } from "../assets/images";

// Enhanced member data structure
const membersData = {
  9: { name: "POTATO", title: "Visual Artist / Trader / Degen", handle: "potato", status: "Online", avatarUrl: potato, cleanAvatarUrl: tpPotato, bio: "Bringing starchy goodness to the team", twitterUrl: "https://x.com/SignCaster" },
  10: { name: "KEI", title: "Creative Director", handle: "kei", status: "Online", avatarUrl: kei, cleanAvatarUrl: tpKei, bio: "Designing the future", twitterUrl: "https://x.com/arkeitek" },
  11: { name: "FRENZY", title: "Founder of PussycatGang", handle: "frenzy", status: "Online", avatarUrl: frenzy, cleanAvatarUrl: tpFrenzy, bio: "Always bringing the hype", twitterUrl: "https://x.com/Frenzysgn" },
  12: { name: "BXIE", title: "Work to Earn", handle: "bxie", status: "Online", avatarUrl: bxie, cleanAvatarUrl: tpBxie, bio: "Code wizard extraordinaire", twitterUrl: "https://x.com/bxieeee" },
  13: { name: "YOSH", title: "Trader / Degen", handle: "yosh", status: "Online", avatarUrl: yosh, cleanAvatarUrl: tpYosh, bio: "Building bridges everywhere", twitterUrl: "https://x.com/_Yosh0_" },
  14: { name: "CASTERR", title: "Content Creator / my ninja", handle: "casterr", status: "Online", avatarUrl: casterr, cleanAvatarUrl: tpCasterr, bio: "Streaming the dream", twitterUrl: "https://x.com/caster_xc" },
  17: { name: "EMPRESS", title: "Project Leader", handle: "empress", status: "Online", avatarUrl: empress, cleanAvatarUrl: tpEmpress, bio: "Ruling with wisdom", twitterUrl: "https://x.com/0oEmpresso0" },
  18: { name: "EYAH", title: "Visual Artist", handle: "eyah", status: "Online", avatarUrl: eyah, cleanAvatarUrl: tpEyah, bio: "Painting digital dreams", twitterUrl: "https://x.com/eyahreigns20" },
  19: { name: "EYSZI", title: "Airdrop Hunter / Trader", handle: "eyszi", status: "Online", avatarUrl: eyszi, cleanAvatarUrl: tpEyszi, bio: "Numbers tell stories", twitterUrl: "https://x.com/Ox_eyyss" },
  20: { name: "JR SOLIS", title: "BUMABATAK NG SHABU", handle: "jrsolis", status: "Online", avatarUrl: jrsolis, cleanAvatarUrl: jrsolis, bio: "KAPE KAPE KAPE KAPE KAPE KAPE KAPE", twitterUrl: "https://twitter.com/FriedProtatoes" },
  21: { name: "JAX", title: "Music Artist", handle: "jax", status: "Online", avatarUrl: jax, cleanAvatarUrl: tpJax, bio: "Keeping things secure", twitterUrl: "https://twitter.com/adcwithjax" },
  22: { name: "JAYPEE", title: "Supreme Software Engineer", handle: "jaypee", status: "Online", avatarUrl: jaypee, cleanAvatarUrl: tpJaypee, bio: "Spreading the word", twitterUrl: "https://twitter.com/BLANK11011" },
  25: { name: "DOOSEEH", title: "Airdrop Hunter | Yapper", handle: "dooseeh", status: "Online", avatarUrl: dooseeh, cleanAvatarUrl: tpDooseeh, bio: "User experience champion", twitterUrl: "https://x.com/dondiiieeee" },
  26: { name: "JIGSAW", title: "Fitness Enthusiast", handle: "jigsaw", status: "Online", avatarUrl: jigsaw, cleanAvatarUrl: tpJigsaw, bio: "Piecing it all together", twitterUrl: "https://twitter.com/JigsawRiddles" },
  27: { name: "KESHA", title: "Social Media Maven", handle: "kesha", status: "Online", avatarUrl: kesha, cleanAvatarUrl: tpKesha, bio: "Digital trendsetter", twitterUrl: "https://x.com/itskesha02" },
  28: { name: "LAMCE", title: "Community Lead Specialist", handle: "lamce", status: "Online", avatarUrl: lamce, cleanAvatarUrl: tpLamce, bio: "Perfection is the goal", twitterUrl: "https://twitter.com/not_a_typolamce" },
  29: { name: "MAYING", title: "YAPPERIST", handle: "maying", status: "Online", avatarUrl: maying, cleanAvatarUrl: tpMaying, bio: "Making moments memorable", twitterUrl: "https://twitter.com/Marielmaying18" },
  30: { name: "SEÑORFROGGY", title: "Amphibian Ambassador / KOL", handle: "senorfroggy", status: "Online", avatarUrl: senorfroggy, cleanAvatarUrl: tpSenorfroggy, bio: "Hopping to success", twitterUrl: "https://x.com/seniorfrogggy" },
  34: { name: "SHOBE", title: "Computer Engineer", handle: "shobe", status: "Online", avatarUrl: shobe, cleanAvatarUrl: tpShobe, bio: "Preserving our vibe", twitterUrl: "https://twitter.com/Shobe_XBT" },
  35: { name: "HINODE", title: "3D ARTIST", handle: "hinode", status: "Online", avatarUrl: hinode, cleanAvatarUrl: tpHinode, bio: "Di mahalaga ang mag wagi, ang mahalaga ikaw ay nakibahagi", twitterUrl: "https://twitter.com/Saccharo2528" },
  36: { name: "HANZ", title: "QUEEN ENERGY YARN", handle: "hanz", status: "Online", avatarUrl: hanz, cleanAvatarUrl: tpHanz, bio: "Fixing what's broken", twitterUrl: "https://twitter.com/vocalvixen1x" },
  37: { name: "NICKLAY", title: "YOUR BABYCAKES", handle: "nicklay", status: "Online", avatarUrl: nicklay, cleanAvatarUrl: tpNicklay, bio: "Planning the next move", twitterUrl: "https://twitter.com/nicklay04" },
  43: { name: "ASTA", title: "APPRENTICE", handle: "asta", status: "Online", avatarUrl: asta, cleanAvatarUrl: tpAsta, bio: "No magic? No problem!", twitterUrl: "https://twitter.com/dvl_dweller" },
  44: { name: "GAIA", title: "SUPREME DISCORD MODERATOR", handle: "gaia", status: "Online", avatarUrl: gaia, cleanAvatarUrl: tpGaia, bio: "Mother of all things", twitterUrl: "https://twitter.com/SignGaia" }
};

// Sample proof images data - replace with your actual image imports
const proofImages = [
  {
    id: 1,
    src: okx1,
    title: "OKX SmashFi Trophy",
    description: "3D Printer Trophy",
    alt: "Community Growth Proof"
  },
  {
    id: 2,
    src: okx1,
    title: "Innovation & Development",
    description: "Cutting-edge solutions for tomorrow",
    alt: "Innovation Proof"
  },
  {
    id: 3,
    src: okx1,
    title: "Market Leadership",
    description: "Leading the way in digital transformation",
    alt: "Market Leadership Proof"
  },
  {
    id: 4,
    src: okx1,
    title: "Team Excellence",
    description: "Exceptional talent delivering results",
    alt: "Team Excellence Proof"
  }
];

const ProofofWork = () => {
  const [selectedMember, setSelectedMember] = useState(membersData[20]);
  const [currentProofIndex, setCurrentProofIndex] = useState(0);

  const heartPattern = [
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0]
  ];

  const defaultMember = {
    name: "404",
    title: "Secret Agent",
    handle: "unknown",
    status: "Hidden" as const,
    avatarUrl: pcglogo,
    cleanAvatarUrl: pcglogo, 
    bio: "This member prefers to stay mysterious",
    twitterUrl: "https://twitter.com"
  };

  const handlePixelClick = (pixelIndex: number) => {
    const member = membersData[pixelIndex as keyof typeof membersData];
    if (member) {
      setSelectedMember(member);
      console.log("Selected member:", member.name);
    } else {
      setSelectedMember(defaultMember);
      console.log("Selected default member for pixel:", pixelIndex);
    }
  };

  const nextProof = () => {
    setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
  };

  const prevProof = () => {
    setCurrentProofIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
  };

  const goToProof = (index: number) => {
    setCurrentProofIndex(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
    }, 5000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-orange-400 dark:bg-black overflow-hidden flex flex-col items-center justify-center px-4 md:px-8 sm:py-10 md:py-10 lg:py-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10 w-full max-w-7xl">
        
        {/* HEADING */}
        <div className="text-center mt-12 lg:mt-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white pt-0 md:pt-0 lg:pt-12">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              PussycatGang
            </span>
          </h1>
          <p className="text-lg text-black dark:text-white opacity-80 mt-4">
            Choose Your Fighter! Every Characther Has A Unique Skill Set.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 p-12">
            
            {/* PROFILE CARD - Now Dynamic */}
            <div className="flex flex-col cursor-pointer group transition-all duration-500 transform hover:scale-105  items-center justify-center ">
              <ProfileCard
                name={selectedMember.name}
                title={selectedMember.title}
                handle={selectedMember.handle}
                status={selectedMember.status}
                contactText="Contact Me"
                avatarUrl={selectedMember.cleanAvatarUrl?.src || selectedMember.cleanAvatarUrl || selectedMember.avatarUrl.src || selectedMember.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  if (selectedMember.twitterUrl) {
                    window.open(selectedMember.twitterUrl, '_blank');
                  }
                }}
              />
        {/* MEMBER INFO DISPLAY SHOW IN MOBILE/TABLET */}
        <div className="flex flex-row lg:hidden text-center mt-4">
          {selectedMember && (
            <div className=" max-w-lg mx-auto">
              <p className="text-md text-black dark:text-white opacity-70 italic">
                &quot;{selectedMember.bio || 'A valued member of our team'}&quot;
              </p>
          <p className="text-sm text-black dark:text-white opacity-80">
            Champion Quote
          </p>
            </div>
          )}
        </div>
            </div>

            {/* PIXEL HEART - Now Interactive */}
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-8">
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

                    const member = membersData[pixelIndex as keyof typeof membersData];
                    const imageSrc = member ? member.avatarUrl : pcglogo;
                    const isSelected = selectedMember && 
                      (member ? member.handle === selectedMember.handle : false);

                    return (
                      <div
                        key={pixelIndex}
                        className={`w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20
                                   rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 
                                   transform hover:scale-110 cursor-pointer border-2 overflow-hidden
                                   ${isSelected 
                                     ? 'border-yellow-400 ring-2 ring-yellow-300 scale-105' 
                                     : 'border-gray-400 dark:border-gray-500 hover:border-blue-500 dark:hover:border-blue-400'
                                   }`}
                        onClick={() => handlePixelClick(pixelIndex)}
                        title={member ? `${member.name} - ${member.title}` : "Mystery Member"}
                      >
                        <Image
                          src={imageSrc}
                          alt={member ? member.name : "Mystery Member"}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover transition-all duration-300"
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MEMBER INFO DISPLAY */}
        <div className="hidden lg:block text-center">
          {selectedMember && (
            <div className=" max-w-lg mx-auto">
              <p className="text-md text-black dark:text-white opacity-70 italic">
                &quot;{selectedMember.bio || 'A valued member of our team'}&quot;
              </p>
          <p className="text-sm text-black dark:text-white opacity-80">
            Champion Quote
          </p>
            </div>
          )}
        </div>

          <div className='text-center mt-0 lg:mt-15'>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-7 lg:mb-10">
            PussycatGang Proof of Work
          </h2>
          </div>

        {/* PROOF CAROUSEL */}
        <div className="mt-12 mb-8">
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/20 backdrop-blur-sm">
              {/* Image Slider Container */}
              <div 
                className="flex h-72 md:h-80 lg:h-[32rem] transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProofIndex * 100}%)` }}
              >
                {proofImages.map((image, index) => (
                  <div key={image.id} className="relative w-full flex-shrink-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="flex items-end justify-between">
                          {/* Text Content */}
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform transition-all duration-500 delay-200">
                              {image.title}
                            </h3>
                            <p className="text-gray-200 text-sm md:text-base opacity-90 transform transition-all duration-500 delay-300">
                              {image.description}
                            </p>
                          </div>
                          
                          {/* Proof Button */}
                          <button
                            onClick={() => {
                              // Add your proof validation logic here
                              console.log("Proof validation for:", image.title);
                            }}
                            className="ml-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 
                                     text-white font-semibold rounded-lg shadow-lg 
                                     hover:from-orange-600 hover:to-red-600 
                                     transform hover:scale-105 transition-all duration-300
                                     flex items-center gap-2"
                          >
                            <svg 
                              className="w-5 h-5" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                              />
                            </svg>
                            Proof
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevProof}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 
                         bg-white/20 backdrop-blur-sm text-white p-2 rounded-full 
                         hover:bg-white/30 transition-all duration-300 z-20 
                         hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextProof}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                         bg-white/20 backdrop-blur-sm text-white p-2 rounded-full 
                         hover:bg-white/30 transition-all duration-300 z-20
                         hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {proofImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProof(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                    index === currentProofIndex 
                      ? 'bg-orange-500 scale-125 shadow-lg shadow-orange-500/50' 
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-orange-400'
                  }`}
                >
                  {index === currentProofIndex && (
                    <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProofofWork;