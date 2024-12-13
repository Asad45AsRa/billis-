import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  AlertTriangle,
  Paperclip,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    attachments: []
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const fileInputRef = useRef(null);

  // Enhanced form validation
  const validateForm = useCallback(() => {
    const errors = {};
    
    // Name validation with more robust checks
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = 'Name can only contain letters';
    }
    
    // Advanced email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  // Handle file attachment
  const handleFileAttachment = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB max file size
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'];

    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        alert(`File ${file.name} exceeds 5MB limit`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        alert(`File ${file.name} is not an allowed file type`);
        return false;
      }
      return true;
    });

    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...validFiles]
    }));
  };

  // Remove file attachment
  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  // Handle form submission with enhanced error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Create form data for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      // Append attachments
      formData.attachments.forEach((file, index) => {
        formDataToSend.append(`attachment_${index}`, file);
      });

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          body: formDataToSend
        });
      
        // Log the raw response for debugging
        const responseText = await response.text();
        console.log('Raw response:', responseText);
      
        try {
          // Important: Only parse JSON if the response is likely to be JSON
          const result = response.headers.get('content-type')?.includes('application/json') 
            ? JSON.parse(responseText)
            : responseText;
          
          if (response.ok) {
            setSubmitStatus('success');
            // Reset form...
          } else {
            // More detailed error handling
            setSubmitStatus('error');
            console.error('Submission error:', result);
          }
        } catch (parseError) {
          console.error('Failed to parse JSON:', parseError);
          console.error('Response was:', responseText);
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Network or submission error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Existing contact info
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      description: '123 Tech Street Innovation City Digital State 54321'
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 mb-24">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hover:bg-slate-700 bg-slate-600 text-white rounded-b-3xl shadow-2xl py-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
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
                <info.icon className="text-sky-600" size={28} />
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
            {/* Form Fields */}
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
                    onChange={(e) => setFormData(prev => ({...prev, [field]: e.target.value}))}
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
                    onChange={(e) => setFormData(prev => ({...prev, [field]: e.target.value}))}
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

            {/* File Attachment Section */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 flex items-center">
                <Paperclip size={20} className="mr-2 text-blue-600" />
                Attachments (Optional)
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  multiple
                  onChange={handleFileAttachment}
                  className="hidden"
                  accept="image/jpeg,image/png,image/gif,application/pdf,text/plain"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Paperclip size={20} className="mr-2" /> 
                  Add Attachment
                </button>
              </div>
              {/* Attachment Preview */}
              {formData.attachments.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.attachments.map((file, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm"
                    >
                      {file.name}
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
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

      {/* Enhanced Google Maps Integration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-96 px-4 mb-12"
      >
        <div className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12084.510195686!2d-74.00369375!3d40.71312345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Overlay with Location Information */}
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-xl p-4 shadow-lg max-w-xs">
            <div className="flex items-center mb-2">
              <MapPin size={24} className="text-blue-600 mr-2" />
              <h3 className="font-bold text-gray-800">Our Location</h3>
            </div>
            <p className="text-sm text-gray-600">
              123 Tech Street Innovation City
              Digital State 54321
            </p>
            <div className="flex items-center mt-2">
              <Phone size={20} className="text-green-600 mr-2" />
              <span className="text-sm text-gray-700">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;