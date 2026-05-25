import { v4 as uuidv4 } from "uuid";

type FbqArguments = [eventType: string, ...payload: unknown[]];

type FbqFunction = {
  (...args: FbqArguments): void;
  callMethod?: (...args: FbqArguments) => void;
  loaded: boolean;
  push: FbqFunction;
  queue: FbqArguments[];
  version: string;
};

type PixelCustomData = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

export const FB_PIXEL_ID = "1777628306285034";

export const initPixel = () => {
  if (typeof window === "undefined") return;
  if (window.fbq) return;

  const queue: FbqArguments[] = [];
  const fbq = ((...args: FbqArguments) => {
    if (window.fbq?.callMethod) {
      window.fbq.callMethod(...args);
      return;
    }

    queue.push(args);
  }) as FbqFunction;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = queue;

  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  window.fbq("init", FB_PIXEL_ID);
};

export const trackEvent = async (
  eventName: string,
  customData: PixelCustomData = {},
) => {
  const eventId = uuidv4();
  const eventTime = Math.floor(Date.now() / 1000);

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, customData, { eventID: eventId });
  }

  try {
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
    console.error("Error sending CAPI event:", error);
  }
};
