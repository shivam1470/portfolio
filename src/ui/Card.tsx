import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className={`bg-gray-900/50 backdrop-blur-md border border-gray-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
