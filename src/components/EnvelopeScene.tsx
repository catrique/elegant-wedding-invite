import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface EnvelopeSceneProps {
  onOpen: () => void;
}

const EnvelopeScene = ({ onOpen }: EnvelopeSceneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      {/* Envelope Container */}
      <div className="relative w-full max-w-md">
        {/* Envelope Body */}
        <div className="relative bg-parchment border-2 border-gold/30 rounded-lg shadow-2xl overflow-hidden">
          {/* Decorative Top Flap */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-card/80 to-transparent pointer-events-none" />
          
          {/* Envelope Border Design */}
          <div className="absolute inset-0 border-8 border-gold/10 rounded-lg pointer-events-none" />
          
          {/* Main Content Area */}
          <div className="relative px-8 py-16 sm:px-12 sm:py-20">
            {/* Decorative Corner Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-gold/30" />
            <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-gold/30" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-gold/30" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gold/30" />
            
            {/* Wax Seal */}
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative mx-auto block w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-gold to-gold-light shadow-xl cursor-pointer border-4 border-gold-light/50 animation-pulse-soft focus:outline-none focus:ring-4 focus:ring-gold/50 transition-all"
              aria-label="Abrir convite"
            >
              {/* Seal Inner Circle */}
              <div className="absolute inset-2 rounded-full border-2 border-primary-foreground/20" />
              
              {/* Initials V&C */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-script text-4xl sm:text-5xl text-primary-foreground text-shadow-soft">
                  V&C
                </span>
              </div>
              
              {/* Heart Icon */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <Heart className="w-5 h-5 text-primary-foreground/80 fill-primary-foreground/80" />
              </div>
            </motion.button>
          </div>
        </div>
        
        {/* Instruction Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 text-lg text-muted-foreground font-serif tracking-wide"
        >
          Toque na carta para abrir
        </motion.p>
      </div>
    </motion.div>
  );
};

export default EnvelopeScene;
