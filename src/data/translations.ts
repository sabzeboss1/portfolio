import { ProjectData } from "@/components/ProjectModal";

export interface Translations {
  nav: {
    home: string;
    about: string;
    competencies: string;
    projects: string;
    process: string;
    education: string;
    contact: string;
    resume: string;
    letsTalk: string;
    roleSubtitle: string;
  };
  hero: {
    statusAvailable: string;
    role: string;
    bio: string;
    bioInstitution: string;
    viewWork: string;
    downloadCv: string;
    stackTitle: string;
    stat1Number: string;
    stat1Label: string;
    stat2Tag: string;
    stat2Status: string;
    stat2Title: string;
    stat2Subtitle: string;
  };
  about: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    metric1Label: string;
    metric2Label: string;
    metric3Label: string;
    bio1Part1: string;
    bio1Degree: string;
    bio1Part2: string;
    bio1Uni: string;
    bio1Part3: string;
    bio2: string;
    route: string;
    connectLink: string;
  };
  competencies: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      tag: string;
    }[];
  };
  techStack: {
    tag: string;
    title: string;
    categories: {
      all: string;
      backend: string;
      frontend: string;
      aiData: string;
      devops: string;
    };
    subtitles: Record<string, string>;
  };
  projects: {
    tag: string;
    countSuffix: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterFullstackAi: string;
    filterSystemsOop: string;
    filterWeb: string;
    swipeHint: string;
    viewDetails: string;
    list: ProjectData[];
  };
  modal: {
    verifiedBadge: string;
    coreCapabilities: string;
    projectOverview: string;
    keyDecisions: string;
    closeBtn: string;
    discussBtn: string;
  };
  process: {
    tag: string;
    title: string;
    steps: {
      num: string;
      title: string;
      description: string;
    }[];
  };
  education: {
    tag: string;
    title: string;
    credentials: {
      category: string;
      location: string;
      badgeColor: string;
      title: string;
      institution: string;
      institutionColor: string;
      description: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    copy: string;
    copied: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSubject: string;
    formSubjectOptions: {
      softwareRole: string;
      freelance: string;
      consulting: string;
      other: string;
    };
    formMessage: string;
    formMessagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    responseNote: string;
    successTitle: string;
    successDesc: string;
    successAgainBtn: string;
  };
  footer: {
    rights: string;
    status: string;
    backToTop: string;
  };
}

