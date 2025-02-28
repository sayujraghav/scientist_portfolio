import { motion } from "framer-motion";

export default function Loader({ setLoading }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div
        className="text-4xl font-bold"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to My Portfolio
      </motion.div>
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full mt-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </motion.div>
  );
}
