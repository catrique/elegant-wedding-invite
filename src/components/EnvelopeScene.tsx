import { motion } from "framer-motion";
import floralBranch from "@/assets/floral-branch.png";
import waxSeal from "@/assets/wax-seal.png";

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
      {/* Decorative Floral Branches */}
      <motion.img
        src={floralBranch}
        alt=""
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-4 right-4 w-40 sm:w-48 md:w-56 object-contain pointer-events-none opacity-80"
      />
      <motion.img
        src={floralBranch}
        alt=""
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-4 left-4 w-40 sm:w-48 md:w-56 object-contain pointer-events-none opacity-80 -scale-x-100 rotate-180"
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

      {/* Envelope Container with Realistic Paper Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full max-w-lg"
      >
        {/* Multiple layered shadows for depth */}
        <div className="absolute inset-0 bg-foreground/15 blur-3xl transform translate-y-8 scale-95 rounded-lg" />
        <div className="absolute inset-0 bg-foreground/10 blur-2xl transform translate-y-6 scale-97 rounded-lg" />
        
        {/* Realistic Envelope with Paper Texture */}
        <motion.div
          whileHover={{ y: -8, transition: { duration: 0.4 } }}
          className="relative w-full aspect-[1.6/1] rounded-lg overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #f5f1e8 0%, #ebe5d9 100%)",
            boxShadow: `
              0 30px 70px -20px rgba(0,0,0,0.35),
              0 15px 40px -15px rgba(0,0,0,0.25),
              inset 0 1px 0 rgba(255,255,255,0.8),
              inset 0 -1px 3px rgba(0,0,0,0.05)
            `
          }}
        >
          {/* Paper fiber texture overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
            }}
          />
          
          {/* Golden Border Lines */}
          <div className="absolute inset-4 border-2 border-primary/40 rounded pointer-events-none" />
          <div className="absolute inset-6 border border-primary/25 rounded pointer-events-none" />
          
          {/* Envelope Flap Shadow for realism */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-transparent pointer-events-none" />
          
          {/* Envelope diagonal fold lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="50" y2="38" stroke="#c9b896" strokeWidth="0.4" opacity="0.4" />
            <line x1="100" y1="0" x2="50" y2="38" stroke="#c9b896" strokeWidth="0.4" opacity="0.4" />
            <line x1="0" y1="0" x2="50" y2="38" stroke="#d4c5a9" strokeWidth="0.2" opacity="0.6" />
            <line x1="100" y1="0" x2="50" y2="38" stroke="#d4c5a9" strokeWidth="0.2" opacity="0.6" />
          </svg>

          {/* Wax Seal - Centered with realistic shadow */}
          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-full transition-all"
            style={{
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3)) drop-shadow(0 5px 10px rgba(0,0,0,0.2))"
            }}
            aria-label="Abrir convite"
          >
            <img 
              src={waxSeal} 
              alt="Selo de cera"
              className="w-full h-full object-contain"
            />
          </motion.button>
        </motion.div>
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
