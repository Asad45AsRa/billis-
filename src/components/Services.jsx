import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Award,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Globe,
  Layout,
  Laptop,
  Cpu, 
} from 'lucide-react';
import Link from 'next/link';
import Contact from '../pages/Contact'
// Enhanced Service Card Component
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  technologies, 
  fullDescription 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && cardRef.current) {
      cardRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Card Header */}
      <div className="p-6 pb-0">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <Icon className="text-slate-700" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      {/* Technologies */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-indigo-50 text-sky-600 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Section */}
      <div className="border-t border-gray-100">
        <button
          onClick={toggleExpand}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <span className="text-slate-800 font-semibold">
            {isExpanded ? 'Collapse Details' : 'Explore More'}
          </span>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-white">
                <p className="text-gray-700 mb-4">{fullDescription}</p>
                <Link
                  href={<Contact />}
                  className="inline-flex items-center text-sky-600 hover:text-sky-800 font-semibold"
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Main Services Page Component
const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const services = [
    {
      category: 'Web',
      icon: Globe,
      title: "Website Development",
      description: "Crafting powerful, responsive websites tailored to your business.",
      technologies: [
        "React.js", "Next.js", "Node.js", 
        "Express.js", "WordPress", "Shopify"
      ],
      fullDescription: "Our website development goes beyond basic design. We create digital experiences that engage your audience, optimize user journeys, and drive conversions. From responsive design to advanced functionality, we transform your online presence."
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      title: "Mobile App Development",
      description: "High-performance mobile apps for iOS and Android platforms.",
      technologies: [
        "React Native", "Flutter", 
        "Cross-Platform", "iOS", "Android"
      ],
      fullDescription: "We develop mobile applications that are not just visually appealing but functionally superior. Whether you need a native app or a cross-platform solution, our team ensures seamless performance and exceptional user experience."
    },
    {
      category: 'Marketing',
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive strategies to build brand awareness and drive traffic.",
      technologies: [
        "SEO", "PPC", "Social Media", 
        "Content Marketing", "Google Ads"
      ],
      fullDescription: "Our digital marketing approach is data-driven and results-oriented. We combine advanced analytics, targeted advertising, and compelling content strategies to elevate your brand's online presence and generate meaningful engagement."
    },
    {
      category: 'Web',
      icon: Layout,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging digital interfaces.",
      technologies: [
        "Figma", "Sketch", "Adobe XD",
        "Responsive Design", "User Research"
      ],
      fullDescription: "We craft user interfaces that are not just beautiful, but also intuitive and user-centric. Our design process involves deep user research, iterative prototyping, and a focus on creating seamless, enjoyable digital experiences."
    },
    {
      category: 'Web',
      icon: Laptop,
      title: "Custom Software Development",
      description: "Tailored software solutions for unique business challenges.",
      technologies: [
        "Python", "Java", "Node.js",
        "Microservices", "Cloud Integration"
      ],
      fullDescription: "Beyond standard solutions, we develop custom software that precisely matches your business workflow. Our approach combines cutting-edge technologies with deep understanding of your specific operational needs."
    },
    {
      category: 'Blockchain',
      icon: Cpu,
      title: "Blockchain Solutions",
      description: "Innovative blockchain development and consulting services.",
      technologies: [
        "Ethereum", "Solidity", "Web3.js", 
        "Smart Contracts", "DeFi", "NFT Development"
      ],
      fullDescription: "We provide cutting-edge blockchain solutions that transform your business through decentralized technologies. From smart contract development to full blockchain ecosystem design, our experts help you leverage the power of blockchain to create transparent, secure, and efficient digital solutions."
    }
  
  ];

  const filterCategories = ['All', ...new Set(services.map(service => service.category))];

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-slate-600 hover:bg-slate-700 text-white py-20 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Digital Transformation Starts Here
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-10 text-indigo-100"
          >
            Innovative solutions that drive your business forward. From web development to digital marketing, we turn your vision into reality.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
            >
              Start Your Digital Journey
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Filter and Grid */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored digital solutions that adapt to your unique business needs and drive growth.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-md inline-flex p-2">
              {filterCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${activeFilter === category 
                      ? 'bg-sky-700 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;