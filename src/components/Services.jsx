import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, technologies }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Icon className="text-blue-600" size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {technologies && (
        <div className="mt-4">
          <h4 className="font-semibold text-blue-700 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

// Main Services Page Component
const ServicesPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "We create powerful, responsive, and user-friendly websites tailored to your unique business needs.",
      technologies: [
        "React.js", "Next.js", "Node.js", 
        "Express.js", "WordPress", "Shopify"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build high-performance mobile apps that engage users across iOS and Android platforms.",
      technologies: [
        "React Native", "Flutter", 
        "Cross-Platform", "iOS", "Android"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to build brand awareness and drive targeted traffic.",
      technologies: [
        "SEO", "PPC", "Social Media", 
        "Content Marketing", "Google Ads"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom services designed to meet your specific business objectives."
    },
    {
      icon: CheckCircle,
      title: "Cutting-Edge Technologies",
      description: "Stay ahead with our expertise in the latest digital trends and innovations."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Delivering successful digital transformations across various industries."
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white my-1 rounded-lg shadow-2xl py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Digital Solutions That Transform Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            At Bliss Technologies, we provide end-to-end digital solutions that propel your business into the future.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center 
              bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg 
              transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Get Started
          </motion.a>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  technologies={service.technologies}
                />
                <div className="mt-4">
                  <button
                    className="flex items-center justify-between w-full bg-white shadow-md rounded-lg px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleExpand(index)}
                  >
                    <span>Learn More</span>
                    {expandedIndex === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>
                  {expandedIndex === index && (
                    <div className="bg-white shadow-md rounded-lg p-6 mt-4">
                      <p className="text-gray-600">{service.description}</p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-blue-700 mb-2">
                          Key Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Partner with Bliss Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <item.icon className="text-blue-600" size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how Bliss Technologies can help you achieve your digital transformation goals.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center 
            bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg 
            transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;