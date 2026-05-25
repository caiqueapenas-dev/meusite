export type VideoCategory = "Long-form" | "Shorts" | "Montage" | "Retention";

export type PortfolioVideo = {
  title: string;
  role: string;
  category: VideoCategory;
  duration: string;
  hook: string;
  metric: string;
  youtubeId: string;
  tone: "emerald" | "cyan" | "amber" | "crimson";
};

// Paste only the YouTube video ID here, not the full URL.
// Example: https://www.youtube.com/watch?v=abc123XYZ -> youtubeId: "abc123XYZ"
export const portfolioVideos: PortfolioVideo[] = [
  {
    title: "Minecraft gameplay showcase edit",
    role: "Featured portfolio edit",
    category: "Long-form",
    duration: "YouTube",
    hook: "A live portfolio piece showing pacing, gaming rhythm, scene selection, and creator-focused editing decisions.",
    metric: "Watch the featured edit",
    youtubeId: "4uCf080MwRM",
    tone: "emerald",
  },
  {
    title: "PvP chaos highlight chain",
    role: "Short-form repack",
    category: "Shorts",
    duration: "30-60 sec",
    hook: "Instant action, captions that land the joke, punchy zooms, and a loopable final beat.",
    metric: "Built for Shorts, TikTok, and Reels",
    youtubeId: "",
    tone: "cyan",
  },
  {
    title: "Survival build reveal montage",
    role: "Cinematic gameplay cut",
    category: "Montage",
    duration: "1-3 min",
    hook: "Progression edits, music timing, reveal staging, and satisfying block-by-block momentum.",
    metric: "Made for spectacle and pacing",
    youtubeId: "",
    tone: "amber",
  },
  {
    title: "Challenge video retention pass",
    role: "Narrative restructure",
    category: "Retention",
    duration: "10-18 min",
    hook: "Stronger stakes, fewer slow sections, better chapter rhythm, and clearer viewer rewards.",
    metric: "Reworked around the hook",
    youtubeId: "",
    tone: "crimson",
  },
];
