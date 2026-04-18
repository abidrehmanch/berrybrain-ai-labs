export type Lang = "en" | "de";

export const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      industries: "Industries",
      about: "About",
      pov: "Approach",
      assessment: "AI Assessment",
      contact: "Contact",
      startProject: "Start a project",
    },
    hero: {
      badge: "AI engineering studio · From idea to deployment",
      title1: "Build intelligent AI systems",
      title2: "that",
      titleAccent: "scale your business.",
      subtitle:
        "We're an AI engineering company helping startups and enterprises design, build and deploy production-ready solutions using Generative AI, Machine Learning and scalable backend systems.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Take the AI Assessment",
      footer: "Generative AI · ML & Deep Learning · Backend & MLOps",
    },
    services: {
      kicker: "Our Services",
      title1: "End-to-end AI engineering,",
      titleAccent: "built for production.",
      subtitle:
        "From research to reliable systems — we cover the full AI stack so your team ships real, high-impact applications.",
    },
    pov: {
      kicker: "Our Approach",
      title1: "How we make your company an",
      titleAccent: "AI leader in your industry.",
      subtitle:
        "Prove it first, then scale. The Proof of Value is your low-risk entry. The AI Growth Program is what we're known for: long-term, measurable AI transformation.",
      povTitle: "Proof of Value",
      povTag: "Low-risk entry",
      povDesc:
        "A focused 4–6 week engagement to validate one high-impact AI use case with measurable results.",
      povBullets: [
        "Use case discovery & scoping",
        "Working prototype in production",
        "Clear business KPIs measured",
        "Roadmap for scale-up",
      ],
      povCta: "Start with Proof of Value",
      growthTitle: "AI Growth Program",
      growthTag: "Long-term transformation",
      growthDesc:
        "A multi-quarter partnership to embed AI across your operations — products, processes and decision making.",
      growthBullets: [
        "Dedicated AI engineering team",
        "Multiple AI initiatives in parallel",
        "MLOps, governance & training",
        "Continuous measurable ROI",
      ],
      growthCta: "Explore Growth Program",
    },
    assessment: {
      kicker: "AI Readiness Assessment",
      title1: "Discover where AI can have",
      titleAccent: "the biggest impact in your business.",
      subtitle:
        "Answer a few short questions and we'll send you a personalised AI roadmap and a free 30-minute consultation.",
      step: "Step",
      of: "of",
      next: "Next",
      back: "Back",
      submit: "Get my AI roadmap",
      submitting: "Sending…",
      successTitle: "Thank you!",
      successDesc:
        "We received your assessment. Our team will be in touch within 24 hours with your personalised AI roadmap.",
      errorTitle: "Something went wrong",
      errorDesc: "Please try again or contact us directly.",
      q: {
        industry: { label: "Which industry are you in?", options: ["Healthcare", "Finance & Insurance", "E-commerce & Retail", "Manufacturing", "Technology / SaaS", "Logistics", "Other"] },
        size: { label: "How big is your company?", options: ["1–10 employees", "11–50 employees", "51–200 employees", "200+ employees"] },
        maturity: { label: "What is your current AI maturity?", options: ["No AI yet — exploring", "Some experiments / pilots", "AI in production", "Scaling AI across the company"] },
        goals: { label: "What are your main AI goals? (select all that apply)", options: ["Automate manual workflows", "Improve customer experience", "Predict & forecast", "Generative AI / chatbots", "Computer vision", "Data-driven decisions"] },
        budget: { label: "What's your initial budget range?", options: ["< €10k", "€10k – €50k", "€50k – €150k", "€150k+", "Not sure yet"] },
        timeline: { label: "When would you like to start?", options: ["ASAP", "1–3 months", "3–6 months", "Just exploring"] },
        contact: {
          name: "Your name",
          email: "Work email",
          company: "Company",
          message: "Anything else we should know? (optional)",
        },
      },
    },
    footer: {
      tagline:
        "An AI engineering studio building production-ready Generative AI, Machine Learning and backend systems.",
      navTitle: "Navigate",
      legalTitle: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "All rights reserved.",
    },
    lang: { en: "EN", de: "DE" },
  },
  de: {
    nav: {
      services: "Leistungen",
      process: "Prozess",
      industries: "Branchen",
      about: "Über uns",
      pov: "Ansatz",
      assessment: "KI-Assessment",
      contact: "Kontakt",
      startProject: "Projekt starten",
    },
    hero: {
      badge: "KI-Engineering Studio · Von der Idee bis zum Deployment",
      title1: "Intelligente KI-Systeme bauen,",
      title2: "die",
      titleAccent: "Ihr Geschäft skalieren.",
      subtitle:
        "Wir sind ein KI-Engineering-Unternehmen, das Startups und Konzernen hilft, produktionsreife Lösungen mit Generativer KI, Machine Learning und skalierbaren Backend-Systemen zu entwerfen, zu bauen und zu deployen.",
      ctaPrimary: "Projekt starten",
      ctaSecondary: "KI-Assessment starten",
      footer: "Generative KI · ML & Deep Learning · Backend & MLOps",
    },
    services: {
      kicker: "Unsere Leistungen",
      title1: "End-to-End KI-Engineering,",
      titleAccent: "produktionsreif gebaut.",
      subtitle:
        "Von der Forschung bis zu zuverlässigen Systemen — wir decken den gesamten KI-Stack ab, damit Ihr Team echte, wirkungsvolle Anwendungen ausliefert.",
    },
    pov: {
      kicker: "Unser Ansatz",
      title1: "Wie wir Ihr Unternehmen zum",
      titleAccent: "KI-Leader Ihrer Branche machen.",
      subtitle:
        "Erst beweisen, dann skalieren. Der Proof of Value ist Ihr risikoarmer Einstieg. Das AI Growth Program ist unser Markenzeichen: langfristige, messbare KI-Transformation.",
      povTitle: "Proof of Value",
      povTag: "Risikoarmer Einstieg",
      povDesc:
        "Ein fokussiertes 4–6-wöchiges Projekt, um einen wirkungsvollen KI-Use-Case mit messbaren Ergebnissen zu validieren.",
      povBullets: [
        "Use-Case Discovery & Scoping",
        "Funktionsfähiger Prototyp in Produktion",
        "Klare Business-KPIs gemessen",
        "Roadmap für Skalierung",
      ],
      povCta: "Mit Proof of Value starten",
      growthTitle: "AI Growth Program",
      growthTag: "Langfristige Transformation",
      growthDesc:
        "Eine mehrquartalige Partnerschaft, um KI in Ihre Operationen einzubetten — Produkte, Prozesse und Entscheidungen.",
      growthBullets: [
        "Dediziertes KI-Engineering-Team",
        "Mehrere KI-Initiativen parallel",
        "MLOps, Governance & Training",
        "Kontinuierlicher, messbarer ROI",
      ],
      growthCta: "Growth Program erkunden",
    },
    assessment: {
      kicker: "KI-Readiness-Assessment",
      title1: "Entdecken Sie, wo KI in Ihrem Unternehmen",
      titleAccent: "die größte Wirkung haben kann.",
      subtitle:
        "Beantworten Sie ein paar kurze Fragen und wir senden Ihnen eine persönliche KI-Roadmap und eine kostenlose 30-Minuten-Beratung.",
      step: "Schritt",
      of: "von",
      next: "Weiter",
      back: "Zurück",
      submit: "Meine KI-Roadmap erhalten",
      submitting: "Senden…",
      successTitle: "Vielen Dank!",
      successDesc:
        "Wir haben Ihr Assessment erhalten. Unser Team meldet sich innerhalb von 24 Stunden mit Ihrer persönlichen KI-Roadmap.",
      errorTitle: "Etwas ist schiefgelaufen",
      errorDesc: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
      q: {
        industry: { label: "In welcher Branche sind Sie tätig?", options: ["Gesundheitswesen", "Finanzen & Versicherung", "E-Commerce & Handel", "Fertigung", "Technologie / SaaS", "Logistik", "Andere"] },
        size: { label: "Wie groß ist Ihr Unternehmen?", options: ["1–10 Mitarbeiter", "11–50 Mitarbeiter", "51–200 Mitarbeiter", "200+ Mitarbeiter"] },
        maturity: { label: "Wie ist Ihr aktueller KI-Reifegrad?", options: ["Noch keine KI — am Erkunden", "Einige Experimente / Pilots", "KI in Produktion", "KI unternehmensweit skalieren"] },
        goals: { label: "Was sind Ihre wichtigsten KI-Ziele? (Mehrfachauswahl)", options: ["Manuelle Workflows automatisieren", "Customer Experience verbessern", "Vorhersagen & Forecasting", "Generative KI / Chatbots", "Computer Vision", "Datengetriebene Entscheidungen"] },
        budget: { label: "Wie hoch ist Ihr initiales Budget?", options: ["< 10.000 €", "10.000 – 50.000 €", "50.000 – 150.000 €", "150.000 €+", "Noch unsicher"] },
        timeline: { label: "Wann möchten Sie starten?", options: ["So schnell wie möglich", "1–3 Monate", "3–6 Monate", "Erstmal erkunden"] },
        contact: {
          name: "Ihr Name",
          email: "Geschäftliche E-Mail",
          company: "Unternehmen",
          message: "Sonst noch etwas, das wir wissen sollten? (optional)",
        },
      },
    },
    footer: {
      tagline:
        "Ein KI-Engineering-Studio, das produktionsreife Generative KI, Machine Learning und Backend-Systeme baut.",
      navTitle: "Navigation",
      legalTitle: "Rechtliches",
      privacy: "Datenschutz",
      terms: "AGB",
      rights: "Alle Rechte vorbehalten.",
    },
    lang: { en: "EN", de: "DE" },
  },
} as const;

export type TranslationKeys = typeof translations.en;
