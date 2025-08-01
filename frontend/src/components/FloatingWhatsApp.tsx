import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to inquire about your tailoring services.', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-200"
    >
      <FaWhatsapp size={24} />
    </motion.button>
  );
};

export default FloatingWhatsApp;