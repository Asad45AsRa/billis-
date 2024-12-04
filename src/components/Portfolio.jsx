import React, { useState, useEffect } from 'react';
import { 
  Star, Check, Globe, Smartphone, ChartLine, Palette, 
  Code, Layout, TrendingUp, Zap, Send, Award, 
  Briefcase, Target, Coffee, Cpu, Database, Layers, Workflow
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Reusable Components
const Card = ({ children, className = '', onClick = null }) => (
  <motion.div 
    className={`border-2 border-gray-100 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`}
    whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
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

  // Enhanced Projects Data
  const projects = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Cutting-edge web solutions with performance and scalability',
      icon: <Code className="w-14 h-14 text-blue-600" />,
      technologies: ['NextJS', 'React', 'Tailwind CSS', 'GraphQL'],
      category: ['Web', 'All']
    },
    {
      id: 2,
      title: 'Mobile App Design',
      description: 'Cross-platform mobile experiences that delight users',
      icon: <Smartphone className="w-14 h-14 text-green-600" />,
      technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript'],
      category: ['Mobile', 'All']
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for maximum impact',
      icon: <TrendingUp className="w-14 h-14 text-purple-600" />,
      technologies: ['SEO', 'Social Media', 'Analytics', 'Content Strategy'],
      category: ['Marketing', 'All']
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Elegant, intuitive, and user-centric design solutions',
      icon: <Layout className="w-14 h-14 text-pink-600" />,
      technologies: ['Figma', 'Adobe XD', 'Interaction Design'],
      category: ['Design', 'All']
    },
    {
      id: 5,
      title: 'Blockchain Solutions',
      description: 'Innovative decentralized technologies and smart contracts',
      icon: <Cpu className="w-14 h-14 text-teal-600" />,
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Smart Contracts'],
      category: ['Blockchain', 'All']
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud architecture solutions',
      icon: <Layers className="w-14 h-14 text-indigo-600" />,
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker'],
      category: ['Cloud', 'All']
    }
  ];

  // Enhanced Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Exceptional work! They turned our complex requirements into an elegant digital solution",
      author: "Sarah Thompson",
      company: "Tech Innovator Inc.",
      rating: 5,
      icon: <Award className="w-12 h-12 text-yellow-500" />
    },
    {
      id: 2,
      quote: "Incredible attention to detail and commitment to our vision",
      author: "Michael Rodriguez",
      company: "Global Design Agency",
      rating: 5,
      icon: <Zap className="w-12 h-12 text-orange-500" />
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

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section - Enhanced */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 bg-gradient-to-br from-blue-50 to-indigo-100 py-16 rounded-3xl"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Bliss Technologies
          </h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming complex digital challenges into innovative, scalable solutions that drive business growth
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href='/'>
            Explore Our Work
            </Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Project Filtering - Enhanced */}
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

      {/* Projects Grid - Enhanced */}
      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {project.icon}
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 min-h-[60px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-50 text-sky-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Testimonials Section - Enhanced */}
      <section className="mt-16 bg-gray-50 rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-6 text-xl leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
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

      {/* Call to Action - Enhanced */}
      <motion.section 
        className="mt-16 bg-slate-600 hover:bg-slate-700 text-white py-20 rounded-3xl relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center">
          <Workflow className="mx-auto w-20 h-20 mb-8 text-white" />
          <h2 className="text-5xl font-extrabold mb-6">
            Let&apos;s Build Your Digital Future
          </h2>
          <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Transform your vision into reality with our expert team of digital innovators
          </p>
          <motion.button
          
            className="bg-sky-600 hover:bg-sky-700 text-white px-12 py-5 rounded-full text-lg font-bold  transition-all shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Link href='/Services'>
            Start Your Project
          </Link>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioPage;