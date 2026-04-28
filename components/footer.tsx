import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  touristmo: [
    { label: "Inicio", href: "/" },
    { label: "Destinos", href: "/destinos" },
    { label: "Planes Turisticos", href: "/planes" },
  ],
  colabora: [
    { label: "Unete al equipo", href: "#" },
    { label: "Publica tus planes", href: "#" },
  ],
  soporte: [
    { label: "Terminos y Condiciones", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Ayuda", href: "/ayuda" },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: "#588684",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        marginTop: 64,
      }}
    >
      <div
        style={{
          height: 4,
          background: "linear-gradient(135deg,#D57133,#E8955A)",
          opacity: 0.8,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 32px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 32,
            marginBottom: 32,
          }}
        >
          {/* Logo section */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                color: "#fff",
                marginBottom: 12,
              }}
            >
              <Image
                src="/assets/logowhite.png"
                alt="TourIstmo"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                TourIstmo
              </span>
            </Link>
            <p
              style={{
                color: "rgba(255,255,255,.85)",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              Explora, comparte y disfruta de los mejores destinos turisticos de
              Panama. Tu aventura comienza aqui.
            </p>
          </div>

          {/* TourIstmo links */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: "2px solid #D57133",
                display: "inline-block",
              }}
            >
              TourIstmo
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.touristmo.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,.8)",
                      textDecoration: "none",
                      fontSize: 13,
                      display: "block",
                      padding: "3px 0",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colabora & Soporte */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: "2px solid #D57133",
                display: "inline-block",
              }}
            >
              Colabora
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.colabora.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,.8)",
                      textDecoration: "none",
                      fontSize: 13,
                      display: "block",
                      padding: "3px 0",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                marginTop: 16,
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: "2px solid #D57133",
                display: "inline-block",
              }}
            >
              Soporte
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.soporte.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,.8)",
                      textDecoration: "none",
                      fontSize: 13,
                      display: "block",
                      padding: "3px 0",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App download */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: "2px solid #D57133",
                display: "inline-block",
              }}
            >
              Descarga la App
            </h4>
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              width={120}
              height={40}
              style={{ borderRadius: 6 }}
            />
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.15)",
            paddingTop: 16,
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,.7)",
              fontSize: 13,
              textAlign: "center",
            }}
          >
            &copy; 2025 TourIstmo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
