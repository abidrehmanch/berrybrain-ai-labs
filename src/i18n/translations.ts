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
      impressum: "Imprint",
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
      impressum: "Imprint",
      rights: "All rights reserved.",
    },
    legal: {
      impressum: {
        title: "Imprint",
        intro:
          "This page provides the legal identification of BerryBrain AI, an AI engineering studio focused on Generative AI, Machine Learning and backend systems built for real production environments.",
        providerTitle: "Service provider",
        provider: ["BerryBrain AI", "Based in Germany"],
        contactTitle: "How to reach us",
        contact: ["Email: info@berrybrainai.com", "Website: berrybrainai.com"],
        responsibleTitle: "Editorial responsibility",
        responsible:
          "BerryBrain AI is responsible for the editorial content published on this website.",
        disclaimerTitle: "Content disclaimer",
        disclaimer:
          "We put real care into every page on this site, but we cannot promise that every detail is always complete, fully accurate or up to the minute. Within the limits of general law, we are accountable only for content we publish ourselves and not for material that visitors or third parties may submit.",
        linksTitle: "Links to other websites",
        links:
          "Some pages may point to external websites we do not control. We check those destinations when a link is added, but we cannot continuously monitor what other operators publish, so the responsibility for those pages stays with their respective owners.",
        sections: [
          {
            title: "What we do",
            body:
              "BerryBrain AI helps companies turn AI ambition into working systems. Typical engagements include AI strategy, generative AI products, machine learning pipelines, backend and integration work, and MLOps practices that keep models reliable in production.",
          },
          {
            title: "Resolving questions directly",
            body:
              "We prefer to handle concerns in a direct, human way. If something on the website is unclear or you believe a piece of content needs to be updated, please write to us at info@berrybrainai.com and we will look into it.",
          },
          {
            title: "Copyright and brand",
            body:
              "Copy, layout, illustrations, source structure and brand assets shown on this site belong to BerryBrain AI or their respective owners. Re-use, reproduction or commercial distribution requires our written agreement unless the law explicitly allows it.",
          },
          {
            title: "Not legal advice",
            body:
              "The information shared on this page is meant to make our setup transparent and is not a substitute for individual legal counsel. Once registry, address or tax details become available, those entries should be added or updated accordingly.",
          },
        ],
        note:
          "Before going live with full company filings, please have this imprint reviewed by a qualified legal advisor, especially regarding commercial register, VAT identification or full postal address details.",
      },
      privacy: {
        title: "Privacy Policy",
        intro:
          "This Privacy Policy describes how BerryBrain AI handles personal information when you visit berrybrainai.com or get in touch with us about AI engineering work. We aim to keep things plain, fair and aligned with European data protection rules.",
        sections: [
          {
            title: "Who is responsible",
            body:
              "BerryBrain AI is the controller for personal data collected through this website. If you have any privacy question or request, write to info@berrybrainai.com and a real person will reply.",
          },
          {
            title: "Information we collect",
            body:
              "We only work with the data we genuinely need. That can include the name, company, work email, project context, budget range, timeline and AI maturity you share through our forms or by email, plus the answers you give in the AI Readiness Assessment. In addition, our hosting infrastructure stores standard technical signals such as browser type, device information, IP address and timestamps for security and stability purposes.",
          },
          {
            title: "Why we use this data",
            body:
              "We use what you share to reply to your enquiry, prepare a relevant conversation, evaluate the fit of a potential project, run the website safely and improve how we communicate. The legal basis is your request, our legitimate interest in operating a secure business website, or your consent where required by law.",
          },
          {
            title: "Forms and assessment",
            body:
              "When you submit the contact or AI assessment form, the answers help us understand your situation and decide how we can help. Please avoid sending sensitive personal data, regulated information or confidential third-party material through any public form.",
          },
          {
            title: "Email correspondence",
            body:
              "If you reach out by email, we process your address, the message itself and related metadata to handle your request and continue the business conversation in a normal, professional way.",
          },
          {
            title: "Cookies and browser storage",
            body:
              "The site relies only on the browser storage that is technically required, for example to remember your preferred language. We do not run advertising profiles or cross-site tracking from this website.",
          },
          {
            title: "How long we keep data",
            body:
              "We keep enquiry information only for as long as it is useful, typically the time needed to reply, deliver an engagement or meet our legal obligations. When no project follows, we review and remove information that is no longer needed.",
          },
          {
            title: "Who else may process data",
            body:
              "We do not sell personal data. Carefully selected service providers may process data on our behalf to operate hosting, email delivery, analytics or productivity tools that we use to run the business. They act under written instructions and appropriate safeguards.",
          },
          {
            title: "International transfers",
            body:
              "Some service providers may process data outside the European Economic Area. In that case, we rely on recognised safeguards such as Standard Contractual Clauses or applicable adequacy decisions to keep your information protected.",
          },
          {
            title: "Security",
            body:
              "We apply technical and organisational measures appropriate for a small, focused engineering team — including access controls, encrypted transport and regular review of our tools. No online service can be perfectly secure, but we treat your data with the level of care we would expect for our own.",
          },
          {
            title: "Your rights",
            body:
              "Subject to applicable law, you can ask us for access, correction, deletion, restriction, portability or you may object to specific processing. You can also lodge a complaint with a competent data protection authority if you believe we have not handled your data correctly.",
          },
          {
            title: "Get in touch",
            body:
              "For any privacy related question or request, please email info@berrybrainai.com and we will respond within a reasonable timeframe.",
          },
        ],
      },
      terms: {
        title: "Terms & Conditions",
        intro:
          "These terms set out the basic rules for using berrybrainai.com and for engaging with BerryBrain AI about AI engineering services. They are written in everyday language and apply to anyone visiting or contacting us through this website.",
        sections: [
          {
            title: "Scope of the website",
            body:
              "berrybrainai.com presents the work of BerryBrain AI, including generative AI products, machine learning systems, backend engineering, MLOps practices and AI strategy support. The site is informational and serves as a starting point for a conversation.",
          },
          {
            title: "No contract by browsing",
            body:
              "Visiting the website, downloading material or sending us a form does not create a binding service contract. A formal engagement is in place only once both sides agree on a written proposal, statement of work or separate agreement.",
          },
          {
            title: "Information accuracy",
            body:
              "We try to keep the descriptions of our services current and honest. Some details, however, may evolve with new technology, new clients or new regulations, so any wording on the website is non-binding until it is reflected in a specific agreement with you.",
          },
          {
            title: "AI outcomes and expectations",
            body:
              "Real AI systems depend on data quality, business context, model behaviour, third-party services and operational constraints. Unless we agree otherwise in writing, we do not guarantee specific accuracy, financial impact, automation rates or regulatory outcomes.",
          },
          {
            title: "What we expect from clients",
            body:
              "To do good work together, we count on clients to share accurate context, to use lawful and properly sourced data, to grant the access we need for delivery and to provide timely feedback during a project.",
          },
          {
            title: "Confidentiality",
            body:
              "Information shared during early conversations is treated with discretion. Detailed confidentiality, data handling and security commitments are formalised in a dedicated agreement before any sensitive data is exchanged.",
          },
          {
            title: "Third-party services",
            body:
              "Our work often integrates cloud platforms, AI model providers, APIs, hosting environments or open-source components. Their pricing, availability and terms can change at any time and may influence delivery timelines or operational behaviour.",
          },
          {
            title: "Intellectual property",
            body:
              "Copy, brand assets and materials on this website belong to BerryBrain AI unless stated otherwise. The ownership and usage rights for project deliverables are defined separately in the relevant client agreement.",
          },
          {
            title: "Acceptable use",
            body:
              "Please do not abuse this website. That includes attempting unauthorised access, submitting unlawful or harmful content, interfering with security mechanisms or using the site in a way that could damage BerryBrain AI, our infrastructure or any third party.",
          },
          {
            title: "Liability",
            body:
              "Use of the website is at your own risk. Liability for paid services is governed by the corresponding agreement, applicable mandatory law and accepted business practice in Germany.",
          },
          {
            title: "Changes",
            body:
              "We may update these terms when our website, services or legal environment evolve. The version published here applies to website use at the time of access.",
          },
          {
            title: "Governing law",
            body:
              "These terms are written for a Germany-based business presence and are interpreted under applicable German law unless a separate written agreement provides otherwise.",
          },
        ],
      },
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
      impressum: "Impressum",
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
      impressum: "Impressum",
      rights: "Alle Rechte vorbehalten.",
    },
    legal: {
      impressum: {
        title: "Impressum",
        intro:
          "Dieses Impressum identifiziert BerryBrain AI als verantwortlichen Diensteanbieter. BerryBrain AI ist ein KI-Engineering-Studio mit Fokus auf Generative KI, Machine Learning und produktionsreife Backend-Systeme.",
        providerTitle: "Diensteanbieter",
        provider: ["BerryBrain AI", "Standort: Deutschland"],
        contactTitle: "So erreichen Sie uns",
        contact: ["E-Mail: info@berrybrainai.com", "Webseite: berrybrainai.com"],
        responsibleTitle: "Redaktionelle Verantwortung",
        responsible:
          "BerryBrain AI verantwortet die redaktionellen Inhalte dieser Website.",
        disclaimerTitle: "Hinweis zu Inhalten",
        disclaimer:
          "Wir erstellen die Inhalte dieser Website mit Sorgfalt. Trotzdem können wir nicht zu jedem Zeitpunkt vollständige Richtigkeit, Aktualität oder Genauigkeit garantieren. Im Rahmen der allgemeinen Gesetze haften wir ausschließlich für eigene Inhalte und nicht für Beiträge, die Dritte beisteuern.",
        linksTitle: "Verweise auf externe Seiten",
        links:
          "Manche Inhalte verweisen auf Webseiten Dritter. Zum Zeitpunkt der Verlinkung prüfen wir diese, dauerhafte Kontrolle ist jedoch nicht möglich. Verantwortlich für die jeweils verlinkten Inhalte bleibt der dortige Anbieter oder Betreiber.",
        sections: [
          {
            title: "Was wir tun",
            body:
              "BerryBrain AI begleitet Unternehmen dabei, KI-Ideen in funktionierende Systeme zu überführen. Typische Themen sind KI-Strategie, generative KI-Produkte, Machine-Learning-Pipelines, Backend- und Integrationsarbeit sowie MLOps-Praktiken, die Modelle dauerhaft betreibbar machen.",
          },
          {
            title: "Anliegen direkt klären",
            body:
              "Wir bevorzugen einen direkten und menschlichen Umgang mit Anliegen. Sollte etwas auf dieser Website unklar sein oder eine Information ergänzt werden müssen, schreiben Sie uns einfach an info@berrybrainai.com.",
          },
          {
            title: "Urheberrecht und Marke",
            body:
              "Texte, Layouts, Grafiken, Quellstruktur und Markenbestandteile dieser Website sind Eigentum von BerryBrain AI oder der jeweiligen Rechteinhaber. Eine Vervielfältigung, Weiterverbreitung oder kommerzielle Nutzung benötigt unsere ausdrückliche schriftliche Zustimmung, sofern das Gesetz keine Ausnahme vorsieht.",
          },
          {
            title: "Keine Rechtsberatung",
            body:
              "Die hier veröffentlichten Angaben dienen der Transparenz und ersetzen keine individuelle rechtliche Beratung. Sobald Registereintrag, Anschrift oder Steuerdaten verfügbar sind, sollten diese Felder entsprechend ergänzt oder aktualisiert werden.",
          },
        ],
        note:
          "Bitte lassen Sie dieses Impressum vor einer offiziellen Veröffentlichung durch eine qualifizierte Stelle prüfen, insbesondere im Hinblick auf Handelsregister, Umsatzsteuer-Identifikationsnummer und vollständige Postanschrift.",
      },
      privacy: {
        title: "Datenschutzerklärung",
        intro:
          "Diese Datenschutzerklärung erklärt in klarer Sprache, wie BerryBrain AI personenbezogene Daten behandelt, wenn Sie berrybrainai.com besuchen oder uns zu KI-Engineering-Themen kontaktieren. Wir orientieren uns dabei an der DSGVO und an europäischen Datenschutzgrundsätzen.",
        sections: [
          {
            title: "Verantwortlicher",
            body:
              "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist BerryBrain AI. Bei Datenschutzanliegen erreichen Sie uns unter info@berrybrainai.com — Ihre Anfrage wird von einer realen Person bearbeitet.",
          },
          {
            title: "Welche Daten wir verarbeiten",
            body:
              "Wir arbeiten ausschließlich mit den Daten, die wir wirklich benötigen. Dazu zählen Name, Unternehmen, geschäftliche E-Mail-Adresse, Projektkontext, Budgetrahmen, Zeitplan und KI-Reifegrad, die Sie über unsere Formulare oder per E-Mail mitteilen, sowie Ihre Antworten im KI-Readiness-Assessment. Zusätzlich erfasst unsere Hosting-Infrastruktur technische Standardsignale wie Browsertyp, Geräteinformationen, IP-Adresse und Zeitstempel zu Sicherheits- und Stabilitätszwecken.",
          },
          {
            title: "Warum wir Daten verarbeiten",
            body:
              "Wir nutzen die Angaben, um Ihre Anfrage zu beantworten, ein passendes Erstgespräch vorzubereiten, einen möglichen Projekt-Fit einzuschätzen, die Website sicher zu betreiben und unsere Kommunikation zu verbessern. Rechtsgrundlage ist Ihre Anfrage, unser berechtigtes Interesse am sicheren Betrieb einer geschäftlichen Website oder Ihre Einwilligung, sofern gesetzlich erforderlich.",
          },
          {
            title: "Formulare und Assessment",
            body:
              "Wenn Sie das Kontakt- oder KI-Assessment-Formular absenden, helfen uns Ihre Angaben, Ihre Situation einzuordnen und über mögliche nächste Schritte nachzudenken. Bitte senden Sie keine besonders sensiblen personenbezogenen Daten, regulierten Informationen oder vertraulichen Drittdaten über öffentliche Formulare.",
          },
          {
            title: "E-Mail-Kommunikation",
            body:
              "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Adresse, den Inhalt der Nachricht sowie zugehörige Metadaten, um Ihre Anfrage zu bearbeiten und die Kommunikation in geordneter Form fortzuführen.",
          },
          {
            title: "Cookies und Browserspeicher",
            body:
              "Diese Website nutzt ausschließlich technisch notwendigen Browserspeicher, etwa um Ihre Sprachauswahl zu merken. Wir setzen keine Werbeprofile oder seitenübergreifendes Tracking ein.",
          },
          {
            title: "Speicherdauer",
            body:
              "Anfragedaten speichern wir nur so lange, wie es für die Bearbeitung, eine eventuelle Zusammenarbeit oder gesetzliche Aufbewahrungspflichten erforderlich ist. Kommt keine Zusammenarbeit zustande, prüfen und löschen wir nicht mehr benötigte Daten regelmäßig.",
          },
          {
            title: "Empfänger und Auftragsverarbeiter",
            body:
              "Wir verkaufen keine personenbezogenen Daten. Sorgfältig ausgewählte Dienstleister können Daten in unserem Auftrag verarbeiten, etwa für Hosting, E-Mail-Versand, Analyse oder Produktivitätstools, die wir im Geschäftsbetrieb nutzen. Diese arbeiten weisungsgebunden und mit angemessenen Schutzmaßnahmen.",
          },
          {
            title: "Übermittlungen ins Ausland",
            body:
              "Manche Dienstleister verarbeiten Daten außerhalb des Europäischen Wirtschaftsraums. In diesen Fällen stützen wir uns auf anerkannte Schutzmechanismen wie Standardvertragsklauseln oder anwendbare Angemessenheitsbeschlüsse.",
          },
          {
            title: "Sicherheit",
            body:
              "Wir setzen technische und organisatorische Maßnahmen ein, die zu einem fokussierten Engineering-Team passen, darunter Zugriffskontrollen, verschlüsselte Übertragung und regelmäßige Überprüfung unserer Werkzeuge. Eine vollständige Sicherheit kann im Internet niemand garantieren, wir behandeln Ihre Daten jedoch mit derselben Sorgfalt, die wir uns selbst wünschen.",
          },
          {
            title: "Ihre Rechte",
            body:
              "Sie können nach Maßgabe des geltenden Rechts Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit oder Widerspruch gegen bestimmte Verarbeitungen verlangen. Außerdem steht Ihnen das Recht zu, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.",
          },
          {
            title: "Kontakt",
            body:
              "Für jede Datenschutzanfrage schreiben Sie uns bitte an info@berrybrainai.com. Wir antworten innerhalb einer angemessenen Frist.",
          },
        ],
      },
      terms: {
        title: "Allgemeine Geschäftsbedingungen",
        intro:
          "Diese Bedingungen beschreiben in klarer Sprache, nach welchen Regeln berrybrainai.com genutzt werden kann und wie ein erster Kontakt mit BerryBrain AI rund um KI-Engineering-Leistungen abläuft. Sie gelten für alle Personen, die diese Website besuchen oder uns über sie erreichen.",
        sections: [
          {
            title: "Geltungsbereich",
            body:
              "berrybrainai.com stellt die Arbeit von BerryBrain AI vor, einschließlich generativer KI-Produkte, Machine-Learning-Systeme, Backend-Engineering, MLOps-Praktiken und KI-Strategieberatung. Die Website dient zur Information und als Ausgangspunkt für ein Gespräch.",
          },
          {
            title: "Kein Vertrag durch Nutzung",
            body:
              "Der bloße Besuch der Website, das Anschauen von Materialien oder das Absenden eines Formulars begründet keinen verbindlichen Dienstleistungsvertrag. Eine echte Zusammenarbeit kommt erst zustande, wenn beide Seiten ein schriftliches Angebot, einen Leistungsumfang oder eine separate Vereinbarung bestätigen.",
          },
          {
            title: "Inhaltliche Aktualität",
            body:
              "Wir versuchen, die Beschreibung unserer Leistungen aktuell und ehrlich zu halten. Manche Details ändern sich jedoch mit neuer Technologie, neuen Kunden oder neuen regulatorischen Anforderungen. Aussagen auf der Website sind daher unverbindlich, bis sie in einer konkreten Vereinbarung bestätigt werden.",
          },
          {
            title: "Erwartungen an KI-Ergebnisse",
            body:
              "KI-Systeme hängen von Datenqualität, Geschäftskontext, Modellverhalten, Drittanbietern und betrieblichen Rahmenbedingungen ab. Sofern nicht ausdrücklich schriftlich vereinbart, garantieren wir keine bestimmten Genauigkeitswerte, finanziellen Effekte, Automatisierungsquoten oder regulatorischen Ergebnisse.",
          },
          {
            title: "Mitwirkungspflichten",
            body:
              "Damit gemeinsame Arbeit gelingt, erwarten wir von Kundinnen und Kunden korrekte Kontextangaben, rechtmäßig nutzbare Daten, die für die Umsetzung erforderlichen Zugänge sowie zeitnahes Feedback während eines Projekts.",
          },
          {
            title: "Vertraulichkeit",
            body:
              "Informationen aus ersten Gesprächen behandeln wir mit Diskretion. Konkrete Vertraulichkeits-, Datenschutz- und Sicherheitspflichten werden in einer separaten Vereinbarung geregelt, bevor sensible Inhalte ausgetauscht werden.",
          },
          {
            title: "Drittanbieter-Dienste",
            body:
              "Unsere Arbeit bindet häufig Cloud-Plattformen, KI-Modellanbieter, APIs, Hosting-Umgebungen oder Open-Source-Komponenten ein. Deren Preise, Verfügbarkeit und Bedingungen können sich jederzeit ändern und damit Zeitpläne oder Betrieb beeinflussen.",
          },
          {
            title: "Geistiges Eigentum",
            body:
              "Texte, Markenbestandteile und Materialien dieser Website sind Eigentum von BerryBrain AI, sofern nicht anders angegeben. Eigentums- und Nutzungsrechte an Projektergebnissen werden in der jeweiligen Kundenvereinbarung gesondert geregelt.",
          },
          {
            title: "Zulässige Nutzung",
            body:
              "Bitte nutzen Sie diese Website nicht missbräuchlich. Insbesondere sind unbefugte Zugriffsversuche, das Übermitteln rechtswidriger oder schädlicher Inhalte, das Umgehen von Sicherheitsmechanismen sowie jede Nutzung untersagt, die BerryBrain AI, unsere Infrastruktur oder Dritte schädigen könnte.",
          },
          {
            title: "Haftung",
            body:
              "Die Nutzung der Website erfolgt auf eigenes Risiko. Die Haftung für entgeltliche Leistungen richtet sich nach der jeweiligen Vereinbarung, dem zwingend anwendbaren Recht und üblicher Geschäftspraxis in Deutschland.",
          },
          {
            title: "Änderungen",
            body:
              "Wir können diese Bedingungen anpassen, wenn sich Website, Leistungen oder rechtliche Anforderungen weiterentwickeln. Es gilt jeweils die zum Zeitpunkt des Zugriffs auf dieser Seite veröffentlichte Fassung.",
          },
          {
            title: "Anwendbares Recht",
            body:
              "Diese Bedingungen sind auf eine Geschäftspräsenz in Deutschland ausgerichtet und werden nach geltendem deutschem Recht ausgelegt, sofern keine separate schriftliche Vereinbarung etwas anderes regelt.",
          },
        ],
      },
    },
    lang: { en: "EN", de: "DE" },
  },
};

export type TranslationKeys = typeof translations.en;
