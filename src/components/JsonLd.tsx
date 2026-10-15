export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://phalonne-guemkam.dev/#person",
        name: "Phalonne Christelle Guemkam Tuedjo",
        alternateName: "Phalonne Guemkam",
        givenName: "Phalonne Christelle",
        familyName: "Guemkam Tuedjo",
        jobTitle: "Software- & Full-Stack-Entwicklerin / Software Developer",
        description:
          "Portfolio von Phalonne Christelle Guemkam Tuedjo, B.Sc. in Praktischer Informatik der FH Dortmund. Spezialisiert auf resiliente Backend-Microservices mit Java/Spring Boot, moderne React-Oberflächen, angewandte KI (Llama 3.2) und verteilte MQTT-Telemetrie.",
        email: "phaloneguemkam@gmail.com",
        telephone: "+491781348626",
        url: "https://phalonne-guemkam.dev",
        image:
          "https://lh3.googleusercontent.com/aida/AEtjO1VTyA6VPBoDqYm7gcX1-ooNIYb81ghcVvCzndz2rVcPVmj3rz2V9rSyz31KSrKmZV7V4I_dJGIGBKE5HY5eVst_ML1oO71enWIOIFSwX4ESGbJBaMOXtP4nY7xNT6si1k9Uni_rEW0_JKGyAHzBuhunZJgyXuLNCV_HY7Q0vNuTU-3XeyTBzXgOqEQCYu9PLquSHG6uhs3xHWfQ3EEVia60hEOPPDNnS1NpDeAeH6_gLU6i-xKC8720jI4",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dortmund",
          addressRegion: "North Rhine-Westphalia",
          addressCountry: "DE",
        },
        alumnusOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Fachhochschule Dortmund",
            sameAs: "https://www.fh-dortmund.de",
          },
        ],
        knowsLanguage: [
          {
            "@type": "Language",
            name: "German",
            alternateName: "Deutsch (DSH-2 / C1)",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "Fluent",
          },
          {
            "@type": "Language",
            name: "French",
            alternateName: "Français (Native)",
          },
        ],
        knowsAbout: [
          "Java",
          "Spring Boot 3",
          "React.js",
          "TypeScript",
          "FastAPI",
          "Python",
          "PostgreSQL",
          "Docker",
          "MQTT",
          "Llama 3.2",
          "LoRA Fine-Tuning",
          "Software Architecture",
          "REST APIs",
          "Microservices",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://phalonne-guemkam.dev/#website",
        url: "https://phalonne-guemkam.dev",
        name: "Phalonne Guemkam Portfolio",
        description: "Offizielles Portfolio von Phalonne Guemkam — Software- & Full-Stack-Entwicklerin",
        publisher: {
          "@id": "https://phalonne-guemkam.dev/#person",
        },
        inLanguage: ["de-DE", "en-US", "fr-FR"],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://phalonne-guemkam.dev/#profilepage",
        url: "https://phalonne-guemkam.dev",
        name: "Phalonne Guemkam — Software Developer Profile",
        mainEntity: {
          "@id": "https://phalonne-guemkam.dev/#person",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
