import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiChevronRight } from 'react-icons/fi';

interface PageBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumbs: { name: string; path?: string }[];
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, backgroundImage, breadcrumbs }) => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-purple-600 to-rose-600 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={`${title} background`}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-rose-900/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-rose-300/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-10 w-16 h-16 bg-purple-400/20 rounded-lg"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-10 w-20 h-20 bg-rose-400/20 rounded-lg"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + i * 8}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 text-white/80 mb-8"
        >
          <Link to="/" className="flex items-center hover:text-white transition-colors">
            <FiHome className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <FiChevronRight className="h-4 w-4" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1 h-16 bg-gradient-to-b from-white/60 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;