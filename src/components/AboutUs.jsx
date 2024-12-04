import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, Code, Globe, Users, Award, Clock, 
  ArrowRight, Rocket, Check, Star, Activity 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Animation Variants
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

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const coreValues = [
    {
      icon: Target,
      title: "Client-Centric Innovation",
      description: "Tailoring solutions that precisely match your unique business ecosystem",
      color: "bg-gradient-to-r from-blue-600 to-indigo-700",
      iconColor: "text-blue-500"
    },
    {
      icon: Code,
      title: "Technological Excellence",
      description: "Leveraging cutting-edge technologies to drive transformative results",
      color: "bg-gradient-to-r from-green-500 to-teal-600",
      iconColor: "text-green-500"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Delivering world-class digital solutions with a personalized touch",
      color: "bg-gradient-to-r from-purple-600 to-pink-500",
      iconColor: "text-purple-500"
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Strategic Discovery",
      description: "Deep dive into your vision, challenges, and opportunities",
      color: "bg-gradient-to-r from-cyan-500 to-blue-600",
      iconColor: "text-cyan-500"
    },
    {
      icon: Award,
      title: "Innovative Design",
      description: "Crafting comprehensive forward-thinking digital strategies",
      color: "bg-gradient-to-r from-emerald-500 to-green-600",
      iconColor: "text-emerald-500"
    },
    {
      icon: Clock,
      title: "Precision Execution",
      description: "Agile implementation with continuous optimization",
      color: "bg-gradient-to-r from-rose-500 to-pink-600",
      iconColor: "text-rose-500"
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
        className="bg-slate-600 hover:bg-slate-700 text-white py-24 px-4 rounded-3xl shadow-2xl relative overflow-hidden"
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
            Transforming Digital Potential into Competitive Advantage
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-100 font-light tracking-wide"
          >
            Empowering businesses through innovative technology and strategic digital solutions
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link href="/Contact" className="inline-flex items-center justify-center w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
              Get Started 
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
                  relative overflow-hidden`}
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
                  className="flex justify-center mb-4 relative z-10"
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

      {/* Additional Sections (Process, CTA) would follow a similar animation pattern */}
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-600 hover:bg-slate-700 text-white py-16 px-4 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
          >
            Ready to Elevate Your Digital Strategy?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg mb-10 max-w-3xl mx-auto text-gray-100 font-light tracking-wide"
          >
            Join the hundreds of businesses we&apos;ve helped transform through innovative digital solutions.
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
              Get in Touch
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