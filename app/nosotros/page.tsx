import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const team = [
  {
    name: "Miriam Angulo",
    role: "Full-Stack Developer",
    photo: "/assets/sample-user.avif",
    desc: "Expertise en bases de datos, backend y frontend. Java, Spring Boot y microservicios.",
  },
  {
    name: "Carlos Delgado",
    role: "Backend Developer",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    desc: "Logica de negocio y gestion de datos. Java, Spring Boot y arquitecturas escalables.",
  },
  {
    name: "Diego Jaen",
    role: "Database Analyst",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    desc: "MySQL, PostgreSQL y optimizacion de consultas. Diseno de estructuras de datos eficientes.",
  },
  {
    name: "David Pimentel",
    role: "DevOps Engineer",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    desc: "Full-stack developer. JavaScript, Node.js, integracion continua y despliegue automatizado.",
  },
  {
    name: "Elbis Vallejos",
    role: "Frontend Developer",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    desc: "UX y logica de aplicacion. JavaScript, Node.js y metodologias agiles.",
  },
];

const stats = [
  { num: "5", label: "Desarrolladores" },
  { num: "1", label: "Semestre" },
  { num: "∞", label: "Pasion" },
  { num: "100%", label: "Compromiso" },
];

const tech = [
  { name: "HTML5 & CSS3", desc: "Estructura y diseno moderno", icon: "</>" },
  { name: "JSP", desc: "Backend robusto y escalable", icon: "⚙" },
  { name: "Oracle MySQL", desc: "Base de datos confiable", icon: "⛁" },
];

export default function NosotrosPage() {
  return (
    <div className="fade-in">
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg,#283951,#588684)",
          padding: "80px 32px 60px",
          textAlign: "center",
          borderRadius: 16,
          margin: "0 32px",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontSize: "clamp(2rem,5vw,3rem)",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Conoce a Nuestro Equipo
        </h1>
        <p
          style={{
            fontSize: 17,
            opacity: 0.9,
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Somos un grupo de desarrolladores apasionados por crear experiencias
          digitales excepcionales que conecten a las personas con las maravillas
          turisticas de Panama.
        </p>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 32px" }}>
        {/* Our Story */}
        <section style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#283951",
              marginBottom: 14,
            }}
          >
            Nuestra Historia
          </h2>
          <p
            style={{
              color: "#5A6B7D",
              lineHeight: 1.7,
              maxWidth: 700,
              margin: "0 auto 32px",
              fontSize: 15,
            }}
          >
            TourIstmo nacio como un proyecto semestral con la vision de
            revolucionar la forma en que las personas descubren y experimentan
            los destinos turisticos de Panama. Combinamos tecnologia moderna con
            un profundo amor por nuestro pais para crear una plataforma que
            inspire y facilite aventuras inolvidables.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {stats.map(({ num, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "#D57133",
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {num}
                </div>
                <div style={{ fontSize: 13, color: "#5A6B7D", fontWeight: 600 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#283951",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            Nuestro Equipo
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {team.map((m) => (
              <div
                key={m.name}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "24px 20px",
                  border: "1px solid #E1E8ED",
                  textAlign: "center",
                }}
              >
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={72}
                  height={72}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #588684",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#283951",
                    margin: "12px 0 2px",
                  }}
                >
                  {m.name}
                </h3>
                <p
                  style={{
                    color: "#D57133",
                    fontSize: 12,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {m.role}
                </p>
                <p style={{ color: "#5A6B7D", fontSize: 13, lineHeight: 1.5 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech */}
        <section style={{ marginTop: 48, textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#283951",
              marginBottom: 14,
            }}
          >
            Tecnologias que Utilizamos
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {tech.map(({ name, desc, icon }) => (
              <div
                key={name}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "24px 20px",
                  border: "1px solid #E1E8ED",
                  width: 200,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 8, color: "#588684" }}>
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#283951",
                    marginBottom: 4,
                  }}
                >
                  {name}
                </h3>
                <p style={{ fontSize: 12, color: "#5A6B7D" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: 48,
            textAlign: "center",
            background: "linear-gradient(135deg,#588684,#8BAD65)",
            borderRadius: 16,
            padding: "40px 32px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            Tienes alguna pregunta?
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 20, fontSize: 14 }}>
            Estamos aqui para ayudarte. Contactanos en cualquier momento.
          </p>
          <Link
            href="/ayuda"
            style={{
              background: "#fff",
              color: "#283951",
              padding: "11px 28px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 14,
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Centro de Ayuda
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}
