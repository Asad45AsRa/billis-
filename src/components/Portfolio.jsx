import React, { useState, useEffect } from 'react';
import { 
  Star, Check, Globe, Smartphone, ChartLine, Palette, 
  Code, Layout, TrendingUp, Zap, Send, Award, 
  Briefcase, Target, Coffee, Cpu, Database, Layers, Workflow
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

// Enhanced Reusable Components with Better Animations
const Card = ({ children, className = '', onClick = null, animateOnHover = true }) => (
  <motion.div 
    className={`border-2 border-gray-100 h-96 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ${className}`}
    variants={animateOnHover ? {
      hover: { 
        scale: 1.03, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.3, ease: "easeInOut" }
      }
    } : {}}
    whileHover="hover"
    onClick={onClick}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 bg-gradient-to-r from-blue-50 to-blue-100 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-2xl font-bold text-gray-800 tracking-tight ${className}`}>
    {children}
  </h3>
);

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Enhanced Projects Data with More Details
  const projects = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Cutting-edge web solutions with performance and scalability',
      icon: <Code className="w-14 h-14 text-blue-600" />,
      technologies: ['NextJS', 'React', 'Tailwind CSS', 'GraphQL'],
      category: ['Web', 'All'],
      detailedDescription: 'Crafting responsive, high-performance web applications that scale seamlessly across devices and platforms.',
      clientType: 'Enterprise',
      completionTime: '3 months',
      impact: '200% increase in user engagement'
    },
    {
      id: 2,
      title: 'Mobile App Design',
      description: 'Cross-platform mobile experiences that delight users',
      icon: <Smartphone className="w-14 h-14 text-green-600" />,
      technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript'],
      category: ['Mobile', 'All'],
      detailedDescription: 'Developing intuitive mobile applications with smooth user interfaces and native-like performance.',
      clientType: 'Startup',
      completionTime: '2.5 months',
      impact: '150% user growth'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for maximum impact',
      icon: <TrendingUp className="w-14 h-14 text-purple-600" />,
      technologies: ['SEO', 'Social Media', 'Analytics', 'Content Strategy'],
      category: ['Marketing', 'All'],
      detailedDescription: 'Creating comprehensive digital marketing strategies that drive measurable business growth.',
      clientType: 'E-commerce',
      completionTime: '4 months',
      impact: '300% ROI increase'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Elegant, intuitive, and user-centric design solutions',
      icon: <Layout className="w-14 h-14 text-pink-600" />,
      technologies: ['Figma', 'Adobe XD', 'Interaction Design'],
      category: ['Design', 'All'],
      detailedDescription: 'Designing seamless user experiences that combine aesthetic appeal with functional excellence.',
      clientType: 'Tech Startup',
      completionTime: '2 months',
      impact: '95% user satisfaction rate'
    },
    {
      id: 5,
      title: 'Blockchain Solutions',
      description: 'Innovative decentralized technologies and smart contracts',
      icon: <Cpu className="w-14 h-14 text-teal-600" />,
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Smart Contracts', 'solona'],
      category: ['Blockchain', 'All'],
      detailedDescription: 'Developing cutting-edge blockchain applications with robust security and transparent infrastructure.',
      clientType: 'FinTech',
      completionTime: '5 months',
      impact: '250% transaction efficiency'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud architecture solutions',
      icon: <Layers className="w-14 h-14 text-indigo-600" />,
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker',],
      category: ['Cloud', 'All'],
      detailedDescription: 'Designing and implementing robust cloud infrastructure that ensures scalability, security, and performance.',
      clientType: 'Enterprise',
      completionTime: '4.5 months',
      impact: '99.99% system uptime'
    }
  ];

  // Enhanced Testimonials with More Context
  const testimonials = [
    {
      id: 1,
      quote: "Exceptional work! They turned our complex requirements into an elegant digital solution",
      author: "Sarah Thompson",
      company: "Tech Innovator Inc.",
      rating: 5,
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      background: "Transformed our legacy system into a modern, scalable platform"
    },
    {
      id: 2,
      quote: "Incredible attention to detail and commitment to our vision",
      author: "Michael Rodriguez",
      company: "Global Design Agency",
      rating: 5,
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      background: "Delivered a comprehensive design system that revolutionized our digital presence"
    }
  ];

  // Project Filtering Logic
  useEffect(() => {
    const filtered = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category.includes(activeFilter));
    setFilteredProjects(filtered);
  }, [activeFilter]);

  const projectCategories = ['All', 'Web', 'Mobile', 'Marketing', 'Design', 'Blockchain', 'Cloud'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.2,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section - Enhanced with More Dynamic Animations */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          bounce: 0.4 
        }}
        className="text-center mb-16 bg-gradient-to-br from-blue-50 to-indigo-100 py-16 rounded-3xl shadow-lg overflow-hidden relative"
      >
        {/* Background Particle-like Effect */}
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Bliss Technologies
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Transforming complex digital challenges into innovative, scalable solutions that drive business growth
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href='/'>
              Explore Our Work
            </Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Responsive Project Filtering */}
      <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2">
        {projectCategories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all 
              ${activeFilter === category 
                ? 'bg-sky-700 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Responsive Projects Grid with Advanced Animations */}
      <motion.div 
        ref={ref}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {project.icon}
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-6 italic">{project.detailedDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span 
                        key={tech} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-blue-50 text-sky-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Testimonials Section with Enhanced Layout */}
      <section className="mt-16 bg-gray-50 rounded-3xl p-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Client Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white" animateOnHover={true}>
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-6 text-xl leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-sm text-gray-500 mb-4">{testimonial.background}</p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                    {testimonial.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action with More Engaging Animations */}
      <motion.section 
        className="mt-16 bg-slate-600 hover:bg-slate-700 text-white py-20 rounded-3xl relative overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: "spring",
              bounce: 0.4
            }
          }}
          className="relative z-10 text-center"
        >
          <Workflow className="mx-auto w-20 h-20 mb-8 text-white" />
          <h2 className="text-5xl font-extrabold mb-6">
            Let&apos;s Build Your Digital Future
          </h2>
          <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Transform your vision into reality with our expert team of digital innovators
          </p>
          <motion.button
            className="bg-sky-600 hover:bg-sky-700 text-white px-12 py-5 rounded-full text-lg font-bold transition-all shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              rotate: [0, -2, 2, 0] 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href='/Services'>
              Start Your Project
            </Link>
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default PortfolioPage;