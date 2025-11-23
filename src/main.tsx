import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { tryAutoPlay } from "./lib/globalAudio";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Best-effort autoplay when the app loads. Browsers may block this unless
// a user gesture is present; tryAutoPlay will also attach a one-time gesture
// listener to start audio when the user first interacts.
tryAutoPlay().catch((e) => console.warn("tryAutoPlay failed:", e));
