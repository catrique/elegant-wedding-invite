import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeScene from "@/components/EnvelopeScene";
import InvitationContent from "@/components/InvitationContent";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-parchment to-background">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 0.8, y: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <EnvelopeScene onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <InvitationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
