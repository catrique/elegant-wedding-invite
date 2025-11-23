import bgMusic from "@/assets/ELES SE AMAM - Vocal Livre - Violino Cover.mp3";

let audioEl: HTMLAudioElement | null = null;

export function getGlobalAudio() {
  if (!audioEl) {
    audioEl = new Audio(bgMusic as unknown as string);
    audioEl.loop = true;
    audioEl.preload = "auto";
    audioEl.volume = 0.65;
  }
  return audioEl;
}
