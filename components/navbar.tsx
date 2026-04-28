"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Destinos", href: "/destinos" },
  { label: "Planes", href: "/planes" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Ayuda", href: "/ayuda" },
];

export function Navbar() {
  const pathname = usePathname();
  const [searchVal, setSearchVal] = useState("");

  return (
    <nav
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#588684",
        borderRadius: 50,
        padding: "0 28px",
        height: 70,
        width: "95%",
        margin: "20px auto",
        boxShadow: "0 15px 35px rgba(40,57,81,.2)",
        boxSizing: "border-box",
        zIndex: 100,
      }}
    >
      {/* Left links */}
      <div style={{ display: "flex", gap: 4, alignItems: "center", flex: 1 }}>
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              color: pathname === l.href ? "#fff" : "#E2E1E0",
              fontWeight: 700,
              fontSize: 13,
              padding: "6px 12px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "all .2s",
              background:
                pathname === l.href ? "rgba(255,255,255,.18)" : "transparent",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Center logo */}
      <Link
        href="/"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          alignItems: "center",
          gap: 6,
          textDecoration: "none",
        }}
      >
        <Image
          src="/assets/logowhite.png"
          alt="TourIstmo"
          width={44}
          height={44}
          priority
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

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,.12)",
            border: "1px solid rgba(255,255,255,.2)",
            borderRadius: 20,
            padding: "6px 14px",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,.8)"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Buscar destinos..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              fontSize: 12,
              width: 140,
            }}
          />
        </div>
        <Link
          href="/login"
          style={{
            background: "#D57133",
            color: "#fff",
            padding: "7px 18px",
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all .2s",
          }}
        >
          Ingresar
        </Link>
      </div>
    </nav>
  );
}
