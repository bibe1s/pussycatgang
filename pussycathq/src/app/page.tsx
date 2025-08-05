// app/page.tsx
"use client"; // Makes this a client component for client-side rendering

// Import your custom components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Airdrop from '@/components/Airdrop';
import LetterGlitch from '@/components/LetterGlitch';

// Main Home page component
export default function Home() {
  return (
    // Main container with full screen height and theme-aware styling
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation bar with theme toggle */}
      <Navbar />
      
      {/* Hero section - responsive and theme-aware */}
      <Hero />

      <Airdrop />
      
      
      {/* Future sections will be added here */}
    </main>
  );
}