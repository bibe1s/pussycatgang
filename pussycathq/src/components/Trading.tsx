"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { frenzy, eyszi, potato, yosh } from '../assets/images';
// Import partner SVGs
import { 
  onepercent, 
  redpill, 
  cryptitaplays, 
  cryptodegen, 
  thesafehouse, 
  web3rizal, 
  triad, 
  web3forward, 
  signcares 
} from '../assets/images';

import ElectricBorder from './ElectricBorder'; // Import the ElectricBorder component

const Trading = () => {
  const [activeTab, setActiveTab] = useState('elliott');
  const [selectedTeacher, setSelectedTeacher] = useState(0);

  const tradingTechniques = [
    {
      id: 'elliott',
      name: 'Elliott Wave Theory',
      description: 'Master the art of market psychology through wave analysis',
      icon: '🌊',
      color: 'from-blue-500 to-cyan-500',
      borderColor: '#00BFFF', // Electric blue
      features: [
        'Wave counting and identification',
        'Fibonacci retracements and extensions',
        'Market structure analysis',
        'Trend continuation patterns',
        'Reversal signal recognition'
      ]
    },
    {
      id: 'ict',
      name: 'ICT Methodology',
      description: 'Learn institutional trading concepts and market manipulation',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      borderColor: '#9D4EDD', // Electric purple
      features: [
        'Order block identification',
        'Fair value gaps (FVG)',
        'Liquidity sweeps',
        'Market structure shifts',
        'Optimal trade entry (OTE)'
      ]
    },
    {
      id: 'price-action',
      name: 'Price Action Trading',
      description: 'Read the market through pure price movement analysis',
      icon: '📊',
      color: 'from-green-500 to-emerald-500',
      borderColor: '#10B981', // Electric green
      features: [
        'Support and resistance levels',
        'Candlestick patterns',
        'Chart patterns recognition',
        'Volume analysis',
        'Breakout strategies'
      ]
    },
    {
      id: 'fibonacci',
      name: 'Fibonacci Analysis',
      description: 'Use mathematical ratios for precise entry and exit points',
      icon: '📐',
      color: 'from-amber-500 to-yellow-500',
      borderColor: '#f59e0b', // amber
      features: [
        'Golden ratio applications',
        'Retracement levels',
        'Extension targets',
        'Time analysis',
        'Harmonic patterns'
      ]
    }
  ];

  const teachers = [
    {
      id: 1,
      name: "Yosh",
      specialty: "Elliott Wave Enthusiast / Degen",
      experience: "15+ years",
      image: yosh,
      rating: 4.9,
      students: "2.4K",
      borderColor: "#00BFFF", // Electric blue for Elliott Wave
      gradientColor: "from-blue-500 to-cyan-500",
      xLink: "https://x.com/_Yosh0_" // Replace with actual X profile
    },
    {
      id: 2,
      name: "Potato",
      specialty: "Fundamental Analyst",
      experience: "12+ years",
      image: potato,
      rating: 4.8,
      students: "1.8K",
      borderColor: "#10B981", // Electric green for Fundamentals
      gradientColor: "from-green-500 to-emerald-500",
      xLink: "https://x.com/SignCaster" // Replace with actual X profile
    },
    {
      id: 3,
      name: "Frenzy",
      specialty: "Pure Technical Analysis",
      experience: "18+ years",
      image: frenzy,
      rating: 4.9,
      students: "3.1K",
      borderColor: "#9D4EDD", // Electric purple for Technical Analysis
      gradientColor: "from-purple-500 to-pink-500",
      xLink: "https://x.com/Frenzysgn" // Replace with actual X profile
    },
    {
      id: 4,
      name: "Eyszi",
      specialty: "Fibonacci Mathematical Trading",
      experience: "14+ years",
      image: eyszi,
      rating: 4.7,
      students: "1.5K",
      borderColor: "#f59e0b", // Electric amber for Fibonacci
      gradientColor: "from-amber-500 to-yellow-500",
      xLink: "https://x.com/Ox_eyyss" // Replace with actual X profile
    }
  ];

  // Partners data with SVG imports
  const partners = [
    { name: 'OnePercent', logo: onepercent },
    { name: 'RedPill', logo: redpill },
    { name: 'CryptitaPlays', logo: cryptitaplays },
    { name: 'CryptoDegen', logo: cryptodegen },
    { name: 'The Safe House', logo: thesafehouse },
    { name: 'Web3 Rizal', logo: web3rizal },
    { name: 'Triad', logo: triad },
    { name: 'Web3 Forward', logo: web3forward },
    { name: 'SignCares', logo: signcares }
  ];

  const selectedTechnique = tradingTechniques.find(t => t.id === activeTab);

  // Handle X link click
  const handleXLinkClick = (e, xLink) => {
    e.stopPropagation(); // Prevent triggering the card selection
    window.open(xLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen bg-orange-400 dark:bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Trading Techniques Tabs */}
      <div className="relative z-10 py-0 md:py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-7 lg:mb-10">
            Learn Trading Techniques
          </h2>
          
          {/* Technique Tabs with Electric Border on Active Tab */}
          <div className="flex flex-wrap justify-center gap-4 mb-7 lg:mb-12">

            {tradingTechniques.map((technique) => (
              <div key={technique.id}>
                {activeTab === technique.id ? (
                  <ElectricBorder
                    color={technique.borderColor}
                    speed={0.5}
                    chaos={0.35}
                    thickness={2}
                    style={{ borderRadius: 25 }}
                  >
                    <button
                      onClick={() => setActiveTab(technique.id)}
                      className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${technique.color} text-white shadow-lg`}
                    >
                      <span className="text-2xl mr-2">{technique.icon}</span>
                      {technique.name}
                    </button>
                  </ElectricBorder>
                ) : (
                  <button
                    onClick={() => setActiveTab(technique.id)}
                    className="px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <span className="text-2xl mr-2">{technique.icon}</span>
                    {technique.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Selected Technique Content with Electric Border */}
          {selectedTechnique && (
            <ElectricBorder
              color={selectedTechnique.borderColor}
              speed={0.5}
              chaos={0.35}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-6xl mb-6">{selectedTechnique.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedTechnique.name}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                      {selectedTechnique.description}
                    </p>
                    
                    <div className="space-y-4">
                      {selectedTechnique.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center">
                      <ElectricBorder
                        color={selectedTechnique.borderColor}
                        speed={0.5}
                        chaos={0.35}
                        thickness={2}
                        className="inline-block"
                        style={{ borderRadius: 9999 }}
                      >
                        <button className={`bg-gradient-to-r ${selectedTechnique.color} hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                          Learn {selectedTechnique.name }
                        </button>
                      </ElectricBorder>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📚</div>
                      <p className="text-gray-600 dark:text-gray-400">Course Content</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          )}
        </div>
      </div>

      {/* Expert Teachers Section */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Learn from Experienced Traders
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={teacher.id}>
                {selectedTeacher === index ? (
                  <ElectricBorder
                    color={teacher.borderColor}
                    speed={0.5}
                    chaos={0.35}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                  >
                    <div 
                      onClick={() => setSelectedTeacher(index)}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl cursor-pointer transition-all duration-300 relative"
                    >
                      {/* X Logo in top-right corner */}
                      <button
                        onClick={(e) => handleXLinkClick(e, teacher.xLink)}
                        className="absolute top-8 right-8 z-10 w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
                        title={`Follow ${teacher.name} on X`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </button>
                      
                      {/* Teacher Image using Next.js Image component */}
                      <div className={`relative w-full h-48 mb-4 rounded-xl overflow-hidden border-2 bg-gradient-to-br ${teacher.gradientColor} p-1`}>
                        <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                          <Image
                            src={teacher.image}
                            alt={teacher.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {teacher.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {teacher.specialty}
                      </p>
                    </div>
                  </ElectricBorder>
                ) : (
                  <div 
                    onClick={() => setSelectedTeacher(index)}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 cursor-pointer transition-all duration-300 border-gray-200 dark:border-gray-700 hover:border-orange-300 relative"
                  >
                    {/* X Logo in top-right corner */}
                    <button
                      onClick={(e) => handleXLinkClick(e, teacher.xLink)}
                      className="absolute top-8 right-8 z-10 w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
                      title={`Follow ${teacher.name} on X`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    
                    {/* Teacher Image using Next.js Image component */}
                    <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {teacher.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {teacher.specialty}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="relative z-10 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Partnered Communities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We collaborate with various communities to enhance our connection in web3.
          </p>
          
          {/* Marquee Partners Row */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {/* First set of partners */}
              <div className="flex min-w-max">
                {partners.map((partner, index) => (
                  <div key={index} className="w-72 h-72 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={560}
                      height={560}
                      className="object-contain max-w-full max-h-full transition-all duration-200 transform hover:scale-110"
                    />
                  </div>                  
                ))}


                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trading;