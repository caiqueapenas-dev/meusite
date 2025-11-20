import { Brain, Sparkles, Wand2 } from "lucide-react";

export default function AIHighlight() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Efeito de fundo (Glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-purple-300 mb-6 border border-white/10">
              <Sparkles className="w-4 h-4" />
              Tecnologia de Ponta
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Marketing atualizado com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Inteligência Artificial
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Utilizo as ferramentas de IA mais avançadas do mercado (como
              Gemini Pro e Nano Banana) para criar:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Wand2 className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Imagens Exclusivas
                  </h3>
                  <p className="text-sm text-gray-400">
                    Chega de banco de imagens repetitivo. Crio visuais únicos e
                    impactantes gerados por IA.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Estratégia de Dados
                  </h3>
                  <p className="text-sm text-gray-400">
                    Análise de tendências e roteiros otimizados para máxima
                    retenção.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763681440/bf910ffe-7b31-4125-b40a-1add0831f9c3.png"
                alt="Inteligência Artificial Generativa"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-sm font-mono text-purple-300">
                  Prompt: "A professional studio portrait..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
