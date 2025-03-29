"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { MapPin, Mail, Phone, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to a backend
    console.log("Form data:", formData);
    
    // Show success alert
    setShowAlert(true);
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Reach out to our team for any questions or support"
        pageName="Contact"
      />
      
      <main className="container mx-auto py-16 px-4 relative">
        {/* Success Alert */}
        <motion.div 
          className={`fixed top-24 right-4 sm:right-8 z-50 bg-white shadow-lg border-l-4 border-[rgb(97,224,0)] rounded-lg px-6 py-4 max-w-xs ${showAlert ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: showAlert ? 1 : 0, x: showAlert ? 0 : 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-[rgb(97,224,0)]" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">
                Message sent successfully!
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm mb-8 relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-br from-[rgb(97,224,0)]/10 to-[rgb(0,218,222)]/10 rounded-tl-full"></div>
              
              <h2 className="heading-3 text-[#1B3C68] mb-6">Get In Touch</h2>
              <p className="body-text text-gray-600 mb-8">
                We'd love to hear from you. Our friendly team is always here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-[rgb(97,224,0)]/10 to-[rgb(0,218,222)]/10 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-[rgb(97,224,0)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B3C68]">Premium Infotech LLC</h3>
                    <p className="text-gray-600">
                      7014 Clubview Drive<br />
                      Bridgeville, PA 15017
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-[rgb(97,224,0)]/10 to-[rgb(0,218,222)]/10 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-[rgb(97,224,0)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B3C68]">Email Us</h3>
                    <p className="text-gray-600">contact@premiuminfotech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-[rgb(97,224,0)]/10 to-[rgb(0,218,222)]/10 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-[rgb(97,224,0)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B3C68]">Call Us</h3>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-4 rounded-2xl shadow-sm h-[300px] overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7299071919223!2d-80.1344863!3d40.3684144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834891ed7e8cf7f%3A0x3d5b1ab2fe0cc6e7!2s7014%20Clubview%20Dr%2C%20Bridgeville%2C%20PA%2015017!5e0!3m2!1sen!2sus!4v1684321234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Premium Infotech LLC Office Location"
              ></iframe>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <h2 className="heading-3 text-[#1B3C68] mb-6">Send Us a Message</h2>
            <p className="body-text text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[rgb(97,224,0)] focus:border-[rgb(97,224,0)] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[rgb(97,224,0)] focus:border-[rgb(97,224,0)] outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[rgb(97,224,0)] focus:border-[rgb(97,224,0)] outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[rgb(97,224,0)] focus:border-[rgb(97,224,0)] outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(97,224,0)] transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
} 