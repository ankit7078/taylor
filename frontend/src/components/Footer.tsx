import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiScissors, FiSend, FiCheck } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Disclaimers', path: '/disclaimers' },
    { name: 'Cancellation Policy', path: '/cancellation' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-purple-400 to-rose-400 p-2 rounded-full">
                <FiScissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Elegant Tailoring</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating beautiful, custom-fitted clothing for women with over 15 years of experience. 
              From traditional wear to modern designs, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full cursor-pointer"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full cursor-pointer"
              >
                <FaFacebook className="h-5 w-5 text-white" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full cursor-pointer"
              >
                <FaWhatsapp className="h-5 w-5 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-rose-400 transition-colors" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
              Contact Info
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-full group-hover:from-purple-600 group-hover:to-purple-700 transition-all">
                  <FiPhone className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+91 98765 43210</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-2 rounded-full group-hover:from-rose-600 group-hover:to-rose-700 transition-all">
                  <FiMail className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@eleganttailoring.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 group"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2 rounded-full group-hover:from-indigo-600 group-hover:to-indigo-700 transition-all">
                  <FiMapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  123 Fashion Street, Mumbai, Maharashtra 400001
                </span>
              </motion.div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new designs and special offers!
            </p>
            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-center"
              >
                <FiCheck className="h-6 w-6 mx-auto mb-2" />
                <p className="font-semibold">Thank you for subscribing!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-rose-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FiSend className="h-4 w-4" />
                  <span>Subscribe</span>
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; 2025 Elegant Tailoring. All rights reserved.</p>
              <p className="mt-1">Crafted with ❤️ for beautiful fashion</p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;