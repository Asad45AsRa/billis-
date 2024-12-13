import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Target, Code, Globe, Users, Award, Clock, 
  ArrowRight, Rocket, Check, Star, Activity, 
  Zap, Layers, Lightbulb, Compass, TrendingUp, 
  Headphones, BookOpen, Database, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const [activeProcess, setActiveProcess] = useState(0);
  const processRef = useRef(null);

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const coreValues = [
    {
      icon: Zap,
      title: "Client-Centric Innovation",
      description: "Tailoring cutting-edge solutions to transform your unique business challenges",
      color: "bg-gradient-to-r from-blue-600 to-indigo-700",
      iconColor: "text-blue-500",
      hoverEffect: "group-hover:rotate-12 group-hover:scale-110"
    },
    {
      icon: Layers,
      title: "Technological Excellence",
      description: "Leveraging state-of-the-art technologies to drive transformative digital experiences",
      color: "bg-gradient-to-r from-green-500 to-teal-600",
      iconColor: "text-green-500",
      hoverEffect: "group-hover:rotate-6 group-hover:scale-105"
    },
    {
      icon: Compass,
      title: "Global Perspective",
      description: "Delivering world-class digital solutions with a personalized, strategic approach",
      color: "bg-gradient-to-r from-purple-600 to-pink-500",
      iconColor: "text-purple-500",
      hoverEffect: "group-hover:-rotate-6 group-hover:scale-105"
    }
  ];

  const processSteps = [
    {
      icon: BookOpen,
      title: "Strategic Discovery",
      description: "Comprehensive analysis of your vision, challenges, and unique market opportunities",
      details: [
        "In-depth stakeholder interviews",
        "Market research and competitive analysis",
        "Identifying key digital transformation opportunities"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovative Design",
      description: "Crafting comprehensive, forward-thinking digital strategies tailored to your goals",
      details: [
        "User-centric design methodology",
        "Wireframing and prototyping",
        "Iterative design refinement"
      ]
    },
    {
      icon: TrendingUp,
      title: "Precision Execution",
      description: "Agile implementation with continuous optimization and strategic monitoring",
      details: [
        "Robust development processes",
        "Continuous integration and deployment",
        "Performance optimization and scaling"
      ]
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ scale }}
      className="bg-gray-50 relative overflow-hidden"
    >
      {/* Hero Section */}
      <motion.div 
        variants={itemVariants}
        className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-24 px-4 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-white to-blue-200"
          >
            Digital Transformation at the Speed of Innovation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-100 font-light tracking-wide"
          >
            Empowering businesses through strategic digital solutions that drive growth, innovation, and competitive advantage
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link href="/Contact" className="inline-flex items-center justify-center w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl group">
              Start Your Digital Journey 
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800 leading-tight"
          >
            Our Core Values
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${value.color} text-white p-6 rounded-3xl text-center 
                  transform transition-all duration-300 
                  hover:shadow-2xl 
                  relative overflow-hidden group`}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className={`flex justify-center mb-4 relative z-10 ${value.hoverEffect} transition-transform`}
                >
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    <value.icon className={value.iconColor} size={40} />
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-100 relative z-10 font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div 
        ref={processRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Strategic Process
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2 space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveProcess(index)}
                  className={`
                    p-6 rounded-xl cursor-pointer transition-all duration-300
                    ${activeProcess === index 
                      ? 'bg-indigo-600 text-white shadow-2xl' 
                      : 'bg-white text-gray-800 hover:bg-indigo-50 shadow-md'}
                  `}
                >
                  <div className="flex items-center mb-3">
                    <step.icon className={`mr-4 ${activeProcess === index ? 'text-white' : 'text-indigo-600'}`} size={30} />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProcess}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg"
              >
                <h4 className="text-2xl font-bold mb-4 text-indigo-600">
                  {processSteps[activeProcess].title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {processSteps[activeProcess].description}
                </p>
                <ul className="space-y-2 pl-4 list-disc text-gray-700">
                  {processSteps[activeProcess].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16 px-4 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
          >
            Transform Your Digital Future Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg mb-10 max-w-3xl mx-auto text-gray-100 font-light tracking-wide"
          >
            Let's collaborate and turn your boldest digital dreams into reality. Our expert team is ready to propel your business into the future.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/Services" className="inline-flex items-center 
              bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-full 
              transition duration-300 ease-in-out shadow-lg hover:shadow-xl
              group">
              Explore Our Solutions
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;