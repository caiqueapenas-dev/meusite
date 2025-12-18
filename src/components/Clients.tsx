import { BadgeCheck } from "lucide-react";

const clients = [
  {
    name: "Bressan Bonfim",
    handle: "@bressanbonfim",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1761666374/xjlje3qdwgdmtmpos1mw.ico",
  },
  {
    name: "Clínica Gama",
    handle: "@clinicagamarpombal",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1761666357/d8mns9shm92qqlctthtz.ico",
  },
  {
    name: "CMBB",
    handle: "@centromedicobressanbonfim",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1760393861/oab1umjgmtl40f0vxvgb.png",
  },
  {
    name: "Clean Saúde",
    handle: "@cleansaudeesplanada",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763681864/cs_-_icon_in5vwf.ico",
  },
  {
    name: "E muito mais",
    image:
      "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1763682076/dfc31c7d-d713-4c9f-9943-d826c9d1e112.png",
  },
];

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quem confia no meu trabalho
          </h2>
          <p className="text-lg text-gray-600">
            Junte-se a dezenas de profissionais que já transformaram suas redes
            sociais
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-3 transition-transform duration-300 group-hover:scale-105">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-yellow-400 to-red-500">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
                {/* Ícone de Verificado (Meta Verified style) */}
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-[2px]">
                  <BadgeCheck className="w-6 h-6 text-[#1d9bf0] fill-white" />
                </div>
              </div>

              <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                {client.name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-0.5 font-medium">
                {client.handle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
