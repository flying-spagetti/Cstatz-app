import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is CStatz and how does it work?",
      answer: "CStatz is a cutting-edge cricket analytics app that provides in-depth statistics, real-time insights, and predictive analysis for cricket matches. It works by processing vast amounts of cricket data using advanced algorithms and machine learning to deliver actionable insights for fans, analysts, and teams."
    },
    {
      question: "Who started CStatz and what's the vision behind it?",
      answer: "CStatz was founded by Gnaneswar Lopinti, a passionate cricket enthusiast with a background in data science and software engineering. Gnaneswar's love for cricket combined with his technical expertise led him to create CStatz. His vision is to revolutionize cricket analytics by making complex data accessible and meaningful to everyone, from casual fans to professional teams. Gnaneswar aims to enhance the cricket experience through data-driven insights, fostering a deeper understanding and appreciation of the game."
    },
    {
      question: "How does CStatz process and analyze cricket data?",
      answer: "CStatz uses a combination of real-time data feeds, historical databases, and proprietary algorithms to process cricket data. We employ machine learning models to identify patterns, predict outcomes, and generate insights. Our system analyzes everything from basic statistics to complex metrics like pitch maps, shot selection, and player form."
    },
    {
      question: "Is CStatz suitable for both casual fans and professional analysts?",
      answer: "Absolutely! CStatz is designed to cater to a wide range of users. Casual fans can enjoy easy-to-understand insights and engaging visualizations, while professional analysts can dive deep into advanced metrics and customizable reports."
    },
    {
      question: "How accurate are CStatz's predictions and analyses?",
      answer: "While no prediction can be 100% accurate, CStatz's analyses are based on comprehensive data and advanced statistical models. We continuously refine our algorithms to improve accuracy. However, we always encourage users to consider our insights as informative tools rather than absolute predictions."
    },
    {
      question: "Can I use CStatz for fantasy cricket or betting purposes?",
      answer: "CStatz is designed as an analytical and educational tool. While our insights can inform your decisions in fantasy cricket, we do not explicitly cater to or encourage betting. Users should always follow local laws and regulations regarding sports betting."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-center mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;