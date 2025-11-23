import bgMusic from "@/assets/ELES SE AMAM - Vocal Livre - Violino Cover.mp3";

let audioEl: HTMLAudioElement | null = null;

export function getGlobalAudio() {
  if (!audioEl) {
    audioEl = new Audio(bgMusic as unknown as string);
    // Set crossOrigin and playsInline in case the asset is served with CORS requirements
    try {
      audioEl.crossOrigin = "anonymous";
    } catch {}
    try {
      // playsInline helps mobile Safari play audio inline
      (audioEl as any).playsInline = true;
      audioEl.setAttribute?.("playsinline", "");
    } catch {}
    audioEl.loop = true;
    audioEl.preload = "auto";
    audioEl.volume = 0.65;
    // Ensure the browser starts loading the resource
    try {
      audioEl.load();
    } catch {}
  }
  return audioEl;
}

export function setGlobalAudio(a: HTMLAudioElement) {
  audioEl = a;
}

export async function tryAutoPlay(): Promise<boolean> {
  const audio = getGlobalAudio();
  if (!audio) return false;

  // Best-effort: try to resume/create AudioContext first
  try {
    const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (AC) {
      // create a temp context and resume it to increase chance of playback
      try {
        const ctx = new AC();
        await ctx.resume();
        // We don't hold onto this context here; EnvelopeScene will create a proper one when needed.
      } catch (e) {
        // ignore
      }
    }

    // Attempt to play immediately
    audio.muted = false;
    audio.volume = 0.65;
    const playPromise = audio.play();
    if (playPromise && typeof (playPromise as any).then === "function") {
      try {
        await playPromise;
        return true;
      } catch (err) {
        console.warn("Autoplay attempt rejected:", err);
      }
    }
  } catch (err) {
    console.warn("Autoplay unexpected error:", err);
  }

  // If autoplay failed, register a one-time gesture listener to start audio on first user interaction.
  const startOnGesture = async () => {
    try {
      await audio.play();
      // remove listeners once it worked
      window.removeEventListener("pointerdown", startOnGesture);
      window.removeEventListener("keydown", startOnGesture);
    } catch (e) {
      // ignore; user may need to interact more explicitly
    }
  };

  window.addEventListener("pointerdown", startOnGesture, { once: true });
  window.addEventListener("keydown", startOnGesture, { once: true });

  return false;
}
