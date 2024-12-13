import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Home, Info, Briefcase, 
  Layers, Send, Globe, Award, Rocket 
} from 'lucide-react';
import Image from 'next/image';
import bill from '../../public/Bliss-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { 
      href: "/", 
      label: "Home",
      icon: Home,
      dropdown: false
    },
    { 
      href: "/AbouttUs", 
      label: "About", 
      icon: Info,
      dropdown: [
        { href: "/aboutus", label: "Company Overview", icon: Globe },
        { href: "/about/team", label: "Leadership Team", icon: Award },
        { href: "/about/mission", label: "Our Vision", icon: Rocket }
      ]
    },
    { 
      href: "/Services", 
      label: "Services",
      icon: Briefcase,
      dropdown: [
        { href: "/services/strategy", label: "Strategic Consulting", icon: Layers },
        { href: "/services/digital", label: "Digital Transformation", icon: Globe },
        { href: "/services/innovation", label: "Innovation Solutions", icon: Rocket }
      ]
    },
    { 
      href: "/Portfolio", 
      label: "Portfolio",
      icon: Briefcase,
      dropdown: false
    },
    { 
      href: "/Contact", 
      label: "Contact",
      icon: Send,
      dropdown: false
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        ${scrolled 
          ? 'bg-white/90 shadow-2xl backdrop-blur-xl' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'}
        transition-all duration-500 ease-in-out
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Hover Animation */}
          <Link 
            href="/" 
            className={`
              flex items-center space-x-2
              ${scrolled ? 'text-slate-800' : 'text-sky-800'}
              transition-all duration-300 
              transform hover:scale-105 hover:rotate-3
            `}
          >
            <Image 
              src={bill} 
              alt='Company Logo' 
              height={32} 
              width={32}
              className="rounded-full shadow-md"
            />
            <span className="font-bold text-xl tracking-wider">Bliss</span>
          </Link>

          {/* Mobile Menu Button with Advanced Animation */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className={`
                ${scrolled ? 'text-slate-800' : 'text-sky-800'}
                focus:outline-none 
                transition-all duration-300 
                hover:rotate-12 hover:scale-110
                ${isOpen ? 'animate-pulse' : ''}
              `}
            >
              {isOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
            </button>
          </div>

          {/* Desktop Navigation with Enhanced Hover Effects */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div 
                key={link.href} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  href={link.href} 
                  className={`
                    ${scrolled ? 'text-slate-800' : 'text-white'}
                    font-medium 
                    flex items-center 
                    transition-all duration-300 
                    hover:text-blue-400 
                    transform hover:scale-105
                    ${link.dropdown ? 'pr-4' : ''}
                  `}
                >
                  <link.icon 
                    size={18} 
                    className="mr-2 
                      transition-transform duration-300 
                      group-hover:rotate-12"
                  />
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className="ml-1 transition-transform duration-300 
                        group-hover:rotate-180" 
                    />
                  )}
                </Link>

                {/* Dropdown Menu with Enhanced Styling */}
                {link.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-4 w-72 
                    bg-white rounded-xl shadow-2xl 
                    ring-2 ring-blue-100 
                    py-3 z-50 
                    transition-all duration-500 
                    origin-top-left 
                    scale-100 
                    animate-slide-down"
                  >
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="flex items-center px-4 py-3 
                          text-slate-800 
                          hover:bg-blue-50 
                          hover:text-blue-600 
                          transition-all duration-300
                          group"
                      >
                        <sublink.icon 
                          size={18} 
                          className="mr-3 
                            text-slate-500 
                            group-hover:text-blue-500 
                            transition-colors"
                        />
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 
            bg-white shadow-2xl z-40 rounded-b-lg
            animate-slide-down"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <div key={link.href} className="group">
                  <div 
                    className="flex justify-between items-center"
                    onClick={() => link.dropdown && toggleDropdown(index)}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-slate-800 
                        flex items-center
                        block px-4 py-3 
                        rounded-lg transition-colors 
                        hover:bg-blue-50 
                        hover:text-blue-600"
                    >
                      <link.icon 
                        size={18} 
                        className="mr-3 
                          text-slate-500 
                          group-hover:text-blue-500 
                          transition-colors"
                      />
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <ChevronDown 
                        size={20} 
                        className={`
                          text-slate-600 
                          transition-transform duration-300
                          ${activeDropdown === index ? 'rotate-180' : ''}
                        `}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown with Accordion Style */}
                  {link.dropdown && activeDropdown === index && (
                    <div className="pl-6 mt-2 space-y-2 
                      animate-slide-down"
                    >
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={toggleMenu}
                          className="flex items-center px-4 py-3 
                            text-slate-700 
                            hover:bg-blue-50 
                            hover:text-blue-700 
                            rounded-lg 
                            transition-colors"
                        >
                          <sublink.icon 
                            size={16} 
                            className="mr-3 
                              text-slate-500 
                              group-hover:text-blue-500 
                              transition-colors"
                          />
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;