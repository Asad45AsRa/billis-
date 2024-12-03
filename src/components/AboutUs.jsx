import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Code, Globe, Users, Award, Clock, 
  ArrowRight, Rocket, Check, Star, Activity 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Client-Centric Innovation",
      description: "Tailoring solutions that precisely match your unique business ecosystem.",
      color: "indigo"
    },
    {
      icon: Code,
      title: "Technological Excellence",
      description: "Leveraging cutting-edge technologies to drive transformative results.",
      color: "emerald"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Delivering world-class digital solutions with a personalized touch.",
      color: "sky"
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Strategic Discovery",
      description: "Deep dive into your vision, challenges, and opportunities.",
      color: "purple"
    },
    {
      icon: Award,
      title: "Innovative Design",
      description: "Crafting comprehensive, forward-thinking digital strategies.",
      color: "teal"
    },
    {
      icon: Clock,
      title: "Precision Execution",
      description: "Agile implementation with continuous optimization.",
      color: "rose"
    }
  ];

  return (
    <div className="bg-gray-50 relative">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white my-1 rounded-lg shadow-2xl py-24 px-4 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-blue-200">
            Transforming Digital Potential into Competitive Advantage
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200">
            Empowering businesses through innovative technology and strategic digital solutions
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/Contact" className="inline-flex items-center 
              bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg 
              transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 ease-in-out" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* About Company Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Innovative Journey
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              At the forefront of digital transformation, we blend technological expertise 
              with creative problem-solving to deliver exceptional digital experiences.
            </p>
            <p>
              With a proven track record of empowering businesses across diverse industries, 
              we turn complex challenges into streamlined, innovative solutions.
            </p>
            <div className="flex items-center space-x-3">
              <Check className="text-emerald-500" />
              <span>9+ Years of Technology Leadership</span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="text-yellow-500" />
              <span>Trusted by 200+ Global Enterprises</span>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/api/placeholder/600/400" 
              alt="Our Team" 
              className="w-full h-full object-cover"
              height={0} width={0}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4">
            <Activity className="text-indigo-600 w-12 h-12" />
          </div>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-${value.color}-50 p-6 rounded-xl text-center 
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-xl
                  border border-transparent hover:border-${value.color}-200`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`bg-${value.color}-100 p-4 rounded-full 
                    transition-transform duration-300 
                    transform hover:rotate-12`}
                  >
                    <value.icon className={`text-${value.color}-600`} size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Collaborative Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white shadow-md p-6 rounded-xl text-center 
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-xl
                  border border-transparent hover:border-${step.color}-200`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`bg-${step.color}-100 p-4 rounded-full 
                    transition-transform duration-300 
                    transform hover:rotate-6`}
                  >
                    <step.icon className={`text-${step.color}-600`} size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white my-1 rounded-lg shadow-2xl py-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Digital Strategy?
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-200">
            Join the hundreds of businesses we helped transform through innovative digital solutions.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             <Link href="/Services" className="inline-flex items-center 
              bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg 
              transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 ease-in-out" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;