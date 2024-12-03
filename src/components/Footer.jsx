import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Youtube,
  Send, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  Star,
  Award 
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    { 
      icon: Facebook, 
      url: 'https://facebook.com/blisstechnologies',
      color: 'text-blue-600 hover:text-blue-700'
    },
    { 
      icon: Twitter, 
      url: 'https://twitter.com/blisstechnologies',
      color: 'text-sky-500 hover:text-sky-600'
    },
    { 
      icon: Instagram, 
      url: 'https://instagram.com/blisstechnologies',
      color: 'text-pink-600 hover:text-pink-700'
    },
    { 
      icon: Linkedin, 
      url: 'https://linkedin.com/company/blisstechnologies',
      color: 'text-blue-800 hover:text-blue-900'
    },
    { 
      icon: Github, 
      url: 'https://github.com/blisstechnologies',
      color: 'text-gray-800 hover:text-black'
    },
    { 
      icon: Youtube, 
      url: 'https://youtube.com/blisstechnologies',
      color: 'text-red-600 hover:text-red-700'
    }
  ];

  const quickLinks = [
    { name: 'Home', url: '/', icon: ChevronRight },
    { name: 'About Us', url: '/about', icon: ChevronRight },
    { name: 'Services', url: '/services', icon: ChevronRight },
    { name: 'Portfolio', url: '/portfolio', icon: ChevronRight },
    { name: 'Contact', url: '/contact', icon: ChevronRight }
  ];

  const services = [
    { name: 'Web Development', icon: Star },
    { name: 'Mobile App Development', icon: Star },
    { name: 'Digital Marketing', icon: Star },
    { name: 'UI/UX Design', icon: Award },
    { name: 'E-commerce Solutions', icon: Star },
    { name: 'SEO Services', icon: Star }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Enhanced newsletter subscription logic
    if (email) {
      // Simulated validation and subscription
      console.log('Subscribed with email:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset subscription status after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold mb-6 text-indigo-400">Bliss Technologies</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Transforming digital landscapes with innovative solutions and creative expertise 
            We turn your vision into cutting-edge technological realities
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${social.color} transition-all duration-300 transform hover:scale-110`}
              >
                <social.icon size={28} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-indigo-400">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index} className="group">
                <Link 
                  href={link.url} 
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <link.icon 
                    size={20} 
                    className="mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform" 
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-indigo-400">Our Services</h4>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="group">
                <Link 
                  href="/services" 
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <service.icon 
                    size={20} 
                    className="mr-2 text-indigo-500 group-hover:rotate-12 transition-transform" 
                  />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-indigo-400">Stay Updated</h4>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Subscribe to our newsletter for latest updates insights and exclusive content
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-l-lg bg-gray-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition-all duration-300"
            />
            <button 
              type="submit" 
              className={`
                ${isSubscribed 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
                } 
                text-white px-4 py-2 rounded-r-lg transition-colors group
              `}
            >
              {isSubscribed ? '✓ Subscribed' : <Send size={20} className="group-hover:rotate-45 transition-transform" />}
            </button>
          </form>
          {isSubscribed && (
            <p className="text-green-400 mt-2 text-sm animate-pulse">
              Thank you for subscribing
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0 flex items-center">
            <Award size={20} className="mr-2 text-indigo-500" />
            © {currentYear} Bliss Technologies. All Rights Reserved
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-white hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-conditions" 
              className="text-gray-400 hover:text-white hover:underline transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;