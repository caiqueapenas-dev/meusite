import { MessageCircle } from "lucide-react";
import { trackEvent } from "../lib/meta-pixel";

export default function WhatsAppButton() {
  const handleClick = () => {
    trackEvent("Contact", { content_name: "WhatsApp Floating Button" });
  };

  return (
    <a
      onClick={handleClick}
      href="https://wa.me/5575981865878"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-bounce cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
