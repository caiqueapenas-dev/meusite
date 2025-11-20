import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Vale a pena investir em redes sociais? Realmente dá resultado?",
    answer:
      "Sim! Meu foco não é apenas deixar o perfil bonito, mas sim gerar performance: aumentar o fluxo de mensagens recebidas. Isso é alcançado através de publicações frequentes, estratégicas e consistentes. Meus clientes comprovam isso, com média de permanência de 2 anos e 3 meses.",
  },
  {
    question: "Como funciona o processo de aprovação dos conteúdos?",
    answer:
      "Crio todos os conteúdos e envio para você através de uma ferramenta específica de aprovação. Nenhum post é publicado sem sua revisão e aprovação prévia. Você tem total controle sobre o que vai ao ar.",
  },
  {
    question: "Os posts seguem as normas do CFM?",
    answer:
      "Sim, absolutamente! Todos os conteúdos são criados seguindo rigorosamente as normas de publicidade do Conselho Federal de Medicina. Sua segurança profissional é prioridade.",
  },
  {
    question: "Não é muito caro contratar esse serviço?",
    answer:
      "Na verdade, não! Sem vínculo trabalhista, você economiza todos os encargos CLT (que representam 70-100% do salário). Um funcionário com salário mínimo custa entre R$ 2.580 e R$ 3.036 para a empresa. Meus pacotes custam muito menos e você pode cancelar quando quiser, sem burocracia.",
  },
  {
    question: "Você cuida dos Directs (mensagens) do Instagram?",
    answer:
      "Não. Meu foco é na criação e publicação de conteúdos estratégicos. O atendimento via Direct fica com sua equipe, pois eles têm acesso interno às informações da clínica e agenda.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim! Não há fidelidade ou burocracia. É um risco que assumo justamente para oferecer flexibilidade. Meu trabalho fala por si: meu primeiro cliente ainda está comigo e tenho baixíssimo churn.",
  },
  {
    question: "Como funciona a edição de vídeos?",
    answer:
      "Você tem direito a até 2 vídeos por semana de até 1 minuto cada (plano Essencial e Performance) para reels. São vídeos profissionais, otimizados para engajamento máximo nas redes sociais.",
  },
  {
    question: "O que está incluído na gestão do Google Meu Negócio?",
    answer:
      "No plano Premium, faço a criação, configuração e gestão completa do Google Meu Negócio: otimização para buscas locais, gerenciamento de avaliações, criação de posts e atualização constante das informações.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Respostas para as principais dúvidas
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-gray-700 leading-relaxed bg-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
