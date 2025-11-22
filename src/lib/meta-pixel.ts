// Novo Arquivo
import { v4 as uuidv4 } from "uuid";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const FB_PIXEL_ID = "1777628306285034"; // Substitua pelo seu ID numérico do Pixel

export const initPixel = () => {
  if (typeof window === "undefined") return;
  if (window.fbq) return;

  const fbq = function (...args: any[]) {
    if (window.fbq.callMethod) {
      window.fbq.callMethod(...args);
    } else {
      window.fbq.queue.push(args);
    }
  } as any;

  window.fbq = fbq;
  window._fbq = fbq;

  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = "2.0";
  window.fbq.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  window.fbq("init", FB_PIXEL_ID);
};

export const trackEvent = async (eventName: string, customData = {}) => {
  const eventId = uuidv4(); // ID único para desduplicação
  const eventTime = Math.floor(Date.now() / 1000);

  // 1. Rastreamento via Navegador (Pixel)
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, customData, { eventID: eventId });
  }

  // 2. Rastreamento via Servidor (CAPI via Vercel Function)
  try {
    // Nome genérico '/api/app-digest' para evitar AdBlockers
    await fetch("/api/app-digest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId,
        eventTime,
        eventSourceUrl: window.location.href,
        customData,
      }),
    });
  } catch (error) {
    console.error("Erro ao enviar evento CAPI:", error);
  }
};
