import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const Cancellation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <PageBanner
        title="Cancellation Policy"
        subtitle="Information about order cancellations, refunds, and modifications"
        backgroundImage="https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: 'Cancellation Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Cancellation</h2>
              <p className="text-gray-600 mb-6">
                Orders can be cancelled within 24 hours of placement without any charges. After cutting has commenced, cancellation will incur a 25% charge of the total order value to cover material and labor costs.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Policy</h2>
              <p className="text-gray-600 mb-6">
                Refunds are processed within 7-10 business days of approved cancellation. Custom-made garments that have been cut or partially completed are non-refundable unless there is a manufacturing defect on our part.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Modifications</h2>
              <p className="text-gray-600 mb-6">
                Minor design changes can be accommodated before cutting begins at no additional cost. Major modifications after cutting will be treated as a new order and charged accordingly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Cancellations</h2>
              <p className="text-gray-600 mb-6">
                In case of genuine emergencies (medical, family), we may waive cancellation charges on a case-by-case basis. Documentation may be required for verification.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Unclaimed Orders</h2>
              <p className="text-gray-600 mb-6">
                Completed orders not collected within 30 days will incur storage charges of ₹50 per day. Orders unclaimed for 90 days will be considered abandoned, and no refund will be provided.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Issues</h2>
              <p className="text-gray-600 mb-6">
                If you're unsatisfied with the quality of workmanship, please notify us within 7 days of delivery. We will assess the issue and provide appropriate remedies, including rework or partial refunds.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact for Cancellations</h2>
              <p className="text-gray-600">
                To cancel an order or discuss refund options, please contact us immediately at +91 98765 43210 or visit our studio. Email requests may not be processed as quickly as phone calls.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Cancellation;