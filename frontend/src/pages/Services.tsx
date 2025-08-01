import React from "react";
import { motion } from "framer-motion";
import {
  FiScissors,
  FiStar,
  FiMessageCircle,
  FiEdit,
  FiUsers,
  FiHeart,
} from "react-icons/fi";
import PageBanner from "../components/PageBanner";

const Services = () => {
  const services = [
    {
      title: "Blouse Stitching",
      description:
        "Custom-fitted blouses for sarees and lehengas with perfect measurements and beautiful designs.",
      price: "₹800 - ₹2,500",
      icon: <FiScissors className="h-8 w-8" />,
      image:
        "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Custom measurements",
        "Designer patterns",
        "Quality fabrics",
        "Perfect fitting",
      ],
    },
    {
      title: "Lehenga Stitching",
      description:
        "Beautiful lehengas for weddings and special occasions with traditional and contemporary designs.",
      price: "₹5,000 - ₹25,000",
      icon: <FiStar className="h-8 w-8" />,
      image:
        "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Bridal collection",
        "Heavy embroidery",
        "Custom colors",
        "Designer cuts",
      ],
    },
    {
      title: "Dress Designing",
      description:
        "Modern western dresses for parties, office wear, and casual occasions with unique designs.",
      price: "₹1,500 - ₹8,000",
      icon: <FiMessageCircle className="h-8 w-8" />,
      image:
        "https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Party dresses",
        "Office wear",
        "Evening gowns",
        "Casual outfits",
      ],
    },
    {
      title: "Alterations",
      description:
        "Professional alterations for all types of garments with expert precision and care.",
      price: "₹200 - ₹1,500",
      icon: <FiEdit className="h-8 w-8" />,
      image:
        "https://images.pexels.com/photos/7679735/pexels-photo-7679735.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Size adjustments",
        "Length modifications",
        "Style changes",
        "Repair work",
      ],
    },
    {
      title: "Kidswear Tailoring",
      description:
        "Adorable and comfortable clothing for children with soft, child-friendly fabrics.",
      price: "₹500 - ₹3,000",
      icon: <FiUsers className="h-8 w-8" />,
      image:
        "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Party wear",
        "Ethnic wear",
        "Casual clothes",
        "School uniforms",
      ],
    },
    {
      title: "Bridal Wear",
      description:
        "Complete bridal outfits for your special day with intricate craftsmanship and attention to detail.",
      price: "Contact for Pricing",
      icon: <FiHeart className="h-8 w-8" />,
      image:
        "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Bridal lehengas",
        "Wedding sarees",
        "Reception outfits",
        "Accessories",
      ],
    },
  ];

  const handleRequestService = (serviceName: string) => {
    const message = `Hello! I would like to inquire about ${serviceName} service.`;
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive tailoring solutions for all your fashion needs"
        backgroundImage="https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="text-purple-600">{service.icon}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-xl font-bold text-purple-600">
                      {service.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleRequestService(service.title)}
                    className="w-full bg-gradient-to-r from-purple-600 to-rose-600 text-white py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    Request Service
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Contact us today to discuss your requirements and get a
              personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("tel:+919876543210", "_self")}
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              >
                Call Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://wa.me/919876543210?text=Hello! I would like to inquire about your services.",
                    "_blank"
                  )
                }
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg"
              >
                WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
