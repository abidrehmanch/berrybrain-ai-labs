import {
  Brain,
  Bot,
  LineChart,
  Eye,
  Server,
  Cloud,
  Workflow,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Generative AI Solutions",
    desc: "Custom GPT-style apps, AI chatbots, RAG systems, internal copilots, prompt engineering and fine-tuning powered by LLMs.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    desc: "Multi-step agents that plan, reason and act — workflow automation and tool-integrated AI across your APIs and databases.",
  },
  {
    icon: LineChart,
    title: "Machine Learning Solutions",
    desc: "Predictive analytics, time series forecasting, recommendation systems and anomaly detection tailored to your data.",
  },
  {
    icon: Eye,
    title: "Deep Learning · NLP & Vision",
    desc: "NLP and text analytics, image recognition, OCR, document processing and sentiment analysis at production quality.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    desc: "REST APIs, microservices, AI model serving, robust system architecture and optimized database design.",
  },
  {
    icon: Cloud,
    title: "Cloud, MLOps & Deployment",
    desc: "AWS and GCP deployments, Docker, CI/CD pipelines, monitoring and observability — scalable and cost-efficient.",
  },
  {
    icon: Workflow,
    title: "AI Integration & Automation",
    desc: "CRM and SaaS integrations, workflow automation, data pipelines and event-driven systems that connect AI to your stack.",
  },
  {
    icon: Smartphone,
    title: "AI-Powered Applications",
    desc: "Full-stack web and mobile apps with seamless AI features and ML integration, end to end.",
  },
];

const Services = () => (
  <section id="services" className="py-28 sm:py-36 relative">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Our Services</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
          End-to-end AI engineering, <span className="text-gradient">built for production.</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          From research to reliable systems — we cover the full AI stack so your team
          ships real, high-impact applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative p-7 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-glow">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
