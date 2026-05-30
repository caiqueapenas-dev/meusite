import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Blocks,
  Check,
  Clapperboard,
  Gamepad2,
  Layers3,
  Mail,
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

const email = "editor.carloshenrique@gmail.com";
const mailto = `mailto:${email}?subject=Minecraft%20gameplay%20editing%20project`;

const filters: Array<"All" | VideoCategory> = [
  "All",
  "Shorts",
  "Long-form",
  "ReplayMod cinematic",
];

const services = [
  {
    icon: Scissors,
    title: "Story-first pacing",
    body: "More than cutting silence. I shape the video so the run feels fun, readable, and worth finishing.",
  },
  {
    icon: Zap,
    title: "Clean or high-energy",
    body: "Slow, calm, oldschool edits when the moment needs room. Bigger effects when the video needs impact.",
  },
  {
    icon: Gamepad2,
    title: "Minecraft-native taste",
    body: "Survival, PvP, build reveals, SMP episodes, modded chaos, and creator-led gameplay rhythm.",
  },
  {
    icon: Sparkles,
    title: "ReplayMod extras",
    body: "When needed, I can capture cinematic scenes with your skin and the shader style you prefer.",
  },
];

const process = [
  "Brief + references",
  "Story and pacing pass",
  "Style, SFX, captions",
  "Review until it feels right",
];

const fitCards = [
  {
    name: "Creator Fit",
    scope: "30k-120k subs",
    detail: "For Minecraft creators with room to grow who do not want editing to steal upload time.",
    items: ["You keep creating", "I handle the cut", "Built around your channel"],
  },
  {
    name: "Style Range",
    scope: "Calm to intense",
    detail: "Adaptable editing: clean storytelling, slow pacing, oldschool fun, or high-energy visual effects.",
    items: ["Client references welcome", "Flexible pacing", "Channel-specific taste"],
  },
  {
    name: "Project Terms",
    scope: "Simple payment",
    detail: "PayPal, Wise, or custom agreement. No hard revision cap as long as feedback stays reasonable.",
    items: ["PayPal", "Wise", "Unlimited sensible revisions"],
  },
];

const stats = [
  { value: "30k-120k", label: "target creator size" },
  { value: "3 trials", label: "before / after samples" },
  { value: "ReplayMod", label: "extra scenes" },
  { value: "No hard cap", label: "sensible revisions" },
];

const beforeAfterTrials = [
  {
    title: "Basic clip to professional Short",
    creator: "Carlos | Video Editor",
    youtubeId: "sLnPMMJrfoQ",
    before: "A simple gameplay moment with the interesting beat hidden inside the footage.",
    after: "Tighter rhythm, captions, sound hits, zooms, and a clearer payoff.",
    service: "Pacing, captions, SFX, visual emphasis",
    tone: "cyan",
  },
  {
    title: "MonomoTime gameplay trial",
    creator: "@MonomoTime",
    youtubeId: "rFc4sJ2bZUE",
    before: "A clip that needed a faster hook and more readable action.",
    after: "The moment is framed earlier, reactions land sooner, and the clip feels built for Shorts.",
    service: "Hook timing, motion, social format polish",
    tone: "amber",
  },
  {
    title: "WiredLP gameplay trial",
    creator: "@WiredLP",
    youtubeId: "Uq-iIjav6Ok",
    before: "Raw gameplay pacing with room to make the highlight easier to follow.",
    after: "Cleaner momentum, stronger impact beats, and a more finished creator-ready cut.",
    service: "Momentum, SFX, pacing polish",
    tone: "emerald",
  },
] as const;

const hasPlayableVideo = (video: PortfolioVideo) =>
  video.youtubeId.trim().length > 0 && !video.youtubeId.includes("PASTE");

