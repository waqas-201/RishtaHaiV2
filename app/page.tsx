'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'));
const HeroSection = dynamic(() => import('@/components/HeroSection'));
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const SuccessStories = dynamic(() => import('@/components/SuccessStories'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <SuccessStories />
      <Footer />
    </main>
  );
}
