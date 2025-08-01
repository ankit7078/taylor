import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";

const Disclaimers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <PageBanner
        title="Disclaimers"
        subtitle="Important disclaimers regarding our tailoring services and website"
        backgroundImage="https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: "Disclaimers" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Service Limitations
              </h2>
              <p className="text-gray-600 mb-6">
                While we strive for perfection, tailoring results may vary based
                on fabric properties, design complexity, and individual body
                measurements. We cannot guarantee identical results to reference
                images or previous work.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Fabric Responsibility
              </h2>
              <p className="text-gray-600 mb-6">
                We are not responsible for fabric defects, shrinkage, color
                bleeding, or other material-related issues. Customers are
                advised to test fabrics and provide adequate material for the
                desired garment.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Measurement Accuracy
              </h2>
              <p className="text-gray-600 mb-6">
                Proper fitting depends on accurate measurements. We recommend
                professional measurement sessions and cannot be held responsible
                for fitting issues arising from incorrect measurements provided
                by customers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Timeline Estimates
              </h2>
              <p className="text-gray-600 mb-6">
                Delivery timelines are estimates and may be affected by factors
                beyond our control, including fabric availability, design
                complexity, and unforeseen circumstances. We are not liable for
                delays.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Website Content
              </h2>
              <p className="text-gray-600 mb-6">
                Information on this website is provided for general guidance.
                While we strive for accuracy, we make no warranties about the
                completeness, reliability, or suitability of the information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                External Links
              </h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to external sites. We are not
                responsible for the content, privacy policies, or practices of
                these third-party websites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Limitation of Liability
              </h2>
              <p className="text-gray-600">
                Our total liability for any claim related to our services is
                limited to the amount paid for those specific services. We are
                not liable for indirect, consequential, or punitive damages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Disclaimers;
