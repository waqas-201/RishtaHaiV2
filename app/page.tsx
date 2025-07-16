'use client';

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/HeroSection'));
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const SuccessStories = dynamic(() => import('@/components/SuccessStories'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <SuccessStories />
    </main>
  );
}
