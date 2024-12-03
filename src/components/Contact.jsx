import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  FileText,
  Zap,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  // Refs for animations
  const formRef = useRef(null);
  const mapRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'info@blisstechnologies.com',
            ...formData
          })
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      description: '123 Tech Street, Innovation City, Digital State 54321'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'info@blisstechnologies.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Advanced Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-b-3xl shadow-2xl py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Connect With Bliss Technologies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl max-w-3xl mx-auto opacity-80"
          >
            <Zap className="inline-block mr-2 text-yellow-300" size={24} />
            Lets transform your digital vision into reality
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div 
          ref={formRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-indigo-600"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
            <Zap className="mr-3 text-yellow-500" size={32} />
            Contact Details
          </h2>
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all group"
            >
              <div className="bg-white p-3 rounded-full mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                <info.icon className="text-indigo-600" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          ref={formRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-green-500"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
            <Send className="mr-3 text-green-500" size={32} />
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields with Enhanced Interactions */}
            {['name', 'email', 'subject', 'message'].map((field) => (
              <motion.div 
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="block mb-2 text-gray-700 flex items-center">
                  {field === 'name' && <User size={20} className="mr-2 text-blue-600" />}
                  {field === 'email' && <Mail size={20} className="mr-2 text-blue-600" />}
                  {field === 'subject' && <FileText size={20} className="mr-2 text-blue-600" />}
                  {field === 'message' && <MessageSquare size={20} className="mr-2 text-blue-600" />}
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setActiveField(field)}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      activeField === field 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : formErrors[field]
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  />
                ) : (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setActiveField(field)}
                    onBlur={() => setActiveField(null)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      activeField === field 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : formErrors[field]
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  />
                )}
                <AnimatePresence>
                  {formErrors[field] && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1 flex items-center"
                    >
                      <AlertTriangle size={16} className="mr-2" />
                      {formErrors[field]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Submit Button with Advanced Animation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Send size={20} className="mr-2" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Submit Status with Animated Feedback */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`${
                    submitStatus === 'success' 
                      ? 'bg-green-100 border-green-400 text-green-700' 
                      : 'bg-red-100 border-red-400 text-red-700'
                  } px-4 py-3 rounded relative mt-4 flex items-center`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={24} className="mr-2" />
                  ) : (
                    <AlertTriangle size={24} className="mr-2" />
                  )}
                  {submitStatus === 'success' 
                    ? 'Your message has been sent successfully!' 
                    : 'Failed to send message. Please try again later.'}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* Google Maps Integration with Enhanced Responsiveness */}
      <motion.div 
        ref={mapRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-96 px-4"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjAuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;