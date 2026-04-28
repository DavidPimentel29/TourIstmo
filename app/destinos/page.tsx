"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DestinationCard } from "@/components/destination-card";
import { DESTINATIONS } from "@/lib/data";

export default function DestinosPage() {
  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState("");
  const [provincia, setProvincia] = useState("");

  const filtered = DESTINATIONS.filter((d) => {
    const matchSearch =
      !search ||
      d.nombre.toLowerCase().includes(search.toLowerCase()) ||
      d.provincia.toLowerCase().includes(search.toLowerCase());
    const matchTipo = !tipo || d.tipo === tipo;
    const matchProv = !provincia || d.provincia === provincia;
    return matchSearch && matchTipo && matchProv;
  });

  const tipos = [...new Set(DESTINATIONS.map((i) => i.tipo))];
  const provincias = [...new Set(DESTINATIONS.map((i) => i.provincia))];

  return (
    <div className="fade-in">
      <Navbar />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 32px 64px",
        }}
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
          Explora destinos en Panama
        </h2>

        {/* Search + Filters */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 14,
            }}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, provincia o tipo..."
              style={{
                flex: 1,
                maxWidth: 380,
                padding: "11px 18px",
                border: "2px solid #E1E8ED",
                borderRadius: 50,
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                color: "#283951",
              }}
            />
            <button
              style={{
                padding: "11px 24px",
                background: "#D57133",
                color: "#fff",
                border: "none",
                borderRadius: 50,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Buscar
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <select
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              style={{
                padding: "8px 32px 8px 14px",
                border: "2px solid #E1E8ED",
                borderRadius: 50,
                fontSize: 13,
                outline: "none",
                background: "#fff",
                cursor: "pointer",
                fontFamily: "inherit",
                color: "#283951",
                appearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235A6B7D' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="">Todas las provincias</option>
              {provincias.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              style={{
                padding: "8px 32px 8px 14px",
                border: "2px solid #E1E8ED",
                borderRadius: 50,
                fontSize: 13,
                outline: "none",
                background: "#fff",
                cursor: "pointer",
                fontFamily: "inherit",
                color: "#283951",
                appearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235A6B7D' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="">Todos los tipos</option>
              {tipos.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "48px 0",
                color: "#5A6B7D",
              }}
            >
              <p style={{ fontSize: 16 }}>
                No se encontraron destinos para esta busqueda.
              </p>
            </div>
          ) : (
            filtered.map((d) => <DestinationCard key={d.id} item={d} />)
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
