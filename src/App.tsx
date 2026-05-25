import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Blocks,
  Check,
  Clapperboard,
  Gamepad2,
  Layers3,
  Mail,
  MessageCircle,
  MousePointer2,
  Play,
  Scissors,
  Sparkles,
  Timer,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { portfolioVideos, type PortfolioVideo, type VideoCategory } from "./data/videos";
import { initPixel, trackEvent } from "./lib/meta-pixel";

const filters: Array<"All" | VideoCategory> = [
  "All",
  "Long-form",
  "Shorts",
  "Montage",
  "Retention",
];

const services = [
  {
    icon: Scissors,
    title: "Retention-first gameplay cuts",
    body: "Dead air removed, jokes protected, story beats rearranged, and every minute cut to keep viewers moving forward.",
  },
  {
    icon: Gamepad2,
    title: "Minecraft-native pacing",
    body: "Survival arcs, PvP tension, modded chaos, build reveals, and challenge videos edited with creator-side context.",
  },
  {
    icon: Sparkles,
    title: "Short-form repacks",
    body: "Long episodes turned into punchy Shorts, TikToks, and Reels with captions, beat hits, zooms, and clean loops.",
  },
  {
    icon: Zap,
    title: "Sound design and impact",
    body: "UI clicks, whooshes, block hits, bass drops, comedic stings, and controlled silence where the moment needs space.",
  },
];

const process = [
  "Raw footage and creator notes",
  "Hook map and timeline structure",
  "Gameplay cut, captions, SFX",
  "Review pass and final export",
];

const packages = [
  {
    name: "Spawn Cut",
    scope: "Short-form edits",
    detail: "For clips, memes, highlights, quick wins, and testing formats before scaling volume.",
    items: ["Vertical edit", "Caption styling", "SFX and zoom pass"],
  },
  {
    name: "Redstone Build",
    scope: "YouTube episodes",
    detail: "For Minecraft creators who need stronger pacing across survival, SMP, PvP, or challenge videos.",
    items: ["Full gameplay edit", "Retention restructuring", "Thumbnail frame exports"],
  },
  {
    name: "Endgame System",
    scope: "Monthly editing partner",
    detail: "For creators who want a consistent editor who understands the channel, audience, and content rhythm.",
    items: ["Batch delivery", "Reusable style system", "Shorts from long-form"],
  },
];

const stats = [
  { value: "Minecraft", label: "gameplay niche" },
  { value: "Shorts + long", label: "format range" },
  { value: "Hook first", label: "editing logic" },
  { value: "YouTube", label: "portfolio source" },
];

const hasPlayableVideo = (video: PortfolioVideo) =>
  video.youtubeId.trim().length > 0 && !video.youtubeId.includes("PASTE");

