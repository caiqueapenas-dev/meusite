import React from "react";

export default function GamaCalendar() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FBahia&showPrint=0&src=MGMwYWY0YTJlOTk2NDU0OTdkY2MwM2I1NTQ3ODkwYTdmZGIzYzJiZWFkODA4ODAwYTQxMTNlOWFlOWNkZWI1YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23e4c441"
        style={{Sx: "solid 1px #777"}}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Calendário Clínica Gama"
      />
    </div>
  );
}