export const personalInfo = {
  name: "Zheyuan Lin",
  title: "CS & Math @ Emory University",
  gpa: "3.93",
  bio: "I build backend systems and ML pipelines. Currently learning more about distributed systems.",
  email: "zheyuan.lin@emory.edu",
  phone: "(857) 354-7800",
  location: "Atlanta, GA",
  links: {
    github: "https://github.com/Zheyuan-Lin",
    linkedin: "https://linkedin.com/in/zheyuan-lin",
    cv: "/zheyuan_cv.pdf"
  },
  photo: "/self4.png"
}

export const experiences = [
  {
    title: "SDE Intern @ Tencent",
    period: "May 2025 - Aug 2025",
    description: "Developed distributed ID service with dual-mode Segment/Snowflake architecture, generating 5K IDs/second while reducing database queries by 95%.",
    stack: ["java", "spring", "mysql", "redis"],
    highlights: [

      "Improved A/B testing traffic allocator serving 500+ concurrent experiments; consolidated 5 departmental APIs into unifiedSDK reducing integration time by 80% (2 days → 2 hours) and eliminating cross-team coordination overhead",
      "Achieved 70x P99.9 latency improvement (363ms → 5.2ms) by replacing runtime 4-table joins with single-table lookup to pre-materialize Redis-backed wide tables; reduced SDK memory footprint by 60% through minimal field-set design",
      "Eliminated configuration update blocking by implementing CopyOnWrite dual-buffer cache with atomic pointer swaps and Redis pub/sub propagation, reducing config deployment from overnight maintenance windows to <5 minutes in production",
      "Built property-based testing framework generating 10M+ random test cases to validate functional parity with legacy system, identifying and fixing 12 critical edge cases (zero userId, incorrect 100% traffic allocation) achieving 99.99% consistency", 
      "Built backward-compatible adapter layer enabling legacy .NET and Java clients to use new SDK without code changes, supported gradual migration of 100+ applications with canary deployments, achieving <5% rollback rate"
    ]
  },
  {
    title: "SDE Intern @ XiaoMi",
    period: "May 2024 - Sep 2024",
    description: "Built real-time analytics pipeline processing 5K A/B testing events/sec from Kafka to ClickHouse, enabling product teams to analyze experiment results within minutes",
    stack: ["java", "spring", "kafka", "redis", "clickhouse", "prometheus"],
    highlights: [
      "Developed Kubernetes debugging platform serving 200+ backend engineers across 30+ microservices managing 600+ pods in production; reduced infrastructure support tickets by 40%, saving estimated 80+ hours/month in manual troubleshooting in production",
      "Achieved P95 latency 45ms at 500 req/sec during load testing, processing 300+ daily health checks and 40-60 pod operations across 52 namespaces; optimized through gRPC connection pooling and Redis caching (94.5% hit rate)",
      "Built Go gRPC microservices platform for workload health analysis, pod management, and monitoring; implemented JWT/RBAC authentication, namespace-scoped permissions, and PostgreSQL audit logging tracking 10K+ ops/m",
      "Developed React console plugin with Material-UI providing enterprise developer portal; implemented real-time workload visualization via WebSockets and automated health scoring with restart pattern detection",
      "Architected comprehensive Chronosphere monitoring integration with automated alerting and dashboard embedding, achieving 99.9% uptime; built intelligent health analysis engine achieving 96.8% operation success rate"
    ]
  },
  {
    title: "SDE Intern @ Ping An Technology",
    period: "May 2023 - Aug 2023",
    description: "Extended gRPC-based Kubernetes API with 22 endpoints serving 1,900+ engineers, reducing incident resolution time by 75%.",
    stack: ["go", "grpc", "kubernetes", "react", "postgresql", "redis", "prometheus"],
    highlights: [
      "Built Snowflake mode with ZooKeeper worker coordination, producing time-sortable 64-bit IDs with clock drift detection",
      "Designed lock-free concurrency using AtomicLong and ReadWriteLock, enabling async loading to eliminate generation latency",
      "Created adaptive step algorithm auto-scaling batch size 1K-100K based on traffic patterns, reducing wasted IDs by 40%",
      "Coordinated with 3 downstream service teams to validate ID generation requirements, migrating 5 legacy services"
    ]
  }
]

export const projects = [
  {
    title: "Jen AI Finetuning",
    description: "Fine-tuned Llama-2-7B using QLoRA (4-bit quantization, rank-32) on Jenkins domain knowledge, achieving 45% accuracy improvement (ROUGE-L: 0.52→0.75) on technical troubleshooting queries while training only 1.7% of parameters",
    image: "/jenai.png",
    stack: ["python", "Llama-2", "QLoRA", "Google Colab", "aws", "Fast", "Langchain"],
    link: "https://github.com/Zheyuan-Lin/jenkin-ai-finetune",
    highlights: [
      "Built ETL pipeline scraping 3,200+ Q&A pairs; reduced noise by 40% through deduplication and quality filtering",
      "Deployed LangChain chatbot with conversational memory; quantized to GGML enabling CPU inference at 15 tokens/sec",
      "Developed Flask + React TypeScript full-stack app for chat interface with Docker Compose; achieved one-command setup"
    ]
  },
  {
    title: "Lumos Visualization Interface",
    description: "Built research platform with Angular and D3.js, studying cognitive biases in data interpretation for CHI 2026 submission. Implemented WebSocket telemetry capturing interaction patterns, including hover timing and clicks, supporting multi-observation sessions.",
    image: "/lumos.png",
    stack: ["angular", "typescript", "nodejs", "d3", "postgresql", "docker", "websocket"],
    link: "https://github.com/Zheyuan-Lin/Lumos-Socratis_Prompts",
    highlights: [
      "Developed bias detection computing outlier focus ratio for points ≥2σ from the mean and chi-square test on distribution",
      "Resolved real-time sync for observers via WebSocket broadcasting, ensuring <100ms latency for 10+ concurrent sessions",
      "Deployed containerized services using Docker with PostgreSQL database, achieving 99.5% uptime",
      "Implemented Connection Pooling and Query Optimization, handling 5K+ interaction events/session"
    ]
  }
]

export const currently = {
  reading: "The Three-Body Problem by Liu Cixin",
  learning: "Distributed systems & Raft consensus",
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
  // New AI/ML related logos
  "Llama-2": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "QLoRA": "https://upload.wikimedia.org/wikipedia/commons/8/84/Artificial_neural_network.svg",
  "Google Colab": "https://colab.research.google.com/img/colab_favicon_256px.png",
  "Fast": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Langchain": "https://python.langchain.com/favicon.ico"
}
