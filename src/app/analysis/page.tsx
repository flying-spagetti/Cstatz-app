"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChartBarIcon, UserGroupIcon, SunIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Loader from '../components/Loading';

const colors = {
  primary: '#000000', // Black
  secondary: '#F2F2F2', // Light Gray
  accent: '#F07364', // Vibrant Orange
  highlight: '#4ECDC4', // Turquoise
  brown: '#8B4513', // Brown
};

const AnalysisPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const borderGavaskarData = {
    matches: [
      { id: 1, date: '2023-02-09', venue: 'Nagpur', result: 'India won by an innings and 132 runs', image: 'https://crictoday.com/wp-content/uploads/2023/02/ind-vs-aus-1st-test-nagpur-1.jpg' },
      { id: 2, date: '2023-02-17', venue: 'Delhi', result: 'India won by 6 wickets', image: 'https://crictoday.com/wp-content/uploads/2023/02/ind-vs-aus-2nd-test-delhi-1.jpg' },
      { id: 3, date: '2023-03-01', venue: 'Indore', result: 'Australia won by 9 wickets', image: 'https://crictoday.com/wp-content/uploads/2023/03/ind-vs-aus-3rd-test-indore-1.jpg' },
      { id: 4, date: '2023-03-09', venue: 'Ahmedabad', result: 'Match drawn', image: 'https://crictoday.com/wp-content/uploads/2023/03/ind-vs-aus-4th-test-ahmedabad-1.jpg' },
    ],
    bestPlayers: [
      { name: 'Virat Kohli', country: 'India', matches: 24, runs: 1979, average: 54.97, image: 'https://i.pinimg.com/236x/fd/8a/01/fd8a01e447c5f1fda2875167247c58a5.jpg' },
      { name: 'Steve Smith', country: 'Australia', matches: 14, runs: 1742, average: 72.58, image: 'https://i.pinimg.com/236x/8b/16/db/8b16db12ae546d5b67c9db0d0f7d4fff.jpg' },
      { name: 'Ravichandran Ashwin', country: 'India', matches: 19, wickets: 114, average: 21.67, image: 'https://i.pinimg.com/236x/fd/da/ca/fddaca8fb9a8c45d3756e1f4b5a6dbaf.jpg' },
    ],
    predictedSquads: {
      india: [
        { name: 'Rohit Sharma', role: 'Batsman', impact: 9.2, image: 'https://i.pinimg.com/236x/7c/b5/44/7cb544c8b9d1403622a2927c48c3f4d5.jpg' },
        { name: 'Shubman Gill', role: 'Batsman', impact: 8.7, image: 'https://i.pinimg.com/236x/e7/f0/c7/e7f0c7e8c9c9d9b3b3b3b3b3b3b3b3b3.jpg' },
        { name: 'Cheteshwar Pujara', role: 'Batsman', impact: 8.5, image: 'https://i.pinimg.com/236x/1c/1c/1c/1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c.jpg' },
        { name: 'Virat Kohli', role: 'Batsman', impact: 9.5, image: 'https://i.pinimg.com/236x/fd/8a/01/fd8a01e447c5f1fda2875167247c58a5.jpg' },
        { name: 'Ajinkya Rahane', role: 'Batsman', impact: 8.0, image: 'https://i.pinimg.com/236x/2c/2c/2c/2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c.jpg' },
        { name: 'Ravindra Jadeja', role: 'All-rounder', impact: 9.0, image: 'https://i.pinimg.com/236x/3c/3c/3c/3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c.jpg' },
        { name: 'Rishabh Pant', role: 'Wicket-keeper', impact: 8.8, image: 'https://i.pinimg.com/236x/4c/4c/4c/4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c.jpg' },
        { name: 'Ravichandran Ashwin', role: 'Bowler', impact: 9.3, image: 'https://i.pinimg.com/236x/fd/da/ca/fddaca8fb9a8c45d3756e1f4b5a6dbaf.jpg' },
        { name: 'Axar Patel', role: 'Bowler', impact: 8.6, image: 'https://i.pinimg.com/236x/5c/5c/5c/5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c.jpg' },
        { name: 'Mohammed Shami', role: 'Bowler', impact: 8.9, image: 'https://i.pinimg.com/236x/6c/6c/6c/6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c.jpg' },
        { name: 'Jasprit Bumrah', role: 'Bowler', impact: 9.4, image: 'https://i.pinimg.com/236x/7c/7c/7c/7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c.jpg' },
      ],
      australia: [
        { name: 'David Warner', role: 'Batsman', impact: 8.8, image: 'https://i.pinimg.com/236x/8c/8c/8c/8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg' },
        { name: 'Usman Khawaja', role: 'Batsman', impact: 8.6, image: 'https://i.pinimg.com/236x/9c/9c/9c/9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c.jpg' },
        { name: 'Marnus Labuschagne', role: 'Batsman', impact: 9.1, image: 'https://i.pinimg.com/236x/ac/ac/ac/acacacacacacacacacacacacacacacac.jpg' },
        { name: 'Steve Smith', role: 'Batsman', impact: 9.4, image: 'https://i.pinimg.com/236x/8b/16/db/8b16db12ae546d5b67c9db0d0f7d4fff.jpg' },
        { name: 'Travis Head', role: 'Batsman', impact: 8.5, image: 'https://i.pinimg.com/236x/bc/bc/bc/bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc.jpg' },
        { name: 'Cameron Green', role: 'All-rounder', impact: 8.7, image: 'https://i.pinimg.com/236x/cc/cc/cc/cccccccccccccccccccccccccccccccc.jpg' },
        { name: 'Alex Carey', role: 'Wicket-keeper', impact: 8.3, image: 'https://i.pinimg.com/236x/dc/dc/dc/dcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdc.jpg' },
        { name: 'Pat Cummins', role: 'Bowler', impact: 9.2, image: 'https://i.pinimg.com/236x/ec/ec/ec/ecececececececececececececececec.jpg' },
        { name: 'Mitchell Starc', role: 'Bowler', impact: 9.0, image: 'https://i.pinimg.com/236x/fc/fc/fc/fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfc.jpg' },
        { name: 'Nathan Lyon', role: 'Bowler', impact: 9.1, image: 'https://i.pinimg.com/236x/1d/1d/1d/1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d.jpg' },
        { name: 'Josh Hazlewood', role: 'Bowler', impact: 8.9, image: 'https://i.pinimg.com/236x/2d/2d/2d/2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d.jpg' },
      ],
    },
    headToHead: [
      { player1: 'Virat Kohli', player2: 'Steve Smith', advantage: 'Steve Smith' },
      { player1: 'Ravichandran Ashwin', player2: 'Nathan Lyon', advantage: 'Ravichandran Ashwin' },
      { player1: 'Rohit Sharma', player2: 'David Warner', advantage: 'Rohit Sharma' },
    ],
    conditions: {
      weather: 'Mostly sunny with temperatures ranging from 25°C to 35°C',
      pitch: 'Expected to be dry and spin-friendly, favoring the Indian team',
    },
    heroics: [
      { player: 'Shubman Gill', description: 'Scored a brilliant 128 in the 4th Test at Ahmedabad' },
      { player: 'Cheteshwar Pujara', description: 'Played a gritty innings of 59 in tough conditions in the 2nd Test' },
      { player: 'Ravichandran Ashwin', description: 'Took 25 wickets in the series, including a 6-wicket haul in Nagpur' },
      { player: 'Hanuma Vihari', description: 'Showed great resilience batting with an injury in the Sydney Test of 2021' },
      { player: 'Shardul Thakur', description: 'Scored crucial runs and took important wickets in the Brisbane Test of 2021' },
    ],
  };

  const AnalysisSection = ({ title, children, icon: Icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6 cursor-pointer"
      style={{ backgroundColor: colors.secondary }}
      onClick={() => setActiveSection(activeSection === title ? null : title)}
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-between" style={{ color: colors.primary }}>
        <span className="flex items-center">
          <Icon className="w-6 h-6 mr-2" style={{ color: colors.accent }} />
          {title}
        </span>
        <motion.span
          animate={{ rotate: activeSection === title ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </h2>
      <AnimatePresence>
        {activeSection === title && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundColor: colors.secondary }}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: colors.primary }}>Border Gavaskar Trophy Analysis</h1>

        <AnalysisSection title="Match Results" icon={ChartBarIcon}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {borderGavaskarData.matches.map((match) => (
              <motion.div
                key={match.id}
                className="relative overflow-hidden rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={match.image} alt={match.venue} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <p className="text-white font-bold">{match.date} - {match.venue}</p>
                  <p className="text-white">{match.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnalysisSection>

        <AnalysisSection title="Best Players" icon={UserGroupIcon}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {borderGavaskarData.bestPlayers.map((player) => (
              <motion.div
                key={player.name}
                className="bg-gray-100 p-4 rounded-lg"
                style={{ backgroundColor: colors.highlight }}
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0,0,0,0.2)' }}
              >
                <Image src={player.image} alt={player.name} width={100} height={100} className="rounded-full mx-auto mb-2" />
                <h3 className="font-bold text-center" style={{ color: colors.primary }}>{player.name}</h3>
                <p style={{ color: colors.primary }}>Country: {player.country}</p>
                <p style={{ color: colors.primary }}>Matches: {player.matches}</p>
                <p style={{ color: colors.primary }}>{player.runs ? `Runs: ${player.runs}` : `Wickets: ${player.wickets}`}</p>
                <p style={{ color: colors.primary }}>Average: {player.average}</p>
              </motion.div>
            ))}
          </div>
        </AnalysisSection>

        <AnalysisSection title="Predicted Squads" icon={UserGroupIcon}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['india', 'australia'].map((team) => (
              <div key={team}>
                <h3 className="text-xl font-bold mb-4 capitalize" style={{ color: colors.primary }}>{team}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {borderGavaskarData.predictedSquads[team].map((player) => (
                    <motion.div
                      key={player.name}
                      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image src={player.image} alt={player.name} width={80} height={80} className="rounded-full mb-2" />
                      <p className="font-bold text-center" style={{ color: colors.primary }}>{player.name}</p>
                      <p className="text-sm text-center" style={{ color: colors.accent }}>{player.role}</p>
                      <p className="text-sm font-bold mt-2" style={{ color: colors.highlight }}>Impact: {player.impact}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnalysisSection>

        <AnalysisSection title="Head to Head Comparisons" icon={ArrowTrendingUpIcon}>
          <div className="space-y-4">
            {borderGavaskarData.headToHead.map((comparison) => (
              <motion.div
                key={`${comparison.player1}-${comparison.player2}`}
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center">
                  <Image src={borderGavaskarData.bestPlayers.find(p => p.name === comparison.player1)?.image || ''} alt={comparison.player1} width={50} height={50} className="rounded-full mr-2" />
                  <span className="font-bold" style={{ color: colors.primary }}>{comparison.player1}</span>
                </div>
                <div className="text-center">
                  <span className="font-bold text-lg" style={{ color: colors.accent }}>VS</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold" style={{ color: colors.primary }}>{comparison.player2}</span>
                  <Image src={borderGavaskarData.bestPlayers.find(p => p.name === comparison.player2)?.image || ''} alt={comparison.player2} width={50} height={50} className="rounded-full ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </AnalysisSection>

        <AnalysisSection title="Conditions" icon={SunIcon}>
          <div className="bg-white rounded-lg shadow-md p-6" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?cricket,pitch)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
              <p className="text-white mb-2"><strong>Weather:</strong> {borderGavaskarData.conditions.weather}</p>
              <p className="text-white"><strong>Pitch:</strong> {borderGavaskarData.conditions.pitch}</p>
            </div>
          </div>
        </AnalysisSection>

        <AnalysisSection title="Player Heroics" icon={UserGroupIcon}>
          <div className="space-y-4">
            {borderGavaskarData.heroics.map((heroic) => (
              <motion.div
                key={heroic.player}
                className="bg-white rounded-lg shadow-md p-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-bold text-lg mb-2" style={{ color: colors.primary }}>{heroic.player}</h3>
                <p style={{ color: colors.accent }}>{heroic.description}</p>
              </motion.div>
            ))}
          </div>
        </AnalysisSection>
      </div>
      <Footer />
    </div>
  );
};

export default AnalysisPage;
