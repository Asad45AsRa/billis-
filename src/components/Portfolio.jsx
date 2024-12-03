import React, { useState, useEffect } from 'react';
import { 
  Star, Check, Globe, Smartphone, ChartLine, Palette, 
  Code, Layout, TrendingUp, Zap, Send, Award, 
  Briefcase, Target, Coffee
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable Components
const Card = ({ children, className = '', onClick = null }) => (
  <motion.div 
    className={`border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-5 bg-gradient-to-r from-blue-50 to-blue-100 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-5 ${className}`}>
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
    }
  ];

  // Enhanced Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Exceptional work! They turned our complex requirements into an elegant digital solution",
      author: "Tech Innovator",
      company: "Silicon Valley Startup",
      rating: 5,
      icon: <Award className="w-12 h-12 text-yellow-500" />
    },
    {
      id: 2,
      quote: "Incredible attention to detail and commitment to our vision",
      author: "Creative Director",
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

  const projectCategories = ['All', 'Web', 'Mobile', 'Marketing', 'Design'];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bliss Technologies
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transforming ideas into digital experiences that inspire engage and drive success
        </p>
      </motion.header>

      {/* Project Filtering */}
      <div className="flex justify-center mb-12 space-x-4">
        {projectCategories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all 
              ${activeFilter === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <CardHeader>
                  {project.icon}
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-50 text-blue-800 px-2 py-1 rounded-full text-xs"
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

      {/* Testimonials Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-4 text-lg">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    {testimonial.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="text-center mt-16 bg-gradient-to-br from-blue-500 to-purple-600 py-16 rounded-2xl text-white"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Coffee className="mx-auto w-16 h-16 mb-6 text-white" />
        <h2 className="text-4xl font-extrabold mb-6">Let&apos;s Create Something Amazing</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80">
          Collaborate with our expert team to bring your digital vision to life
        </p>
        <motion.button 
          className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Projects
        </motion.button>
      </motion.section>
    </div>
  );
};

export default PortfolioPage;