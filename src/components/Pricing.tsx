import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 900',
    description: 'Ideal para quem está começando',
    recommended: false,
    features: [
      '2 cards personalizados por semana',
      'Template de agenda no Canva',
      'Legendas estratégicas',
      'Publicação automática no Instagram',
      'Relatório de análise de crescimento',
      'Suporte via WhatsApp',
      'Ferramenta de aprovação de posts',
      'Configuração completa do perfil',
      'Configuração de segurança da conta',
      'Edição de até 2 vídeos/semana (até 1min)',
    ],
  },
  {
    name: 'Performance',
    price: 'R$ 1.600',
    description: 'Para quem quer resultados acelerados',
    recommended: true,
    features: [
      'Tudo do plano Essencial',
      'Gestão de tráfego pago',
      'Campanhas estratégicas para aumentar fluxo',
      'Otimização contínua de anúncios',
      'Relatórios detalhados de ROI',
    ],
  },
  {
    name: 'Premium',
    price: 'R$ 2.200',
    description: 'Solução completa e estratégica',
    recommended: false,
    features: [
      'Tudo do plano Performance',
      '3 cards personalizados por semana',
      'Gestão completa do Google Meu Negócio',
      'Otimização para buscas locais',
      'Gerenciamento de avaliações',
      'Posts no Google Maps',
      'Prioridade no suporte',
    ],
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pacotes" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pacotes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha o plano ideal para o crescimento da sua clínica
          </p>
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
            <p className="text-blue-900 text-sm">
              <span className="font-semibold">Sem vínculo trabalhista:</span> Você economiza até 70-100% em encargos CLT
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.recommended
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.recommended ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span
                    className={`text-lg ${
                      plan.recommended ? 'text-blue-100' : 'text-gray-600'
                    }`}
                  >
                    /mês
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-6 h-6 flex-shrink-0 ${
                        plan.recommended ? 'text-blue-200' : 'text-green-600'
                      }`}
                    />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Começar Agora
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Todos os planos incluem contrato sem fidelidade. Você pode cancelar quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}
