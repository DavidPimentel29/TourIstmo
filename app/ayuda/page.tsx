"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const sections = [
  {
    title: "Cuenta y Registro",
    items: [
      [
        "Como creo una cuenta en TourIstmo?",
        'Haz clic en "Ingresar" en la barra de navegacion y luego en "Registrate aqui". Completa el formulario con tu nombre, apellidos, fecha de nacimiento, sexo y correo electronico.',
      ],
      [
        "Olvide mi contrasena, que hago?",
        'En la pantalla de inicio de sesion, haz clic en "Olvidaste tu contrasena?" e ingresa tu correo electronico. Te enviaremos un enlace para restablecerla.',
      ],
      [
        "Como actualizo mi perfil?",
        'Inicia sesion y accede a "Mi Perfil" en el menu de navegacion. Desde alli puedes editar tu informacion personal y foto de perfil.',
      ],
    ],
  },
  {
    title: "Destinos y Planes",
    items: [
      [
        "Como busco destinos turisticos?",
        'Usa la barra de busqueda en la parte superior del sitio o navega a la seccion "Destinos". Puedes filtrar por provincia, tipo y precio.',
      ],
      [
        "Como reservo un plan turistico?",
        'Explora la seccion "Planes", selecciona el que te interese y haz clic en el boton de reserva. Seras dirigido al sistema de pago del proveedor.',
      ],
      [
        "Puedo guardar destinos favoritos?",
        "Si. En cada tarjeta de destino veras un icono de corazon. Haz clic para guardar el destino en tu lista de favoritos (requiere iniciar sesion).",
      ],
    ],
  },
  {
    title: "Empresas y Proveedores",
    items: [
      [
        "Como publico un destino o plan turistico?",
        'Accede a "Agregar Destino" o "Formulario de Planes" desde el menu. Completa la informacion requerida y envia para revision. El equipo administrativo aprobara tu publicacion.',
      ],
      [
        "Cuanto tiempo tarda la aprobacion?",
        "El equipo de TourIstmo revisa las solicitudes en un plazo de 1 a 3 dias habiles. Recibiras una notificacion por correo con el resultado.",
      ],
    ],
  },
];

const contacts = [
  { icon: "✉", title: "Correo Electronico", desc: "soporte@touristmo.com" },
  { icon: "📱", title: "WhatsApp", desc: "+507 6000-0000" },
  { icon: "🕐", title: "Horario", desc: "Lun-Vie 8am-5pm" },
];

export default function AyudaPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  let globalIdx = 0;

  return (
    <div className="fade-in">
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg,#283951,#588684)",
          padding: "80px 32px 50px",
          textAlign: "center",
          color: "#fff",
          borderRadius: 16,
          margin: "0 32px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Centro de Ayuda
        </h1>
        <p style={{ fontSize: 15, opacity: 0.85 }}>
          Encuentra respuestas a las preguntas mas frecuentes
        </p>
      </div>

      <div
        style={{ maxWidth: 780, margin: "0 auto", padding: "32px 32px 64px" }}
      >
        <Link
          href="/"
          style={{
            background: "none",
            border: "none",
            color: "#588684",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            marginBottom: 24,
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          &larr; Volver
        </Link>

        {sections.map((sec) => (
          <div key={sec.title} style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#283951",
                marginBottom: 14,
              }}
            >
              {sec.title}
            </h2>
            {sec.items.map(([q, a]) => {
              const idx = globalIdx++;
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: "#fff",
                    border: "1px solid #E1E8ED",
                    borderRadius: 12,
                    marginBottom: 8,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 18px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#283951",
                      textAlign: "left",
                      gap: 12,
                      fontFamily: "inherit",
                    }}
                  >
                    <span>{q}</span>
                    <span
                      style={{
                        fontSize: 11,
                        transition: "transform .2s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                        flexShrink: 0,
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 18px 16px",
                        color: "#5A6B7D",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Contact Cards */}
        <div style={{ marginTop: 32 }}>
          <h2
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: "#283951",
              marginBottom: 16,
            }}
          >
            Necesitas mas ayuda?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
          >
            {contacts.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  border: "1px solid #E1E8ED",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#283951",
                    marginBottom: 4,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "#5A6B7D" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
