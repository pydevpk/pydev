import jewelryCover from "../../public/project/AI-Recommendation-jewelry.png";
import forecastingCover from "../../public/project/ai-forecasting.png";
import visualSearchCover from "../../public/project/ai-visual-search.png";
import finanticxCover from "../../public/project/ai-finanticx.png";
import surveillanceCover from "../../public/project/ai-surveillance.png";
import krooloCover from "../../public/project/ai-kroolo.png";
import HVTMSCover from "../../public/project/hvtms.png";
import EmangoCover from "../../public/project/emango.png";
import FitbuddyCover from "../../public/project/fitbuddy.png";
import NSCover from "../../public/project/NS.png";

/**
 * Selected work. `highlights` are carried verbatim from additional_data.json.
 * `cover: null` triggers the generative <ProjectCover /> fallback.
 * Order here is the order shown on the home page.
 */
export const projects = [
  {
    slug: "kroolo-ai-productivity",
    name: "Kroolo — AI Productivity Platform",
    category: "AI Agents",
    context: "SaaS product · Kroolo",
    role: "AI Engineer — end-to-end AI integration",
    year: "2024",
    summary:
      "Owned AI across a productivity platform: template generation, document & goal drafting, and PDF-based RAG in the workspace.",
    overview:
      "Kroolo is a productivity suite for project, task and knowledge management. I took ownership of every AI touchpoint in the product — from generating entire project templates to answering questions over a team's own documents with retrieval-augmented generation.",
    highlights: [
      "Took ownership of end-to-end AI integration across the Kroolo productivity platform.",
      "Implemented AI-driven project template generation including task suggestions, complete template regeneration, section summarization, and dynamic length adjustments.",
      "Enabled AI-based document and goal generation to streamline planning workflows.",
      "Integrated Amazon Bedrock and a custom knowledge base to support PDF-based Retrieval-Augmented Generation (RAG) within the workspace.",
    ],
    technologies: ["AI Agents", "LLMs", "Amazon Bedrock", "RAG", "Knowledge Base"],
    cover: krooloCover,
    liveLink: "https://kroolo.com/",
    featured: true,
  },
  {
    slug: "jewelry-recommendation-system",
    name: "Jewelry Recommendation System",
    category: "AI & Data Solutions",
    context: "E-commerce · Ashi Diamonds",
    role: "AI Engineer — modelling, pipeline, deployment",
    year: "2024",
    summary:
      "A visual + metadata recommendation engine trained on 16,000+ products, retrained and redeployed automatically with zero manual steps.",
    overview:
      "A deep-learning recommendation engine for a large jewelry catalog that blends image similarity with structured metadata — style, type, colour, karat — to surface genuinely relevant products and lift engagement.",
    highlights: [
      "Built a visual + metadata-based recommendation engine for jewelry products using deep learning.",
      "Trained the model on 16,000+ products, each with multiple images and rich metadata including style, type, color and karat.",
      "Used AWS SageMaker for model training, feature extraction, and FastAPI for endpoint deployment.",
      "Enabled automatic retraining and deployment via periodic jobs for keeping recommendations up to date.",
      "Optimized performance and scalability using FastAPI, S3, and Dockerized workflows.",
      "Significantly improved customer engagement by offering intelligent, relevant suggestions.",
      "Developed an end-to-end automation pipeline with zero manual interface.",
    ],
    technologies: ["Deep Learning", "AWS SageMaker", "AWS S3", "FastAPI", "Docker"],
    cover: jewelryCover,
    liveLink: "https://www.ashidiamonds.com/",
    featured: true,
  },
  {
    slug: "surveillance-security-tool",
    name: "Surveillance Security Management Tool",
    category: "Computer Vision",
    context: "Physical security · multi-site",
    role: "Computer Vision Engineer",
    year: "2023",
    summary:
      "Real-time CCTV analytics with YOLOv8 + OCR — vehicle type, number-plate and behaviour detection with event-based alerting.",
    overview:
      "A real-time surveillance platform that watches live CCTV feeds across locations, recognises vehicles and number plates, and raises alerts on suspicious behaviour patterns such as loitering or repeated passes.",
    highlights: [
      "Developed a real-time surveillance platform using YOLOv8 and OCR to identify vehicle types, number plates, and behavior patterns.",
      "Enabled event-based alerting for suspicious activities like loitering, repeated passes, or idle vehicles.",
      "Integrated with live CCTV feeds and supported multi-location monitoring.",
      "Optimized speed and accuracy with multi-threaded inference and GPU acceleration.",
    ],
    technologies: [
      "YOLOv8",
      "OCR",
      "Computer Vision",
      "CCTV",
      "Multi-threaded Inference",
      "GPU Acceleration",
    ],
    cover: surveillanceCover,
    liveLink: null,
    featured: true,
  },
  {
    slug: "finanticx-financial-intelligence",
    name: "Finanticx — Financial Intelligence Platform",
    category: "AI & Data Solutions",
    context: "Fintech product",
    role: "Full-Stack & AI Engineer",
    year: "2023",
    summary:
      "AI-driven personal & business finance: statement parsing, transaction categorization, expense forecasting and EMI tracking.",
    overview:
      "Finanticx simplifies personal and business finance with AI-powered insight and automation — parsing bank statements, categorising transactions, forecasting expenses and guiding goal-based savings, all on secure cloud-native infrastructure.",
    highlights: [
      "Built a platform to simplify personal and business finance using AI-powered insights and automation.",
      "Integrated bank statement parsers, transaction categorization, and expense forecasting using machine learning.",
      "Developed modules for EMI management, and goal-based savings recommendations.",
      "Enabled seamless user experience with secure backend APIs, responsive front-end, and cloud-native infrastructure.",
    ],
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Backend APIs",
      "Responsive Frontend",
      "Cloud Infrastructure",
    ],
    cover: finanticxCover,
    liveLink: null,
    featured: true,
  },
  {
    slug: "sales-demand-forecasting",
    name: "Sales & Demand Forecasting System",
    category: "AI & Data Solutions",
    context: "Retail / supply chain",
    role: "ML Engineer — pipeline & deployment",
    year: "2024",
    summary:
      "Time-series forecasting across many SKUs with automated retraining and forecast versioning to drive inventory decisions.",
    overview:
      "A demand-forecasting system that combines historical sales, promotions, seasonality and external market signals to predict sales across SKUs — deployed with automated retraining so forecasts stay current, and versioned so decisions are auditable.",
    highlights: [
      "Designed and deployed a time-series forecasting system to predict product demand and sales trends across multiple SKUs.",
      "Integrated historical sales, promotions, seasonality, and external market trends to improve forecasting accuracy.",
      "Built a modular data pipeline for data ingestion, preprocessing, model training, and prediction delivery.",
      "Deployed forecasting models using AWS SageMaker, with automated retraining and forecast versioning.",
      "Enabled inventory optimization, reduced overstocking, and supported strategic planning decisions.",
      "Delivered a scalable and cost-efficient solution using Docker, FastAPI, and CI/CD workflows.",
    ],
    technologies: [
      "Time-Series Forecasting",
      "XGBoost",
      "AWS SageMaker",
      "Docker",
      "FastAPI",
      "CI/CD",
    ],
    cover: forecastingCover,
    liveLink: null,
    featured: false,
  },
  {
    slug: "visual-product-search",
    name: "Visual Product Search",
    category: "Computer Vision",
    context: "E-commerce catalog",
    role: "Computer Vision Engineer",
    year: "2023",
    summary:
      "Image-based product search from product catalog using the Google Vision API — classification, detection and OCR.",
    overview:
      "An image-based search layer for a product catalog: customers and staff can search by picture, while the same pipeline auto-generates metadata for new product images to speed up tagging and cataloguing.",
    highlights: [
      "Developed an intelligent system leveraging Google Vision API for real-time image classification, object detection, and text extraction for product search from product catalog.",
      "Automated metadata generation for product images, enabling faster search, tagging, and cataloging workflows.",
      "Enhanced product discovery and operational efficiency through visual AI capabilities embedded into existing business platforms.",
    ],
    technologies: [
      "Google Vision API",
      "Computer Vision",
      "Image Classification",
      "Object Detection",
      "OCR",
    ],
    cover: visualSearchCover,
    liveLink: null,
    featured: false,
  },
  {
    slug: "hvtms-heavy-vehicle-transport",
    name: "HVTMS — Heavy Vehicle Transport Manufacturing",
    category: "Full-Stack Platforms",
    context: "Heavy-vehicle manufacturing",
    role: "Full-Stack Engineer & System Designer",
    year: "2022",
    summary:
      "End-to-end digitalization of heavy-vehicle manufacturing - sales, bay-wise production, inventory, testing, finance and dispatch with real-time data flow.",
    overview:
      "A single platform covering the entire manufacturing workflow for heavy vehicles: lead intake, conflict-free bay-wise assembly, production-to-inventory requisition, automated testing sign-off, and post-payment gate-pass release - replacing paperwork with real-time data.",
    highlights: [
      "Designed and developed a comprehensive end-to-end platform to streamline the manufacturing workflow of heavy vehicles for manufacturers.",
      "Enabled real-time lead intake for the sales team through forms and offline visits, with automated routing for initial vehicle assessments.",
      "Implemented bay-wise production management allowing isolated, conflict-free assembly of truck components, with daily progress logging per vehicle.",
      "Integrated production-to-inventory communication for seamless component requisition and fulfillment, reducing downtime.",
      "Automated vehicle testing workflow, where test approvals trigger consolidated reporting for accounts and final billing.",
      "Streamlined post-payment vehicle release with automated gate pass generation and real-time synchronization with the security team.",
      "Achieved complete digitalization of sales, production, inventory, testing, finance, and dispatch with real-time data flow and zero paperwork.",
    ],
    technologies: [
      "Django",
      "Full-Stack Development",
      "Workflow Automation",
      "Real-Time Systems",
      "Production Management",
      "Inventory Management",
    ],
    cover: HVTMSCover,
    liveLink: null,
    featured: false,
  },
  {
    slug: "emango-education-platform",
    name: "Emango - Education & Event Enablement",
    category: "Full-Stack Platforms",
    context: "EdTech platform",
    role: "Full-Stack Engineer",
    year: "2022",
    summary:
      "A platform connecting students, schools and colleges through assignments, quizzes, competitions and performance analytics.",
    overview:
      "Emango brings academic and extracurricular activity onto one platform — students take assignments, quizzes and mock tests and get performance reports; institutions run competitions and hackathons; and colleges discover high-performing students from event analytics.",
    highlights: [
      "Built a unified platform for students, schools, colleges, and societies to engage in academic and extracurricular activities.",
      "Enabled students to access assignments, quizzes, mock tests, and receive performance reports.",
      "Developed modules for schools and societies to organize and manage academic competitions, hackathons, and talent events.",
      "Facilitated institutional discovery, allowing colleges to identify high-performing students for admissions and outreach based on event and quiz performance analytics.",
    ],
    technologies: [
      "Django",
      "REST APIs",
      "Full-Stack Development",
      "Analytics",
      "Education Technology",
    ],
    cover: EmangoCover,
    liveLink: null,
    featured: false,
  },
  {
    slug: "fitbuddy-ai-fitness",
    name: "FitBuddy - AI Fitness Coach",
    category: "Computer Vision",
    context: "Consumer fitness app",
    role: "AI Engineer",
    year: "2023",
    summary:
      "Real-time rep counting and exercise-form error detection from a phone camera, with AI-generated reports and diet plans.",
    overview:
      "FitBuddy uses on-device computer vision to count repetitions and flag form errors in real time from an ordinary mobile camera, then generates progress reports, diet plans and dashboards for clients and their trainers.",
    highlights: [
      "Built an AI platform to count user repetitions and detect exercise errors in real time using a mobile camera.",
      "Implemented AI-generated reports, diet plans, and dashboards for clients and trainers.",
    ],
    technologies: [
      "Computer Vision",
      "Real-Time Inference",
      "Artificial Intelligence",
      "AI-Generated Reports",
    ],
    cover: FitbuddyCover,
    liveLink: null,
    featured: false,
  },
  {
    slug: "nursing-station",
    name: "Nursing Station",
    category: "Full-Stack Platforms",
    context: "Healthcare / home care",
    role: "Full-Stack Engineer",
    year: "2021",
    summary:
      "A coordination system for patient requests, medication schedules and nurse assignments - enabling treatment at the door.",
    overview:
      "A workflow tool for a home-care service that tracks patient requests, medication schedules and nurse assignments in real time so care can be delivered at the patient's door.",
    highlights: [
      "Developed a system to track patient requests, medication schedules, and nurse assignments.",
      "Developed to provide treatment at the door.",
    ],
    technologies: [
      "Full-Stack Development",
      "Workflow Management",
      "Real-Time Data",
    ],
    cover: NSCover,
    liveLink: null,
    featured: false,
  },
];

export const projectCategories = [
  "AI & Data Solutions",
  "AI Agents",
  "Computer Vision",
  "Full-Stack Platforms",
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
}