const getThumbnailUrl = (youtubeId: string) =>
  `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

function App() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [activeVideo, setActiveVideo] = useState<PortfolioVideo | null>(null);

  useEffect(() => {
    initPixel();
    void trackEvent("ViewContent", { page: "minecraft_gameplay_editor" });
  }, []);

  useEffect(() => {
    const updateCursor = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updateCursor);
    return () => window.removeEventListener("pointermove", updateCursor);
  }, []);

  const filteredVideos = useMemo(() => {
    if (activeFilter === "All") return portfolioVideos;
    return portfolioVideos.filter((video) => video.category === activeFilter);
  }, [activeFilter]);

  const openVideo = (video: PortfolioVideo) => {
    if (!hasPlayableVideo(video)) return;
    setActiveVideo(video);
    void trackEvent("ViewContent", { content_name: video.title, content_type: "portfolio_video" });
  };

  const closeVideo = () => setActiveVideo(null);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Caique Edits home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            <strong>Caique Edits</strong>
            <small>Gameplay video editor</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </nav>

        <a
          className="nav-cta"
          href="https://wa.me/5575981865878?text=Hey%20Caique%2C%20I%20need%20Minecraft%20gameplay%20video%20editing."
          onClick={() => void trackEvent("Contact", { channel: "whatsapp_header" })}
        >
          <MessageCircle size={18} />
          Start a project
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Blocks size={16} />
            Minecraft gameplay editing for global creators
          </p>
          <h1>Gameplay videos cut like worlds worth watching.</h1>
          <p className="hero-lede">
            I edit Minecraft footage into sharp, high-energy YouTube videos with stronger hooks,
            cleaner pacing, punchier sound design, and a visual language built for gamer audiences.
          </p>

          <div className="hero-actions">
            <a
              className="primary-action"
              href="#work"
              onClick={() => void trackEvent("ViewContent", { section: "portfolio" })}
            >
              <Play size={19} />
              Watch the work
            </a>
            <a
              className="secondary-action"
              href="mailto:manager.carloshenrique@gmail.com?subject=Minecraft%20gameplay%20editing%20project"
              onClick={() => void trackEvent("Contact", { channel: "email_hero" })}
            >
              <Mail size={18} />
              Email brief
            </a>
          </div>

          <div className="hero-stats" aria-label="Editing focus">
            {stats.map((item) => (
              <div className="stat-tile" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage" aria-label="Interactive editing interface preview">
          <div className="stage-grid" aria-hidden="true">
            <span className="voxel voxel-a" />
            <span className="voxel voxel-b" />
            <span className="voxel voxel-c" />
            <span className="voxel voxel-d" />
            <span className="voxel voxel-e" />
            <span className="voxel voxel-f" />
          </div>

          <div className="stage-topbar">
            <span>Retention timeline</span>
            <span>01:26 / 08:40</span>
          </div>

          <div className="preview-window">
            <div className="preview-sky" />
            <div className="preview-terrain">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="preview-player">
              <span className="head" />
              <span className="body" />
              <span className="arm left" />
              <span className="arm right" />
            </div>
            <div className="preview-callout">
              <Sparkles size={15} />
              beat drop
            </div>
          </div>

          <div className="timeline-panel">
            <div className="track track-video">
              <span style={{ width: "28%" }} />
              <span style={{ width: "18%" }} />
              <span style={{ width: "34%" }} />
            </div>
            <div className="track track-audio">
              <span style={{ width: "18%" }} />
              <span style={{ width: "42%" }} />
              <span style={{ width: "22%" }} />
            </div>
            <div className="track track-effects">
              <span style={{ width: "24%" }} />
              <span style={{ width: "26%" }} />
              <span style={{ width: "28%" }} />
            </div>
            <div className="playhead" />
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="What the editing focuses on">
        <div>
          <Timer size={18} />
          <span>Cold opens that start fast</span>
        </div>
        <div>
          <MousePointer2 size={18} />
          <span>Clicks protected by pacing</span>
        </div>
        <div>
          <Trophy size={18} />
          <span>Moments shaped into story</span>
        </div>
        <div>
          <Layers3 size={18} />
          <span>Reusable channel style systems</span>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">
            <Clapperboard size={16} />
            Portfolio workbench
          </p>
          <h2>Your YouTube edits, presented like a creator control room.</h2>
          <p>
            Paste your own YouTube IDs into the portfolio data file and the site pulls the
            thumbnails and playable embeds automatically.
          </p>
        </div>

        <div className="filter-row" aria-label="Filter portfolio videos">
          {filters.map((filter) => (
            <button
              className={filter === activeFilter ? "is-active" : ""}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="video-grid">
          {filteredVideos.map((video) => {
            const playable = hasPlayableVideo(video);

            return (
              <article
                className={`video-card tone-${video.tone} ${playable ? "is-playable" : ""}`}
                key={video.title}
                onClick={() => openVideo(video)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") openVideo(video);
                }}
                role={playable ? "button" : undefined}
                tabIndex={playable ? 0 : undefined}
              >
                <div className="poster-frame">
                  {playable ? (
                    <img src={getThumbnailUrl(video.youtubeId)} alt="" loading="lazy" />
                  ) : (
                    <div className="procedural-poster" aria-hidden="true">
                      <span className="moon" />
                      <span className="mountain one" />
                      <span className="mountain two" />
                      <span className="avatar" />
                    </div>
                  )}
                  <span className="format-pill">{video.category}</span>
                  <span className="play-pill">
                    <Play size={15} />
                    {playable ? "Watch edit" : video.duration}
                  </span>
                </div>
                <div className="video-content">
                  <span>{video.role}</span>
                  <h3>{video.title}</h3>
                  <p>{video.hook}</p>
                  <small>{video.metric}</small>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading compact">
          <p className="eyebrow">
            <Sparkles size={16} />
            Editing stack
          </p>
          <h2>Built for creators who need more than a clean cut.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={26} />
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section package-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Zap size={16} />
            Project modes
          </p>
          <h2>Pick the editing lane that fits your channel stage.</h2>
        </div>

        <div className="package-grid">
          {packages.map((plan) => (
            <article className="package-card" key={plan.name}>
              <span>{plan.scope}</span>
              <h3>{plan.name}</h3>
              <p>{plan.detail}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading compact">
          <p className="eyebrow">
            <Layers3 size={16} />
            Workflow
          </p>
          <h2>Simple pipeline, cinematic output.</h2>
        </div>

        <div className="process-line">
          {process.map((step, index) => (
            <article className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">
            <Gamepad2 size={16} />
            Ready for the next upload
          </p>
          <h2>Send the raw footage. I will turn the run into a video people finish.</h2>
          <p>
            English-facing portfolio, Minecraft-focused editing, and a workflow ready for
            creators selling to global audiences.
          </p>
        </div>
        <div className="cta-actions">
          <a
            className="primary-action"
            href="https://wa.me/5575981865878?text=Hey%20Caique%2C%20I%20want%20to%20hire%20you%20for%20Minecraft%20gameplay%20editing."
            onClick={() => void trackEvent("Contact", { channel: "whatsapp_footer" })}
          >
            <MessageCircle size={19} />
            Message on WhatsApp
          </a>
          <a
            className="secondary-action"
            href="mailto:manager.carloshenrique@gmail.com?subject=Minecraft%20gameplay%20editing%20project"
            onClick={() => void trackEvent("Contact", { channel: "email_footer" })}
          >
            <Mail size={18} />
            Send an email
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Caique Edits</span>
        <a href="#top">
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </footer>

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title}>
          <button className="modal-close" type="button" onClick={closeVideo} aria-label="Close video">
            <X size={22} />
          </button>
          <div className="modal-frame">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
