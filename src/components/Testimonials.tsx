import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Ricardo Silva',
    specialty: 'Cardiologista',
    text: 'Trabalho com o Carlos há mais de 2 anos. Minha agenda aumentou significativamente e não preciso mais me preocupar com o Instagram. Tudo é aprovado antes de publicar e segue as normas do CFM.',
    rating: 5,
  },
  {
    name: 'Dra. Mariana Costa',
    specialty: 'Dermatologista',
    text: 'Sempre achei que investir em redes sociais não dava resultado, mas o Carlos provou o contrário. O foco dele em performance realmente aumentou o fluxo de mensagens na minha clínica.',
    rating: 5,
  },
  {
    name: 'Dr. Fernando Lima',
    specialty: 'Ortopedista',
    text: 'Profissional extremamente competente. Os vídeos editados são de alta qualidade e os cards são sempre personalizados. O melhor é que não tenho vínculo trabalhista e pago muito menos que um funcionário CLT.',
    rating: 5,
  },
  {
    name: 'Dra. Juliana Mendes',
    specialty: 'Psiquiatra',
    text: 'O que mais gostei foi a transparência e o processo de aprovação. Nenhum post vai ao ar sem minha revisão. Isso me dá segurança total em relação ao conteúdo publicado.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O que meus clientes dizem sobre o trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
