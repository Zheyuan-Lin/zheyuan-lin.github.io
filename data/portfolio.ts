export const personalInfo = {
  name: "Zheyuan Lin",
  title: "CS & Math @ Emory University",
  gpa: "3.93",
  bio: `Hey there, I'm Zheyuan.

I'm a Computer Science and Mathematics student at Emory University with a strong interest in distributed systems, machine learning infrastructure, and full-stack development.

I enjoy building scalable backend systems and have experience working with high-throughput services at companies like Tencent and XiaoMi. I'm particularly interested in the intersection of systems engineering and AI, focusing on building reliable, production-grade ML infrastructure.`,
  email: "zheyuan.lin@emory.edu",
  phone: "(857) 354-7800",
  location: "Atlanta, GA",
  links: {
    github: "https://github.com/Zheyuan-Lin",
    linkedin: "https://linkedin.com/in/zheyuan-lin",
    cv: "/zheyuan_cv_netflix.pdf"
  },
  photo: "/self4.png"
}

export const researchInterests = [
  "Distributed systems and microservices architecture",
  "Transformers, Attention, vLLM, and LLMs",
  "Agentic AI, context engineering, RAG, and MCP"
]

export const experiences = [
  {
    title: "SDE Intern @ Bytedance",
    period: "May 2025 - Aug 2025",
    description: "Built SpringBoot A/B testing traffic allocator serving 500+ experiments; consolidated 5 APIs reducing integration time by 80%.",
    stack: ["Java", "spring", "Kafka", "Flink", "PostgreSQL", ],
    highlights: [
    "Engineered real-time budget cap signal system by building Kafka/Flink streaming pipeline with PostgreSQL persistence, achieving 35% latency reduction and eliminating 45% of zero-budget campaign retrievals for Sponsored Ads platform",
    "Implemented exactly-once semantics via Apache Flink transactional sinks to prevent revenue leakage from post-budget impressions, enabling sub-second budget cap propagation across distributed ad-serving services.",
    "Improved production reliability by embedding budget state directly into the search index, removing downstream filtering overhead and allowing campaigns to resume instantly upon budget increases without manual intervention."
    ]
  },
  {
    title: "SDE Intern @ Invest ATL",
    period: "May 2025 - Aug 2025",
    description: "Built ML platform to automate affordable housing tax credit applications, eliminating 5 hours of manual work per application.",
    stack: ["python", "react", "openai", "chromadb", "docker"],
    highlights: [
      "Built ML platform to automate affordable housing tax credit applications, eliminating 5 hours of manual work per application",
      "Built geospatial scoring engine implementing Georgia QAP compliance rules across 19 amenity types, scraping 3,000+ POI via Google Maps API and achieving 88% accuracy through polygon containment tests and Haversine calculations",
      "Built RAG pipeline using OpenAI GPT-4 and ChromaDB vector database to process 124-page manual, achieving 95% answer accuracy with automated citation generation through hybrid retrieval, reducing rule interpretation errors by 60%",
      "Developed full-stack application using React for spatial indexing and interactive heatmap visualization of scoring distributions"
    ]
  },
  {
    title: "SDE Intern @ XiaoMi",
    period: "May 2024 - Sep 2024",
    description: "Built SpringBoot A/B testing traffic allocator serving 500+ experiments; consolidated 5 APIs reducing integration time by 80%.",
    stack: ["java", "spring", "redis", "kubernetes", "prometheus"],
    highlights: [
      "Built SpringBoot A/B testing traffic allocator serving 500+ concurrent experiments; consolidated 5 departmental APIs into unified SDK reducing integration time by 80% (2 days → 2 hours) and eliminating cross-team coordination overhead",
      "Achieved 70x P99.9 latency improvement (363ms → 5.2ms) by offloading runtime 4-table joins to backend Redis wide tables with 5-minute refresh cycles, reducing SDK memory footprint by 60% through wide tables containing minimal field sets",
      "Employed distributed cache eliminating configuration update blocking, reducing deployment windows to <5 minutes",
      "Established Prometheus/Grafana observability with <1-min detection; built adapters for .NET/Java legacy clients; discovered 12 edge cases; deployed via Kubernetes with Github Action; resolved Redis pool exhaustion"
    ]
  }
]

