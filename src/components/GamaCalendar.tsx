import { Calendar, Clock } from "lucide-react";

// ADICIONE SEUS POSTS AQUI
const scheduledPosts = [
  {
    date: "20/12",
    time: "18:00",
    image: "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763668965/Captura_de_tela_2025-11-20_170230_kfdicm.png", // Coloque o link da thumb aqui
    caption: "Post sobre prevenção de alergias (Carrossel)",
    status: "Agendado",
  },
  {
    date: "22/12",
    time: "12:00",
    image: "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763670383/035c4591-596d-4c6f-a05c-ed610a7a7626.png",
    caption: "Reels: Bastidores da clínica",
    status: "Agendado",
  },
  // Copie e cole o bloco acima para adicionar mais posts
];

export default function GamaCalendar() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Agenda de Conteúdo: Clínica Gama
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {scheduledPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Thumb do post" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {post.time}
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 leading-relaxed">
                  {post.caption}
                </h3>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wide">
                    ● {post.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}