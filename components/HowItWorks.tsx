'use client';

import { motion } from 'framer-motion';
import { UserPlus, Search, MessageCircle, Heart, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Sign up and create a detailed profile highlighting your Islamic values, Pakistani culture, and what you\'re looking for in a partner.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    step: '01'
  },
  {
    icon: Search,
    title: 'Browse & Search',
    description: 'Use our advanced filters to find compatible matches based on sect, city, education, and family values across Pakistan.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    step: '02'
  },
  {
    icon: MessageCircle,
    title: 'Connect Respectfully',
    description: 'Start conversations through our secure messaging system, with family involvement when appropriate following Pakistani traditions.',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    step: '03'
  },
  {
    icon: Heart,
    title: 'Find Your Match',
    description: 'Build meaningful relationships that lead to nikah, with guidance and support throughout your journey in Pakistan.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    step: '04'
  }
];

export default function HowItWorks() {
  return (
    <section id='HWC' className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            How <span className="gradient-text">RishtaHai</span> Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our simple, secure, and Islamic-compliant process makes finding your life partner 
            easy and comfortable for you and your family in Pakistan.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover text-center relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                    <step.icon className={`${step.color}`} size={40} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="text-gray-300 dark:text-gray-600" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Islamic Guidance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Guided by Islamic Principles & Pakistani Culture
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Every step of our process is designed to honor Islamic values and Pakistani traditions. 
              We encourage family involvement, maintain respectful communication, and provide 
              guidance based on Islamic teachings about marriage and relationships.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Heart className="text-pink-600 mr-2" size={16} />
                Halal Approach
              </span>
              <span className="flex items-center">
                <UserPlus className="text-blue-600 mr-2" size={16} />
                Family Involvement
              </span>
              <span className="flex items-center">
                <MessageCircle className="text-green-600 mr-2" size={16} />
                Respectful Communication
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}