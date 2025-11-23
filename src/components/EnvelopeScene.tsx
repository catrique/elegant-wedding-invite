import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import floralBranch from "@/assets/flower1.png";
import waxSeal from "@/assets/selo.png";
import { getGlobalAudio } from "@/lib/globalAudio";

interface EnvelopeSceneProps {
  onOpen: () => void;
}

const EnvelopeScene = ({ onOpen }: EnvelopeSceneProps) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const mediaSourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  useEffect(() => {
    const audio = getGlobalAudio();
    if (!audio) return;
    audio.volume = 0.65;
    // Do not autoplay here; we'll try to play on user interaction (click)
  }, []);

  const tryPlay = async () => {
    const audio = getGlobalAudio();
    if (!audio) return false;

    // Ensure AudioContext is created and resumed on user gesture (fixes Safari/iOS and others)
    try {
      const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (AC && !audioCtxRef.current) {
        audioCtxRef.current = new AC();
        try {
          // create source and connect to destination
          mediaSourceRef.current = audioCtxRef.current.createMediaElementSource(audio);
          mediaSourceRef.current.connect(audioCtxRef.current.destination);
        } catch (e) {
          // createMediaElementSource may fail if already connected; ignore but log in dev
          // console.debug('createMediaElementSource skipped', e);
        }
      }

      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        await audioCtxRef.current.resume();
      }

      // Try to play but don't let a hung promise block the UI indefinitely.
      const playPromise = audio.play();

      // If the browser returns a promise, race it against a short timeout so we never hang.
      const result: any = await Promise.race([
        Promise.resolve(playPromise)
          .then(() => ({ status: "ok" }))
          .catch((err) => ({ status: "error", err })),
        new Promise((res) => setTimeout(() => res({ status: "timeout" }), 1500)),
      ]);

      if (result && result.status === "ok") return true;
      if (result && result.status === "error") {
        console.error("Audio playback failed:", result.err);
        return false;
      }

      // timeout case
      console.warn("Audio.play() did not resolve quickly (timed out)");
      return false;
    } catch (err) {
      console.error("tryPlay unexpected error:", err);
      return false;
    }
  };
  const [loadingSeal, setLoadingSeal] = useState(false);

  const onSealClick = async () => {
    setLoadingSeal(true);
    const ok = await tryPlay();
    // keep the loading visible exactly 4 seconds, then proceed
    setTimeout(() => {
      setLoadingSeal(false);
      if (ok) {
        // after the 4s delay, open the invitation
        onOpen();
      }
    }, 4000);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen p-4 sm:p-6 relative overflow-hidden"
    >
      {loadingSeal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="text-center">
            <motion.div className="mb-6 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={{ opacity: [1, 1, 0], y: [-6, -48, -120], scale: [1, 1.4, 0.9] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeOut" }}
                className="text-amber-400"
              >
                <Heart className="w-12 h-12" strokeWidth={1.6} />
              </motion.div>
            </motion.div>
            <div className="text-white uppercase tracking-widest font-semibold text-xl sm:text-2xl">
              Aumente o som
            </div>
          </div>
        </div>
      )}
      {/* Background music (global singleton) */}

      {/* Corner hearts — same heart as loading, animated from corners */}
      <div aria-hidden className="pointer-events-none">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: [0.3, 1, 0.3], x: -36, y: -36, scale: [0.8, 1, 0.8] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: 0 }}
          className="absolute top-6 left-6 z-40"
        >
          <Heart className="w-7 h-7 text-amber-400" strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: [0.3, 1, 0.3], x: 36, y: -36, scale: [0.8, 1, 0.8] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.15 }}
          className="absolute top-6 right-6 z-40"
        >
          <Heart className="w-7 h-7 text-amber-400" strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: [0.3, 1, 0.3], x: -36, y: 36, scale: [0.8, 1, 0.8] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.3 }}
          className="absolute bottom-6 left-6 z-40"
        >
          <Heart className="w-7 h-7 text-amber-400" strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: [0.3, 1, 0.3], x: 36, y: 36, scale: [0.8, 1, 0.8] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.45 }}
          className="absolute bottom-6 right-6 z-40"
        >
          <Heart className="w-7 h-7 text-amber-400" strokeWidth={2} />
        </motion.div>
      </div>
      {/* Decorative Floral Branches */}
      <motion.img
        src={floralBranch}
        alt=""
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
           className="absolute -top-2 -right-2 w-60 sm:top-4 sm:right-4 sm:w-74 md:w-80 lg:w-96 object-contain pointer-events-none opacity-90"
      />
      <motion.img
        src={floralBranch}
        alt=""
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
           className="absolute bottom-16 left-0 w-60 sm:bottom-4 sm:left-4 sm:w-74 md:w-80 lg:w-96 object-contain pointer-events-none opacity-90 -scale-x-100 rotate-180"
      />

      {/* V&C Logo: moved into envelope wrapper so it follows the envelope position */}

      {/* Envelope Container with Realistic Paper Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onClick={() => {
          // show the same loading overlay and start audio when clicking the envelope
          onSealClick();
        }}
        onPointerDown={() => {
          // ensure touch/pointer interactions also trigger the same flow
          onSealClick();
        }}
        onTouchStart={() => {
          // some mobile browsers rely on touchstart
          onSealClick();
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onSealClick();
          }
        }}
        className="relative w-full max-w-lg cursor-pointer focus:outline-none -translate-y-[52%] sm:-translate-y-[44%]"
      >
        <div className="w-full" style={{ transform: 'translateY(-1vh)' }}>
        {/* Multiple layered shadows for depth */}
          <div className="w-full" style={{ transform: 'translateY(-2vh)' }}>
          {/* Logo above the card (moved into wrapper so it follows the envelope position) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute left-40 -translate-x-1/2 -top-20 z-50 text-center sm:static sm:transform-none sm:top-auto sm:left-auto sm:mx-0 sm:mb-6"
            >
            <div className="flex items-center justify-center gap-2">
              <span className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-foreground">V</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-script text-primary">&amp;</span>
              <span className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-foreground">C</span>
            </div>
          </motion.div>

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
            onClick={(e) => {
              e.stopPropagation();
              onSealClick();
            }}
            onKeyDown={(e) => {
              // prevent the parent envelope handler and allow keyboard activation
              e.stopPropagation();
              if (e.key === "Enter" || e.key === " ") onSealClick();
            }}
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
            className="absolute left-[38%] top-[18%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-full transition-all z-20"
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
        </div>
        </div>
      </motion.div>

      {/* Instruction Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-0 -translate-y-2 sm:-translate-y-2"
      >
        <p className="text-xl sm:text-2xl uppercase tracking-[0.3em] text-foreground font-serif font-light mb-1">
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
