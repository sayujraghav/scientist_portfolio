import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PhotoGallery from "./components/MasonryGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import YearSpanTimeline from "./components/YearSpanTimeline";
import Awards from "./components/Awards";
import Loader from "./components/Loader"; // Import the Loader component
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import WhatsAppButton from "./components/WhatsAppButton";
import Publications from "./components/Publications";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  // Loading state for preloader
  const [loading, setLoading] = useState(true);

  return (
    <div className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Page Content with Smooth Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
              >
                <Navbar />
                <Hero />

                <motion.section
                  className=""
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1 }}
                >
                  <About />
                </motion.section>

                <motion.section
                  className=""
                  initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
                  transition={{ duration: 1 }}
                >
                  
                  <Skills />
                </motion.section>

                <motion.section
                  className=""
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1 }}
                >
                  <Publications />
                </motion.section>

                <motion.section
                  className=" bg-gradient-to-b from-blue-200 to-gray-100 dark:from-blue-900 dark:to-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <YearSpanTimeline />
                </motion.section>

                <motion.section
                  className=" bg-gradient-to-r from-gray-200 via-yellow-400 to-gray-200 dark:from-gray-800 dark:via-yellow-800 dark:to-gray-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1}}
                >
                  <Awards />
                </motion.section>

                <motion.section
                  className=" bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 1 }}
                >
                  <PhotoGallery />
                  <Contact />
                </motion.section>

                <Footer />
                <div style={{ position: 'fixed', bottom: '20px', right: '5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <ScrollToTop />
                </div>
                <WhatsAppButton />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}