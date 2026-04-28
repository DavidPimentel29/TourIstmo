import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { DestinationCard } from "@/components/destination-card";
import { DESTINATIONS, PLANS } from "@/lib/data";

const NEWS = [
  {
    title: "Costa Rica lidera iniciativas de turismo sostenible en Centroamerica",
    cat: "Turismo Sostenible",
    date: "15 Jul 2025",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
    badge: "Articulo",
    badgeBg: "linear-gradient(135deg,#283951,#588684)",
  },
  {
    title: "Panama presenta nueva campana para atraer turistas internacionales",
    cat: "Promocion Turistica",
    date: "12 Jul 2025",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    badge: "Video",
    badgeBg: "linear-gradient(135deg,#D57133,#E8955A)",
  },
  {
    title: "La transformacion digital revoluciona la experiencia turistica",
    cat: "Innovacion",
    date: "10 Jul 2025",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    badge: "Articulo",
    badgeBg: "linear-gradient(135deg,#283951,#588684)",
  },
];

export default function Home() {
  return (
    <div className="fade-in">
      <Navbar />

      <HeroSection />

      {/* Destinations carousel */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 0" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontSize: 26,
            fontWeight: 700,
            color: "#283951",
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          Top 6 destinos mejor valorados
        </h2>
        <div
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            paddingBottom: 8,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.id} item={d} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link
            href="/destinos"
            style={{
              background: "#D57133",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: 14,
              boxShadow: "0 4px 12px rgba(40,57,81,.12)",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Ver todos los destinos
          </Link>
        </div>
      </section>

      {/* Plans carousel */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 0" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontSize: 26,
            fontWeight: 700,
            color: "#283951",
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          Top 6 planes mejor valorados
        </h2>
        <div
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            paddingBottom: 8,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {PLANS.map((p) => (
            <DestinationCard key={p.id} item={p} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link
            href="/planes"
            style={{
              background: "#D57133",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: 14,
              boxShadow: "0 4px 12px rgba(40,57,81,.12)",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Ver todos los planes
          </Link>
        </div>
      </section>

      {/* News */}
      <section
        style={{
          background: "#fff",
          borderRadius: 16,
          margin: "48px 32px",
          padding: "48px 40px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontSize: 26,
            fontWeight: 700,
            color: "#283951",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Ultimas Noticias
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 20,
          }}
        >
          {NEWS.map((n, i) => (
            <article
              key={i}
              style={{
                background: "#F8F9FA",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #E1E8ED",
              }}
            >
              <div
                style={{ position: "relative", height: i === 0 ? 180 : 140 }}
              >
                <Image
                  src={n.img}
                  alt={n.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: n.badgeBg,
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    letterSpacing: 0.3,
                  }}
                >
                  {n.badge}
                </span>
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: "#8A9BA8" }}>{n.date}</span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#588684",
                      fontWeight: 600,
                      background: "rgba(88,134,132,.1)",
                      padding: "1px 7px",
                      borderRadius: 6,
                    }}
                  >
                    {n.cat}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontSize: i === 0 ? 16 : 13,
                    fontWeight: 600,
                    color: "#283951",
                    lineHeight: 1.4,
                    marginBottom: 8,
                  }}
                >
                  {n.title}
                </h3>
                <Link
                  href="#"
                  style={{
                    color: "#D57133",
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Leer mas &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
