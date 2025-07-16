'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pakistan&apos;s most trusted Islamic matrimonial platform, helping Muslims across 
              Pakistan find their perfect life partner with Islamic values and traditions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6  tracking-widest">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Search Profiles</a></li> */}
              <li><a href="#success" className="text-gray-300 hover:text-pink-400 transition-colors">Success Stories</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-pink-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>

            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6  tracking-widest ">PRIVACY & YOU</h3>
            <ul className="space-y-3">

              <li><Link href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Wedding Planning</Link></li>
              <li><Link href="#Guided" className="text-gray-300 hover:text-pink-400 transition-colors">Islamic Guidance</Link></li>
              <li><Link href="privecy-policy" className="text-gray-300 hover:text-pink-400 transition-colors">Privacy & Safety</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 tracking-widest ">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-pink-400 mr-3" size={20} />
                <span className="text-gray-300">support@rishtahai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-pink-400 mr-3" size={20} />
                <span className="text-gray-300">+92 </span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-pink-400 mr-3 mt-1" size={20} />
                <span className="text-gray-300">
                  North Nazimabad <br />
                  Karachi, Pakistan
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400"
                />
                <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-r-lg transition-colors">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="text-pink-400 mr-2" size={20} />
              <span className="text-gray-300">
                © 2024 RishtaHai. Made with love for the Pakistani Muslim community.
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}