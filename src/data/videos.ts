export type VideoCategory = "Long-form" | "Shorts" | "ReplayMod cinematic";

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
    title: "Basic clip to professional Short",
    role: "Before and after trial",
    category: "Shorts",
    duration: "Short",
    hook: "Raw gameplay reshaped with tighter pacing, visual emphasis, captions, and punchier sound.",
    metric: "Before/after service sample",
    youtubeId: "sLnPMMJrfoQ",
    tone: "cyan",
    previewStart: 0,
    previewEnd: 3,
  },
  {
    title: "MonomoTime edit trial",
    role: "Short-form transformation",
    category: "Shorts",
    duration: "Short",
    hook: "A quick edit test focused on timing the moment so the payoff lands faster.",
    metric: "Shorts-ready edit",
    youtubeId: "rFc4sJ2bZUE",
    tone: "amber",
    previewStart: 0,
    previewEnd: 3,
  },
  {
    title: "WiredLP edit trial",
    role: "Short-form transformation",
    category: "Shorts",
    duration: "Short",
    hook: "Gameplay pacing, extra impact, and cleaner rhythm for a more watchable clip.",
    metric: "Shorts-ready edit",
    youtubeId: "Uq-iIjav6Ok",
    tone: "emerald",
    previewStart: 0,
    previewEnd: 3,
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
