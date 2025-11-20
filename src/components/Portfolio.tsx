import { Play, Image, TrendingUp, Instagram } from "lucide-react";

const portfolioItems = [
  {
    title: "Vídeos Editados",
    icon: Play,
    description: "Reels profissionais editados para engajamento máximo",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669452/video-editing-timeline-close-up_313218-143_xa8aum.avif",
  },
  {
    title: "Flyers & Cards",
    icon: Image,
    description: "Design personalizado seguindo as normas do CFM",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763668965/Captura_de_tela_2025-11-20_170230_kfdicm.png",
  },
  {
    title: "Tráfego Pago",
    icon: TrendingUp,
    description: "Campanhas que aumentam o fluxo de mensagens",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669939/27589910-2327-4ba6-97d0-623be7ce94e9.png",
  },
  {
    title: "Crescimento Orgânico",
    icon: Instagram,
    description: "Contas pequenas transformadas em perfis engajados",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763670383/035c4591-596d-4c6f-a05c-ed610a7a7626.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfólio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados reais que transformam a presença digital de clínicas e
            profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Icon className="w-10 h-10 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
