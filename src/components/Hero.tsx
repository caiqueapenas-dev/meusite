import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763668965/Captura_de_tela_2025-11-20_170230_kfdicm.png)",
          filter: "blur(1px)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-left text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforme seguidores <br />
          em pacientes particulares <br />
          na sua clínica.
        </h1>
        <p className="text-base md:text-xl lg:text-2xl mb-10 font-light max-w-3xl">
          Você cuida da saúde dos seus pacientes, eu cuido para que{" "}
          <strong className="font-semibold">
            sua agenda esteja sempre cheia
          </strong>
          . Gestão de redes sociais, tráfego pago e posicionamento digital com
          ética e resultado.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-xl hover:scale-105"
        >
          Quero aumentar meu fluxo de clientes
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
