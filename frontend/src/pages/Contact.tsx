import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
  FiMessageSquare,
  FiCheck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]*$/, "Only numbers are allowed")
        .min(10, "Phone number must be at least 10 digits"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          toast.success("Form submitted successfully!");
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            resetForm();
          }, 3000);
        } else {
          toast.error("Submission failed. Please try again.");
        }
      } catch (error) {
        toast.error("Network error. Please check your connection.");
      }
    },
  });

  const contactInfo = [
    {
      icon: <FiPhone className="h-6 w-6" />,
      title: "Phone",
      info: "+91 98765 43210",
      description: "Call us for immediate assistance",
      action: () => window.open("tel:+919876543210", "_self"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaWhatsapp className="h-6 w-6" />,
      title: "WhatsApp",
      info: "+91 98765 43210",
      description: "Quick chat and instant replies",
      action: () =>
        window.open(
          "https://wa.me/919876543210?text=Hello! I would like to inquire about your services.",
          "_blank"
        ),
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FiMail className="h-6 w-6" />,
      title: "Email",
      info: "info@eleganttailoring.com",
      description: "Send us detailed inquiries",
      action: () => window.open("mailto:info@eleganttailoring.com", "_self"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FiMapPin className="h-6 w-6" />,
      title: "Visit Us",
      info: "123 Fashion Street, Mumbai",
      description: "Come to our studio",
      action: () =>
        window.open(
          "https://maps.google.com/?q=123+Fashion+Street,+Mumbai",
          "_blank"
        ),
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <ToastContainer />
      <PageBanner
        title="Get In Touch"
        subtitle="Ready to create something beautiful? Let's discuss your tailoring needs"
        backgroundImage="https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: "Contact Us" }]}
      />

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <FiPhone className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">
                Contact Options
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Way
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're here to help you with all your tailoring needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-white rounded-2xl shadow-xl p-8 text-center cursor-pointer group border border-gray-100 overflow-hidden"
                onClick={contact.action}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div
                    className={`bg-gradient-to-r ${contact.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <div className="text-white">{contact.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">
                    {contact.info}
                  </p>
                  <p className="text-gray-600 text-sm">{contact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <FiMessageSquare className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">
                Send Message
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you soon
            </p>
          </div>

          {isSubmitted ? (
            <motion.div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-12 rounded-3xl text-center shadow-2xl">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Message Sent Successfully!
              </h3>
              <p className="text-xl">
                Thank you for contacting us. We'll get back to you within 24
                hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name *"
                  icon={<FiUser />}
                  type="text"
                  required
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && formik.errors.name}
                  placeholder="Enter your full name"
                />
                <InputField
                  label="Email Address *"
                  icon={<FiMail />}
                  type="email"
                  required
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                  placeholder="Enter your email"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Phone Number"
                  icon={<FiPhone />}
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && formik.errors.phone}
                  placeholder="Your phone number"
                />
                <InputField
                  label="Subject *"
                  type="text"
                  required
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.subject && formik.errors.subject}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Tell us about your requirements..."
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.message}
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-rose-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <FiMessageSquare className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      {/* Map */}
      <section className="h-[400px] w-full">
        <iframe
          title="Elegant Tailoring Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7857713786896!2d72.82890441490332!3d19.120554887071315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b622f3ea77cf%3A0x7d7dc542a5c68484!2sMumbai%2C%20Maharashtra%20400049%2C%20India!5e0!3m2!1sen!2sin!4v1686669362797!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </motion.div>
  );
};

const InputField = ({
  label,
  icon,
  type,
  name,
  value,
  onChange,
  onBlur,
  required = false,
  placeholder = "",
  error,
}: {
  label: string;
  icon?: React.ReactNode;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string | false;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-500"
        placeholder={placeholder}
      />
    </div>
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

export default Contact;