const getThumbnailUrl = (youtubeId: string) =>
  `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

const getPreviewUrl = (video: PortfolioVideo) => {
  const start = video.previewStart ?? 0;
  const end = video.previewEnd ?? start + 3;

  return `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${video.youtubeId}&start=${start}&end=${end}&rel=0&modestbranding=1&disablekb=1`;
};

const getShortEmbedUrl = (youtubeId: string) =>
  `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`;

function MicroTimeline() {
  return (
    <div className="micro-timeline" aria-hidden="true">
      <span className="clip clip-a" />
      <span className="clip clip-b" />
      <span className="clip clip-c" />
      <span className="micro-playhead" />
    </div>
  );
}

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
        <a className="brand" href="#top" aria-label="Carlos Henrique home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            <strong>Carlos Henrique</strong>
            <small>Minecraft video editor</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#trials">Before/After</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </nav>

        <a
          className="nav-cta"
          href={mailto}
          onClick={() => void trackEvent("Contact", { channel: "email_header" })}
        >
          <Mail size={18} />
          Send a brief
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Blocks size={16} />
            Minecraft editing for growing creators
          </p>
          <h1>Gameplay edits with story, pace, and taste.</h1>
          <p className="hero-lede">
            I help Minecraft creators turn raw footage into videos that feel fun to watch:
            clean when they should breathe, high-energy when they should hit, and clear in
            before/after trials.
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
              href={mailto}
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
            <span>Story timeline</span>
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
              fun beat
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
          <span>Fun pacing over filler</span>
        </div>
        <div>
          <MousePointer2 size={18} />
          <span>Creator taste first</span>
        </div>
        <div>
          <Trophy size={18} />
          <span>Oldschool spirit, modern polish</span>
        </div>
        <div>
          <Layers3 size={18} />
          <span>ReplayMod scenes when needed</span>
        </div>
      </section>

      <section className="section trials-section" id="trials">
        <div className="trial-intro">
          <div>
            <p className="eyebrow">
              <Scissors size={16} />
              Before / after trials
            </p>
            <h2>Raw gameplay becomes a cleaner, sharper Short.</h2>
          </div>
          <p>
            These samples show the service in the most direct way: what the clip needed before,
            and what changed after pacing, captions, SFX, and visual emphasis.
          </p>
        </div>

        <div className="trial-showcase">
          {beforeAfterTrials.map((trial, index) => (
            <article className={`trial-card trial-${trial.tone}`} key={trial.youtubeId}>
              <div className="short-frame">
                <iframe
                  src={getShortEmbedUrl(trial.youtubeId)}
                  title={trial.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="trial-copy">
                <span className="trial-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{trial.title}</h3>
                <p>{trial.creator}</p>
                <dl className="trial-delta">
                  <div>
                    <dt>Before</dt>
                    <dd>{trial.before}</dd>
                  </div>
                  <div>
                    <dt>After</dt>
                    <dd>{trial.after}</dd>
                  </div>
                </dl>
                <small>{trial.service}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">
            <Clapperboard size={16} />
            Portfolio
          </p>
          <h2>Live edits, filtered by the kind of clip you need next.</h2>
          <p>
            Shorts trials, longer gameplay edits, and ReplayMod work sit together so clients can
            scan by format instead of reading a wall of services.
          </p>
        </div>

        <div className="portfolio-shell">
          <aside className="portfolio-note">
            <span>Selected cuts</span>
            <strong>{filteredVideos.length}</strong>
            <p>
              Use the filters to jump between short-form proof, longer gameplay pacing, and
              cinematic Minecraft capture.
            </p>
          </aside>

          <div className="portfolio-list">
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
                        <>
                          <img
                            className="poster-thumb"
                            src={getThumbnailUrl(video.youtubeId)}
                            alt=""
                            loading="lazy"
                          />
                          <iframe
                            className="poster-preview"
                            src={getPreviewUrl(video)}
                            title={`${video.title} preview`}
                            loading="lazy"
                            tabIndex={-1}
                            aria-hidden="true"
                            allow="autoplay; encrypted-media"
                          />
                        </>
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
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading compact">
          <p className="eyebrow">
            <Sparkles size={16} />
            Editing style
          </p>
          <h2>Adaptable editing, not one preset.</h2>
        </div>

        <div className="style-lab">
          <div className="style-demo">
            <div className="raw-column">
              <span>Raw</span>
              <strong>Footage with good moments buried inside.</strong>
              <MicroTimeline />
            </div>
            <div className="finish-column">
              <span>Finished</span>
              <strong>Story beats, captions, SFX, zooms, and clean breathing room.</strong>
              <MicroTimeline />
            </div>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <Icon size={26} />
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <MicroTimeline />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section package-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Zap size={16} />
            Fit and terms
          </p>
          <h2>For creators ready to outsource without losing their voice.</h2>
        </div>

        <div className="package-grid">
          {fitCards.map((card) => (
            <article className="package-card" key={card.name}>
              <span>{card.scope}</span>
              <h3>{card.name}</h3>
              <p>{card.detail}</p>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <MicroTimeline />
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
          <h2>Simple pipeline, creator-aware output.</h2>
        </div>

        <div className="process-layout">
          <div className="process-compass">
            <span>Start</span>
            <strong>Raw footage</strong>
            <p>References, channel voice, pacing notes, and upload target come first.</p>
          </div>

          <div className="process-line">
            {process.map((step, index) => (
              <article className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <MicroTimeline />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">
            <Gamepad2 size={16} />
            Ready for the next upload
          </p>
          <h2>Send the raw footage. I will shape the story.</h2>
          <p>
            No hard revision limit, as long as feedback is reasonable. The goal is a video that
            feels right for the audience and for the creator.
          </p>
        </div>
        <div className="cta-actions">
          <a
            className="primary-action"
            href={mailto}
            onClick={() => void trackEvent("Contact", { channel: "email_footer" })}
          >
            <Mail size={18} />
            Email Carlos
          </a>
          <span className="payment-note">PayPal / Wise / custom agreement</span>
        </div>
      </section>

      <footer className="site-footer">
        <span>Carlos Henrique</span>
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
