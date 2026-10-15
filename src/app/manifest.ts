import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phalonne Guemkam — Software- & Full-Stack-Entwicklerin",
    short_name: "Phalonne PG",
    description: "Portfolio von Phalonne Guemkam - Softwareentwicklerin (Spring Boot, React, FastAPI, KI)",
    start_url: "/",
    display: "standalone",
    background_color: "#f1f3f9",
    theme_color: "#5666f7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
