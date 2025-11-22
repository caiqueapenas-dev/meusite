import { Mail, Phone, MapPin } from "lucide-react";
import { trackEvent } from "../lib/meta-pixel";

export default function Contact() {
  const handleContact = (type: string) => {
    trackEvent("Contact", { content_name: type });
  };

  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Entre em contato e descubra como posso ajudar sua clínica a crescer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            onClick={() => handleContact("WhatsApp Card")}
            href="https://wa.me/5575981865878"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 cursor-pointer"
          >
            <Phone className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-blue-100">Clique para conversar</p>
          </a>

          <a
            onClick={() => handleContact("Email Card")}
            href="mailto:manager.carloshenrique@gmail.com"
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 overflow-hidden cursor-pointer"
          >
            <Mail className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-blue-100 break-all md:break-words text-sm md:text-base">
              manager.carloshenrique@gmail.com
            </p>
          </a>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-white/20">
            <MapPin className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
            <p className="text-blue-100">100% Online</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-6 text-lg">
            Resposta em até 24 horas úteis
          </p>
          <a
            onClick={() => handleContact("WhatsApp CTA Bottom")}
            href="https://wa.me/5575981865878"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer"
          >
            Falar no WhatsApp Agora
          </a>
        </div>
      </div>
    </section>
  );
}
