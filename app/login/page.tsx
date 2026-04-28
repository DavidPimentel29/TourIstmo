"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.push("/");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fade-in">
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 15px 35px rgba(40,57,81,.15)",
            width: "100%",
            maxWidth: 440,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top accent */}
          <div
            style={{
              height: 4,
              background: "linear-gradient(135deg,#D57133,#E8955A)",
              borderRadius: "16px 16px 0 0",
            }}
          />

          {/* Header */}
          <div
            style={{
              padding: "28px 32px 16px",
              textAlign: "center",
              background:
                "linear-gradient(135deg,rgba(40,57,81,.02),rgba(88,134,132,.02))",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <Image
                src="/assets/logo2.png"
                alt="TourIstmo"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#283951",
                }}
              >
                TourIstmo
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#283951",
                margin: "0 0 4px",
              }}
            >
              {tab === "login" ? "Bienvenido" : "Crear cuenta"}
            </h1>
            <p style={{ color: "#5A6B7D", fontSize: 14 }}>
              {tab === "login"
                ? "Inicia sesion para continuar explorando"
                : "Unete a la comunidad viajera de Panama"}
            </p>
          </div>

          {/* Tab toggle */}
          <div
            style={{
              display: "flex",
              margin: "0 32px 20px",
              background: "#F8F9FA",
              borderRadius: 10,
              padding: 4,
            }}
          >
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  padding: 8,
                  border: "none",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  background: tab === t ? "#fff" : "transparent",
                  color: tab === t ? "#283951" : "#5A6B7D",
                  boxShadow:
                    tab === t ? "0 1px 4px rgba(40,57,81,.12)" : "none",
                  transition: "all .2s",
                }}
              >
                {t === "login" ? "Iniciar Sesion" : "Registrarse"}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ padding: "0 32px" }}>
            {tab === "register" && (
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#283951",
                    marginBottom: 4,
                  }}
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "2px solid #E1E8ED",
                    borderRadius: 12,
                    fontSize: 14,
                    fontFamily: "inherit",
                    color: "#283951",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            )}
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#283951",
                  marginBottom: 4,
                }}
              >
                Correo electronico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@email.com"
                required
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  border: "2px solid #E1E8ED",
                  borderRadius: 12,
                  fontSize: 14,
                  fontFamily: "inherit",
                  color: "#283951",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#283951",
                  marginBottom: 4,
                }}
              >
                Contrasena
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "2px solid #E1E8ED",
                    borderRadius: 12,
                    fontSize: 14,
                    fontFamily: "inherit",
                    color: "#283951",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#8A9BA8",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>
            {tab === "login" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: 16,
                }}
              >
                <Link
                  href="#"
                  style={{
                    color: "#D57133",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Olvidaste tu contrasena?
                </Link>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: 13,
                background: "linear-gradient(135deg,#D57133,#E8955A)",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: 20,
                fontFamily: "inherit",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading
                ? "Cargando..."
                : tab === "login"
                  ? "Iniciar Sesion"
                  : "Crear cuenta"}
            </button>
          </form>

          {/* Divider */}
          <div
            style={{
              position: "relative",
              textAlign: "center",
              margin: "0 32px 16px",
              borderTop: "1px solid #E1E8ED",
            }}
          >
            <span
              style={{
                background: "#fff",
                padding: "0 12px",
                color: "#8A9BA8",
                fontSize: 12,
                fontWeight: 500,
                position: "relative",
                top: -10,
                display: "inline-block",
              }}
            >
              O continua con
            </span>
          </div>

          {/* Social */}
          <div
            style={{
              padding: "0 32px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              { name: "Google", color: "#4285F4" },
              { name: "Facebook", color: "#1877F2" },
            ].map((s) => (
              <button
                key={s.name}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    router.push("/");
                  }, 1000);
                }}
                style={{
                  padding: "11px 0",
                  border: "2px solid #E1E8ED",
                  borderRadius: 12,
                  background: "#fff",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontWeight: 600, color: s.color }}>{s.name}</span>
              </button>
            ))}
          </div>

          {/* Signup link */}
          <div
            style={{
              padding: "16px 32px 24px",
              textAlign: "center",
              borderTop: "1px solid #E1E8ED",
            }}
          >
            {tab === "login" ? (
              <p style={{ color: "#5A6B7D", fontSize: 13 }}>
                No tienes una cuenta?{" "}
                <button
                  onClick={() => setTab("register")}
                  style={{
                    color: "#D57133",
                    fontWeight: 700,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                  }}
                >
                  Registrate aqui
                </button>
              </p>
            ) : (
              <p style={{ color: "#5A6B7D", fontSize: 13 }}>
                Ya tienes cuenta?{" "}
                <button
                  onClick={() => setTab("login")}
                  style={{
                    color: "#D57133",
                    fontWeight: 700,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                  }}
                >
                  Inicia sesion
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Success overlay */}
        {success && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(40,57,81,.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: 40,
                textAlign: "center",
                maxWidth: 320,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "#4CAF50",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontSize: 20,
                  color: "#283951",
                  marginBottom: 6,
                }}
              >
                {tab === "login"
                  ? "Inicio de sesion exitoso"
                  : "Cuenta creada"}
                !
              </h2>
              <p style={{ color: "#5A6B7D", fontSize: 14 }}>Redirigiendo...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
