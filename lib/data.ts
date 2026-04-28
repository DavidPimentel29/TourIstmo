import type { Destination } from "@/components/destination-card";

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    nombre: "Casco Viejo",
    provincia: "Panama",
    tipo: "Historico",
    precio: 25,
    rating: 4.9,
    imagen: "/assets/casco-viejo.webp",
    desc: "El casco antiguo de la Ciudad de Panama, declarado Patrimonio de la Humanidad por la UNESCO. Calles adoquinadas, arquitectura colonial y una vibrante vida nocturna.",
  },
  {
    id: 2,
    nombre: "Playa La Miel",
    provincia: "Bocas del Toro",
    tipo: "Playa",
    precio: null,
    rating: 4.8,
    imagen: "/assets/playa-la-miel.webp",
    desc: "Una de las playas mas virgenes de Panama, accesible solo por bote. Aguas cristalinas turquesas y selva tropical que llega hasta el mar.",
  },
  {
    id: 3,
    nombre: "El Valle de Anton",
    provincia: "Cocle",
    tipo: "Natural",
    precio: 30,
    rating: 4.5,
    imagen: "/assets/el-valle.webp",
    desc: "Un pueblo pintoresco ubicado dentro de un crater volcanico extinto. Famoso por sus fuentes termales, cascadas y mercado artesanal de fin de semana.",
  },
  {
    id: 4,
    nombre: "India Dormida",
    provincia: "Cocle",
    tipo: "Aventura",
    precio: 20,
    rating: 4.6,
    imagen: "/assets/india-dormida.webp",
    desc: "Cerro iconico que semeja el perfil de una mujer indigena dormida. Ofrece senderismo con vistas panoramicas del Valle de Anton.",
  },
  {
    id: 5,
    nombre: "Cinta Costera",
    provincia: "Panama",
    tipo: "Cultural",
    precio: null,
    rating: 4.4,
    imagen: "/assets/cinta-costera.webp",
    desc: "Paseo maritimo de la Ciudad de Panama con vistas al skyline moderno y al canal historico. Ideal para ciclismo, running y atardeceres.",
  },
  {
    id: 6,
    nombre: "Biomuseo",
    provincia: "Panama",
    tipo: "Cultural",
    precio: 22,
    rating: 4.7,
    imagen: "/assets/biomuseo.webp",
    desc: "Disenado por Frank Gehry, el unico museo de su tipo en el mundo que narra como el surgimiento del Istmo de Panama cambio la biodiversidad del planeta.",
  },
];

export const PLANS: Destination[] = [
  {
    id: 1,
    nombre: "Tour Bocas del Toro",
    provincia: "Bocas del Toro",
    tipo: "Aventura",
    precio: 85,
    rating: 4.7,
    imagen:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=200&fit=crop",
    desc: "3 dias explorando el archipielago. Snorkel, delfines, playas de arena blanca y vida nocturna unica.",
  },
  {
    id: 2,
    nombre: "Expedicion Darien",
    provincia: "Darien",
    tipo: "Exploracion",
    precio: null,
    rating: 4.8,
    imagen:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
    desc: "Aventura de 5 dias en el Parque Nacional Darien, uno de los ecosistemas mas biodiversos del mundo.",
  },
  {
    id: 3,
    nombre: "City Tour Panama",
    provincia: "Panama",
    tipo: "Cultural",
    precio: 65,
    rating: 4.6,
    imagen: "/assets/casco-viejo.webp",
    desc: "Dia completo recorriendo el Casco Viejo, el Canal de Panama y el Biomuseo con guia certificado.",
  },
  {
    id: 4,
    nombre: "Snorkel San Blas",
    provincia: "Guna Yala",
    tipo: "Acuatico",
    precio: 120,
    rating: 4.9,
    imagen:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=200&fit=crop",
    desc: "2 dias en las paradisiacas islas Kuna. Snorkel en arrecifes de coral, hamacas sobre el mar y cultura indigena.",
  },
  {
    id: 5,
    nombre: "Senderismo Chiriqui",
    provincia: "Chiriqui",
    tipo: "Aventura",
    precio: 55,
    rating: 4.4,
    imagen:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop",
    desc: "Ascenso al Volcan Baru (3,474 m), el punto mas alto de Panama. Vista de dos oceanos desde la cima.",
  },
  {
    id: 6,
    nombre: "Relax en Cocle",
    provincia: "Cocle",
    tipo: "Relajacion",
    precio: 75,
    rating: 4.3,
    imagen: "/assets/el-valle.webp",
    desc: "Fin de semana de bienestar: termas en El Valle, spa, senderismo suave y gastronomia local.",
  },
];

export const HEROES = [
  {
    title: "Explora las maravillas de Panama",
    sub: "Un lugar donde la naturaleza y la aventura se unen",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=700&fit=crop",
  },
  {
    title: "Descubre paraisos tropicales",
    sub: "Donde el mar Caribe te espera",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=700&fit=crop",
  },
  {
    title: "Aventurate en la selva",
    sub: "Experimenta la biodiversidad unica",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=700&fit=crop",
  },
];
