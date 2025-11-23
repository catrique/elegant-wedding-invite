import { motion } from "framer-motion";
import { MapPin, Gift } from "lucide-react";
import floralBranch from "@/assets/floral-branch.png";
import waxSeal from "@/assets/wax-seal.png";

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
      {/* Decorative Floral Branches - Only at corners */}
      <motion.img
        src={floralBranch}
        alt=""
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-4 right-4 w-32 sm:w-40 md:w-48 object-contain pointer-events-none z-0 opacity-70"
      />
      <motion.img
        src={floralBranch}
        alt=""
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-4 left-4 w-32 sm:w-40 md:w-48 object-contain pointer-events-none z-0 opacity-70 -scale-x-100 rotate-180"
      />

      {/* Main Content Card */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Multiple layered shadows for realistic floating effect */}
        <div className="absolute inset-0 bg-foreground/12 blur-3xl transform translate-y-10 scale-95 rounded-lg" />
        <div className="absolute inset-0 bg-foreground/8 blur-2xl transform translate-y-6 scale-97 rounded-lg" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-lg p-6 sm:p-10 md:p-12"
          style={{
            background: "linear-gradient(135deg, #faf8f3 0%, #f2ede3 100%)",
            boxShadow: `
              0 35px 80px -25px rgba(0,0,0,0.4),
              0 20px 50px -20px rgba(0,0,0,0.3),
              inset 0 2px 0 rgba(255,255,255,0.9),
              inset 0 -2px 5px rgba(0,0,0,0.05)
            `
          }}
        >
          {/* Paper texture overlay */}
          <div 
            className="absolute inset-0 rounded-lg opacity-15 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
            }}
          />
          
          {/* Golden Border - Double Line */}
          <div className="absolute inset-0 border-[3px] border-double border-primary/50 rounded-lg pointer-events-none" />
          <div className="absolute inset-3 border-[2px] border-primary/30 rounded-lg pointer-events-none" />
          
          {/* Wax Seal - Centered at top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 z-20"
            style={{
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
            }}
          >
            <img 
              src={waxSeal} 
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          {/* Inner Content */}
          <div className="relative pt-6 sm:pt-8 px-4 sm:px-6 md:px-8">
            {/* Bible Verse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
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
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center text-sm uppercase tracking-widest text-foreground mb-6 font-serif"
            >
              Com a benção de seus pais,
            </motion.p>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
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
              transition={{ delay: 0.9, duration: 0.6 }}
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

            {/* Golden Separator Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-10" />

            {/* Location Section with Bronze Icon Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-start gap-4 max-w-xl mx-auto">
                <motion.button
                  onClick={handleLocationClick}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-bronze text-primary-foreground flex items-center justify-center transition-all focus:outline-none focus:ring-4 focus:ring-bronze/30"
                  style={{
                    boxShadow: "0 10px 25px -8px rgba(0,0,0,0.4), 0 5px 15px -5px rgba(0,0,0,0.3)"
                  }}
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

            {/* Golden Separator Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-10" />

            {/* Gift List Section with Bronze Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-center"
            >
              <motion.button
                onClick={handleGiftListClick}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-bronze text-primary-foreground flex items-center justify-center transition-all mx-auto mb-4 focus:outline-none focus:ring-4 focus:ring-bronze/30"
                style={{
                  boxShadow: "0 10px 25px -8px rgba(0,0,0,0.4), 0 5px 15px -5px rgba(0,0,0,0.3)"
                }}
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
          transition={{ delay: 1.3, duration: 0.6 }}
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
