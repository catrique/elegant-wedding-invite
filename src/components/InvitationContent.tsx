import { motion } from "framer-motion";
import { MapPin, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import oliveBranch from "@/assets/olive-branch.png";

const InvitationContent = () => {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=IASD+Catalão,Rua+Marechal+Castelo+Branco,361,São+José,Catalão",
      "_blank"
    );
  };

  const handleGiftListClick = () => {
    window.open("https://sites.icasei.com.br/vanusaecaled/pages/36429653", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen py-8 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Decorative Olive Branches */}
      <motion.img
        src={oliveBranch}
        alt=""
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 object-contain pointer-events-none z-0"
      />
      <motion.img
        src={oliveBranch}
        alt=""
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 object-contain pointer-events-none rotate-180 z-0"
      />

      {/* Main Content with Border */}
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card/80 backdrop-blur-sm rounded-lg border-4 border-double border-primary/40 shadow-2xl p-6 sm:p-10 md:p-12"
        >
          {/* Inner Border */}
          <div className="border-2 border-primary/30 rounded p-6 sm:p-8 md:p-10">
            {/* Bible Verse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center mb-8 sm:mb-10"
            >
              <p className="italic text-base sm:text-lg text-foreground font-serif leading-relaxed max-w-xl mx-auto">
                "Revistam-se de amor, pois é o perfeito vínculo de união."
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-serif">
                Col. 3:14
              </p>
            </motion.div>

            {/* Parents Blessing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center text-sm uppercase tracking-widest text-foreground mb-6 font-serif"
            >
              Com a benção de seus pais,
            </motion.p>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center mb-6"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground">
                  Vanusa
                </h1>
                <span className="font-script text-3xl sm:text-4xl md:text-5xl text-foreground italic opacity-70">
                  e
                </span>
                <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground">
                  Caled
                </h1>
              </div>
              <p className="text-base sm:text-lg text-foreground font-serif">
                Convidam para a cerimônia do seu casamento
              </p>
            </motion.div>

            {/* Date - Large Format */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mb-10 flex items-center justify-center gap-4 sm:gap-6"
            >
              <div className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold text-foreground">
                14
              </div>
              <div className="w-0.5 h-16 sm:h-20 bg-foreground/30"></div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Dezembro
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  2025
                </div>
              </div>
            </motion.div>

            {/* Location Section with Icon Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-start gap-4 max-w-xl mx-auto">
                <motion.button
                  onClick={handleLocationClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-olive text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-olive/30"
                  aria-label="Ver localização"
                >
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.button>
                <div className="flex-1 text-left">
                  <p className="text-base sm:text-lg font-serif font-semibold text-foreground mb-1">
                    10h30 | IASD Catalão
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground font-serif leading-relaxed">
                    Rua Marechal Castelo Branco, 361 - São José
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-serif mt-2 italic">
                    Toque no botão ao lado para ver a localização
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Gift List Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-center pt-8 border-t-2 border-primary/20"
            >
              <motion.button
                onClick={handleGiftListClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-olive text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all mx-auto mb-4 focus:outline-none focus:ring-4 focus:ring-olive/30"
                aria-label="Lista de presentes"
              >
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
              </motion.button>
              <p className="text-base sm:text-lg font-serif text-foreground font-semibold mb-2">
                Caso queira nos presentear:
              </p>
              <p className="text-sm text-muted-foreground font-serif italic">
                Toque no botão acima
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground font-serif italic text-sm sm:text-base">
            Aguardamos você com muito carinho!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InvitationContent;