export const projects = [
  {
    title: "EEG Foundation Model",
    period: "May 2025 - Present",
    description: "Built self-supervised EEG foundation model using encoder, CSM embedder (NeuroGPT), and GPT-2/DistilGPT-2 decoder with causal attention for pretraining on unlabeled brain signals and downstream fine-tuning.",
    image: "/jenai.png",
    stack: ["python", "pytorch", "transformers"],
    link: "https://github.com/Zheyuan-Lin/eeg-foundation",
    highlights: [
      "Engineered end-to-end data pipeline using MNE-based conversion, 19-channel 10-20 montage preprocessing, overlapping temporal chunking, and attention-masked collation to support efficient transformer training on raw recordings",
      "Established reproducible evaluation framework with K-fold cross-validation, early stopping, SafeTensors checkpointing, and DeepLIFT interpretability to generate stable decoding metrics and spatial-temporal importance maps"
    ]
  },
  {
    title: "Emory NLP Lab With JenAI",
    period: "May 2025 - Jan 2026",
    description: "Fine-tuned Llama-2-7B using QLoRA (4-bit quantization, rank-32) on Jenkins domain knowledge, achieving 45% accuracy improvement (ROUGE-L: 0.52→0.75) on technical troubleshooting queries while training only 1.7% of parameters",
    image: "/jenai.png",
    stack: ["python", "pytorch", "flask", "react", "docker", "langchain"],
    link: "https://github.com/Zheyuan-Lin/jenkin-ai-finetune",
    highlights: [
      "Built ETL pipeline scraping 3,200+ Q&A pairs; reduced noise by 40% through deduplication and quality filtering",
      "Deployed LangChain chatbot with conversational memory; quantized to GGML enabling CPU inference at 15 tokens/sec",
      "Developed Flask + React TypeScript full-stack app for chat interface with Docker Compose; achieved one-command setup"
    ]
  },
  {
    title: "GraphQL Query Generation API",
    period: "Sep 2024 - Jan 2025",
    description: "Engineered NL-to-GraphQL translation system using OpenAI GPT-4 API and LangChain with schema-driven prompt engineering, achieving 80%+ accuracy on clinical cohort queries.",
    image: "/jenai.png",
    stack: ["python", "fastapi", "openai", "graphql", "redis", "docker"],
    link: "https://github.com/Zheyuan-Lin/nl2graphql",
    highlights: [
      "Designed resilient LLM output validation pipeline with three-layer fallback parsing (structured JSON → truncation repair → regex extraction) and Redis result caching",
      "Increased parse success rate to 95%+ and reduced API latency by 90% through few-shot learning and contextual examples"
    ]
  },
  {
    title: "Visualized Data Interpretation Bias Study Platform",
    period: "2024",
    description: "Building research platform on how Socratic prompting influences data interpretation bias, publishing to CHI 2026. Implemented interaction tracking system with D3.js interactive charts and real-time analysis.",
    image: "/lumos.png",
    stack: ["react", "python", "websocket", "d3", "postgresql", "docker"],
    link: "https://github.com/Zheyuan-Lin/Lumos-Socratis_Prompts",
    highlights: [
      "Implemented interaction tracking system capturing 40+ event types (hover, click, filter, encoding changes) on D3.js interactive chart types with millisecond-precision timestamps",
      "Designed Python analysis pipeline computing attention heatmaps and chi-square tests to quantify visualization bias patterns"
    ]
  }
]

export const currently = {
  reading: "Wuthering Heights by Emily Bronte",
  learning: "Agentic AI & vLLM",
  listening: "Lo-fi hip hop radio - beats to relax/study to",
  brewing: "V60 pour-over, 15g coffee : 250g water, 2:30 total time"
}

export const interests = [
  {
    icon: "📸",
    title: "Photography",
    description: "Shooting film on a Canon AE-1. Currently exploring long exposures and street photography."
  },
  {
    icon: "☕",
    title: "Coffee Nerd",
    description: "Perfecting the art of pour-over. Current favorite: Ethiopian Yirgacheffe light roast."
  },
  {
    icon: "🐱",
    title: "Cat Dad",
    description: "My cat supervises all my code reviews. She has strong opinions about variable naming."
  },
  {
    icon: "🌄",
    title: "Adventure",
    description: "When not coding, you'll find me hiking trails and capturing nature's algorithms."
  }
]

export const lifePhotos = [
  { src: "/self.jpg", alt: "Personal photo" },
  { src: "/cat.png", alt: "My coding supervisor" },
  { src: "/adventure.png", alt: "Adventure time" }
]

export const quote = "The best code is the code you don't have to write. The second best is code that tells a story."

export const techLogos: { [key: string]: string } = {
  "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "spring": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  "react": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "nodejs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "aws": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "rabbitmq": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  "d3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
  "grpc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg",
  "pyspark": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  "zookeeper": "https://www.svgrepo.com/show/353575/zookeeper.svg",
  "clickhouse": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clickhouse/clickhouse-original.svg",
  "prometheus": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  "websocket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  "pytorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "langchain": "https://python.langchain.com/favicon.ico",
  "openai": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
  "chromadb": "https://www.trychroma.com/favicon.svg",
  "transformers": "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  "fastapi": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "graphql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
}
