"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Image from "next/image";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const imageSource = "/gnan.jpg";

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-grey-900 to to-blue-950">
        <div className="text-4xl font-bold text-white animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200">
      <Navbar />
      <main className="container mx-auto my-12 rounded-xl bg-white p-12 shadow-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-800 leading-tight"
        >
          About CStatz
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xl text-gray-700 leading-relaxed"
        >
          CStatz is a cutting-edge sports analytics platform that leverages advanced algorithms and machine learning to predict player performances based on historical and current statistics. Our mission is to revolutionize the way teams, coaches, and fans understand and interact with sports data.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-xl text-gray-700 leading-relaxed"
        >
          Founded by Gnaneswar Lopinti, a visionary in the field of sports analytics, CStatz combines deep sports knowledge with state-of-the-art technology to provide unparalleled insights into player and team performance. Our platform offers real-time predictions, comprehensive statistical analysis, and intuitive visualizations that empower our users to make data-driven decisions.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-700 leading-relaxed  from-grey-800 to-blue-800"
        >
          Whether you're a professional team looking to gain a competitive edge, a fantasy sports enthusiast aiming to optimize your lineup, or a passionate fan seeking deeper insights into the game, CStatz provides the tools and analysis you need to stay ahead of the curve.
        </motion.p>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 mt-16 rounded-xl shadow-lg">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 lg:py-20">
            <motion.h2 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight"
            >
              Our Core Features
            </motion.h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-12 mt-8 lg:mt-0 rounded-xl shadow-md flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300"
              >
                <Image
                  src="https://source.unsplash.com/450x450/?data,analytics"
                  alt="Predictive Analytics"
                  width={450}
                  height={450}
                  className="mb-8 lg:mb-0 lg:mr-12 rounded-lg shadow-md object-cover"
                />
                <div>
                  <h3 className="mb-6 text-4xl font-bold text-gray-800 leading-tight">Predictive Analytics</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our advanced machine learning models analyze vast amounts of historical and real-time data to predict player performances with remarkable accuracy. This allows teams and fans to anticipate outcomes and make informed decisions.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-12 mt-8 lg:mt-0 rounded-xl shadow-md flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300"
              >
                <Image
                  src="https://source.unsplash.com/450x450/?sports,statistics"
                  alt="Comprehensive Statistics"
                  width={450}
                  height={450}
                  className="mb-8 lg:mb-0 lg:mr-12 rounded-lg shadow-md object-cover"
                />
                <div>
                  <h3 className="mb-6 text-4xl font-bold text-gray-800 leading-tight">Comprehensive Statistics</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    CStatz provides an extensive database of player and team statistics, offering deep insights into performance trends, strengths, and weaknesses. Our platform goes beyond basic stats to offer nuanced analysis that can shape strategy and player development.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 mt-16 rounded-xl shadow-lg">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-800 leading-tight text-center"
          >
            Latest Insights
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Future of Player Performance Prediction",
                description: "Exploring how AI and machine learning are revolutionizing sports analytics and player evaluation.",
                image: "https://source.unsplash.com/300x200/?artificial,intelligence"
              },
              {
                title: "Data-Driven Coaching Strategies",
                description: "How coaches are leveraging advanced analytics to optimize training regimens and game plans.",
                image: "https://source.unsplash.com/300x200/?coach,strategy"
              },
              {
                title: "The Impact of Analytics on Player Contracts",
                description: "An in-depth look at how predictive analytics are influencing contract negotiations and team compositions.",
                image: "https://source.unsplash.com/300x200/?contract,negotiation"
              }
            ].map((blog, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <Image
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg shadow-md object-cover w-full"
                />
                <h3 className="mb-4 text-2xl font-bold text-gray-800 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {blog.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CEO Profile Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative my-16 bg-gradient-to-r from-gray-800 to-blue-900 p-12 rounded-lg shadow-xl"
        >
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="relative z-10 md:-mt-24 md:ml-8">
              <Image
                src={imageSource}
                alt="Gnaneswar Lopinti"
                width={192}
                height={192}
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            <div className="relative z-10 text-white md:ml-12 mt-8 flex-grow">
              <h3 className="text-3xl font-bold mb-4">Meet Our CEO</h3>
              <p className="text-xl mb-4">
                Gnaneswar Lopinti is the visionary founder and CEO of CStatz. With a background in computer science and a passion for sports, Gnaneswar has led the development of our cutting-edge predictive analytics platform.
              </p>
              <blockquote className="text-2xl font-bold italic leading-9 sm:text-3xl sm:leading-10">
                &ldquo;At CStatz, we're not just predicting the future of sports; we're shaping it. Our goal is to empower every stakeholder in the sports ecosystem with actionable, data-driven insights.&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold">Gnaneswar Lopinti</div>
                <div className="text-sm text-gray-200">CEO and Founder of CStatz</div>
              </figcaption>
            </div>
          </div>
        </motion.section>
        
      </main>
      <Footer />
    </div>
  );
}