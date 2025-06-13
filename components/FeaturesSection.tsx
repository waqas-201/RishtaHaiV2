'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Users, MessageCircle, Search, Star, Lock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'Every profile is manually verified to ensure authenticity and safety for our Pakistani community.',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    icon: Heart,
    title: 'Islamic Values',
    description: 'Find matches who share your faith, values, and commitment to Islamic principles in Pakistan.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20'
  },
  {
    icon: Users,
    title: 'Family Involvement',
    description: 'Respectful approach that honors Pakistani family traditions and involvement in the process.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: MessageCircle,
    title: 'Secure Communication',
    description: 'Safe and monitored communication channels that respect Islamic guidelines.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: Search,
    title: 'Advanced Matching',
    description: 'Sophisticated algorithms that consider religious compatibility and Pakistani cultural preferences.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    icon: Lock,
    title: 'Privacy Protection',
    description: 'Your personal information is protected with industry-leading security measures.',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    icon: MapPin,
    title: 'All Pakistan Coverage',
    description: 'Connect with Muslims from all major cities and regions across Pakistan.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20'
  },
  {
    icon: Star,
    title: 'Success Stories',
    description: 'Join thousands of Pakistani couples who found their perfect match through our platform.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose <span className="gradient-text">RishtaHai</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We understand the importance of finding a life partner who shares your values, 
            faith, and vision for the future. Our platform is designed with Islamic principles and Pakistani culture at its core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                <feature.icon className={`${feature.color}`} size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Islamic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-4xl text-pink-600 mb-4 font-amiri">"</div>
            <p className="text-2xl font-amiri text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 italic">
              "And among His signs is that He created for you from yourselves mates 
              that you may find tranquility in them; and He placed between you affection and mercy."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">- Quran 30:21</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}