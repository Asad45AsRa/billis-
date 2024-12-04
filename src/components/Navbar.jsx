import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      dropdown: false
    },
    { 
      href: "/AbouttUs", 
      label: "About", 
      dropdown: [
        { href: "/aboutus", label: "Company Overview" },
        { href: "/about/team", label: "Leadership Team" },
        { href: "/about/mission", label: "Our Vision" }
      ]
    },
    { 
      href: "/Services", 
      label: "Services",
      dropdown: [
        { href: "/services/strategy", label: "Strategic Consulting" },
        { href: "/services/digital", label: "Digital Transformation" },
        { href: "/services/innovation", label: "Innovation Solutions" }
      ]
    },
    { 
      href: "/Portfolio", 
      label: "Portfolio",
      dropdown: false
    },
    { 
      href: "/Contact", 
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
          ? 'bg-slate-100/90 shadow-lg backdrop-blur-md' 
          : 'bg-slate-700'}
        transition-all duration-300 ease-in-out
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className={`
              text-3xl font-bold tracking-tight 
              ${scrolled ? 'text-slate-800' : 'text-white'}
              transition-colors duration-300 
              hover:text-slate-600 
              transform hover:scale-105
            `}
          >
            <Image src={bill} alt='YourLog0' height={24} width={24}/>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className={`
                ${scrolled ? 'text-slate-800' : 'text-white'}
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
                    ${scrolled ? 'text-slate-800' : 'text-white'}
                    font-medium 
                    flex items-center 
                    transition-all duration-300 
                    hover:text-slate-500 
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
                  <div className="absolute top-full left-0 mt-4 w-64 
                    bg-white rounded-lg shadow-2xl 
                    ring-1 ring-slate-200 
                    py-2 z-50 
                    transition-all duration-300"
                  >
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 
                          text-slate-800 
                          hover:bg-slate-100 
                          hover:text-slate-600 
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
            bg-white shadow-2xl z-40 rounded-b-lg"
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
                        block px-4 py-2 
                        rounded-md transition-colors 
                        hover:bg-slate-100 
                        hover:text-slate-600"
                    >
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

                  {/* Mobile Dropdown */}
                  {link.dropdown && activeDropdown === index && (
                    <div className="pl-6 mt-2 space-y-2">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={toggleMenu}
                          className="block px-4 py-2 
                            text-slate-700 
                            hover:bg-slate-100 
                            hover:text-slate-900 
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
