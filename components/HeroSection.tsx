'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { motion } from 'framer-motion';
import { Heart, Users, Shield, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MultiStepForm from './form/stepControler';

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient islamic-pattern"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-pink-200 opacity-20"
        >
          <Heart size={60} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 text-blue-200 opacity-20"
        >
          <Star size={40} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 text-pink-200 opacity-20"
        >
          <Users size={50} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find Your Perfect
            <br />
            <span className="gradient-text font-amiri">Islamic Match</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of Pakistani Muslims in finding their life partner through 
            <span className="text-pink-600 font-semibold"> halal</span> and 
            <span className="text-blue-600 font-semibold"> trusted</span> matrimonial services
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">All</div>
              <div className="text-gray-600 dark:text-gray-400">Pakistan Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto mb-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Start Your Journey Today</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Select>
              <SelectTrigger className="h-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                <SelectValue placeholder="I'm looking for" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bride">Bride</SelectItem>
                <SelectItem value="groom">Groom</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18-25">18-25 years</SelectItem>
                <SelectItem value="26-30">26-30 years</SelectItem>
                <SelectItem value="31-35">31-35 years</SelectItem>
                <SelectItem value="36-40">36-40 years</SelectItem>
                <SelectItem value="40+">40+ years</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Sect" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sunni">Sunni</SelectItem>
                <SelectItem value="shia">Shia</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                <SelectItem value="faisalabad">Faisalabad</SelectItem>
                <SelectItem value="multan">Multan</SelectItem>
                <SelectItem value="peshawar">Peshawar</SelectItem>
                <SelectItem value="quetta">Quetta</SelectItem>
                <SelectItem value="sialkot">Sialkot</SelectItem>
                <SelectItem value="gujranwala">Gujranwala</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >



            <Dialog open={open} onOpenChange={setOpen}>


              {/* Get Started Button */}
              <DialogTrigger asChild>
                <div className="flex flex-col items-start gap-[2px] md:w-auto w-full">
                  <p className="invisible text-sm mb-1">Get Started</p>
                  <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 rounded-xl" onClick={handleClick} >
                    <Heart className="mr-2" size={20} />
                    Find My Perfect Match
                  </Button>

                </div>
              </DialogTrigger>

              <DialogContent className="md:w-[100%] rounded-lg w-[95%] min-h-fit bg-white/95 dark:bg-gray-900/95 max-h-[99vh] md:p-6 p-2 flex flex-col md:overflow-visible md:landscape:overflow-visible landscape:overflow-y-scroll">
                {/* Custom Close Button for Mobile */}
                <button
                  onClick={handleClose}
                  className="md:hidden absolute right-2 top-2 w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full touch-manipulation active:bg-gray-200 dark:active:bg-gray-700 z-50"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4 text-gray-800 dark:text-white" />
                </button>

                <div className="md:p-6 p-2">
                  <MultiStepForm />
                </div>
              </DialogContent>
            </Dialog>

          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Shield className="text-green-600" size={20} />
            <span>100% Verified Profiles</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="text-pink-600" size={20} />
            <span>Islamic Values</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="text-yellow-600" size={20} />
            <span>Trusted in Pakistan</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}