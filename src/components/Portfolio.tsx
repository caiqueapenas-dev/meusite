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
  videoUrls?: string[];
  videoCaptions?: string[]; // NOVA LINHA: Legendas para os vídeos
  galleryImages?: string[];
  galleryCaptions?: string[]; // NOVA LINHA: Legendas para as fotos
};

const portfolioItems: PortfolioItemType[] = [
  {
    title: "Vídeos Editados",
    icon: Play,
    description: "Reels profissionais editados para engajamento máximo",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669452/video-editing-timeline-close-up_313218-143_xa8aum.avif",
    type: "video",
    videoUrls: [
      "https://res.cloudinary.com/dg7yrvjwu/video/upload/v1763674921/Video_by_clinicagamarpombal_rcnsc0.mp4",
      "https://res.cloudinary.com/dg7yrvjwu/video/upload/v1763674929/Video_by_clinicaottomais_oqtpzx.mp4",
      "https://res.cloudinary.com/dg7yrvjwu/video/upload/v1763674938/Video_by_clinicaottomais2_zvv0ky.mp4",
      "https://res.cloudinary.com/dg7yrvjwu/video/upload/v1763674941/Video_by_clinicagamarpombal2_qcaxho.mp4",
      "https://res.cloudinary.com/dg7yrvjwu/video/upload/v1763675823/Video_by_cleansauderioreal_vg3vjo.mp4",
    ],
    videoCaptions: [
      "Depoimento de paciente: Foco em humanização e estrutura da clínica",
      "Aniversário da clínica: Objetivo de conectar com audiência",
      "Vídeo educativo: Elevando o nível de consciência do seguidor",
      "Reels informativo: Intuito de receber mais mensagens",
      "Datas especiais: Vídeo gerado com IA + Design estático",
    ],
  },
  {
    title: "Flyers & Cards",
    icon: Image,
    description: "Design personalizado seguindo as normas do CFM",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763668965/Captura_de_tela_2025-11-20_170230_kfdicm.png",
    type: "gallery",
    galleryImages: [
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676053/Captura_de_tela_2025-11-20_184922_hpwzzl.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676053/Captura_de_tela_2025-11-20_184936_b7mryr.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676056/Captura_de_tela_2025-11-20_184958_vpaci1.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676059/Captura_de_tela_2025-11-20_185010_yxfl8y.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676060/Captura_de_tela_2025-11-20_185026_bkkckc.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676061/Captura_de_tela_2025-11-20_185054_htyren.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676063/Captura_de_tela_2025-11-20_185107_vapxxr.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676064/Captura_de_tela_2025-11-20_185142_vemprm.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676067/Captura_de_tela_2025-11-20_185156_owynmm.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676068/Captura_de_tela_2025-11-20_185212_bin1me.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676068/Captura_de_tela_2025-11-20_185433_if0kvc.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676071/Captura_de_tela_2025-11-20_185448_cdobys.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676073/Captura_de_tela_2025-11-20_185506_gbu5uf.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676052/Captura_de_tela_2025-11-20_185958_hqxmmk.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676074/Captura_de_tela_2025-11-20_185648_shtmws.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676075/Captura_de_tela_2025-11-20_185738_g13kpm.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763676078/Captura_de_tela_2025-11-20_185950_wsk6oe.png",
    ],
    galleryCaptions: [
      "Clínica especializada",
      "Otorrinolaringologia",
      "Otorrinolaringologia",
      "Clínica médica",
      "Odontologia",
      "Fisioterapia",
      "Terapeuta complementar",
      "Pediatria",
      "Neurologia",
      "Saúde geriátrica",
      "Médico: Imagem mesclada com IA",
      "Médico ultrassonografista",
      "Estilo de vida",
      "Clínica e laboratório",
      "Elevação de consciência sobre a clínica",
      "Pediatria",
      "Captação de leads orgânicos",
    ],
  },
  {
    title: "Tráfego Pago",
    icon: TrendingUp,
    description: "Campanhas que aumentam o fluxo de mensagens",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669939/27589910-2327-4ba6-97d0-623be7ce94e9.png",
    type: "gallery",
    galleryImages: [
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763672349/e21580e6-591e-41ab-96db-bd1a056bdba1.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669939/27589910-2327-4ba6-97d0-623be7ce94e9.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763669668/3a98798d-a8ed-44ca-bfde-f3ffd9b02796.png",
    ],
    galleryCaptions: [
      "Resultado de anúncios nos primeiros 60 dias: nicho otorrinolaringologia",
      "Mais de 1.800 mensagens recebidas, pagando R$4,14 por cada mensagem",
      "Cerca de 670 mensagens em 4 meses",
    ],
  },
  {
    title: "Crescimento Orgânico",
    icon: Instagram,
    description: "Contas pequenas transformadas em perfis engajados",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763670383/035c4591-596d-4c6f-a05c-ed610a7a7626.png",

    type: "gallery",
    galleryImages: [
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763670383/035c4591-596d-4c6f-a05c-ed610a7a7626.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763677847/Captura_de_tela_2025-11-20_191502_kesb6j.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763677848/Captura_de_tela_2025-11-20_192640_hmpbza.png",
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763681584/2ee7c663-4350-4278-97c8-17616a9c1eb9.png",
    ],
    galleryCaptions: [
      "Alta taxa de alcance de contas únicas e engajamento",
      "+1.000 cliques no link da bio",
      "+106 mil visualizações em 1 mês",
      "Crescimento orgânico em 90 dias",
    ],
  },
]; // <--- ADICIONADO FECHAMENTO DA LISTA

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

  const nextContent = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const items = selectedItem?.galleryImages || selectedItem?.videoUrls;
    if (items) {
      setCurrentGalleryIndex((prev) => (prev + 1) % items.length);
    }
  };

  const prevContent = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const items = selectedItem?.galleryImages || selectedItem?.videoUrls;
    if (items) {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? items.length - 1 : prev - 1
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
    const distance = touchStart - touchEnd; // <--- CORRIGIDO (Era constKR)
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextContent();
    if (isRightSwipe) prevContent();
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
          <span className="text-sm px-3 text-gray-400">
            Clique nas imagens abaixo para ver as mídias do portfólio.
          </span>
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
            {(selectedItem.type === "video" && selectedItem.videoUrls) ||
            (selectedItem.type === "gallery" && selectedItem.galleryImages) ? (
              <div
                className="relative w-full aspect-[4/5] md:aspect-video flex items-center justify-center bg-black"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                  {selectedItem.type === "video" && selectedItem.videoUrls ? (
                    <video
                      key={currentGalleryIndex}
                      src={selectedItem.videoUrls[currentGalleryIndex]}
                      controls
                      autoPlay
                      className="max-w-full max-h-[80vh] w-full h-full rounded-lg shadow-2xl bg-black"
                    >
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <img
                      src={selectedItem.galleryImages![currentGalleryIndex]}
                      alt={`Galeria ${currentGalleryIndex}`}
                      className="max-w-full max-h-[80vh] object-contain transition-opacity duration-300"
                    />
                  )}

                  {/* LEGENDA (Caption) */}
                  {(selectedItem.type === "video"
                    ? selectedItem.videoCaptions?.[currentGalleryIndex]
                    : selectedItem.galleryCaptions?.[currentGalleryIndex]) && (
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center z-20 px-4 pointer-events-none">
                      <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-xl text-white text-center shadow-lg border border-white/10 max-w-2xl">
                        <p className="text-sm md:text-base font-medium">
                          {selectedItem.type === "video"
                            ? selectedItem.videoCaptions?.[currentGalleryIndex]
                            : selectedItem.galleryCaptions?.[
                                currentGalleryIndex
                              ]}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Botões de Navegação (Só aparecem se tiver mais de 1 item) */}
                  {((selectedItem.type === "video" &&
                    selectedItem.videoUrls!.length > 1) ||
                    (selectedItem.type === "gallery" &&
                      selectedItem.galleryImages!.length > 1)) && (
                    <>
                      <button
                        onClick={prevContent}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>

                      <button
                        onClick={nextContent}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {(selectedItem.type === "video"
                          ? selectedItem.videoUrls
                          : selectedItem.galleryImages)!.map((_, idx) => (
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
                    </>
                  )}
                </div>
              </div>
            ) : (
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
