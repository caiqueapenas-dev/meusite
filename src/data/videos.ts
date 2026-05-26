export type VideoCategory = "Long-form" | "Shorts" | "Montage" | "ReplayMod cinematic";

export type PortfolioVideo = {
  title: string;
  role: string;
  category: VideoCategory;
  duration: string;
  hook: string;
  metric: string;
  youtubeId: string;
  tone: "emerald" | "cyan" | "amber" | "crimson";
  previewStart?: number;
  previewEnd?: number;
};

// Paste only the YouTube video ID here, not the full URL.
// Example: https://www.youtube.com/watch?v=abc123XYZ -> youtubeId: "abc123XYZ"
export const portfolioVideos: PortfolioVideo[] = [
  {
    title: "Minecraft gameplay showcase edit",
    role: "Featured portfolio edit",
    category: "Long-form",
    duration: "YouTube",
    hook: "A versatile gameplay edit built around clean pacing, creator rhythm, and fun moments.",
    metric: "Story, timing, and watchability",
    youtubeId: "4uCf080MwRM",
    tone: "emerald",
    previewStart: 0,
    previewEnd: 3,
  },
  {
    title: "PvP chaos highlight chain",
    role: "Short-form repack",
    category: "Shorts",
    duration: "30-60 sec",
    hook: "Fast action, captions, zooms, and punchy sound design when the video needs energy.",
    metric: "Built for Shorts, TikTok, and Reels",
    youtubeId: "",
    tone: "cyan",
  },
  {
    title: "Survival build reveal montage",
    role: "Cinematic gameplay cut",
    category: "Montage",
    duration: "1-3 min",
    hook: "Slower pacing, music timing, atmosphere, and reveals that feel worth watching.",
    metric: "For moments that need space",
    youtubeId: "",
    tone: "amber",
  },
  {
    title: "ReplayMod cinematic scenes",
    role: "Extra Minecraft capture",
    category: "ReplayMod cinematic",
    duration: "YouTube",
    hook: "Extra scenes captured with ReplayMod, client skin, and the shader style the creator prefers.",
    metric: "Cinematics beyond the raw footage",
    youtubeId: "UmDtfR1sejY",
    tone: "crimson",
    previewStart: 0,
    previewEnd: 3,
  },
];
