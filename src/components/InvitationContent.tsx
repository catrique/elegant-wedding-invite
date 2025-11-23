import { motion } from "framer-motion";
import { MapPin, UtensilsCrossed, Gift, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import monogram from "@/assets/monogram.png";

const InvitationContent = () => {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=IASD+Catalão,Rua+Marechal+Castelo+Branco,361,São+José,Catalão",
      "_blank"
    );
  };

  const handleMenuClick = () => {
    window.open("https://kanpek.com.br/menu", "_blank"); // Replace with actual menu link
  };

  const handleGiftListClick = () => {
    window.open("https://www.querodecasamento.com.br/lista/vanusaecaled", "_blank"); // Replace with actual gift list
  };

  const handleRSVPClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de confirmar minha presença no casamento de Vanusa & Caled."
    );
    window.open(`https://wa.me/5564999999999?text=${message}`, "_blank"); // Replace with actual phone number
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen py-12 px-6"
    >
      <div className="max-w-2xl mx-auto">
        {/* Monogram Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <img
            src={monogram}
            alt="Monograma V&C"
            className="w-32 h-32 mx-auto mb-6 object-contain"
          />
        </motion.div>

        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="italic text-base sm:text-lg text-muted-foreground font-serif leading-relaxed max-w-lg mx-auto">
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
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6 font-serif"
        >
          Com a benção de seus pais,
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-primary mb-4 text-shadow-soft">
            Vanusa & Caled
          </h1>
          <p className="text-lg sm:text-xl text-foreground font-serif tracking-wide">
            Convidam para a cerimônia do seu casamento
          </p>
        </motion.div>

        {/* Date and Time */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mb-12 bg-card/50 rounded-lg p-6 border border-border/50"
        >
          <p className="text-3xl sm:text-4xl font-serif text-primary mb-2">
            14 de Dezembro de 2025
          </p>
          <p className="text-xl sm:text-2xl text-muted-foreground font-serif">
            às 10h30
          </p>
        </motion.div>

        {/* Information Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-6 mb-10"
        >
          {/* Location Card */}
          <div className="bg-card rounded-lg p-6 border border-border/50 shadow-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Local da Cerimônia
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  IASD Catalão - Rua Marechal Castelo Branco, 361 - São José
                </p>
                <Button
                  onClick={handleLocationClick}
                  variant="outline-primary"
                >
                  Ver Localização
                </Button>
              </div>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-card rounded-lg p-6 border border-border/50 shadow-sm">
            <div className="flex items-start gap-4">
              <UtensilsCrossed className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Recepção
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  Recepção após a Cerimônia no Kanpek Oriental Food
                </p>
                <Button
                  onClick={handleMenuClick}
                  variant="outline-secondary"
                >
                  Ver Menu
                </Button>
              </div>
            </div>
          </div>

          {/* Gift List Card */}
          <div className="bg-card rounded-lg p-6 border border-border/50 shadow-sm">
            <div className="flex items-start gap-4">
              <Gift className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Lista de Presentes
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  Caso queira nos presentear
                </p>
                <Button
                  onClick={handleGiftListClick}
                  variant="elegant"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Lista de Presentes
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RSVP Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center bg-primary/5 rounded-lg p-8 border-2 border-primary/20"
        >
          <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-lg font-serif text-foreground mb-2">
            Favor confirmar presença até
          </p>
          <p className="text-2xl font-serif text-primary font-semibold mb-6">
            17 de Abril de 2025
          </p>
          <Button
            onClick={handleRSVPClick}
            size="lg"
            variant="elegant"
            className="text-lg"
          >
            Confirmar Presença
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground font-serif italic">
            Aguardamos você com muito carinho!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InvitationContent;
