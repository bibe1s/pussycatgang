'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

interface NavLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "GitHub", href: "#", icon: "⚡" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Discord", href: "#", icon: "💬" }
  ];

  const quickLinks: NavLink[] = [
    { name: "PussycatGang", href: "#hero" },
    { name: "The Gang", href: "#ProofofWork" },
    { name: "Trading", href: "#trading" },
    { name: "Airdrop", href: "#airdrop" }
  ];

  const legalLinks: NavLink[] = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" }
  ];

  // Custom smooth scroll with same function as navbar
  const smoothScrollTo = (targetY: number, duration: number = 2000) => {
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

  // Smooth scroll handler for internal links
  const handleScrollClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle internal links (starting with #)
    if (!href.startsWith('#')) return;
    
    e.preventDefault();
    const targetId = href.substring(1); // Remove the #
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get navbar height for offset (assuming navbar exists)
      const navbar = document.querySelector('header') || document.querySelector('nav');
      const navbarHeight = navbar?.offsetHeight || 80; // fallback to 80px
      
      const windowWidth = window.innerWidth;
      
      // Dynamic offset based on window size (same as navbar)
      let offset;
      if (windowWidth < 640) {
        offset = navbarHeight + 50;
      } else if (windowWidth < 1024) {
        offset = navbarHeight + 30;
      } else {
        offset = navbarHeight + 26;
      }
      
      const targetY = Math.max(0, element.offsetTop - offset);
      
      // Use smooth scroll with 2000ms duration
      smoothScrollTo(targetY, 2000);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative z-40 bg-gray-900 text-white border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl text-orange-400">ᓚᘏᗢ</span>
              <h3 className="text-xl font-bold text-orange-400">PussycatGang</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Discover the latest airdrop opportunities and crypto projects. 
              Join our community to stay updated on the most promising ventures in the blockchain space.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-orange-400 hover:text-black transition-all duration-300 group flex items-center justify-center w-12 h-12"
                  aria-label={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">Quick Nav</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={handleScrollClick(link.href)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-1 mb-2 sm:mb-0">
              <span>© {currentYear} PussycatGang. All Rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <span>Made with ❤️ by FriedProtato </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;