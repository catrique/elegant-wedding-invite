import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { getGlobalAudio, tryAutoPlay } from "./lib/globalAudio";

const queryClient = new QueryClient();

const App = () => {
  const [needsSoundButton, setNeedsSoundButton] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const ok = await tryAutoPlay();
        const audio = getGlobalAudio();
        const isPlaying = audio && !audio.paused;
        if (mounted && !isPlaying) setNeedsSoundButton(true);

        const onPlay = () => {
          if (mounted) setNeedsSoundButton(false);
        };
        const onPause = () => {
          if (mounted) setNeedsSoundButton(true);
        };

        audio.addEventListener("play", onPlay);
        audio.addEventListener("playing", onPlay);
        audio.addEventListener("pause", onPause);

        return () => {
          mounted = false;
          audio.removeEventListener("play", onPlay);
          audio.removeEventListener("playing", onPlay);
          audio.removeEventListener("pause", onPause);
        };
      } catch (e) {
        console.warn("Autoplay check failed:", e);
        if (mounted) setNeedsSoundButton(true);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const enableSound = async () => {
    const audio = getGlobalAudio();
    try {
      audio.muted = false;
      await audio.play();
      setNeedsSoundButton(false);
    } catch (err) {
      console.warn("Manual play failed:", err);
      setNeedsSoundButton(true);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {needsSoundButton && (
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={enableSound}
              className="bg-primary text-white px-4 py-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/60"
              aria-label="Ativar som"
            >
              Ativar som
            </button>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
