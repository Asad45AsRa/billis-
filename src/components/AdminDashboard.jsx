import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  UserCheck, 
  Layers, 
  Briefcase, 
  Lock, 
  User, 
  LogOut, 
  Menu, 
  X, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';

// Authentication Context
const AuthContext = React.createContext(null);

// Login Component
const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Simulated login (replace with actual authentication)
    if (email === 'admin@blisstechnologies.com' && password === 'Admin2024!') {
      onLogin({
        name: 'Admin User',
        email: email,
        role: 'Super Admin'
      });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <ShieldCheck className="mx-auto text-indigo-600 mb-4" size={60} />
          <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center">
              <AlertTriangle className="mr-2" />
              {error}
            </div>
          )}
          <div>
            <label className="block mb-2 text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

// Content Management Components
const HeroPageManager = () => {
  const [heroData, setHeroData] = useState({
    tagline: "Your Vision, Our Technology -- Driving Success in the Digital Era",
    subheading: "From stunning web designs to scalable mobile apps and strategic digital marketing",
    primaryCTA: "Get Started Today",
    secondaryCTA: "View Our Portfolio"
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    // Simulated update logic
    alert('Hero Page Updated Successfully!');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">Hero Page Management</h3>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-2">Tagline</label>
          <input
            type="text"
            value={heroData.tagline}
            onChange={(e) => setHeroData({...heroData, tagline: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Subheading</label>
          <textarea
            value={heroData.subheading}
            onChange={(e) => setHeroData({...heroData, subheading: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            rows="3"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Primary CTA</label>
            <input
              type="text"
              value={heroData.primaryCTA}
              onChange={(e) => setHeroData({...heroData, primaryCTA: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2">Secondary CTA</label>
            <input
              type="text"
              value={heroData.secondaryCTA}
              onChange={(e) => setHeroData({...heroData, secondaryCTA: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Update Hero Page
        </button>
      </form>
    </div>
  );
};

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const sections = [
    {
      id: 'hero',
      name: 'Hero Page',
      icon: Home,
      content: HeroPageManager
    },
    {
      id: 'about',
      name: 'About Us',
      icon: UserCheck,
      content: () => <div>About Us Management (Under Construction)</div>
    },
    {
      id: 'services',
      name: 'Services',
      icon: Layers,
      content: () => <div>Services Management (Under Construction)</div>
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      icon: Briefcase,
      content: () => <div>Portfolio Management (Under Construction)</div>
    }
  ];

  if (!user) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-md transition-all`}>
        <div className="flex justify-between items-center p-4">
          {isSidebarOpen && (
            <div className="flex items-center">
              <User className="mr-2 text-indigo-600" />
              <span className="text-xl font-bold">{user.name}</span>
            </div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600">
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav className="mt-4">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center p-4 ${
                activeSection === section.id 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <section.icon className="mr-4" />
              {isSidebarOpen && section.name}
            </button>
          ))}
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center p-4 text-red-600 hover:bg-red-100"
          >
            <LogOut className="mr-4" />
            {isSidebarOpen && 'Logout'}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto"
          >
            {React.createElement(
              sections.find(s => s.id === activeSection).content
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;