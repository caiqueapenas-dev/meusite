import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Film,
  Mail,
  Menu,
  MessageCircle,
  MousePointer2,
  Play,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { FaDiscord, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import afterEffectsLogo from "./images/adobe-after-effects-cc-icon-app-logo-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.webp";
import flashbackLogo from "./images/flashback.webp";
import illustratorLogo from "./images/illustrator.webp";
import premiereLogo from "./images/premiere-pro.webp";
import replayModLogo from "./images/replaymod.webp";
import wiredProfile from "./images/wired-profile.png";
import "./styles.css";

type VideoType = "shorts" | "long";

type PortfolioVideo = {
  id: string;
  title: string;
  description: string;
  type: VideoType;
  label: string;
  accent: string;
};

const email = "editor.carloshenrique@gmail.com";
const tickerItems = [
  "Minecraft editing",
  "Shorts hooks",
  "Long-form pacing",
  "SFX and music",
  "4K exports",
  "Replay shots",
  "Clear workflow",
];

const timelineClips = [
  { color: "#f2226e", start: 0, end: 0.05 },
  { color: "#2196f3", start: 0.05, end: 0.12 },
  { color: "#9c27b0", start: 0.12, end: 0.21 },
  { color: "#d3d93b", start: 0.21, end: 0.31 },
  { color: "#f28705", start: 0.31, end: 0.43 },
  { color: "#f44336", start: 0.43, end: 0.55 },
  { color: "#673ab7", start: 0.55, end: 0.67 },
  { color: "#8bc34a", start: 0.67, end: 0.78 },
  { color: "#019688", start: 0.78, end: 0.9 },
  { color: "#ff5722", start: 0.9, end: 1 },
];

const timelineMarkers = [
  { top: 4, label: "IN", color: "#d3d93b", side: "left" },
  { top: 14, label: "SFX", color: "#2196f3", side: "right" },
  { top: 27, label: "CUT", color: "#f28705", side: "left" },
  { top: 39, label: "FX", color: "#9c27b0", side: "right" },
  { top: 52, label: "VO", color: "#f2226e", side: "left" },
  { top: 64, label: "B", color: "#8bc34a", side: "right" },
  { top: 76, label: "MIX", color: "#019688", side: "left" },
  { top: 91, label: "OUT", color: "#ff5722", side: "right" },
];

const videos: PortfolioVideo[] = [
  {
    id: "4uCf080MwRM",
    title: "Long-form Gameplay",
    description: "Raw gameplay turned into a cleaner story with fewer dead moments.",
    type: "long",
    label: "Long",
    accent: "lime",
  },
  {
    id: "jfm3YXKqmuk",
    title: "Minecraft Story Flow",
    description: "Section pacing, audio polish, music shifts, and readable visual emphasis.",
    type: "long",
    label: "Long",
    accent: "cyan",
  },
  {
    id: "3NCJd-fb0Y8",
    title: "Short Hook Edit",
    description: "Fast opener, vertical rhythm, captions, motion accents, and stronger payoff.",
    type: "shorts",
    label: "Short",
    accent: "cyan",
  },
  {
    id: "UmDtfR1sejY",
    title: "WiredLP Minecraft Edit",
    description: "A complete Minecraft edit shaped around pacing, watchability, and clean creator flow.",
    type: "long",
    label: "WiredLP",
    accent: "lime",
  },
  {
    id: "sLnPMMJrfoQ",
    title: "Retention Short",
    description: "A short built to make the next second feel worth watching.",
    type: "shorts",
    label: "Short",
    accent: "pink",
  },
  {
    id: "YWvZ1LEMT2o",
    title: "Creator-style Episode",
    description: "A YouTube-friendly edit with structure, rhythm, and clean delivery.",
    type: "long",
    label: "Long",
    accent: "pink",
  },
  {
    id: "C1eWsLY60zE",
    title: "Punchy Minecraft Moment",
    description: "A compact edit with SFX, zooms, timing, and simple motion for impact.",
    type: "shorts",
    label: "Short",
    accent: "violet",
  },
];

const navItems = [
  ["Clients", "clients"],
  ["Work", "work"],
  ["Rates", "rates"],
  ["Process", "process"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

function App() {
  const [filter, setFilter] = useState<"all" | VideoType>("all");
  const [activeVideo, setActiveVideo] = useState<PortfolioVideo | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioExpanded, setPortfolioExpanded] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const filteredVideos = useMemo(
    () => (filter === "all" ? videos : videos.filter((video) => video.type === filter)),
    [filter],
  );

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-theme]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.dataset.theme = (entry.target as HTMLElement).dataset.theme;
          }
        });
      },
      { threshold: 0.45 },
    );

    let scrollFrame = 0;
    const updateScrollProgress = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = window.requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = height > 0 ? window.scrollY / height : 0;
        const clampedProgress = Math.min(1, Math.max(0, progress));
        document.documentElement.style.setProperty("--scroll", `${clampedProgress}`);

        document.querySelectorAll<HTMLElement>("[data-timeline-clip]").forEach((clip) => {
          const start = Number(clip.dataset.start);
          const end = Number(clip.dataset.end);
          const localProgress = Math.min(1, Math.max(0, (clampedProgress - start) / (end - start)));
          clip.style.setProperty("--clip-progress", `${localProgress}`);
        });
      });
    };

    revealItems.forEach((item) => revealObserver.observe(item));
    sections.forEach((section) => themeObserver.observe(section));
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      revealObserver.disconnect();
      themeObserver.disconnect();
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    let toastTimer = 0;
    const showToast = () => {
      window.clearTimeout(toastTimer);
      setToastVisible(true);
      toastTimer = window.setTimeout(() => setToastVisible(false), 3000);
    };

    window.addEventListener("email-copied", showToast);
    return () => {
      window.clearTimeout(toastTimer);
      window.removeEventListener("email-copied", showToast);
    };
  }, []);

  useEffect(() => {
    setPortfolioExpanded(false);
  }, [filter]);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <>
      <div className="background" aria-hidden="true">
        <div className="grid-glow" />
      </div>
      <div className="scroll-timeline" aria-hidden="true">
        {timelineClips.map((clip) => (
          <span
            className="timeline-clip"
            data-timeline-clip
            data-start={clip.start}
            data-end={clip.end}
            key={`${clip.color}-${clip.start}`}
            style={
              {
                "--clip-color": clip.color,
                "--clip-start": `${clip.start * 100}%`,
                "--clip-size": `${(clip.end - clip.start) * 100}%`,
              } as React.CSSProperties
            }
          />
        ))}
        {timelineMarkers.map((marker) => (
          <span
            className={`timeline-marker ${marker.side}`}
            key={`${marker.label}-${marker.top}`}
            style={
              {
                "--marker-top": `${marker.top}%`,
                "--marker-color": marker.color,
              } as React.CSSProperties
            }
          >
            {marker.label}
          </span>
        ))}
      </div>
      <div className={toastVisible ? "toast show" : "toast"} role="status" aria-live="polite">
        Email copied
      </div>

      <header className="site-header">
        <a className="ticker" href="#top" onClick={() => setMenuOpen(false)} aria-label="Back to top">
          <span>
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>{item} <b>•</b> </React.Fragment>
            ))}
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <EmailCopyButton className="header-cta">
          <Mail size={16} />
          <span>Hire me</span>
        </EmailCopyButton>

        <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section" data-theme="hero">
          <div className="wrap hero-layout">
            <div className="hero-copy" data-reveal>
              <h1>
                Edits built for <span>Minecraft creators</span>.
              </h1>
              <p className="lead">
                I help YouTubers and Twitch streamers turn raw gameplay into faster, cleaner, more watchable videos with hooks, pacing, SFX, captions, music, and lightweight motion.
              </p>
              <div className="hero-actions">
                <EmailCopyButton className="button primary">
                  Get rates
                  <ChevronRight size={18} />
                </EmailCopyButton>
                <a className="button secondary" href="#work">
                  See portfolio
                  <Film size={18} />
                </a>
              </div>
              <div className="tag-row" aria-label="Editing niches">
                {["Hardcore", "Survival", "Super-farms", "Tutorials", "Twitch clips"].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-panel" data-reveal>
              <div className="terminal-top">
                <i />
                <i />
                <i />
              </div>
              <div className="stats-grid">
                <Stat value="2 days" label="average short turnaround" />
                <Stat value="5 days" label="average long-form turnaround" />
                <Stat value="4K" label="editing and export available" />
                <Stat value="infinite" label="revisions with common sense" />
              </div>
            </div>
          </div>
        </section>

        <section className="section clients-section" id="clients" data-theme="craft">
          <div className="wrap">
            <SectionHead kicker="Clients" title="Pessoas que confiam no meu trabalho" />
            <div className="clients-row" data-reveal>
              <ClientSpotlight title="WiredLP" note="35.5K subscribers" href="https://www.youtube.com/@WiredLP" image={wiredProfile} />
            </div>
          </div>
        </section>

        <section className="section" id="about" data-theme="craft">
          <div className="wrap">
            <SectionHead kicker="Focused, not generic" title="For creators who would rather record than edit." />
            <div className="feature-grid about-grid">
              <InfoCard title="What I like editing">
                Funny or educational Minecraft videos with that classic YouTube energy: hardcore, survival, gameplay challenges, farms, builds, tutorials, fun facts, and talking-head formats.
              </InfoCard>
              <InfoCard title="Who it is ideal for">
                YouTubers and Twitch streamers up to around 150K subscribers who want a reliable editor, clear communication, and a Minecraft-native edit style.
              </InfoCard>
            </div>
          </div>
        </section>

        <section className="section tools-section" id="tools" data-theme="deliver">
          <div className="wrap">
            <SectionHead kicker="Toolbox" title="The tools I use to build the final edit.">
              Editing, motion, graphics, cinematic Minecraft shots, and replay control in one workflow.
            </SectionHead>
            <div className="tools-grid">
              <ToolCard image={premiereLogo} title="Premiere Pro 2026" />
              <ToolCard image={afterEffectsLogo} title="After Effects 2026" />
              <ToolCard image={illustratorLogo} title="Illustrator 2026" />
              <ToolCard image={replayModLogo} title="Replay Mod" />
              <ToolCard image={flashbackLogo} title="Flashback Mod" />
            </div>
          </div>
        </section>

        <section className="section" id="work" data-theme="work">
          <div className="wrap">
            <SectionHead kicker="See for yourself" title="Portfolio">
              YouTube stays as the host, but visitors can watch inside the site without getting pulled away.
            </SectionHead>

            <div className="filters" aria-label="Portfolio filters" data-reveal>
              {(["all", "shorts", "long"] as const).map((item) => (
                <button className={filter === item ? "filter active" : "filter"} key={item} type="button" onClick={() => setFilter(item)}>
                  {item === "all" ? "All" : item === "shorts" ? "Shorts" : "Long-form"}
                </button>
              ))}
            </div>

            <div className={portfolioExpanded ? "portfolio-grid expanded" : "portfolio-grid collapsed"}>
              {filteredVideos.map((video) => (
                <button className={`video-card ${video.accent} ${video.type}`} key={video.id} type="button" onClick={() => setActiveVideo(video)}>
                  <span className="thumb">
                    <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
                    <span className="preview-scan" />
                    <span className="play-button">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </span>
                  <span className="video-body">
                    <span className="video-meta">
                      <span className="pill">{video.label}</span>
                      <span className="watch">
                        Play <ArrowUpRight size={15} />
                      </span>
                    </span>
                    <strong>{video.title}</strong>
                    <span>{video.description}</span>
                  </span>
                </button>
              ))}
            </div>
            {filteredVideos.length > 3 && !portfolioExpanded && (
              <button className="button secondary load-more" type="button" onClick={() => setPortfolioExpanded(true)}>
                Load more videos
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        </section>

        <section className="section" id="deliverables" data-theme="deliver">
          <div className="wrap">
            <SectionHead kicker="What you receive" title="Everything needed for a clean Minecraft edit.">
              The exact scope depends on the footage, but these are the core pieces included in the starting packages.
            </SectionHead>
            <div className="deliverables-grid">
              <Deliverable icon={<Film size={18} />} title="Cutting & decoupage" text="Removing dead moments and organizing the footage into a clear flow." />
              <Deliverable icon={<Zap size={18} />} title="Story-focused pacing" text="Hooks, rhythm, and section flow designed to keep the audience engaged." />
              <Deliverable icon={<Sparkles size={18} />} title="Captions when needed" text="Readable subtitles and text callouts where they actually help the video." />
              <Deliverable icon={<MousePointer2 size={18} />} title="Basic motion" text="Text, elements, zoom-ins, zoom-outs, and motion accents for key moments." />
              <Deliverable icon={<MessageCircle size={18} />} title="Audio, SFX & music" text="Cleaner audio treatment, sound effects, and music matching the video's vibe." />
              <Deliverable icon={<Clock3 size={18} />} title="Light 3D support" text="Basic 3D manipulation when the idea needs a more cinematic Minecraft feel." />
            </div>
            <InlineCta text="Want the edit to feel tighter without losing your creator voice?" cta="Ask for a quote" />
          </div>
        </section>

        <section className="section" id="rates" data-theme="rates">
          <div className="wrap">
            <SectionHead kicker="Starting rates" title="Simple entry packages.">
              Starting prices for clear projects. More complex videos, heavy VFX, large raw footage, tight deadlines, or custom formats may need a custom quote.
            </SectionHead>
            <div className="pricing-grid">
              <PriceCard featured title="Shorts" price="$60" suffix="USD / video" description="For YouTube Shorts, TikTok, Reels, and Twitch moments turned into vertical content." items={["Up to 60 seconds", "Hook-focused pacing", "Captions if applicable", "SFX, music, zooms, and text motion", "Average delivery: around 2 days"]} />
              <PriceCard title="Long-form" price="$200" suffix="USD / video" description="For Minecraft YouTube videos up to 20 minutes, including gameplay, tutorials, farms, and survival." items={["Up to 20 minutes final length", "Storytelling-focused cuts", "Audio treatment, SFX, and music", "Basic motion and light 3D when needed", "Average delivery: around 5 days"]} />
            </div>
            <InlineCta text="Send the video type, raw footage length, deadline, and reference style." cta="Check availability" />
          </div>
        </section>

        <section className="section" id="process" data-theme="process">
          <div className="wrap">
            <SectionHead kicker="Workflow" title="Clear, simple, remote-friendly." />
            <div className="process-grid">
              {[
                ["Send footage", "You share raw files, references, notes, and deadline."],
                ["I edit", "I handle structure, pacing, audio, captions, SFX, and polish."],
                ["You review", "You send notes. I adjust until the video feels right."],
                ["Final delivery", "Delivered your preferred way, or through a shared Google Drive folder."],
              ].map(([title, text], index) => (
                <article className="step-card" key={title} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="payments" data-theme="rates">
          <div className="wrap">
            <SectionHead kicker="Payments" title="Simple payment split.">
              Jobs start with 50% upfront and the remaining 50% on delivery, before final files are handed off.
            </SectionHead>
            <div className="feature-grid">
              <InfoCard title="50% to start">
                The first payment reserves the slot and starts the edit.
              </InfoCard>
              <InfoCard title="50% on delivery">
                The final payment is made when the edit is approved and ready for final delivery.
              </InfoCard>
            </div>
          </div>
        </section>

        <section className="section" id="faq" data-theme="faq">
          <div className="wrap faq-wrap">
            <SectionHead kicker="FAQ" title="Questions creators usually ask." />
            <div className="faq-list" data-reveal>
              {[
                ["Do you only edit Minecraft videos?", "Minecraft is my main focus, but it depends on the proposal. I can open exceptions if I feel I am capable of doing the content justice, usually within the games niche at most."],
                ["Do you edit other types of content?", "Not as a default offer. If the idea is outside Minecraft, send the proposal and I will be honest about whether I can do it well."],
                ["How fast can you deliver?", "It depends on complexity, but the average is around 2 days for Shorts and around 5 days for long-form videos."],
                ["Do you do revisions?", "Yes. Revisions are unlimited with the goal of making sure you are satisfied, as long as feedback is clear and reasonable."],
                ["Can you handle 4K footage?", "Yes. I can edit and export up to 4K, depending on the project requirements and files provided."],
              ].map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" data-theme="contact">
          <div className="wrap">
            <SectionHead kicker="Contact" title="Want to stop editing and start recording more?">
              Send your footage type, deadline, and a reference video. I will reply with the best rate for your project.
            </SectionHead>
            <div className="contact-grid">
              <article className="contact-card dark" data-reveal>
                <h3>Start here</h3>
                <p>Email is the best place to send project details. Discord is best for quick conversation after the first contact.</p>
                <div className="hero-actions">
                  <EmailCopyButton className="button primary">
                    Email me
                    <Mail size={18} />
                  </EmailCopyButton>
                  <a className="button secondary" href="https://ytjobs.co/talent/profile/563084" target="_blank" rel="noreferrer">
                    View YTJobs
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>

              <article className="social-box" aria-label="Social links" data-reveal>
                <SocialLink icon={<Mail size={20} />} label="Email" value={email} href={`mailto:${email}`} />
                <SocialLink icon={<FaDiscord />} label="Discord" value="carlosvideoeditor" href="https://discord.com" />
                <SocialLink icon={<FaXTwitter />} label="X" value="@carlosvideoedit" href="https://x.com/carlosvideoedit" />
                <SocialLink icon={<FaInstagram />} label="Instagram" value="@carlosvideoedit" href="https://instagram.com/carlosvideoedit" />
                <SocialLink icon={<FaTiktok />} label="TikTok" value="@carlosvideoeditor_" href="https://tiktok.com/@carlosvideoeditor_" />
                <SocialLink icon={<FaYoutube />} label="YouTube" value="Portfolio videos" href="https://www.youtube.com/@WiredLP" />
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Copyright {new Date().getFullYear()} Carlos Henrique - Minecraft Video Editor.</span>
        <a href="#top">Back to top</a>
      </footer>

      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  );
}

function SectionHead({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-head" data-reveal>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

async function copyEmail() {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
  } finally {
    playCopySound();
    window.dispatchEvent(new CustomEvent("email-copied"));
  }
}

function playCopySound() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(660, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(990, context.currentTime + 0.08);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.18);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
    window.setTimeout(() => void context.close(), 260);
  } catch {
    // Audio feedback is nice to have, but clipboard feedback should never depend on it.
  }
}

function EmailCopyButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <button className={className} type="button" onClick={() => void copyEmail()}>
      {children}
    </button>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="info-card" data-reveal>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function ClientSpotlight({ title, note, href, image }: { title: string; note: string; href: string; image: string }) {
  return (
    <a className="client-spotlight" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <span className="client-orb">
        <img src={image} alt="" />
      </span>
      <strong>{title}</strong>
      <small>{note}</small>
    </a>
  );
}

function ToolCard({ image, title }: { image: string; title: string }) {
  return (
    <article className="tool-card" data-reveal>
      <span className="tool-logo">
        <img src={image} alt="" />
      </span>
      <strong>{title}</strong>
    </article>
  );
}

function Deliverable({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="deliverable" data-reveal>
      <span>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function PriceCard({ featured, title, description, price, suffix, items }: { featured?: boolean; title: string; description: string; price: string; suffix: string; items: string[] }) {
  return (
    <article className={featured ? "price-card featured" : "price-card"} data-reveal>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">
        <strong>{price}</strong>
        <span>{suffix}</span>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={16} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function InlineCta({ text, cta }: { text: string; cta: string }) {
  return (
    <div className="inline-cta" data-reveal>
      <p>{text}</p>
      <EmailCopyButton className="button primary">
        {cta}
        <ChevronRight size={18} />
      </EmailCopyButton>
    </div>
  );
}

function SocialLink({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  const isEmail = href.startsWith("mailto:");

  if (isEmail) {
    return (
      <button className="social-link" type="button" onClick={() => void copyEmail()}>
        <span className="social-icon">{icon}</span>
        <span>
          <strong>{label}</strong>
          <small>{value}</small>
        </span>
        <ArrowUpRight size={17} />
      </button>
    );
  }

  return (
    <a className="social-link" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <span className="social-icon">{icon}</span>
      <span>
        <strong>{label}</strong>
        <small>{value}</small>
      </span>
      <ArrowUpRight size={17} />
    </a>
  );
}

function VideoModal({ video, onClose }: { video: PortfolioVideo; onClose: () => void }) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={video.title}>
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label="Close video" />
      <div className={`modal-panel ${video.type}`}>
        <div className="modal-top">
          <div>
            <p className="pill">{video.label}</p>
            <h3>{video.title}</h3>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close video">
            <X size={22} />
          </button>
        </div>
        <div className="player">
          <div className="player-frame-label">
            <span />
            Hosted on YouTube
          </div>
          <iframe
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="player-rail" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
