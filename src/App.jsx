import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import YearSpanTimeline from "./components/YearSpanTimeline";
import Awards from "./components/Awards";
import Loader from "./components/Loader"; // Import the Loader component
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  // Loading state for preloader
  const [loading, setLoading] = useState(true);

  // Theme toggle
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
            {/* Theme Toggle Button */}
            <button
              className="fixed top-4 right-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg transition-all duration-500 hover:scale-110"
              onClick={() => setDarkMode(!darkMode)}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.span
                    key="light"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    🌞
                  </motion.span>
                ) : (
                  <motion.span
                    key="dark"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    🌙
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Page Content with Smooth Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Navbar />
                <Hero />

                <motion.section
                  className="py-16 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.section>

                <motion.section
                  className="py-16 bg-gradient-to-b from-blue-200 to-gray-100 dark:from-blue-900 dark:to-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <YearSpanTimeline />
                </motion.section>

                <motion.section
                  className="py-16 bg-gradient-to-r from-gray-200 via-yellow-400 to-gray-200 dark:from-gray-800 dark:via-yellow-800 dark:to-gray-800"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Awards/>
                </motion.section>

                <motion.section
                  className="py-16 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.section>

                <Footer />
                <BackToTopButton />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
