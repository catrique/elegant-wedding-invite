import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeScene from "@/components/EnvelopeScene";
import InvitationContent from "@/components/InvitationContent";
import LoadingHearts from "@/components/LoadingHearts";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-parchment to-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingHearts />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-parchment to-background">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              rotateY: 90,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <EnvelopeScene onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ 
              opacity: 0,
              rotateY: -90,
              scale: 0.9,
            }}
            animate={{ 
              opacity: 1,
              rotateY: 0,
              scale: 1,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <InvitationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
