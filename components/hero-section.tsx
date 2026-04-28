"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HEROES } from "@/lib/data";

export function HeroSection() {
  const [heroIdx, setHeroIdx] = useState(0);
  const h = HEROES[heroIdx];

  useEffect(() => {
    const t = setInterval(
      () => setHeroIdx((i) => (i + 1) % HEROES.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "72vh",
        minHeight: 500,
        backgroundImage: `linear-gradient(135deg,rgba(40,57,81,.45),rgba(88,134,132,.3)), url('${h.img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        borderRadius: 16,
        margin: "0 32px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "0 48px",
          zIndex: 2,
          position: "relative",
          maxWidth: 700,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontSize: "clamp(2rem,6vw,3.5rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 16,
            textShadow: "0 4px 20px rgba(0,0,0,.3)",
          }}
        >
          {h.title}
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,.95)",
            marginBottom: 28,
            textShadow: "0 2px 10px rgba(0,0,0,.3)",
          }}
        >
          {h.sub}
        </p>
        <Link
          href="/destinos"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#D57133",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: 50,
            fontWeight: 600,
            fontSize: 16,
            boxShadow: "0 8px 25px rgba(40,57,81,.15)",
            textDecoration: "none",
          }}
        >
          Explorar Destinos
        </Link>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 48,
          display: "flex",
          gap: 10,
          zIndex: 3,
        }}
      >
        <button
          onClick={() =>
            setHeroIdx((i) => (i === 0 ? HEROES.length - 1 : i - 1))
          }
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "rgba(255,255,255,.2)",
            border: "1px solid rgba(255,255,255,.3)",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &lsaquo;
        </button>
        <button
          onClick={() => setHeroIdx((i) => (i + 1) % HEROES.length)}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "rgba(255,255,255,.9)",
            border: "1px solid rgba(255,255,255,.3)",
            color: "#283951",
            fontSize: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &rsaquo;
        </button>
      </div>
    </section>
  );
}
