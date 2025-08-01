import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <PageBanner
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information"
        backgroundImage="https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: 'Privacy Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect personal information including your name, contact details, measurements, design preferences, and payment information to provide our tailoring services effectively.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                Your information is used to create custom garments, schedule appointments, process payments, and communicate about your orders. We may also use it to improve our services and send promotional offers with your consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or share your personal information with third parties except as necessary to provide our services (e.g., payment processing) or as required by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-600 mb-6">
                You have the right to access, update, or delete your personal information. You may also opt out of promotional communications at any time by contacting us directly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this privacy policy or how we handle your information, please contact us at +91 98765 43210 or info@eleganttailoring.com.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Privacy;