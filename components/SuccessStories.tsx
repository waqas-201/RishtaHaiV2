'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Quote } from 'lucide-react';
import Image from 'next/image';

const stories = [
  {
    id: 1,
    names: "Ahmed & Fatima",
    location: "Karachi, Pakistan",
    story: "We found each other through RishtaHai after months of searching. The platform's emphasis on Islamic values and Pakistani culture made us feel comfortable and secure throughout our journey.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    marriedDate: "Married in 2023"
  },
  {
    id: 2,
    names: "Omar & Aisha",
    location: "Lahore, Pakistan",
    story: "RishtaHai helped us connect despite being in different cities of Pakistan. The family involvement feature made our parents feel included and comfortable with the process.",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    marriedDate: "Married in 2022"
  },
  {
    id: 3,
    names: "Hassan & Zainab",
    location: "Islamabad, Pakistan",
    story: "The detailed profiles and compatibility matching helped us understand each other's values before we even started talking. Alhamdulillah, we're now happily married with Pakistani traditions!",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    marriedDate: "Married in 2023"
  }
];

export default function SuccessStories() {
  return (
    <section id="success" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real Pakistani couples, real love stories. See how RishtaHai has helped thousands 
            of Muslims across Pakistan find their perfect match and build beautiful families.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={story.image}
                    alt={story.names}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{story.names}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{story.location}</p>
                  <p className="text-pink-600 text-sm font-medium">{story.marriedDate}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-pink-200 dark:text-pink-800" size={24} />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-4 italic">
                  &quot;{story.story}&quot;
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center">
                <Heart className="text-pink-600 mr-2" size={16} />
                <span className="text-sm text-gray-600 dark:text-gray-400">Verified Success Story</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of happy Pakistani couples who found their perfect match through RishtaHai
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}