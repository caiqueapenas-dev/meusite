import { useEffect, useState } from "react";

const stats = [
  "+45 clientes atendidos",
  "+3.000 conteúdos criados",
  "Expert em Canva, Photoshop e Meta Ads",
  "Mais de R$ 80.000 gerenciados em anúncios",
  "Baixíssimo churn",
  "Primeiro cliente ainda ativo desde o início",
];

export default function Stats() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-0 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-24 flex items-center justify-center overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 text-center px-4">
                {stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
