'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

const MotionLink = motion(Link);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target) as HTMLElement;
    if (el) lenis?.scrollTo(el);
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <MotionLink
              href="/"
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-all relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-blue-600 group-hover:w-full transition-all duration-300" />
            </MotionLink>

            <button
              onClick={(e) => handleSmoothScroll(e, '#HWC')}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-all relative group"
            >
              <motion.span whileHover={{ scale: 1.05, y: -2 }}>
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-blue-600 group-hover:w-full transition-all duration-300" />
              </motion.span>
            </button>

            <button
              onClick={(e) => handleSmoothScroll(e, '#success')}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-all relative group"
            >
              <motion.span whileHover={{ scale: 1.05, y: -2 }}>
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-blue-600 group-hover:w-full transition-all duration-300" />
              </motion.span>
            </button>

            <button
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-all relative group"
            >
              <motion.span whileHover={{ scale: 1.05, y: -2 }}>
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-blue-600 group-hover:w-full transition-all duration-300" />
              </motion.span>
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4"
          >
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
              >
                Home
              </Link>
              <button
                onClick={(e) => handleSmoothScroll(e, '#HWC')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
              >
                How It Works
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#success')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
              >
                Success Stories
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#features')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
              >
                Features
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
