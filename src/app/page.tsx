"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Preregister from './components/Preregister';
import Loader from './components/Loading';
import { TrophyIcon, UsersIcon, ChartBarIcon, ShieldCheckIcon, TableCellsIcon, LightBulbIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import VisualizationDemo from './components/VisualizationDemo';
import PricingPlans from './components/PricingPlans';
import FAQSection from './components/FAQ';
const colors = {
  primary: '#000000', // Black
  secondary: '#F2F2F2', // Light Gray
  accent: '#F07364', // Vibrant Orange
  highlight: '#4ECDC4', // Turquoise
  brown: '#8B4513', // Brown
};

const features = [
  { name: 'Advanced Player Analytics', description: 'In-depth stats and performance metrics.', icon: ChartBarIcon },
  { name: 'Real-time Match Insights', description: 'Live updates and predictive analysis.', icon: ShieldCheckIcon },
  { name: 'Team Performance Tracking', description: 'Comprehensive team statistics over time.', icon: UsersIcon },
  { name: 'Custom Data Visualization', description: 'Create your own analytics dashboards.', icon: TableCellsIcon },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative" style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: colors.secondary }}>
      <Navbar />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-white"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="absolute inset-0 bg-cover bg-center">
          <Image
            src="https://i.pinimg.com/736x/b3/23/b3/b323b3a2590d9f6065341b555245933e.jpg"
            alt="Cricket background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'black', opacity: 0.4}}></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block">CStatz</span>
            <span className="block" style={{ color: colors.accent }}>Cricket Analytics Redefined</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-xl"
          >
            Empowering fans with cutting-edge cricket analytics and real-time insights.
          </motion.p>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10"
          >
            <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md transition" style={{ backgroundColor: colors.accent, color: colors.primary }}>
              <LightBulbIcon className="w-5 h-5 mr-2" />
              Try Demo
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Live Match Dashboard */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
    <TrophyIcon className="inline-block w-8 h-8 mr-2" style={{ color: colors.accent }} />
    Next Test Match: Australia vs India
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-lg"
      style={{ backgroundColor: colors.secondary }}
    >
      <h3 className="text-lg font-semibold mb-2">Match Details</h3>
      <p className="text-xl font-bold">Venue: Perth</p>
      <p className="text-lg">Date: November 22 - 26, 2024</p>
      <p className="text-sm">1st Test • India tour of Australia</p>
      <p className="text-sm">Start Time: 10:20 am Local (2:20 am GMT)</p>
    </motion.div>
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-lg"
      style={{ backgroundColor: colors.secondary }}
    >
      <h3 className="text-lg font-semibold mb-2">Predicted Impact Player</h3>
      <p className="text-xl font-bold">Virat Kohli</p>
      <p>Last 5 Tests Avg: 52.85</p>
      <p>Avg vs Australia: 48.25</p>
      <p>MCG Avg: 86.00</p>
    </motion.div>
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-lg"
      style={{ backgroundColor: colors.secondary }}
    >
      <h3 className="text-lg font-semibold mb-2">Win Probability</h3>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-4 rounded-full"
            style={{ backgroundColor: colors.accent }}
          ></motion.div>
        </div>
        <span className="text-lg font-semibold">60%</span>
      </div>
      <p className="mt-2">India favored to win</p>
    </motion.div>
  </div>
  <div className="mt-8">
    <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>Top Voted Players</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { name: 'Rohit Sharma', image: 'https://i.pinimg.com/236x/63/49/36/634936d7559ada38e14fed653c37aef6.jpg' },
        { name: 'Steve Smith', image: 'https://i.pinimg.com/236x/df/aa/3e/dfaa3eabeeb8c5063b505312f6029617.jpg  ' },
        { name: 'Jasprit Bumrah', image: 'https://i.pinimg.com/236x/54/ec/7f/54ec7fe171891c4d6ed4d3be155341b9.jpg' },
        { name: 'Rishab Pant', image: 'https://i.pinimg.com/236x/31/c1/ae/31c1ae19dd78b2c8fbcabe1c7db3a1d8.jpg' }
      ].map((player, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.05 }}
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: colors.secondary }}
        >
          <Image
            src={player.image}
            alt={player.name}
            width={100}
            height={100}
            className="rounded-full mx-auto mb-2"
          />
          <p className="text-lg font-semibold">{player.name}</p>
          <p className="text-sm">Votes: {90 - index * 10}%</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className="py-16" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-center mb-12"
            style={{ color: colors.primary }}
          >
            <StarIcon className="inline-block w-8 h-8 mr-2" style={{ color: colors.brown }} />
            Powerful Analytics Tools
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: colors.secondary }}
              >
                <div className="p-6">
                  <feature.icon className="h-8 w-8 mb-4" style={{ color: colors.brown }} />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>{feature.name}</h3>
                  <p style={{ color: colors.primary }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Visualization Demo */}
      <div className="py-16" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-center mb-12"
            style={{ color: colors.primary }}
          >
            <ChartBarIcon className="inline-block w-8 h-8 mr-2" style={{ color: colors.brown }} />
            Interactive Data Visualization
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl shadow-lg p-6"
            style={{ backgroundColor: colors.secondary }}
          >
            <VisualizationDemo />
          </motion.div>
        </div>
      </div>
      <PricingPlans />
      <FAQSection />

      {/* Testimonials */}
      <div className="py-16" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-center mb-12"
            style={{ color: colors.primary }}
          >
            <UsersIcon className="inline-block w-8 h-8 mr-2" style={{ color: colors.brown }} />
            Testimonials from Cricket Experts
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              { text: "CStatz offers insights that I wish I had during my playing days. It's a game-changer for modern cricket.", author: "Rahul Dravid, Ex-Indian Cricketer", avatar: "https://i.pinimg.com/736x/dd/c1/cb/ddc1cb7033a7c370c5a3fb792059f981.jpg" },
              { text: "As a commentator, CStatz has become my go-to resource for real-time analytics. It adds depth to our broadcasts.", author: "Harsha Bhogle, Cricket Commentator", avatar: "https://i.pinimg.com/736x/dd/c1/cb/ddc1cb7033a7c370c5a3fb792059f981.jpg" },
              { text: "The depth of analysis CStatz provides is phenomenal. It's revolutionizing how we understand player performance.", author: "Michael Atherton, Ex-England Captain & Commentator", avatar: "https://i.pinimg.com/736x/dd/c1/cb/ddc1cb7033a7c370c5a3fb792059f981.jpg" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl shadow"
                style={{ backgroundColor: colors.secondary }}
              >
                <div className="flex items-center mb-4">
                  <Image src={testimonial.avatar} alt={testimonial.author} width={50} height={50} className="rounded-full mr-4" />
                  <p className="font-semibold" style={{ color: colors.primary }}>{testimonial.author}</p>
                </div>
                <p style={{ color: colors.primary }}>&ldquo;{testimonial.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Preregister />
      <Footer />
    </div>
  );
}