// Centralized services and solutions data for DRY usage
export type Solution = {
  slug: string;
  title: string;
  description: string;
  image?: string; // Optional: Add images for richer solution details
  features?: string[]; // Optional: Add features or bullet points
  heroImage?: string; // Optional: Hero/banner image for solution detail page
  heroTagline?: string; // Optional: Hero tagline for solution detail page
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  solutions: Solution[];
  heroImage?: string; // Optional: Hero/banner image for service detail page
  heroTagline?: string; // Optional: Hero tagline for service detail page
};

export const services: Service[] = [
  {
    slug: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Custom AI models, chatbots, recommendation engines, annotation, analytics dashboards, and more.",
    icon: "Zap",
    heroImage: "/images/hero-ai-ml.jpg",
    heroTagline: "Unlock the power of intelligent automation and data-driven innovation.",
    solutions: [
      {
        slug: "custom-ai-development",
        title: "Custom AI Development",
        description: "Bespoke AI models for your business, including predictive analytics, vision/NLP models, and recommendation engines.",
        heroImage: "/images/hero-custom-ai.jpg",
        heroTagline: "Tailored AI solutions for your unique business challenges."
      },
      {
        slug: "chatbots-virtual-assistants",
        title: "Chatbots & Virtual Assistants",
        description: "Conversational AI to automate support, generate leads, and provide 24/7 assistance."
      }
    ]
  },
  {
    slug: "automation",
    title: "Automation Solutions",
    description: "Business process automation, RPA, DevOps pipelines, AI+automation, CRM/email automations, and more.",
    icon: "Sparkles",
    solutions: [
      {
        slug: "robotic-process-automation",
        title: "Robotic Process Automation (RPA)",
        description: "Eliminate repetitive, rule-based tasks across departments like HR, Finance, and Operations."
      }
    ]
  },
  {
    slug: "web-app-dev",
    title: "Web & App Development",
    description: "Websites, mobile apps, PWAs, e-commerce, APIs, real-time apps, and full-stack integrations.",
    icon: "Code2",
    solutions: [
      {
        slug: "custom-websites",
        title: "Custom Websites",
        description: "Modern, responsive websites tailored for branding, performance, and conversion."
      }
    ]
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    description: "User research, wireframing, high-fidelity UI, UX audits, design systems, and micro-animations.",
    icon: "Smartphone",
    solutions: [
      {
        slug: "ux-audit",
        title: "UX Audit",
        description: "In-depth user behavior analysis to improve usability and conversion."
      }
    ]
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Data Protection",
    description: "Security audits, data encryption, firewalls, GDPR/HIPAA compliance, penetration testing, and cloud security.",
    icon: "Shield",
    solutions: [
      {
        slug: "security-audits",
        title: "Security Audits",
        description: "Comprehensive security reviews, vulnerability assessments, and penetration tests."
      }
    ]
  },
  {
    slug: "cloud-devops",
    title: "Cloud Computing & DevOps",
    description: "Cloud migration, CI/CD automation, serverless architectures, Kubernetes, monitoring, and cost optimization.",
    icon: "Cloud",
    solutions: [
      {
        slug: "cloud-migration",
        title: "Cloud Migration",
        description: "Secure and scalable migration to AWS, Azure, or GCP."
      }
    ]
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    description: "Tailored storefronts, payment gateways, inventory systems, mobile commerce, and loyalty programs.",
    icon: "ShoppingBag",
    solutions: [
      {
        slug: "custom-storefronts",
        title: "Custom Storefronts",
        description: "Engaging e-commerce platforms with seamless checkout and mobile responsiveness."
      }
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    description: "Full-scale digital campaigns, SEO optimization, paid ads, content marketing, email campaigns, and analytics.",
    icon: "Megaphone",
    solutions: [
      {
        slug: "seo",
        title: "SEO",
        description: "Technical and content-focused optimization for higher search engine rankings and organic traffic."
      }
    ]
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    description: "ETL pipelines, interactive dashboards, forecasting models, customer segmentation, and actionable insights.",
    icon: "BarChart3",
    solutions: [
      {
        slug: "dashboard-development",
        title: "Dashboard Development",
        description: "Real-time, interactive visualizations to empower data-driven decisions."
      }
    ]
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Digital Transformation",
    description: "IT audits, strategy alignment, legacy system modernization, change management, and growth roadmaps.",
    icon: "🧑‍💼",
    solutions: [
      {
        slug: "it-roadmaps",
        title: "IT Roadmaps",
        description: "Strategic IT planning aligned with business goals and future-proofing tech stacks."
      }
    ]
  },
  {
    slug: "networking",
    title: "Networking & Infrastructure",
    description: "Network setup, infrastructure monitoring, VPNs, disaster recovery, and IT hardware configuration.",
    icon: "📡",
    solutions: [
      {
        slug: "network-setup",
        title: "Network Setup",
        description: "Secure, high-performance networking solutions for offices, remote teams, and data centers."
      }
    ]
  },
  {
    slug: "saas",
    title: "SaaS & Product Development",
    description: "Multi-tenant SaaS architecture, billing systems, scalability, DevOps deployment, and UX design.",
    icon: "🧾",
    solutions: [
      {
        slug: "saas-architecture",
        title: "SaaS Architecture",
        description: "Full-cycle development for cloud-native software platforms."
      }
    ]
  },
  {
    slug: "api",
    title: "API Development & Integration",
    description: "REST/GraphQL API development, webhook systems, third-party integration (payment, CRM, etc.), and security.",
    icon: "🔌",
    solutions: [
      {
        slug: "rest-apis",
        title: "REST APIs",
        description: "Secure and scalable APIs to power web/mobile apps and connect services."
      }
    ]
  },
  {
    slug: "testing",
    title: "Testing & Quality Assurance",
    description: "End-to-end testing, unit/integration testing, automated CI/CD tests, and performance testing.",
    icon: "🧪",
    solutions: [
      {
        slug: "manual-testing",
        title: "Manual Testing",
        description: "User-centric functional and regression testing to ensure software quality."
      }
    ]
  },
  {
    slug: "support",
    title: "Tech Support & Maintenance",
    description: "Proactive monitoring, bug resolution, regular updates, uptime optimization, and 24/7 support.",
    icon: "🛠️",
    solutions: [
      {
        slug: "maintenance",
        title: "Maintenance",
        description: "Keep your digital assets running securely, smoothly, and up-to-date."
      }
    ]
  }
];
