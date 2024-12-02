
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaArrowRight, FaRocket, FaCode, FaMobileAlt, FaChartLine, 
  FaLaptopCode, FaDatabase, FaCloud 
} from "react-icons/fa";

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Transform Digital Challenges into Competitive Advantages",
    "Innovative Solutions, Exceptional Digital Experiences",
    "Empowering Businesses Through Cutting-Edge Technology"
  ];

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(taglineInterval);
  }, []);

  const services = [
    { 
      icon: <FaCode className="w-12 h-12 text-indigo-600 group-hover:text-indigo-800 transition-colors" />, 
      title: "Web Development",
      description: "Modern, scalable web solutions" 
    },
    { 
      icon: <FaMobileAlt className="w-12 h-12 text-teal-600 group-hover:text-teal-800 transition-colors" />, 
      title: "Mobile Development",
      description: "Cross-platform mobile applications" 
    },
    { 
      icon: <FaChartLine className="w-12 h-12 text-emerald-600 group-hover:text-emerald-800 transition-colors" />, 
      title: "Digital Strategy",
      description: "Data-driven growth solutions" 
    },
    { 
      icon: <FaCloud className="w-12 h-12 text-sky-600 group-hover:text-sky-800 transition-colors" />, 
      title: "Cloud Services",
      description: "Scalable cloud infrastructure" 
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Tagline */}
          <div className="relative h-24 mb-6">
            <h1 
              key={currentTagline}
              className="text-4xl md:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600 animate-fade-in-down"
            >
              {taglines[currentTagline]}
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Bridging innovation and technology to create transformative digital experiences that drive business growth and competitive advantage.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link href="/Contact" className="group">
              <span className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
                <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/Portfolio" className="group">
              <span className="inline-flex items-center border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl">
                Our Portfolio
                <FaLaptopCode className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Services Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-indigo-200"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Animated Rocket */}
          <div className="absolute top-1/3 right-10 hidden lg:block">
            <FaRocket className="text-indigo-400 opacity-20 w-64 h-64 animate-float" />
          </div>
        </div>
      </div>

      {/* Additional Styling Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fade-in-down {
          0% { 
            opacity: 0;
            transform: translateY(-20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