export const translations: Record<"de" | "en", Translations> = {
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      competencies: "Kompetenzen",
      projects: "Projekte",
      process: "Methodik",
      education: "Ausbildung",
      contact: "Kontakt",
      resume: "Lebenslauf",
      letsTalk: "Kontakt aufnehmen",
      roleSubtitle: "Softwareentwicklerin",
    },
    hero: {
      statusAvailable: "Verfügbar für Software Engineering Positionen",
      role: "Software- & Full-Stack-Entwicklerin",
      bio: "B.Sc.-Absolventin in Praktischer Informatik an der Fachhochschule Dortmund. Ich entwerfe robuste Backend-Microservices, intelligente algorithmische Workflows und moderne, benutzerzentrierte Webplattformen auf Basis fundierter Software-Engineering-Prinzipien.",
      bioInstitution: "Fachhochschule Dortmund",
      viewWork: "Projekte ansehen",
      downloadCv: "Lebenslauf herunterladen",
      stackTitle: "Kern-Technologie-Stack",
      stat1Number: "7+",
      stat1Label: "Entwickelte Systeme & Full-Stack-Projekte",
      stat2Tag: "Architektur-Fokus",
      stat2Status: "Produktion",
      stat2Title: "KI & Verteilte Telemetrie",
      stat2Subtitle: "Spring Boot • Llama 3.2",
    },
    about: {
      tag: "Über mich",
      titleLine1: "Mit Empathie entwickeln,",
      titleLine2: "mit analytischer Präzision bauen",
      metric1Label: "Kernsysteme",
      metric2Label: "Informatik FH DO",
      metric3Label: "DE (C1) • EN • FR",
      bio1Part1: "Absolventin der ",
      bio1Degree: "Praktischen Informatik (B.Sc.)",
      bio1Part2: " an der ",
      bio1Uni: "Fachhochschule Dortmund",
      bio1Part3: ". Mein akademischer Weg begann mit soliden MINT-Grundlagen in Kamerun, gefolgt von einer zielstrebigen akademischen Laufbahn in Deutschland und dem Nachweis verhandlungssicherer deutscher Sprachkompetenz auf C1-Niveau (DSH-2).",
      bio2: "Ich verbinde zuverlässige Backend-Architekturen mit ansprechenden, barrierefreien Frontend-Lösungen und bringe strukturierte analytische Problemlösungskompetenz in jede Schicht moderner Anwendungen ein.",
      route: "Kamerun ➔ Deutschland ➔ FH Dortmund",
      connectLink: "Kontakt aufnehmen",
    },
    competencies: {
      tag: "Was ich mache",
      title: "Kernkompetenzen & Fachbereiche",
      subtitle: "End-to-End Softwareentwicklung mit Schwerpunkt auf skalierbaren Backend-Diensten, sauberer Architektur und modernen Weboberflächen.",
      items: [
        {
          id: "backend",
          title: "Backend & Microservices",
          description: "Entwicklung hochperformanter REST-APIs, relationaler Datenbankschemata (PostgreSQL), Spring Data JPA, SOLID-Architekturen und Enterprise-Java-Diensten.",
          tag: "Spring Boot • JPA",
        },
        {
          id: "ai",
          title: "KI & Intelligente Systeme",
          description: "Integration von Open-Source-LLMs (Llama 3.2), LoRA-Parameter-Effizientem Fine-Tuning, deterministischen Planungsalgorithmen und FastAPI-Endpunkten.",
          tag: "FastAPI • LoRA",
        },
        {
          id: "web",
          title: "Web & Frontend-Engineering",
          description: "Entwicklung moderner, modularer SPAs mit React, TypeScript, TailwindCSS, barrierefreien Komponenten und verlässlicher clientseitiger Zustandsverwaltung.",
          tag: "React • TailwindCSS",
        },
        {
          id: "telemetry",
          title: "Verteilte Telemetrie & IoT",
          description: "Echtzeit-Publish-Subscribe-Architekturen mit Eclipse Mosquitto MQTT, nebenläufiger Thread-Orchestrierung, Docker-Containern und Event-Streaming.",
          tag: "MQTT • Docker",
        },
      ],
    },
    techStack: {
      tag: "Tools & Skills",
      title: "Technologien, mit denen ich arbeite",
      categories: {
        all: "Alle Technologien",
        backend: "Backend & Systeme",
        frontend: "Frontend & UI",
        aiData: "KI & Daten",
        devops: "DevOps & IoT",
      },
      subtitles: {
        "Java": "Core & Enterprise",
        "Spring Boot 3": "MVC, REST, JPA",
        "React.js": "Hooks, SPA, SSR",
        "TypeScript": "Typsicheres Web",
        "Python": "FastAPI & KI-Daten",
        "PostgreSQL": "Relationales Schema",
        "Docker": "Containerisierung",
        "MQTT": "Mosquitto Broker",
        "Git & GitHub": "CI/CD & GitFlow",
        "Llama 3.2": "LoRA Fine-Tuning",
        "Tailwind CSS": "Modernes Glass UI",
        "FastAPI": "High-Speed Async APIs",
      },
    },
    projects: {
      tag: "Projektübersicht",
      countSuffix: "Projekte",
      title: "Ausgewählte Projekte",
      subtitle: "Ein kuratierter Katalog aus Software-Engineering-Systemen, Desktop-Anwendungen, Web-Plattformen und wissenschaftlichen Implementierungen.",
      filterAll: "Alle",
      filterFullstackAi: "Full-Stack & KI",
      filterSystemsOop: "Systeme & OOP",
      filterWeb: "Web & Tools",
      swipeHint: "Wischen oder Pfeile nutzen",
      viewDetails: "Details ansehen →",
      list: [
        {
          id: "ai-study-planner",
          code: "FEATURED // 01",
          typeBadge: "FULL-STACK & KI",
          period: "Bachelorarbeit",
          title: "KI-Studienplaner",
          category: "Full-Stack & Angewandte KI",
          badge: "Llama-3.2",
          filename: "AI_STUDY_PLANNER.py",
          techHighlight: "Bachelorarbeits-Kernsystem",
          description:
            "Intelligente Webanwendung zur automatisierten Generierung personalisierter wöchentlicher Vorlesungs- und Lernpläne über eine hybride Architektur aus deterministischer Constraint-Engine und feinerabgestimmtem Llama-3.2-LLM.",
          bullets: [
            "Automatisierte Studienplanung mit Llama 3.2 (LoRA-Fine-Tuning) & Ollama-Fallback",
            "Institutionelle Super-Administration mit RBAC & Massenimport per CSV/Excel",
            "Dynamische Plan-Versionierung, Konfliktauflösung & Vektor-PDF-Export",
          ],
          stackText: "React • FastAPI • PostgreSQL 15+ • Llama 3.2",
          pills: ["React", "FastAPI (Python)", "PostgreSQL 15+", "Llama 3.2 (LoRA)", "Docker", "Nginx"],
          gradient: "bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900",
          linkText: "Architektur & Details ansehen →",
          longDescription:
            "Entwickelt als zentrales technologisches Artefakt für die Bachelorarbeit an der Fachhochschule Dortmund. Das System verarbeitet komplexe Modulhandbücher, Prüfungsordnungen, Vorbedingungen und individuelle studentische Zeitrestriktionen über eine duale Pipeline aus LoRA-optimiertem Llama 3.2 und einem deterministischen topologischen Constraint-Solver, um Fehlplanungen und Halluzinationen auszuschließen.",
          architectureDetails: [
            "LoRA-Adapter-Integration zur präzisen Extraktion universitärer Prüfungsordnungen und Modulbeschreibungen.",
            "Deterministischer graphbasierter Planungsalgorithmus zur Beseitigung von KI-Halluzinationen bei Modulabfolgen.",
            "Hochgradig nebenläufiger FastAPI-Microservice zur Kommunikation mit der React-SPA-Oberfläche.",
            "Containerisierte Orchestrierung mit Docker und transaktionaler PostgreSQL-Persistenz.",
          ],
        },
        {
          id: "dortmund-events",
          code: "PROJECT // 02",
          typeBadge: "FULL-STACK",
          period: "Echtzeit-Telemetrie",
          title: "Dortmund Event-Plattform",
          category: "Enterprise Backend & IoT",
          badge: "MQTT Telemetrie",
          filename: "DORTMUND_EVENTS.java",
          techHighlight: "Echtzeit-Event-Architektur",
          description:
            "Umfassendes Event-Management-System mit Spring-Boot-Backend, PostgreSQL-Persistenz, zustandsloser JWT-Sicherheit und MQTT-gestütztem Telemetrie-Streaming.",
          bullets: [
            "Echtzeit-Erfassung von Sensortelemetrie über Eclipse Mosquitto MQTT-Broker",
            "Räumliche Saal- und Sitzplatzbelegungspläne mit Live-WebSocket-Push",
            "Zustandslose JWT-Authentifizierung und rollenbasierte Zugriffskontrolle (RBAC)",
          ],
          stackText: "Java • Spring Boot • React • PostgreSQL • MQTT",
          pills: ["Java", "Spring Boot", "React", "PostgreSQL", "MQTT"],
          gradient: "bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900",
          linkText: "System-Bauplan ansehen →",
          longDescription:
            "Ein skalierbares IoT-Telemetriesystem für das urbane Veranstaltungsmanagement in Dortmund. Sensoren erfassen Besucherströme und Sitzplatzbelegungen in Echtzeit und publizieren diese über Eclipse Mosquitto. Ein mehrfädiger Spring-Boot-Ingestion-Daemon verarbeitet die Events und speichert sie mit räumlicher Indexierung in PostgreSQL.",
          architectureDetails: [
            "Spring Boot 3 Multi-Threading-Subscriber für den asynchronen Empfang von MQTT-Telemetriedaten.",
            "PostgreSQL-Schema mit optimierten räumlichen Indizes für die Zonenbelegung.",
            "Echtzeit-WebSocket-Bridge zur direkten Aktualisierung des Frontend-Dashboards ohne Polling.",
            "Fehlertolerante Docker-Compose-Topologie mit automatischer Broker-Wiederherstellung.",
          ],
        },
        {
          id: "bed-preparation",
          code: "PROJECT // 03",
          typeBadge: "SYSTEME",
          period: "Okt 2023 – Jan 2024",
          title: "Klinisches Bettenmanagementsystem",
          category: "Software-Architektur & Modellierung",
          badge: "Domänenmodell",
          filename: "BED_MANAGEMENT.uml",
          techHighlight: "Klinische Prozessautomatisierung",
          description:
            "Software-Engineering-Gruppenprojekt an der FH Dortmund. Konzeption, Domänenmodellierung und nutzerzentriertes GUI-Prototyping für das Bettenlebenszyklus-Management im Krankenhaus mittels UML.",
          bullets: [
            "Umfassende UML-Modellierung: Klassendiagramme, Zustandsautomaten und Aktivitätsabläufe",
            "Strikter Hygiene-Lebenszyklus (Kontaminiert → Desinfektion → Bereit → Belegt)",
            "Objektorientiertes Java-Domänenmodell mit klarer Trennung der Verantwortlichkeiten",
          ],
          stackText: "UML-Modellierung • GUI-Design • Software Engineering",
          pills: ["UML-Modellierung", "GUI-Design", "Software Engineering", "Java"],
          gradient: "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950",
          linkText: "Projektumfang ansehen →",
          longDescription:
            "Automatisierung klinischer Arbeitsabläufe zur Vermeidung von Engpässen bei der Bettenaufbereitung im Krankenhaus. Das Projekt formalisiert Hygienezyklen, Stationsverlegungen und Entlassungszustände durch strenge UML-Zustandsdiagramme, abgebildet auf ein sauberes objektorientiertes Java-Modell.",
          architectureDetails: [
            "Implementierung des State-Patterns für verlässliche hygienische Zustandsübergänge.",
            "Fundierte UML-Verhaltensmodelle zur Vermeidung von Race Conditions in Bettenzuweisungsschlangen.",
            "Umfangreiche Unit-Tests zur Validierung von Invarianten und regulatorischen Richtlinien.",
            "Clean-Architecture-Ansatz zur Entkopplung der Domänenlogik von Persistenz und GUI.",
          ],
        },
        {
          id: "password-generator",
          code: "PROJECT // 04",
          typeBadge: "SECURITY",
          period: "Jul 2023 – Sep 2023",
          title: "Sicherer Passwort-Generator",
          category: "Web-Utilities & IT-Sicherheit",
          badge: "Web Crypto",
          filename: "PASSWORD_GEN.js",
          techHighlight: "Kryptographische Entropie-Engine",
          description:
            "Interaktives clientseitiges Web-Tool zur Generierung kryptographisch starker Passwörter mit Entropieanzeige und Sofort-Kopierfunktion.",
          bullets: [
            "Kryptographisch sicherer Pseudozufallszahlengenerator (Crypto.getRandomValues)",
            "Echtzeit-Berechnung der Passwortentropie und Schätzung der Brute-Force-Knackzeit",
            "Keine Serverübertragung: 100% clientseitige Speichersicherheit und direktes Kopieren",
          ],
          stackText: "HTML5 • CSS3 • JavaScript",
          pills: ["HTML5", "CSS3", "JavaScript"],
          gradient: "bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900",
          linkText: "Details & Code ansehen →",
          longDescription:
            "Ein browserbasiertes kryptographisches Dienstprogramm für sicherheitsbewusste Nutzer. Durch die Nutzung der Web Cryptography API wird echte Entropie garantiert, anstatt auf das vorhersagbare Math.random zu setzen. Beinhaltet flexible Zeichensätze und visuelle Stärke-Heatmaps.",
          architectureDetails: [
            "Natives Web Crypto API (crypto.getRandomValues) verhindert vorhersagbare Zufallsmuster.",
            "Entropie-Bit-Bewertung basierend auf der Shannon-Entropieformel.",
            "Vollständiger Verzicht auf Netzwerk-Payloads für absolute Vertraulichkeit.",
          ],
        },
        {
          id: "digital-education",
          code: "PROJECT // 05",
          typeBadge: "FRONTEND",
          period: "Sep 2022 – Jan 2023",
          title: "Digitale E-Learning-Plattform",
          category: "Frontend & E-Learning",
          badge: "E-Learning",
          filename: "EDUCATION_PORTAL.html",
          techHighlight: "Lehr- & Lernplattform",
          description:
            "E-Learning-Portal für strukturierte Kursinhalte, interaktive Übungsmodule, Lernfortschritts-Tracking und responsive Barrierefreiheit über alle Bildschirmgrößen.",
          bullets: [
            "Modulare Kursnavigation mit interaktiver Übungs- und Quizlogik",
            "Im LocalStorage persistierter Lernfortschritt und Meilensteinanzeige",
            "Semantisches, WCAG-2.1-konformes Markup mit flüssigem responsivem Design",
          ],
          stackText: "HTML5 • CSS3 • JavaScript",
          pills: ["HTML5", "CSS3", "JavaScript"],
          gradient: "bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900",
          linkText: "Ablauf & Struktur ansehen →",
          longDescription:
            "Ein Bildungsportal zur Bereitstellung strukturierter Lehrmodule und praxisnaher Programmiertutorials. Mit barrierefreien Komponenten, Tastaturnavigation und optimierten Layouts für Smartphone, Tablet und Desktop.",
          architectureDetails: [
            "Semantische HTML5-Landmarks gemäß den WCAG-2.1-Richtlinien für Barrierefreiheit.",
            "Clientseitige Quiz-Auswertungslogik mit sofortigen Feedback-Schleifen.",
            "Schlanke Vanilla-Architektur ohne externe Abhängigkeiten für Ladezeiten im Millisekundenbereich.",
          ],
        },
        {
          id: "java-apps-suite",
          code: "PROJECT // 06",
          typeBadge: "DESKTOP OOP",
          period: "Mrz 2022 – Jul 2022",
          title: "Java Anwendungs-Suite",
          category: "Desktop-Software & Algorithmen",
          badge: "Minimax & JavaFX",
          filename: "JAVA_SUITE.java",
          techHighlight: "Spieltheorie & Medienverwaltung",
          description:
            "Konsolen-Tic-Tac-Toe mit Minimax-Entscheidungsbaum neben einem vollwertigen Medienverwaltungs-Prototyp mit moderner grafischer JavaFX-Oberfläche.",
          bullets: [
            "Unschlagbare KI-Gegner-Implementierung mittels Minimax-Suchalgorithmus",
            "JavaFX-Desktop-GUI zum Katalogisieren, Sortieren und Filtern von Multimediainhalten",
            "Objektorientierte Dateiserialisierung und robuste Ausnahmebehandlungshierarchie",
          ],
          stackText: "Java • JavaFX • OOP",
          pills: ["Java", "JavaFX", "OOP"],
          gradient: "bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900",
          linkText: "Architektur ansehen →",
          longDescription:
            "Eine zweigeteilte Software-Suite bestehend aus einem spieltheoretischen Lösungsalgorithmus und einer Desktop-Anwendung. Entwickelt zur Demonstration anspruchsvoller objektorientierter Entwurfsmuster, Rekursion und grafischer Ereignisverarbeitung in Java.",
          architectureDetails: [
            "Rekursiver Minimax-Algorithmus mit Konzepten der Alpha-Beta-Pruning-Optimierung.",
            "JavaFX Model-View-Controller (MVC) Architektur zur strikten Entkopplung von UI und Daten.",
            "Eigene binäre Serialisierung zur dauerhaften Sicherung des Multimedia-Bibliothekszustands.",
          ],
        },
        {
          id: "interactive-systems-engine",
          code: "PROJECT // 07",
          typeBadge: "SYSTEME OOP",
          period: "Hochschulprojekt",
          title: "Interaktive System-Engine",
          category: "Kernsysteme & Nebenläufigkeit",
          badge: "Nebenläufigkeit",
          filename: "CONCURRENT_ENGINE.java",
          techHighlight: "Mehrfädige Java-Architektur",
          description:
            "Vertiefte objektorientierte Programmierstudie zu abstrakten Klassenhierarchien, Polymorphie, Thread-Synchronisation, Nebenläufigkeit und ereignisgesteuerten JavaFX-Komponenten.",
          bullets: [
            "Multi-Thread-Worker-Pool mit synchronisierter Ressourcenverwaltung",
            "Umfangreiche Vererbungshierarchien und Schnittstellen-Polymorphie",
            "Ereignisgesteuerte UI-Aktualisierungen mit JavaFX-Concurrency-Bindings",
          ],
          stackText: "Java • Multithreading • Polymorphie",
          pills: ["Java", "Multithreading", "Polymorphie"],
          gradient: "bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-900",
          linkText: "Code & Struktur ansehen →",
          longDescription:
            "Eine fortgeschrittene Untersuchung von Java-Nebenläufigkeit und polymorphen Entwurfsmustern. Behandelt Synchronisationsprimitive, Locks, Condition-Variablen und die Echtzeit-Visualisierung nebenläufiger Threads in einer JavaFX-Oberfläche.",
          architectureDetails: [
            "Threadsichere Producer-Consumer-Queue zur Vermeidung von Deadlocks und Race Conditions.",
            "Umfassende Schnittstellenhierarchie nach dem Open-Closed-Prinzip.",
            "JavaFX Task- und Service-Hintergrund-Threads verhindern das Einfrieren der Benutzeroberfläche.",
          ],
        },
      ],
    },
    modal: {
      verifiedBadge: "Geprüfte Produktions- & Hochschul-Implementierung",
      coreCapabilities: "Kernfunktionen & Merkmale",
      projectOverview: "Projektübersicht",
      keyDecisions: "Zentrale Architektur-Entscheidungen",
      closeBtn: "Schließen",
      discussBtn: "Über dieses System sprechen",
    },
    process: {
      tag: "Meine Methodik",
      title: "Mein Software-Engineering-Lebenszyklus",
      steps: [
        {
          num: "01",
          title: "Anforderungen & UML",
          description: "User Stories, Domänenmodellierung, Zustandsdiagramme und Entity-Relationship-Spezifikationen.",
        },
        {
          num: "02",
          title: "Architektur",
          description: "Schemanormalisierung (PostgreSQL), API-Verträge, Datenflussgrenzen und Sicherheitskonzepte.",
        },
        {
          num: "03",
          title: "Entwicklung",
          description: "Strikte OOP-Prinzipien, Spring Boot Controller, FastAPI Routen und barrierefreie React-UIs.",
        },
        {
          num: "04",
          title: "Integration",
          description: "Mosquitto MQTT Event-Broker, KI-Modell-Inferenz-Wrapper und Docker Multi-Container-Setups.",
        },
        {
          num: "05",
          title: "Test & Deployment",
          description: "Unit-Test-Abdeckung, Randfall-Validierung, automatisierte Build-Pipelines und Produktionsreife.",
        },
      ],
    },
    education: {
      tag: "Werdegang",
      title: "Akademische & Sprachliche Qualifikationen",
      credentials: [
        {
          category: "Hochschulabschluss",
          location: "Dortmund, Deutschland",
          badgeColor: "bg-blue-100 text-blue-800",
          title: "B.Sc. Praktische Informatik",
          institution: "Fachhochschule Dortmund",
          institutionColor: "text-brand-700",
          description:
            "Schwerpunkte auf Softwarearchitektur, verteilten & nebenläufigen Systemen, Algorithmen & Datenstrukturen, relationalen Datenbanken und intelligenten Softwaresystemen.",
        },
        {
          category: "Sprachkompetenz",
          location: "Akkreditiert C1",
          badgeColor: "bg-emerald-100 text-emerald-800",
          title: "DSH-2 (C1-Äquivalent Deutsch)",
          institution: "Deutsche Sprachprüfung für den Hochschulzugang",
          institutionColor: "text-emerald-700",
          description:
            "Verhandlungssichere fachliche und technische Kommunikation auf Deutsch. Dreisprachig: Deutsch (C1), Englisch (Fließend) und Französisch (Muttersprache).",
        },
        {
          category: "MINT-Grundlagen",
          location: "Kamerun",
          badgeColor: "bg-purple-100 text-purple-800",
          title: "Abitur / Baccalauréat (MINT)",
          institution: "Gymnasium Bafang & Goethe-Institut",
          institutionColor: "text-purple-700",
          description:
            "Fundierte mathematisch-naturwissenschaftliche Ausbildung. Goethe-Zertifikat vor dem Umzug nach Deutschland zur Aufnahme des Universitätsstudiums.",
        },
      ],
    },
    contact: {
      tag: "Kontakt aufnehmen",
      title: "Haben Sie ein Projekt oder eine offene Stelle?",
      description:
        "Ich bin offen für Vollzeitpositionen als Softwareentwicklerin / Full-Stack-Entwicklerin in Deutschland (NRW / hybrid / remote). Lassen Sie uns über die Umsetzung wirkungsvoller digitaler Lösungen sprechen.",
      emailLabel: "Direkte E-Mail",
      phoneLabel: "Telefon / Mobil",
      locationLabel: "Standort",
      locationValue: "Dortmund, Nordrhein-Westfalen, Deutschland",
      copy: "Kopieren",
      copied: "Kopiert! ✓",
      formName: "Ihr Name",
      formNamePlaceholder: "z. B. Dr. Alex Weber",
      formEmail: "Ihre E-Mail",
      formEmailPlaceholder: "alex.weber@unternehmen.de",
      formSubject: "Art der Anfrage / Position",
      formSubjectOptions: {
        softwareRole: "Vollzeitstelle Softwareentwicklung (Spring / React / Python)",
        freelance: "Freelance Web- / Full-Stack-Projekt",
        consulting: "Beratung zu KI & verteilten Systemen",
        other: "Allgemeiner fachlicher Austausch & Vernetzung",
      },
      formMessage: "Ihre Nachricht",
      formMessagePlaceholder: "Beschreiben Sie Ihr Team, Ihren Tech-Stack oder das geplante Projekt...",
      submitBtn: "Nachricht senden",
      submittingBtn: "Wird verarbeitet...",
      responseNote: "Antwort in der Regel innerhalb von 24 Stunden. Vertraulichkeit garantiert.",
      successTitle: "Nachricht vorbereitet!",
      successDesc:
        "Vielen Dank! Ihre Nachricht wurde vorbereitet. Falls Ihr E-Mail-Programm nicht automatisch geöffnet wurde, können Sie mich auch direkt erreichen unter:",
      successAgainBtn: "Weitere Nachricht senden",
    },
    footer: {
      rights: "© 2026 Phalonne Christelle Guemkam Tuedjo. Alle Rechte vorbehalten.",
      status: "Alle Systeme & APIs betriebsbereit",
      backToTop: "Nach oben",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      competencies: "Competencies",
      projects: "Projects",
      process: "Process",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
      letsTalk: "Let's Talk",
      roleSubtitle: "Software Developer",
    },
    hero: {
      statusAvailable: "Available for Software Engineering Roles",
      role: "Software & Full-Stack Developer",
      bio: "B.Sc. graduate in Practical Computer Science from Fachhochschule Dortmund. I design resilient backend microservices, intelligent algorithmic workflows, and clean, responsive web platforms built on rigorous software engineering principles.",
      bioInstitution: "Fachhochschule Dortmund",
      viewWork: "View My Work",
      downloadCv: "Download CV",
      stackTitle: "Core Engineering Stack",
      stat1Number: "7+",
      stat1Label: "Engineered Systems & Full-Stack Projects",
      stat2Tag: "Architectural Focus",
      stat2Status: "Production",
      stat2Title: "AI & Distributed Telemetry",
      stat2Subtitle: "Spring Boot • Llama 3.2",
    },
    about: {
      tag: "About Me",
      titleLine1: "Engineering with Empathy,",
      titleLine2: "Building with Analytical Rigor",
      metric1Label: "Core Systems",
      metric2Label: "Informatik FH DO",
      metric3Label: "DE (C1) • EN • FR",
      bio1Part1: "Graduated in ",
      bio1Degree: "Praktische Informatik (B.Sc.)",
      bio1Part2: " from ",
      bio1Uni: "Fachhochschule Dortmund",
      bio1Part3: ". My technical journey began with top-tier STEM foundations in Cameroon, followed by successful academic integration in Germany, attaining professional C1 German mastery (DSH-2).",
      bio2: "I synthesize solid back-end architecture with human-centered front-end experiences, bringing structured problem-solving to every layer of the modern application stack.",
      route: "Cameroon ➔ Germany ➔ FH Dortmund",
      connectLink: "Connect with Me",
    },
    competencies: {
      tag: "What I Do",
      title: "Core Competencies & Domains",
      subtitle: "End-to-end full-stack development with deep focus on concurrent services, clean architecture, and modern web interfaces.",
      items: [
        {
          id: "backend",
          title: "Backend & Microservices",
          description: "Design of high-throughput REST APIs, relational schemas (PostgreSQL), Spring Data JPA, SOLID architecture, and enterprise Java backend services.",
          tag: "Spring Boot • JPA",
        },
        {
          id: "ai",
          title: "AI & Intelligent Systems",
          description: "Integration of open-source LLMs (Llama 3.2), LoRA parameter-efficient fine-tuning, deterministic scheduling algorithms, and FastAPI endpoints.",
          tag: "FastAPI • LoRA",
        },
        {
          id: "web",
          title: "Web & UI Engineering",
          description: "Development of modern, modular SPAs with React, TypeScript, TailwindCSS, accessible component hierarchies, and resilient client state handling.",
          tag: "React • TailwindCSS",
        },
        {
          id: "telemetry",
          title: "Distributed Telemetry",
          description: "Real-time publish-subscribe architectures using Eclipse Mosquitto MQTT, concurrent thread orchestration, Docker containers, and edge events.",
          tag: "MQTT • Docker",
        },
      ],
    },
    techStack: {
      tag: "Tools & Skills",
      title: "Technologies I Work With",
      categories: {
        all: "All Technologies",
        backend: "Backend & Systems",
        frontend: "Frontend & UI",
        aiData: "AI & Data",
        devops: "DevOps & IoT",
      },
      subtitles: {
        "Java": "Core & Enterprise",
        "Spring Boot 3": "MVC, REST, JPA",
        "React.js": "Hooks, SPA, SSR",
        "TypeScript": "Type-Safe Web",
        "Python": "FastAPI & AI Data",
        "PostgreSQL": "Relational Schema",
        "Docker": "Containerization",
        "MQTT": "Mosquitto Broker",
        "Git & GitHub": "CI/CD & GitFlow",
        "Llama 3.2": "LoRA Fine-Tuning",
        "Tailwind CSS": "Modern Glass UI",
        "FastAPI": "High-Speed Async APIs",
      },
    },
    projects: {
      tag: "Portfolio Directory",
      countSuffix: "Projects",
      title: "Selected Projects",
      subtitle: "A catalogue of software engineering projects, desktop applications, web interfaces, and academic implementations.",
      filterAll: "All",
      filterFullstackAi: "Full-Stack & AI",
      filterSystemsOop: "Systems & OOP",
      filterWeb: "Web & Utilities",
      swipeHint: "Swipe or use arrows",
      viewDetails: "View Details →",
      list: [
        {
          id: "ai-study-planner",
          code: "FEATURED // 01",
          typeBadge: "FULL-STACK & AI",
          period: "Bachelor Thesis",
          title: "AI Study Planner",
          category: "Full-Stack & Applied AI",
          badge: "Llama-3.2",
          filename: "AI_STUDY_PLANNER.py",
          techHighlight: "Bachelor Thesis Focus System",
          description:
            "Intelligent web application generating personalized weekly university schedules via a hybrid deterministic constraint engine + fine-tuned Llama 3.2 LLM architecture.",
          bullets: [
            "Automated planning with Llama 3.2 (LoRA fine-tuning) & Ollama fallback",
            "Institutional Super Administration with RBAC & bulk CSV/Excel import",
            "Dynamic schedule versioning, conflict resolution & vector PDF export",
          ],
          stackText: "React • FastAPI • PostgreSQL 15+ • Llama 3.2",
          pills: ["React", "FastAPI (Python)", "PostgreSQL 15+", "Llama 3.2 (LoRA)", "Docker", "Nginx"],
          gradient: "bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900",
          linkText: "Explore Architecture & Specs →",
          longDescription:
            "Developed as the central engineering artifact for the B.Sc. thesis at FH Dortmund. The system takes complex academic module catalogues, prerequisites, and student time constraints, applying a hybrid pipeline of fine-tuned Llama 3.2 (via LoRA parameter efficiency) and a deterministic topological constraint solver to prevent curriculum bottlenecks.",
          architectureDetails: [
            "LoRA adapter integration for tailored extraction of academic degree regulations and syllabi.",
            "Deterministic graph-based scheduling algorithm eliminating AI hallucinations for prerequisites.",
            "High-concurrency FastAPI microservice communicating with React SPA interface.",
            "Containerized orchestration via Docker with PostgreSQL transactional storage.",
          ],
        },
        {
          id: "dortmund-events",
          code: "PROJECT // 02",
          typeBadge: "FULL-STACK",
          period: "Real-Time Telemetry",
          title: "Dortmund Event Platform",
          category: "Enterprise Backend & IoT",
          badge: "MQTT Telemetry",
          filename: "DORTMUND_EVENTS.java",
          techHighlight: "Real-Time Event Architecture",
          description:
            "Comprehensive event management system with Spring Boot backend, PostgreSQL persistence, stateless JWT security, and MQTT-driven telemetry streaming.",
          bullets: [
            "Real-time sensor telemetry ingestion via Eclipse Mosquitto broker",
            "Spatial venue seating occupancy maps with live WebSocket push",
            "Stateless JWT authentication and role-based access control",
          ],
          stackText: "Java • Spring Boot • React • PostgreSQL • MQTT",
          pills: ["Java", "Spring Boot", "React", "PostgreSQL", "MQTT"],
          gradient: "bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900",
          linkText: "View System Blueprint →",
          longDescription:
            "A scalable IoT telemetry system designed for metropolitan venue management in Dortmund. Sensors publish crowd density and seat occupancy over Eclipse Mosquitto MQTT broker channels, which are ingested by a multi-threaded Spring Boot ingestion daemon and persisted into PostgreSQL with spatial indexing.",
          architectureDetails: [
            "Spring Boot 3 multi-threaded asynchronous subscriber consuming MQTT telemetry messages.",
            "PostgreSQL schema designed with indexed spatial queries for venue zone occupancy.",
            "Real-time WebSocket bridge pushing state updates to the frontend dashboard without polling.",
            "Docker compose topology ensuring fault-tolerant broker recovery.",
          ],
        },
        {
          id: "bed-preparation",
          code: "PROJECT // 03",
          typeBadge: "SYSTEMS",
          period: "Oct 2023 – Jan 2024",
          title: "Bed Preparation System",
          category: "Software Architecture & Modeling",
          badge: "Domain Model",
          filename: "BED_MANAGEMENT.uml",
          techHighlight: "Clinical Process Automation",
          description:
            "Software engineering group project at FH Dortmund. Concept, domain modeling, and user-centric GUI prototyping for healthcare bed lifecycle management using UML diagrams.",
          bullets: [
            "Comprehensive UML modeling: Class diagrams, state machines, and activity workflows",
            "Strict hygiene lifecycle state machine (Contaminated → Disinfecting → Prepared → Occupied)",
            "Java domain model with clean separation of concerns and validation logic",
          ],
          stackText: "UML Modeling • GUI Design • Software Engineering",
          pills: ["UML Modeling", "GUI Design", "Software Engineering", "Java"],
          gradient: "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950",
          linkText: "View Concept Scope →",
          longDescription:
            "Engineered clinical workflow automation to solve hospital capacity bottlenecks during bed turnaround. The project formalizes hospital hygiene cycles, ward transfers, and patient discharge states using strict UML state machine specifications, mapped to an object-oriented Java domain model.",
          architectureDetails: [
            "State Pattern implementation handling sanitary transitions.",
            "Rigorous UML behavioral models ensuring zero race-conditions in bed assignment queues.",
            "Extensive unit testing validating state transition invariants and regulatory compliance.",
            "Clean Architecture decoupling core domain logic from persistence and interface drivers.",
          ],
        },
        {
          id: "password-generator",
          code: "PROJECT // 04",
          typeBadge: "SECURITY",
          period: "Jul 2023 – Sep 2023",
          title: "Secure Password Generator",
          category: "Web Utilities & Security",
          badge: "Web Crypto",
          filename: "PASSWORD_GEN.js",
          techHighlight: "Cryptographic Entropy Engine",
          description:
            "Interactive client-side web utility for customizable, cryptographically strong password creation with entropy indicators and copy-to-clipboard functionality.",
          bullets: [
            "Cryptographically secure pseudo-random number generator (Crypto.getRandomValues)",
            "Real-time password entropy calculation and brute-force crack time estimates",
            "Zero server telemetry: 100% client-side memory safety and instant clipboard copy",
          ],
          stackText: "HTML5 • CSS3 • JavaScript",
          pills: ["HTML5", "CSS3", "JavaScript"],
          gradient: "bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900",
          linkText: "View Source / Specs →",
          longDescription:
            "A client-side cryptographic utility designed for security-conscious users. Utilizing the browser Web Cryptography API, it guarantees entropy without relying on standard Math.random pseudo-randomness. Includes custom character set options and visual strength heatmaps.",
          architectureDetails: [
            "Native Web Crypto API (crypto.getRandomValues) preventing predictable seed patterns.",
            "Entropy bit scoring computed via Shannon entropy formulas.",
            "Zero network payloads ensuring complete credential privacy.",
          ],
        },
        {
          id: "digital-education",
          code: "PROJECT // 05",
          typeBadge: "FRONTEND",
          period: "Sep 2022 – Jan 2023",
          title: "Digital Education Web App",
          category: "Frontend & E-Learning",
          badge: "E-Learning",
          filename: "EDUCATION_PORTAL.html",
          techHighlight: "Coursework Delivery Platform",
          description:
            "E-learning portal built for structured coursework delivery, interactive module exercises, progress state tracking, and responsive accessibility across viewports.",
          bullets: [
            "Modular coursework navigation with interactive practice quiz logic",
            "LocalStorage-persisted learning progress and completion milestones",
            "Semantic WCAG 2.1 accessible markup with responsive fluid design",
          ],
          stackText: "HTML5 • CSS3 • JavaScript",
          pills: ["HTML5", "CSS3", "JavaScript"],
          gradient: "bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900",
          linkText: "View Application Flow →",
          longDescription:
            "An educational portal delivering structured modules and step-by-step programming tutorials. Features accessible components, keyboard navigation, and responsive layouts tailored for mobile, tablet, and desktop students.",
          architectureDetails: [
            "Semantic HTML5 landmarks adhering to WCAG 2.1 accessibility guidelines.",
            "Client-side quiz evaluation engine with instant feedback loops.",
            "Zero-dependency vanilla architecture optimizing load time to sub-second.",
          ],
        },
        {
          id: "java-apps-suite",
          code: "PROJECT // 06",
          typeBadge: "DESKTOP OOP",
          period: "Mar 2022 – Jul 2022",
          title: "Java Applications Suite",
          category: "Desktop Software & Algorithms",
          badge: "Minimax & JavaFX",
          filename: "JAVA_SUITE.java",
          techHighlight: "Game Theory & Media GUI",
          description:
            "Console Tic-Tac-Toe logic engine with minimax evaluation alongside a full Media Management Prototype featuring a rich JavaFX graphical interface.",
          bullets: [
            "Unbeatable AI opponent implementation using minimax adversarial search",
            "JavaFX desktop GUI for cataloguing, sorting, and filtering multimedia entries",
            "Object-oriented file serialization and exception handling hierarchy",
          ],
          stackText: "Java • JavaFX • OOP",
          pills: ["Java", "JavaFX", "OOP"],
          gradient: "bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900",
          linkText: "View Architecture →",
          longDescription:
            "A dual-purpose software engineering suite comprising an algorithmic game theory solver and a desktop GUI application. Built to demonstrate rigorous object-oriented design patterns, recursion, and graphical event bindings in Java.",
          architectureDetails: [
            "Recursive minimax algorithm with alpha-beta pruning concepts.",
            "JavaFX Model-View-Controller (MVC) decoupling UI views from storage layers.",
            "Custom binary serialization for persistent multimedia library states.",
          ],
        },
        {
          id: "interactive-systems-engine",
          code: "PROJECT // 07",
          typeBadge: "SYSTEMS OOP",
          period: "Academic Study",
          title: "Interactive Systems Engine",
          category: "Core Systems & Concurrency",
          badge: "Concurrency",
          filename: "CONCURRENT_ENGINE.java",
          techHighlight: "Multithreaded Java Architecture",
          description:
            "Rigorous object-oriented programming study exploring abstract class hierarchies, polymorphism, thread synchronization, concurrency, and event-driven JavaFX components.",
          bullets: [
            "Multi-threaded worker pool with synchronized resource sharing",
            "Deep inheritance hierarchies and interface polymorphism",
            "Event-driven UI updates with JavaFX concurrency task bindings",
          ],
          stackText: "Java • Multithreading • Polymorphism",
          pills: ["Java", "Multithreading", "Polymorphism"],
          gradient: "bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-900",
          linkText: "View Code Breakdown →",
          longDescription:
            "An advanced investigation into Java concurrency and polymorphic design patterns. Explores thread synchronization primitives, locks, condition variables, and real-time visualization of concurrent tasks in a JavaFX interface.",
          architectureDetails: [
            "Thread-safe producer-consumer queue design avoiding deadlock states.",
            "Extensive polymorphic interface hierarchy showcasing Open-Closed Principle.",
            "JavaFX Task and Service worker threads preventing UI thread freezing.",
          ],
        },
      ],
    },
    modal: {
      verifiedBadge: "Verified Production & Academic Implementation",
      coreCapabilities: "Core Capabilities",
      projectOverview: "Project Overview",
      keyDecisions: "Key Engineering Decisions",
      closeBtn: "Close",
      discussBtn: "Discuss this System",
    },
    process: {
      tag: "My Methodology",
      title: "Engineering Lifecycle I Follow",
      steps: [
        {
          num: "01",
          title: "Requirements & UML",
          description: "User stories, domain modeling, state diagrams, and entity-relationship specifications.",
        },
        {
          num: "02",
          title: "Architecture",
          description: "Schema normalization (PostgreSQL), API contracts, data flow boundaries, and security design.",
        },
        {
          num: "03",
          title: "Development",
          description: "Strict OOP practices, Spring Boot controllers, FastAPI routing, and accessible React interfaces.",
        },
        {
          num: "04",
          title: "Integration",
          description: "Mosquitto MQTT event brokers, AI model inference wrappers, and Docker multi-container setups.",
        },
        {
          num: "05",
          title: "Test & Deploy",
          description: "Unit test coverage, edge constraint verification, automated build pipelines, and production prep.",
        },
      ],
    },
    education: {
      tag: "Background",
      title: "Academic & Language Credentials",
      credentials: [
        {
          category: "Higher Education",
          location: "Dortmund, Germany",
          badgeColor: "bg-blue-100 text-blue-800",
          title: "B.Sc. Praktische Informatik",
          institution: "Fachhochschule Dortmund",
          institutionColor: "text-brand-700",
          description:
            "Core emphasis on software architecture, concurrent systems, algorithms & data structures, relational database management, and intelligent software agents.",
        },
        {
          category: "Language Proficiency",
          location: "Accredited C1",
          badgeColor: "bg-emerald-100 text-emerald-800",
          title: "DSH-2 (German C1 Equivalent)",
          institution: "Deutsche Sprachprüfung für den Hochschulzugang",
          institutionColor: "text-emerald-700",
          description:
            "Fluent technical and professional communication in German. Trilingual proficiency: German (C1), English (Fluent), and French (Native).",
        },
        {
          category: "STEM Foundations",
          location: "Cameroon",
          badgeColor: "bg-purple-100 text-purple-800",
          title: "Baccalauréat / Abitur (STEM)",
          institution: "Gymnasium Bafang & Goethe-Institut",
          institutionColor: "text-purple-700",
          description:
            "Rigorous mathematical and natural sciences track. Goethe-Institut German certification prior to relocating to Germany for university studies.",
        },
      ],
    },
    contact: {
      tag: "Let's Connect",
      title: "Have a project or engineering role in mind?",
      description:
        "I am open to full-time Software Developer / Full-Stack Engineer opportunities in Germany (NRW / hybrid / remote). Let's talk about building impactful digital solutions together.",
      emailLabel: "Direct Email",
      phoneLabel: "Phone / Mobile",
      locationLabel: "Location",
      locationValue: "Dortmund, North Rhine-Westphalia, Germany",
      copy: "Copy",
      copied: "Copied! ✓",
      formName: "Your Name",
      formNamePlaceholder: "e.g. Dr. Alex Weber",
      formEmail: "Your Email",
      formEmailPlaceholder: "alex.weber@company.de",
      formSubject: "Inquiry Type / Role",
      formSubjectOptions: {
        softwareRole: "Full-Time Software Engineer Role (Spring / React / Python)",
        freelance: "Freelance Web / Full-Stack Project",
        consulting: "AI & Distributed System Consultation",
        other: "General Tech Inquiry & Networking",
      },
      formMessage: "Your Message",
      formMessagePlaceholder: "Tell me about your team, tech stack, or engineering project...",
      submitBtn: "Send Message",
      submittingBtn: "Processing...",
      responseNote: "Direct response usually within 24 hours. Privacy assured.",
      successTitle: "Message Ready!",
      successDesc:
        "Thank you! Your message was prepared. If your email client didn't automatically launch, you can directly reach me at:",
      successAgainBtn: "Send Another Message",
    },
    footer: {
      rights: "© 2026 Phalonne Christelle Guemkam Tuedjo. All rights reserved.",
      status: "All Systems & APIs Operational",
      backToTop: "Back to Top",
    },
  },
};
