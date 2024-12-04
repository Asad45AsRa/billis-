import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  FaArrowRight, FaRocket, FaCode, FaMobileAlt, FaChartLine,
  FaLaptopCode, FaDatabase, FaCloud, FaCheck, FaPlay, FaPause
} from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const taglines = [
    "Transform Digital Challenges into Competitive Advantages",
    "Innovative Solutions, Exceptional Digital Experiences",
    "Empowering Businesses Through Cutting, Edge Technology"
  ];

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3500);

    return () => clearInterval(taglineInterval);
  }, []);

  const services = [
    {
      icon: <FaCode className="w-12 h-12 text-sky-600 group-hover:text-sky-800 transition-colors" />,
      title: "Web Development",
      description: "Modern, scalable web solutions",
      details: [
        "Responsive Design",
        "Performance Optimization",
        "Custom Frameworks"
      ]
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-emerald-600 group-hover:text-emerald-800 transition-colors" />,
      title: "Mobile Development",
      description: "Crossplatform mobile applications",
      details: [
        "iOS, Android",
        "React Native",
        "Progressive Web Apps"
      ]
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-violet-600 group-hover:text-violet-800 transition-colors" />,
      title: "Digital Strategy",
      description: "Datadriven growth solutions",
      details: [
        "Market Analysis",
        "Digital Transformation",
        "Strategic Consulting"
      ]
    },
    {
      icon: <FaCloud className="w-12 h-12 text-rose-600 group-hover:text-rose-800 transition-colors" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure",
      details: [
        "Cloud Migration",
        "Serverless Architecture",
        "Multi, Cloud Solutions"
      ]
    }
  ];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 overflow-hidden min-h-screen flex items-center">
      {/* Blurred Background Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden my-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Tagline with Framer Motion */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTagline}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-violet-600 mb-6"
            >
              {taglines[currentTagline]}
            </motion.h1>
          </AnimatePresence>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-10 text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Bridging innovation and technology to create transformative digital experiences that drive business growth and competitive advantage.
          </p>

          {/* CTA Buttons with Responsive Layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link href="/Contact" className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Get Started
                <FaArrowRight className="ml-2 w-5 h-5" />
              </motion.span>
            </Link>
            <Link href="/Portfolio" className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Our Portfolio
                <FaLaptopCode className="ml-2 w-5 h-5" />
              </motion.span>
            </Link>
          </div>

          {/* Services Showcase with Expanded Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
                className="group cursor-pointer bg-white rounded-xl p-6 shadow-md border border-transparent hover:border-sky-200 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center text-sm text-slate-700"
                    >
                      <FaCheck className="mr-2 text-sky-600 w-4 h-4" />
                      <span dangerouslySetInnerHTML={{ __html: detail }} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Rocket with Framer Motion */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-10 hidden lg:block"
          >
            <FaRocket className="text-sky-400 opacity-20 w-64 h-64" />
          </motion.div>

          {/* Optional Video Showcase */}
          <div className="mt-16 max-w-4xl mx-auto relative group">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src="https://www.shutterstock.com/video/clip-3495967415-advanced-data-analytics-dashboard-display-business-financial"
                className="w-full"
                poster="https://www.shutterstock.com/video/clip-3495967415-advanced-data-analytics-dashboard-display-business-financial"
                onClick={toggleVideo}
                muted={true} // Muted for autoplay to work
                controls // Added for debugging
              />
              <button
                onClick={toggleVideo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-4 shadow-lg"
              >
                {isVideoPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;