import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Criação de conteúdos estratégicos e personalizados",
  "Aprovação do cliente antes de cada publicação",
  "Cumprimento rigoroso das normas do CFM",
  "Foco em performance e aumento de mensagens",
  "Relatórios de crescimento e análise",
  "Suporte direto via WhatsApp",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-br from-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Mim
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sou <span className="font-semibold">Carlos Henrique</span>,
              especialista em gestão de redes sociais para clínicas médicas e
              profissionais da saúde desde 2022.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Já ajudei mais de 45 clientes a{" "}
              <span className="font-bold">aumentarem o fluxo de agenda </span>
              através de uma presença digital estratégica e consistente. Meu
              diferencial está na{" "}
              <span className="font-semibold">
                combinação de frequência, qualidade e performance
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Meu fluxo de trabalho é simples: crio conteúdos personalizados,
              envio para aprovação do cliente e publico automaticamente. A ideia
              é que você nunca mais precise se preocupar com o Instagram.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
              <p className="text-yellow-900 font-semibold mb-2">
                Prova de qualidade:
              </p>
              <p className="text-yellow-800">
                Meu primeiro cliente ainda está comigo. Com baixíssimo churn, a
                média de tempo que um cliente permanece é de{" "}
                <span className="font-bold">2 anos e 3 meses</span>.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl transform rotate-3"></div>
              <img
                src="https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763668713/Captura_de_tela_2025-11-20_165751_vs39un.png"
                alt="Carlos Henrique"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
