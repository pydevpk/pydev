import { FaMicrochip, FaLayerGroup, FaNetworkWired, FaCloud } from "react-icons/fa6";

export const capabilities = [
  {
    index: "01",
    icon: FaMicrochip,
    title: "AI & Data Solutions",
    blurb:
      "From framing the problem to a deployed, self-retraining model — recommendation, forecasting, vision and language systems that hold up in production.",
    items: [
      "Custom ML / DL model development",
      "Computer vision & NLP applications",
      "Recommendation systems & personalization",
      "Predictive analytics & forecasting",
      "Generative AI — text, images, RAG",
      "Feature engineering & data preprocessing",
    ],
  },
  {
    index: "02",
    icon: FaLayerGroup,
    title: "Full-Stack Development",
    blurb:
      "Scalable applications end to end — clean APIs, solid data models and responsive interfaces, built to stay maintainable as they grow.",
    items: [
      "REST & GraphQL API design",
      "Microservices & scalable architectures",
      "Database design & optimization (SQL / NoSQL)",
      "Real-time messaging & WebSockets",
      "Modern web & dashboard development",
      "Authentication, authorization & app security",
    ],
  },
  {
    index: "03",
    icon: FaNetworkWired,
    title: "Workflow & Automation",
    blurb:
      "Removing the manual middle. Data pipelines, automated reporting and AI-driven workflows that cut cost and turnaround time.",
    items: [
      "AI-driven automation workflows",
      "Data pipelines, ETL & data warehousing",
      "Automated reporting & dashboards",
      "Batch & real-time data processing",
      "Automated retraining & deployment",
      "Scheduled jobs & orchestration",
    ],
  },
  {
    index: "04",
    icon: FaCloud,
    title: "Cloud & DevOps",
    blurb:
      "Cloud-native infrastructure that scales predictably — containerized, observable, and shipped through automated pipelines.",
    items: [
      "AWS & GCP deployment",
      "CI/CD pipelines & infrastructure as code",
      "Containerization with Docker & Kubernetes",
      "Performance tuning & cost optimization",
      "System security & monitoring",
      "SaaS product architecture & scaling",
    ],
  },
];
