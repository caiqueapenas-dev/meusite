// Novo Arquivo
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    eventName,
    eventId,
    eventTime,
    eventSourceUrl,
    userData,
    customData,
  } = req.body;

  // Variáveis de ambiente (Configure no painel da Vercel)
  const PIXEL_ID = process.env.FB_PIXEL_ID || "1777628306285034";
  const ACCESS_TOKEN =
    process.env.FB_ACCESS_TOKEN ||
    "EAAECFNXe0EUBQMKtV9GgwyRIw0p9TBQxXwKNDFUNN33Et1popRAe3fY2SoFZARRK2cSwRXCplKVinGKL6GI2izDEsX7PkLR1CoJWZBb0ZC7JpojyTp4bnpQXTTOZCAbbtM8VlrzaTynoZBoUJZCtFkQRD1S6jut6A0z0T7pMHnmtcQgyVXBwZC8fvf2JCfV6QZDZD";

  // Obter IP e User Agent do cliente
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: eventTime,
        event_id: eventId,
        action_source: "website",
        event_source_url: eventSourceUrl,
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: userAgent,
          // Adicione email/telefone (em_hash/ph_hash) aqui se tiver formulários
          ...userData,
        },
        custom_data: customData,
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
