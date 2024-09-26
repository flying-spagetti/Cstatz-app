import React from 'react';
import { motion } from 'framer-motion';
import { CurrencyDollarIcon, SparklesIcon, FireIcon } from '@heroicons/react/24/outline';

const PricingPlans = () => {
  const plans = [
    {
      name: "Six-Hit Tier",
      price: "Free",
      description: "As free as a ball sailing over the boundary",
      features: [
        "Basic match analytics",
        "Player performance tracking",
        "Live score updates"
      ],
      icon: CurrencyDollarIcon,
      color: "#4ECDC4" // Turquoise
    },
    {
      name: "Maiden Over Plan",
      price: "$0/month",
      description: "Because we love cricket as much as you do",
      features: [
        "Advanced team statistics",
        "Customizable dashboards",
        "Historical data access"
      ],
      icon: SparklesIcon,
      color: "#F07364" // Vibrant Orange
    },
    {
      name: "Not-Out Subscription",
      price: "Absolutely Free",
      description: "Stay at the crease forever with our ultimate plan",
      features: [
        "AI-powered predictions",
        "Exclusive cricket insights",
        "Priority customer support"
      ],
      icon: FireIcon,
      color: "#8B4513" // Brown
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-center mb-12 text-black"
        >
          Choose Your Winning Plan
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-center">
                  <plan.icon className="h-12 w-12 mb-4" style={{ color: plan.color }} />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-center mb-4" style={{ color: plan.color }}>{plan.price}</p>
                <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 text-gray-600 italic"
        >
          * All plans are currently free. We're just having a bit of fun with the pricing!
        </motion.p>
      </div>
    </div>
  );
};

export default PricingPlans;