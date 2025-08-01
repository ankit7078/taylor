import React from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import PageBanner from "../components/PageBanner";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Elegant blouse design",
      category: "Blouses",
    },
    {
      src: "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Traditional lehenga",
      category: "Lehengas",
    },
    {
      src: "https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern dress design",
      category: "Dresses",
    },
    {
      src: "https://images.pexels.com/photos/7679735/pexels-photo-7679735.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bridal wear",
      category: "Bridal",
    },
    {
      src: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Party dress",
      category: "Dresses",
    },
    {
      src: "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Designer blouse",
      category: "Blouses",
    },
    {
      src: "https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Wedding lehenga",
      category: "Lehengas",
    },
    {
      src: "https://images.pexels.com/photos/7679755/pexels-photo-7679755.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Casual dress",
      category: "Dresses",
    },
    {
      src: "https://images.pexels.com/photos/7679760/pexels-photo-7679760.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Embroidered blouse",
      category: "Blouses",
    },
    {
      src: "https://images.pexels.com/photos/7679765/pexels-photo-7679765.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Designer lehenga",
      category: "Lehengas",
    },
    {
      src: "https://images.pexels.com/photos/7679770/pexels-photo-7679770.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Evening gown",
      category: "Dresses",
    },
    {
      src: "https://images.pexels.com/photos/7679775/pexels-photo-7679775.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bridal lehenga",
      category: "Bridal",
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const categories = ["All", "Blouses", "Lehengas", "Dresses", "Bridal"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <PageBanner
        title="Our Gallery"
        subtitle="Explore our collection of beautiful, custom-made garments"
        backgroundImage="https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: "Gallery" }]}
      />

      {/* Filter Categories */}
      <section className="py-4 bg-white border-b sticky top-16 z-40 backdrop-blur-md bg-white/95 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 md:flex-wrap md:justify-center min-w-max md:min-w-0">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "All" ? "All Designs" : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredImages.length} beautiful creations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-purple-600 font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-900">
                      {image.alt}
                    </p>
                    <p className="text-xs text-purple-600">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={filteredImages}
          index={lightboxIndex}
          plugins={[Slideshow, Zoom, Fullscreen, Counter]}
          slideshow={{
            autoplay: true,
            delay: 3000,
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
          }}
          counter={{
            container: { style: { top: "unset", bottom: 0 } },
          }}
        />
      </section>
    </motion.div>
  );
};

export default Gallery;
