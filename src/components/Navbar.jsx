import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { 
      href: "/", 
      label: "Home",
      dropdown: false
    },
    { 
      href: "/about", 
      label: "About", 
      dropdown: [
        { href: "/about/company", label: "Company" },
        { href: "/about/team", label: "Our Team" },
        { href: "/about/mission", label: "Mission" }
      ]
    },
    { 
      href: "/services", 
      label: "Services",
      dropdown: [
        { href: "/services/web", label: "Web Development" },
        { href: "/services/mobile", label: "Mobile Apps" },
        { href: "/services/consulting", label: "Consulting" }
      ]
    },
    { 
      href: "/portfolio", 
      label: "Portfolio",
      dropdown: false
    },
    { 
      href: "/contact", 
      label: "Contact",
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

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      ${scrolled 
        ? 'bg-white/90 shadow-md backdrop-blur-sm' 
        : 'bg-gradient-to-r from-indigo-600 to-purple-700'}
      transition-all duration-300 ease-in-out
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className={`
              text-3xl font-bold tracking-tight 
              ${scrolled ? 'text-indigo-800' : 'text-white'}
              transition-colors duration-300 
              hover:text-indigo-500 
              transform hover:scale-105
            `}
          >
            YourBrand
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`
                ${scrolled ? 'text-indigo-800' : 'text-white'}
                focus:outline-none 
                transition-all duration-300 
                hover:rotate-12 hover:scale-110
              `}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
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
                    ${scrolled ? 'text-indigo-800' : 'text-white'}
                    font-medium 
                    flex items-center 
                    transition-all duration-300 
                    hover:text-indigo-300 
                    ${link.dropdown ? 'pr-4' : ''}
                  `}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className="ml-1 transition-transform duration-300 
                        group-hover:rotate-180" 
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-4 w-56 
                    bg-white rounded-lg shadow-xl 
                    ring-1 ring-black ring-opacity-5 
                    py-2 z-50 
                    transition-all duration-300 
                    opacity-0 group-hover:opacity-100
                  ">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 
                          text-indigo-800 
                          hover:bg-indigo-50 
                          hover:text-indigo-600 
                          transition-colors duration-200"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 
            bg-white shadow-lg z-40 rounded-b-lg"
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
                      className="text-indigo-800 
                        block px-4 py-2 
                        rounded-md transition-colors 
                        hover:bg-indigo-50 
                        hover:text-indigo-600"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <ChevronDown 
                        size={20} 
                        className={`
                          text-indigo-600 
                          transition-transform duration-300
                          ${activeDropdown === index ? 'rotate-180' : ''}
                        `}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {link.dropdown && activeDropdown === index && (
                    <div className="pl-6 mt-2 space-y-2">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={toggleMenu}
                          className="block px-4 py-2 
                            text-indigo-700 
                            hover:bg-indigo-50 
                            hover:text-indigo-900 
                            rounded-md 
                            transition-colors"
                        >
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