"use client";

import { useState } from "react";
import Image from "next/image";

export interface Destination {
  id: number;
  nombre: string;
  provincia: string;
  tipo: string;
  precio: number | null;
  rating: number;
  imagen: string;
  desc?: string;
}

const typeColors: Record<string, { bg: string; color: string; border: string }> = {
  Historico: { bg: "#fff3e0", color: "#ef6c00", border: "#ffcc02" },
  Playa: { bg: "#e3f2fd", color: "#0277bd", border: "#90caf9" },
  Natural: { bg: "#e8f5e8", color: "#2e7d32", border: "#a5d6a7" },
  Aventura: { bg: "#fce4ec", color: "#c2185b", border: "#f8bbd9" },
  Cultural: { bg: "#f3e5f5", color: "#7b1fa2", border: "#ce93d8" },
  Paradisiaco: { bg: "#e0f7fa", color: "#00838f", border: "#80deea" },
  Ingenieria: { bg: "#eceff1", color: "#546e7a", border: "#b0bec5" },
  Exploracion: { bg: "#e8f5e8", color: "#2e7d32", border: "#a5d6a7" },
  Acuatico: { bg: "#e3f2fd", color: "#0277bd", border: "#90caf9" },
  Relajacion: { bg: "#f3e5f5", color: "#7b1fa2", border: "#ce93d8" },
};

interface DestinationCardProps {
  item: Destination;
  onClick?: () => void;
}

export function DestinationCard({ item, onClick }: DestinationCardProps) {
  const [saved, setSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const tc = typeColors[item.tipo] || {
    bg: "#F8F9FA",
    color: "#5A6B7D",
    border: "#E1E8ED",
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #E1E8ED",
        cursor: "pointer",
        boxShadow: isHovered
          ? "0 15px 35px rgba(40,57,81,.2)"
          : "0 1px 3px rgba(40,57,81,.08)",
        transform: isHovered ? "translateY(-8px)" : "none",
        transition: "transform .3s ease, box-shadow .3s ease",
        minWidth: 260,
        flexShrink: 0,
      }}
    >
      <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
        <Image
          src={item.imagen}
          alt={item.nombre}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved(!saved);
          }}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: saved ? "rgba(231,76,60,.1)" : "rgba(255,255,255,.9)",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(40,57,81,.1)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={saved ? "#E74C3C" : "none"}
            stroke={saved ? "#E74C3C" : "#8A9BA8"}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div style={{ padding: 14 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#283951",
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.nombre}
          </h4>
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#5A6B7D",
            display: "flex",
            alignItems: "center",
            gap: 4,
            margin: "4px 0 8px",
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5A6B7D"
            strokeWidth="2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {item.provincia}
        </div>
        <span
          style={{
            display: "inline-block",
            padding: "2px 10px",
            borderRadius: 12,
            fontSize: 11,
            fontWeight: 500,
            background: tc.bg,
            color: tc.color,
            border: `1px solid ${tc.border}`,
          }}
        >
          {item.tipo}
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: "#D57133" }}>
            ★ {item.rating}
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#3f6b69" }}>
            {item.precio ? `$${item.precio}` : "Gratis"}
          </span>
        </div>
      </div>
    </div>
  );
}
