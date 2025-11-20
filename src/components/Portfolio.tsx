import { useState } from "react";
import {
  Play,
  Image,
  TrendingUp,
  Instagram,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

type PortfolioItemType = {
  title: string;
  icon: any;
  description: string;
  image: string;
  type: "video" | "gallery" | "standard";
  videoUrl?: string;
  galleryImages?: string[];
};

const portfolioItems: PortfolioItemType[] = [
  {
    title: "Vídeos Editados",
    icon: Play,
    description: "Reels profissionais editados para engajamento máximo",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669452/video-editing-timeline-close-up_313218-143_xa8aum.avif",
    type: "video",
    // COLOQUE O LINK DO VÍDEO AQUI
    videoUrl:
      "https://res.cloudinary.com/dg7yrvjwu/video/upload/v1/seu-video-exemplo.mp4",
  },
  {
    title: "Flyers & Cards",
    icon: Image,
    description: "Design personalizado seguindo as normas do CFM",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763668965/Captura_de_tela_2025-11-20_170230_kfdicm.png",
    type: "gallery",
    // COLOQUE AS IMAGENS DA GALERIA AQUI
    galleryImages: [
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763668965/Captura_de_tela_2025-11-20_170230_kfdicm.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669939/27589910-2327-4ba6-97d0-623be7ce94e9.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763670383/035c4591-596d-4c6f-a05c-ed610a7a7626.png",
    ],
  },
  {
    title: "Tráfego Pago",
    icon: TrendingUp,
    description: "Campanhas que aumentam o fluxo de mensagens",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669939/27589910-2327-4ba6-97d0-623be7ce94e9.png",
    type: "standard",
  },
  {
    title: "Crescimento Orgânico",
    icon: Instagram,
    description: "Contas pequenas transformadas em perfis engajados",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763670383/035c4591-596d-4c6f-a05c-ed610a7a7626.png",
    type: "standard",
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(
    null
  );
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const openModal = (item: PortfolioItemType) => {
    setSelectedItem(item);
    setCurrentGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentGalleryIndex(0);
  };

  const nextImage = () => {
    if (selectedItem?.galleryImages) {
      setCurrentGalleryIndex(
        (prev) => (prev + 1) % selectedItem.galleryImages!.length
      );
    }
  };

  const prevImage = () => {
    if (selectedItem?.galleryImages) {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative">
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
                onClick={() => openModal(item)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Ícones de sobreposição */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    {item.type === "video" ? (
                      <Play className="w-8 h-8 text-white fill-white" />
                    ) : item.type === "gallery" ? (
                      <Image className="w-8 h-8 text-white" />
                    ) : (
                      <Maximize2 className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

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

      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 p-2 bg-black/50 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-5xl bg-transparent rounded-xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Conteúdo do Modal */}
            {selectedItem.type === "video" && selectedItem.videoUrl ? (
              <div className="aspect-video w-full">
                <video
                  src={selectedItem.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg shadow-2xl"
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            ) : selectedItem.type === "gallery" &&
              selectedItem.galleryImages ? (
              <div
                className="relative w-full aspect-[4/5] md:aspect-video flex items-center justify-center bg-black"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedItem.galleryImages[currentGalleryIndex]}
                    alt={`Galeria ${currentGalleryIndex}`}
                    className="max-w-full max-h-[80vh] object-contain transition-opacity duration-300"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedItem.galleryImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentGalleryIndex
                            ? "bg-white w-4"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback para Standard ou erro */
              <div className="flex items-center justify-center max-w-full max-h-screen">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
