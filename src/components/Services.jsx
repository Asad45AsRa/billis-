import React, { useState, useRef, useEffect } from 'react';
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
  Filter,
  Star,
  Zap,
  Search
} from 'lucide-react';
import Link from 'next/link';

// Enhanced Service Card Component with Ratings and Impact Metrics
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  technologies, 
  fullDescription,
  rating,
  impact
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

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex items-center text-yellow-500">
      {[...Array(5)].map((_, index) => (
        <Star 
          key={index} 
          size={20} 
          fill={index < rating ? 'currentColor' : 'none'}
        />
      ))}
      <span className="text-gray-600 ml-2 text-sm">({rating}/5)</span>
    </div>
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-3xl py-5 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
    >
      {/* Impact Badge */}
      <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 px-3 py-2 mt-0 rounded-full text-xs font-semibold flex items-center">
        <Zap size={16} className="mr-1" /> Impact: {impact}%
      </div>

      {/* Card Header */}
      <div className="p-6 pb-0">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-full mr-4 shadow-md">
            <Icon className="text-slate-700" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <StarRating rating={rating} />
          </div>
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
                  href="/contact"
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
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('impact');

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
      fullDescription: "Our website development goes beyond basic design. We create digital experiences that engage your audience, optimize user journeys, and drive conversions. From responsive design to advanced functionality, we transform your online presence.",
      rating: 4,
      impact: 85
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
      fullDescription: "We develop mobile applications that are not just visually appealing but functionally superior. Whether you need a native app or a cross-platform solution, our team ensures seamless performance and exceptional user experience.",
      rating: 5,
      impact: 90
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
      fullDescription: "Our digital marketing approach is data-driven and results-oriented. We combine advanced analytics, targeted advertising, and compelling content strategies to elevate your brand's online presence and generate meaningful engagement.",
      rating: 4,
      impact: 75
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
      fullDescription: "We craft user interfaces that are not just beautiful, but also intuitive and user-centric. Our design process involves deep user research, iterative prototyping, and a focus on creating seamless, enjoyable digital experiences.",
      rating: 5,
      impact: 80
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
      fullDescription: "Beyond standard solutions, we develop custom software that precisely matches your business workflow. Our approach combines cutting-edge technologies with deep understanding of your specific operational needs.",
      rating: 4,
      impact: 85
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
      fullDescription: "We provide cutting-edge blockchain solutions that transform your business through decentralized technologies. From smart contract development to full blockchain ecosystem design, our experts help you leverage the power of blockchain to create transparent, secure, and efficient digital solutions.",
      rating: 4,
      impact: 70
    }
  ];

  // Enhanced Filtering and Sorting
  const filterCategories = ['All', ...new Set(services.map(service => service.category))];

  const filteredAndSortedServices = services
    .filter(service => 
      activeFilter === 'All' || service.category === activeFilter
    )
    .filter(service => 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'impact':
          return b.impact - a.impact;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Hero Section with Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20 px-4 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600"
          >
            Transform Your Digital Landscape
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-10 text-indigo-100"
          >
            Innovative solutions that propel your business into the future. We blend cutting-edge technology with strategic insight.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all transform hover:scale-105 flex items-center justify-center mx-auto w-fit"
            >
              Start Your Digital Journey <ArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section with Advanced Filtering */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Comprehensive Digital Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored strategies that adapt to your unique business challenges and accelerate growth.
            </p>
          </div>

          {/* Advanced Filtering and Search */}
          <div className="flex flex-col md:flex-row justify-between mb-12 space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {filterCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300 flex items-center
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

            {/* Search and Sort */}
            <div className="flex space-x-4">
              {/* Search Input */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="impact">Sort by Impact</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <AnimatePresence>
            {filteredAndSortedServices.length > 0 ? (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { 
                      delayChildren: 0.2,
                      staggerChildren: 0.1 
                    }
                  }
                }}
                className="grid md:grid-cols-3 gap-8"
              >
                {filteredAndSortedServices.map((service, index) => (
                  <ServiceCard 
                    key={index}
                    {...service}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                No services found matching your search criteria.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;