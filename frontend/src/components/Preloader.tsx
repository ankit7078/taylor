import React from 'react';
import { motion } from 'framer-motion';
import { FiScissors } from 'react-icons/fi';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-purple-600 via-rose-600 to-purple-800 flex items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-lg animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-white/10 rounded-lg animate-pulse delay-700"></div>
      </div>

      <div className="text-center">
        {/* Main Animation Container */}
        <div className="relative mb-8">
          {/* Fabric/Cloth */}
          <motion.div
            initial={{ width: "200px" }}
            animate={{ width: "50px" }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="h-32 bg-gradient-to-r from-pink-200 via-purple-200 to-rose-200 rounded-lg mx-auto relative overflow-hidden shadow-2xl"
          >
            {/* Fabric Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/10 rounded-full"></div>
          </motion.div>

          {/* Scissor */}
          <motion.div
            animate={{ 
              x: [0, 150, 0],
              rotate: [0, 45, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white p-4 rounded-full shadow-2xl"
            >
              <FiScissors className="h-8 w-8 text-purple-600" />
            </motion.div>
          </motion.div>

          {/* Cutting Line Effect */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-0.5 bg-white/60 origin-left"
          />
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Elegant Tailoring</h1>
          <p className="text-white/80 text-lg">Crafting Your Perfect Fit</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center space-x-2"
        >
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-3 h-3 bg-white rounded-full"
              />
            ))}
          </div>
          <span className="text-white/80 ml-3">Loading...</span>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 5}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;