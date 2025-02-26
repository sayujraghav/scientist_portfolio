import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
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
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all"
    >
      <motion.div
        className="absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {darkMode ? (
          <Moon size={14} className="text-yellow-400" />
        ) : (
          <Sun size={14} className="text-orange-500" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeSwitcher;
