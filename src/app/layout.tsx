import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/context/LanguageContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#f1f3f9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://phalonne-guemkam.dev"),
  title: {
    default: "Phalonne Guemkam — Software- & Full-Stack-Entwicklerin | Spring Boot, React, KI",
    template: "%s | Phalonne Guemkam",
  },
  description:
    "Portfolio von Phalonne Christelle Guemkam Tuedjo, B.Sc. in Praktischer Informatik der FH Dortmund. Spezialisiert auf resiliente Spring-Boot-Microservices, performante React-Webanwendungen, angewandte KI (Llama 3.2, LoRA) und verteilte MQTT-Telemetrie.",
  keywords: [
    "Phalonne Guemkam",
    "Phalonne Christelle Guemkam Tuedjo",
    "Softwareentwicklerin Dortmund",
    "Software Developer Germany",
    "Full-Stack Entwicklerin",
    "Spring Boot Developer",
    "React Developer",
    "FastAPI Python",
    "FH Dortmund Informatik",
    "Software Engineer Germany",
    "PostgreSQL",
    "MQTT Telemetry",
    "Llama 3.2",
    "Portfolio Développeur Full-Stack",
  ],
  authors: [{ name: "Phalonne Christelle Guemkam Tuedjo", url: "https://phalonne-guemkam.dev" }],
  creator: "Phalonne Christelle Guemkam Tuedjo",
  publisher: "Phalonne Guemkam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US", "fr_FR"],
    url: "https://phalonne-guemkam.dev",
    title: "Phalonne Guemkam — Software- & Full-Stack-Entwicklerin",
    description:
      "B.Sc.-Absolventin in Praktischer Informatik der FH Dortmund. Konzeption robuster Backend-Microservices, intelligenter algorithmischer Workflows und moderner Webanwendungen.",
    siteName: "Phalonne Guemkam Portfolio",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1VTyA6VPBoDqYm7gcX1-ooNIYb81ghcVvCzndz2rVcPVmj3rz2V9rSyz31KSrKmZV7V4I_dJGIGBKE5HY5eVst_ML1oO71enWIOIFSwX4ESGbJBaMOXtP4nY7xNT6si1k9Uni_rEW0_JKGyAHzBuhunZJgyXuLNCV_HY7Q0vNuTU-3XeyTBzXgOqEQCYu9PLquSHG6uhs3xHWfQ3EEVia60hEOPPDNnS1NpDeAeH6_gLU6i-xKC8720jI4",
        width: 1200,
        height: 630,
        alt: "Phalonne Guemkam — Software- & Full-Stack-Entwicklerin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phalonne Guemkam — Software- & Full-Stack-Entwicklerin",
    description:
      "B.Sc. in Praktischer Informatik an der FH Dortmund. Spezialisiert auf Spring Boot, React, FastAPI und verteilte Telemetrie.",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1VTyA6VPBoDqYm7gcX1-ooNIYb81ghcVvCzndz2rVcPVmj3rz2V9rSyz31KSrKmZV7V4I_dJGIGBKE5HY5eVst_ML1oO71enWIOIFSwX4ESGbJBaMOXtP4nY7xNT6si1k9Uni_rEW0_JKGyAHzBuhunZJgyXuLNCV_HY7Q0vNuTU-3XeyTBzXgOqEQCYu9PLquSHG6uhs3xHWfQ3EEVia60hEOPPDNnS1NpDeAeH6_gLU6i-xKC8720jI4",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="relative min-h-screen overflow-x-hidden font-sans selection:bg-brand-500 selection:text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
