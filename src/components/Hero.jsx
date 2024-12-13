import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  FaArrowRight, FaRocket, FaCode, FaMobileAlt, FaChartLine,
  FaLaptopCode, FaCloud, FaCheck, FaPlay, FaPause,
  FaVideo, FaDownload, FaExpand, FaBolt, FaLightbulb, FaRoute
} from "react-icons/fa";
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const taglines = [
    "Transform Digital Challenges into Competitive Advantages",
    "Innovative Solutions, Exceptional Digital Experiences",
    "Empowering Businesses Through Cutting-Edge Technology"
  ];

  // Enhanced cycling of taglines with randomization
  const cycleTagline = useCallback(() => {
    setCurrentTagline((prev) => {
      const nextIndex = (prev + 1) % taglines.length;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    const taglineInterval = setInterval(cycleTagline, 3500);
    return () => clearInterval(taglineInterval);
  }, [cycleTagline]);

  // Expanded services with more detailed descriptions
  const services = [
    {
      icon: <FaCode className="w-12 h-12 text-sky-600 group-hover:text-sky-800 transition-colors" />,
      title: "Web Development",
      description: "Crafting digital experiences that captivate and convert",
      details: [
        "Responsive & Adaptive Design",
        "Performance Optimization",
        "Custom Framework Solutions"
      ],
      color: "sky",
      expertise: "Frontend & Backend Development"
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-emerald-600 group-hover:text-emerald-800 transition-colors" />,
      title: "Mobile Development",
      description: "Seamless mobile experiences across platforms",
      details: [
        "Native & Cross-Platform Apps",
        "React Native Expertise",
        "Progressive Web Solutions"
      ],
      color: "emerald",
      expertise: "Mobile App Engineering"
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-violet-600 group-hover:text-violet-800 transition-colors" />,
      title: "Digital Strategy",
      description: "Data-driven growth and transformation",
      details: [
        "Comprehensive Market Analysis",
        "Digital Transformation Roadmaps",
        "Strategic Technology Consulting"
      ],
      color: "violet",
      expertise: "Business Innovation"
    },
    {
      icon: <FaCloud className="w-12 h-12 text-rose-600 group-hover:text-rose-800 transition-colors" />,
      title: "Cloud Services",
      description: "Scalable, secure cloud infrastructure solutions",
      details: [
        "Cloud Migration Strategies",
        "Serverless Architecture",
        "Multi-Cloud Management"
      ],
      color: "rose",
      expertise: "Cloud Architecture"
    }
  ];

  // Enhanced video control functions
  const toggleVideo = () => {
    if (videoRef.current) {
      isVideoPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      const requestFullScreen =
        videoRef.current.requestFullscreen ||
        videoRef.current.mozRequestFullScreen ||
        videoRef.current.webkitRequestFullscreen ||
        videoRef.current.msRequestFullscreen;

      const exitFullScreen =
        document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen ||
        document.msExitFullscreen;

      if (!isFullscreen && requestFullScreen) {
        requestFullScreen.call(videoRef.current);
      } else if (isFullscreen && exitFullScreen) {
        exitFullScreen.call(document);
      }

      setIsFullscreen(!isFullscreen);
    }
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { color: 'sky', position: 'top-0 right-0', transform: '-translate-x-1/2 -translate-y-1/2' },
          { color: 'emerald', position: 'bottom-0 left-0', transform: 'translate-x-1/2 translate-y-1/2' },
          { color: 'violet', position: 'top-1/3 left-1/4', transform: '-translate-x-1/2 translate-y-1/2' }
        ].map((gradient, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut"
            }}
            className={`absolute ${gradient.position} w-96 h-96 bg-${gradient.color}-200/20 rounded-full blur-3xl transform ${gradient.transform}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Animated Tagline with Advanced Transitions */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTagline}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-4xl md:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-violet-600 mb-6"
            >
              {taglines[currentTagline]}
            </motion.h1>
          </AnimatePresence>

          {/* Enhanced Subheading with Dynamic Icons */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl mb-10 text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium px-4 flex items-center justify-center"
          >
            <FaBolt className="mr-2 text-yellow-500" />
            Bridging innovation and technology to create transformative digital experiences
            <FaLightbulb className="ml-2 text-amber-500" />
          </motion.p>

          {/* Responsive CTA Buttons with Enhanced Interactions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 px-4"
          >
            {[
              {
                href: "/Contact",
                text: "Get Started",
                icon: <FaArrowRight />,
                primary: true
              },
              {
                href: "/Portfolio",
                text: "Our Portfolio",
                icon: <FaLaptopCode />,
                primary: false
              }
            ].map((cta, index) => (
              <Link key={index} href={cta.href} className="w-full sm:w-auto">
                <motion.span
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center justify-center w-full sm:w-auto ${cta.primary
                      ? 'bg-sky-600 hover:bg-sky-700 text-white'
                      : 'border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'
                    } font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl`}
                >
                  {cta.text}
                  <span className="ml-2">{cta.icon}</span>
                </motion.span>
              </Link>
            ))}
          </motion.div>

          {/* Services Grid with Enhanced Hover and Interaction */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 px-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
                }}
                className={`group cursor-pointer bg-white rounded-xl p-6 shadow-md border border-transparent hover:border-${service.color}-200 transition-all duration-300`}
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
                <div className="space-y-2 mb-4">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center text-sm text-slate-700"
                    >
                      <FaCheck className={`mr-2 text-${service.color}-600 w-4 h-4`} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-500 italic flex items-center justify-center">
                  <FaRoute className="mr-2" />
                  {service.expertise}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Section with Enhanced Interactivity */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto relative group px-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-2xl relative"
            >
              <video
                ref={videoRef}
                src="/path/to/your/video.mp4"
                className="w-full"
                poster="/path/to/your/poster.jpg"
                onClick={toggleVideo}
                muted={true}
                controls
              />

              {/* Custom Video Controls with Enhanced Design */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-full flex items-center space-x-4 p-3 shadow-lg">
                {[
                  { icon: isVideoPlaying ? <FaPause /> : <FaPlay />, action: toggleVideo },
                  { icon: <FaExpand />, action: toggleFullscreen },
                  { icon: <FaDownload />, action: () => alert('Download functionality') }
                ].map((control, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={control.action}
                    className="text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {control.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Video Caption with Icon Animation */}
            <motion.div
              variants={itemVariants}
              className="mt-4 text-center flex items-center justify-center text-slate-700"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mr-2"
              >
                <FaVideo className="text-sky-600" />
              </motion.div>
              <span className="text-sm font-medium">
                Discover Our Digital Transformation Journey
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Animated Floating Elements */}
        {[
          {
            icon: FaRocket,
            color: 'sky',
            position: 'top-1/3 right-10',
            size: 'w-64 h-64',
            animateProps: { y: [0, -30, 0], rotate: [0, 10, -10, 0] }
          },
          {
            icon: FaLightbulb,
            color: 'amber',
            position: 'bottom-1/4 left-10',
            size: 'w-32 h-32',
            animateProps: { y: [0, 20, 0], rotate: [0, -15, 15, 0] }
          }
        ].map((element, index) => (
          <motion.div
            key={index}
            animate={element.animateProps}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${element.position} hidden lg:block opacity-20`}
          >
            <element.icon
              className={`text-${element.color}-400 ${element.size}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero;