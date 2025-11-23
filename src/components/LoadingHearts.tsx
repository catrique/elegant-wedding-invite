import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoadingHearts = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
        >
          <Heart className="w-6 h-6 text-primary" strokeWidth={2} />
        </motion.div>
      ))}
    </div>
  );
};

export default LoadingHearts;
