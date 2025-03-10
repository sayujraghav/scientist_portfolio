import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader"; // Preloader Component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Lazy Load Heavy Components for Faster Initial Render
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const PhotoGallery = lazy(() => import("./components/MasonryGallery"));
const Contact = lazy(() => import("./components/Contact"));
const YearSpanTimeline = lazy(() => import("./components/YearSpanTimeline"));
const Awards = lazy(() => import("./components/Awards"));
const Publications = lazy(() => import("./components/Publications"));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
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
            <Navbar />
            <Hero />

            {/* ✅ Use Suspense for Lazy Loaded Components */}
            <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
              <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
              >
                <About />
              </motion.section>

              <motion.section
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
                transition={{ duration: 1 }}
              >
                <Skills />
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
              >
                <Publications />
              </motion.section>

              <motion.section
                className="bg-gradient-to-b from-blue-200 to-gray-100 dark:from-blue-900 dark:to-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
              >
                <YearSpanTimeline />
              </motion.section>

              <motion.section
                className="bg-gradient-to-r from-gray-200 via-yellow-400 to-gray-200 dark:from-gray-800 dark:via-yellow-800 dark:to-gray-800"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
              >
                <Awards />
              </motion.section>

              <motion.section
                className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1 }}
              >
                <PhotoGallery />
                <Contact />
              </motion.section>
            </Suspense>

            <Footer />

            {/* ✅ Fixed Scroll to Top and WhatsApp Button */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4">
              <ScrollToTop />
              <WhatsAppButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
