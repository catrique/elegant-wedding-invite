import { motion } from "framer-motion";
import oliveBranch from "@/assets/olive-branch.png";

interface EnvelopeSceneProps {
  onOpen: () => void;
}

const EnvelopeScene = ({ onOpen }: EnvelopeSceneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 relative overflow-hidden"
    >
      {/* Decorative Olive Branches */}
      <motion.img
        src={oliveBranch}
        alt=""
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-4 right-4 w-32 sm:w-48 md:w-64 object-contain pointer-events-none"
      />
      <motion.img
        src={oliveBranch}
        alt=""
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-4 left-4 w-32 sm:w-48 md:w-64 object-contain pointer-events-none rotate-180"
      />

      {/* V&C Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-foreground">V</span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-script text-primary">&amp;</span>
          <span className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-foreground">C</span>
        </div>
      </motion.div>

      {/* Envelope Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full max-w-lg"
      >
        {/* Realistic Envelope */}
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full aspect-[1.6/1] bg-gradient-to-br from-parchment to-card rounded-lg shadow-2xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all overflow-hidden"
          aria-label="Abrir convite"
        >
          {/* Envelope Flap Shadow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent pointer-events-none" />
          
          {/* Envelope Diagonal Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="50" y2="40" stroke="#d4c5a9" strokeWidth="0.3" opacity="0.5" />
            <line x1="100" y1="0" x2="50" y2="40" stroke="#d4c5a9" strokeWidth="0.3" opacity="0.5" />
          </svg>

          {/* Wax Seal */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-olive to-olive-light shadow-lg border-4 border-olive/30 flex items-center justify-center"
          >
            {/* Olive Branch Icon in Seal */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground"
              strokeWidth="1.5"
            >
              <path d="M12 2v20M12 2c-2 2-4 3-6 3M12 2c2 2 4 3 6 3M8 6c-1 1-2 2-3 2M16 6c1 1 2 2 3 2M9 10c-1 1-1.5 2-2 3M15 10c1 1 1.5 2 2 3" />
            </svg>
          </motion.div>

          {/* Subtle Paper Texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
        </motion.button>
      </motion.div>

      {/* Instruction Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-10"
      >
        <p className="text-xl sm:text-2xl uppercase tracking-[0.3em] text-foreground font-serif font-light mb-2">
          Toque na carta
        </p>
        <p className="text-base sm:text-lg uppercase tracking-[0.5em] text-muted-foreground font-serif font-light">
          Para abrir
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeScene;
