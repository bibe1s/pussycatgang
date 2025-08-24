"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import pcgLogo from '../assets/images/pcglogo.svg';

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
      color: 'from-orange-500 to-red-500',
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
      name: "Master Trader Alex",
      specialty: "Elliott Wave Expert",
      experience: "15+ years",
      image: "/placeholder-teacher-1.jpg",
      rating: 4.9,
      students: "2.4K"
    },
    {
      id: 2,
      name: "ICT Specialist Sarah",
      specialty: "Institutional Concepts",
      experience: "12+ years",
      image: "/placeholder-teacher-2.jpg",
      rating: 4.8,
      students: "1.8K"
    },
    {
      id: 3,
      name: "Price Action Pro Mike",
      specialty: "Pure Technical Analysis",
      experience: "18+ years",
      image: "/placeholder-teacher-3.jpg",
      rating: 4.9,
      students: "3.1K"
    },
    {
      id: 4,
      name: "Fibonacci Master Lisa",
      specialty: "Mathematical Trading",
      experience: "14+ years",
      image: "/placeholder-teacher-4.jpg",
      rating: 4.7,
      students: "1.5K"
    }
  ];

  const selectedTechnique = tradingTechniques.find(t => t.id === activeTab);

  return (
    <section className="relative min-h-screen bg-orange-400 dark:bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>


      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Learn
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">Trading</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Master the art of trading with proven techniques and expert guidance. 
              From Elliott Wave to ICT methodology, unlock your trading potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Learning
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                Meet Our Teachers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Techniques Tabs */}
      <div className="relative z-10 py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Learn Trading Techniques
          </h2>
          
          {/* Technique Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tradingTechniques.map((technique) => (
              <button
                key={technique.id}
                onClick={() => setActiveTab(technique.id)}
                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === technique.id
                    ? 'bg-gradient-to-r ' + technique.color + ' text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
              >
                <span className="text-2xl mr-2">{technique.icon}</span>
                {technique.name}
              </button>
            ))}
          </div>

          {/* Selected Technique Content */}
          {selectedTechnique && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-12">
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
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Learn {selectedTechnique.name}
                  </button>
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
          )}
        </div>
      </div>

      {/* Expert Teachers Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Learn from Expert Traders
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div 
                key={teacher.id}
                onClick={() => setSelectedTeacher(index)}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  selectedTeacher === index 
                    ? 'border-orange-500 shadow-2xl' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}
              >
                {/* Teacher Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👨‍🏫</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Teacher Image</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Placeholder</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {teacher.specialty}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                  {teacher.experience} experience
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {teacher.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {teacher.students} students
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="relative z-10 py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Your Learning Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Foundation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build strong fundamentals with basic trading concepts and market psychology
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Advanced Techniques</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master Elliott Wave, ICT methodology, and advanced price action analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Mastery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Combine all techniques for consistent profitable trading strategies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="relative z-10 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We collaborate with leading institutions and experts to provide you with the best trading education
          </p>
          
          {/* Marquee Partners Row */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {/* First set of partners */}
              <div className="flex space-x-8 min-w-max">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <h3 className="text-white font-semibold text-sm">Institution</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💼</div>
                    <h3 className="text-white font-semibold text-sm">Corporate</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <h3 className="text-white font-semibold text-sm">Startup</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💎</div>
                    <h3 className="text-white font-semibold text-sm">Premium</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌟</div>
                    <h3 className="text-white font-semibold text-sm">Star</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔥</div>
                    <h3 className="text-white font-semibold text-sm">Hot</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="text-white font-semibold text-sm">Fast</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <h3 className="text-white font-semibold text-sm">Target</h3>
                  </div>
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 min-w-max">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <h3 className="text-white font-semibold text-sm">Institution</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💼</div>
                    <h3 className="text-white font-semibold text-sm">Corporate</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <h3 className="text-white font-semibold text-sm">Startup</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💎</div>
                    <h3 className="text-white font-semibold text-sm">Premium</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌟</div>
                    <h3 className="text-white font-semibold text-sm">Star</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔥</div>
                    <h3 className="text-white font-semibold text-sm">Hot</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="text-white font-semibold text-sm">Fast</h3>
                  </div>
                </div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <h3 className="text-white font-semibold text-sm">Target</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Trading;