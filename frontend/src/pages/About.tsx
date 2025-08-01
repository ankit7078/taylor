import React from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiChevronDown,
  FiAward,
  FiUsers,
  FiHeart,
  FiTrendingUp,
  FiStar,
  FiTarget,
} from "react-icons/fi";
import PageBanner from "../components/PageBanner";

const About = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to complete an order?",
      answer:
        "Typically, simple alterations take 2-3 days, while custom stitching takes 1-2 weeks depending on the complexity of the design.",
    },
    {
      question: "Do you provide home service?",
      answer:
        "Yes, we offer home visits for measurements and fittings within the city limits. Additional charges may apply.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing depends on the type of garment, complexity of design, and fabric used. We provide detailed quotes after consultation.",
    },
    {
      question: "Do you work with all types of fabrics?",
      answer:
        "Yes, we work with all types of fabrics including silk, cotton, chiffon, georgette, and designer fabrics.",
    },
    {
      question: "Can you recreate designs from photos?",
      answer:
        "Absolutely! We can recreate designs from photos or magazines. We will discuss feasibility and any required modifications.",
    },
  ];

  const values = [
    {
      icon: <FiTarget className="h-8 w-8" />,
      title: "Quality First",
      description:
        "We never compromise on quality. Every garment is meticulously crafted with premium materials and attention to detail.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FiHeart className="h-8 w-8" />,
      title: "Perfect Fit",
      description:
        "Every garment is tailored to your exact measurements, ensuring a perfect fit that enhances your natural beauty.",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We work closely with you to bring your vision to life and exceed your expectations.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Founded",
      description: "Started as a small home-based tailoring service",
    },
    {
      year: "2012",
      title: "First Studio",
      description: "Opened our first professional studio space",
    },
    {
      year: "2016",
      title: "500+ Customers",
      description: "Reached milestone of serving 500 happy customers",
    },
    {
      year: "2020",
      title: "Digital Presence",
      description: "Launched online booking and consultation services",
    },
    {
      year: "2023",
      title: "Award Winner",
      description: 'Recognized as "Best Local Tailor" by City Magazine',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Enhanced Page Banner */}
      <PageBanner
        title="About Us"
        subtitle="Crafting beautiful garments with passion, precision, and over 15 years of experience"
        backgroundImage="https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our founder at work"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Mrs. Kavita Sharma</p>
                  <p className="text-sm opacity-90">Founder & Master Tailor</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-purple-200 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-rose-200 rounded-full"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                <FiHeart className="h-4 w-4 text-purple-600" />
                <span className="text-purple-600 font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Journey of Passion & Excellence
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Elegant Tailoring was founded in 2008 with a simple mission: to
                create beautiful, well-fitted clothing that makes every woman
                feel confident and elegant. What started as a small home-based
                operation has grown into a trusted name in women's fashion.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our founder, Mrs. Kavita Sharma, learned the art of tailoring
                from her grandmother and has been perfecting her craft for over
                two decades. Her passion for creating unique, custom-fitted
                garments has been the driving force behind our success.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-xl">
                  <div className="text-3xl font-bold text-rose-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <FiStar className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">Our Values</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our core values guide everything we do, from the first
              consultation to the final fitting
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center group"
              >
                <div
                  className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <FiTrendingUp className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">Our Journey</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A timeline of our growth and key achievements over the years
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-rose-600 rounded-full"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-8 md:text-right"
                        : "md:pl-8 md:text-left"
                    } text-center md:text-left`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={`https://images.pexels.com/photos/767679${
                            20 + index
                          }/pexels-photo-767679${
                            20 + index
                          }.jpeg?auto=compress&cs=tinysrgb&w=100`}
                          alt={milestone.title}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-purple-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-rose-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-600 font-semibold">Our Process</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From consultation to final fitting, we ensure every step is
              perfect
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your requirements and design preferences",
                icon: "💬",
              },
              {
                step: "02",
                title: "Measurement",
                description: "Precise measurements for perfect fitting",
                icon: "📏",
              },
              {
                step: "03",
                title: "Creation",
                description: "Expert craftsmanship and attention to detail",
                icon: "✂️",
              },
              {
                step: "04",
                title: "Fitting",
                description: "Final fitting and adjustments if needed",
                icon: "👗",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-gradient-to-r from-purple-600 to-rose-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-600 font-semibold">FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our services
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-50 to-rose-50 rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="h-6 w-6 text-purple-600" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
