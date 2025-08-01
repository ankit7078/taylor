import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiPhone,
  FiArrowRight,
  FiUsers,
  FiAward,
  FiClock,
  FiHeart,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Testimonial from "./HomeComponent/Testimonial";

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const services = [
    {
      title: "Blouse Stitching",
      description:
        "Custom-fitted blouses with intricate designs and perfect measurements for all occasions.",
      price: "Starting from ₹800",
      icon: "👗",
      image:
        "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Lehenga Stitching",
      description:
        "Stunning lehengas for weddings and special occasions with traditional and modern designs.",
      price: "Starting from ₹5,000",
      icon: "👘",
      image:
        "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Dress Designing",
      description:
        "Modern western dresses and gowns for parties, office wear, and special events.",
      price: "Starting from ₹1,500",
      icon: "✨",
      image:
        "https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const achievements = [
    {
      number: 50,
      label: "Happy Customers",
      icon: <FiUsers className="h-8 w-8" />,
    },
    {
      number: 10,
      label: "Years Experience",
      icon: <FiAward className="h-8 w-8" />,
    },
    {
      number: 100,
      label: "Designs Created",
      icon: <FiHeart className="h-8 w-8" />,
    },
    {
      number: 12,
      label: "Hour Support",
      icon: <FiClock className="h-8 w-8" />,
    },
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Elegant blouse design",
    },
    {
      src: "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Traditional lehenga",
    },
    {
      src: "https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern dress design",
    },
    {
      src: "https://images.pexels.com/photos/7679735/pexels-photo-7679735.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bridal wear",
    },
    {
      src: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Party dress",
    },
    {
      src: "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Designer blouse",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Amazing work! The blouse fitting was perfect and the design was exactly what I wanted.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      text: "Very professional service. My lehenga was ready on time and looked stunning.",
      rating: 5,
    },
    {
      name: "Meera Gupta",
      text: "Best tailor in the city! The attention to detail is incredible.",
      rating: 5,
    },
  ];

  const handleCallClick = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919876543210?text=Hello! I would like to inquire about your tailoring services.",
      "_blank"
    );
  };

  const CountUp = ({
    end,
    duration = 2000,
  }: {
    end: number;
    duration?: number;
  }) => {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => setIsVisible(true)}
        className="text-4xl font-bold text-white"
      >
        {count}+
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Tailoring background"
            className="w-full h-full object-cover"
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
              ease: "linear",
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
              ease: "linear",
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
              ease: "easeInOut",
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
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-10 w-20 h-20 bg-rose-400/20 rounded-lg"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-4">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm">15+ Years of Excellence</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl flex justify-center gap-2 md:text-7xl font-bold mb-6 leading-tight"
          >
            Elegant
            <motion.span
              animate={{ color: ["#ffffff", "#f472b6", "#a855f7", "#ffffff"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="block"
            >
              Tailoring
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Creating beautiful, custom-fitted clothing for the modern woman with
            passion, precision, and artistry
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallClick}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <FiPhone />
              <span>Call Now</span>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-green-600 transition-all duration-300 shadow-lg"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
              >
                Request Callback
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="About us"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-purple-200 rounded-full"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
                <span className="text-purple-600 font-semibold">About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Crafting Dreams Into Reality
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                With over 15 years of experience in women's tailoring, we
                specialize in creating beautiful, custom-fitted clothing that
                makes every woman feel confident and elegant. From traditional
                Indian wear to modern western outfits, we bring your vision to
                life.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Expert craftsmanship with attention to detail
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Custom designs tailored to your style
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Premium quality fabrics and materials
                  </span>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg"
                >
                  <span>Learn More</span>
                  <FiArrowRight />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Achievements Counter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{achievement.icon}</div>
                </div>
                <CountUp end={achievement.number} />
                <p className="text-white/90 mt-2 font-medium">
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-600 font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer a wide range of tailoring services to meet all your
              fashion needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-purple-600">
                      {service.price}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-rose-600 text-white py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              <span>View All Services</span>
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-600 font-semibold">Our Work</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Creations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Take a look at some of our recent creations
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <span className="text-purple-600 font-semibold">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleryImages}
          index={lightboxIndex}
          plugins={[Slideshow, Zoom, Fullscreen, Counter]}
          slideshow={{ autoplay: true, delay: 3000 }}
          zoom={{ maxZoomPixelRatio: 3 }}
        />
      </section>

      {/* Testimonials */}
      <Testimonial testimonials={testimonials} />
    </motion.div>
  );
};

export default Home;
