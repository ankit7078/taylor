import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <PageBanner
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully before using our services"
        backgroundImage="https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: 'Terms & Conditions' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Service Agreement</h2>
              <p className="text-gray-600 mb-6">
                By engaging our tailoring services, you agree to these terms and conditions. Our services include custom tailoring, alterations, and design consultations for women's clothing.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Measurements and Fittings</h2>
              <p className="text-gray-600 mb-6">
                Accurate measurements are crucial for proper fitting. We recommend at least one fitting session for custom garments. Additional fittings may be required and charged separately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Payment Terms</h2>
              <p className="text-gray-600 mb-6">
                A 50% advance payment is required to commence work. The remaining balance must be paid upon completion before garment delivery. We accept cash, bank transfers, and digital payments.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Delivery Timeline</h2>
              <p className="text-gray-600 mb-6">
                Delivery timelines are estimates and may vary based on design complexity and workload. Rush orders are subject to additional charges. We will notify you of any delays promptly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Fabric and Materials</h2>
              <p className="text-gray-600 mb-6">
                Customers are responsible for providing fabrics and materials. We are not liable for fabric defects, shrinkage, or color bleeding. We recommend pre-washing fabrics when possible.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Alterations and Modifications</h2>
              <p className="text-gray-600 mb-6">
                Minor alterations within 7 days of delivery are complimentary. Major modifications or changes after cutting will incur additional charges. Design changes mid-process may affect delivery time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Liability</h2>
              <p className="text-gray-600 mb-6">
                Our liability is limited to the cost of services provided. We are not responsible for consequential damages, lost opportunities, or indirect losses arising from our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Contact Information</h2>
              <p className="text-gray-600">
                For any questions regarding these terms, please contact us at +91 98765 43210 or info@eleganttailoring.com.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Terms;