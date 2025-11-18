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
      "Built Snowflake mode with ZooKeeper worker coordination, producing time-sortable 64-bit IDs with clock drift detection",
      "Designed lock-free concurrency using AtomicLong and ReadWriteLock, enabling async loading to eliminate generation latency",
      "Created adaptive step algorithm auto-scaling batch size 1K-100K based on traffic patterns, reducing wasted IDs by 40%",
      "Coordinated with 3 downstream service teams to validate ID generation requirements, migrating 5 legacy services"
    ]
  },
  {
    title: "SDE Intern @ XiaoMi",
    period: "May 2024 - Sep 2024",
    description: "Built real-time analytics pipeline processing 5K A/B testing events/sec from Kafka to ClickHouse, enabling product teams to analyze experiment results within minutes",
    stack: ["java", "spring", "kafka", "redis", "clickhouse", "prometheus"],
    highlights: [
      "Designed event transformation service mapping JSON to ClickHouse schema with data validation and comprehensive error logging",
      "Configured Spring profiles (dev/staging/prod), implemented exponential backoff retry with Resilience4j, and added CircuitBreaker",
      "Established JUnit testing with 85% coverage, validating stream pipelines with performance benchmarks simulating production load"
    ]
  },
  {
    title: "SDE Intern @ Ping An Technology",
    period: "May 2023 - Aug 2023",
    description: "Extended gRPC-based Kubernetes API with 22 endpoints serving 1,900+ engineers, reducing incident resolution time by 75%.",
    stack: ["go", "grpc", "kubernetes", "react", "postgresql", "redis", "prometheus"],
    highlights: [
      "Built React console plugin with JWT/RBAC authentication, visualizing pod health across 50+ namespaces.",
      "Designed health analysis engine processing 1,000+ requests/s, improving success rate by 35% and reducing debugging time by 60%",
      "Implemented monitor in Chronosphere with dashboards tracking API latency and CPU/memory utilization with automated alerting",
      "Engineered automated pod remediation system with PostgreSQL audit trail, handling 500+ daily cleanup operations",
      "Optimized performance with Redis caching, achieving 70% hit rate and goroutine parallelization, reducing p95 latency to 450ms"
    ]
  }
]

export const projects = [
  {
    title: "Low-Income Housing Tax Credit Investment Platform",
    description: "Built ML pipeline for affordable housing investment analysis, processing 1,860+ applications, supporting $2.5M+ investment decisions. Developed PySpark ETL extracting 40+ features from PDFs, APIs, and databases with Google Maps and Census integration.",
    image: "/tdd.png",
    stack: ["python", "pyspark", "flask", "redis", "aws", "docker", "postgresql"],
    link: "https://github.com/Zheyuan-Lin/tdddaily",
    highlights: [
      "Engineered Flask REST API serving predictions and feature extraction with ≤200ms P95 latency",
      "Resolved Google Maps rate limiting using Redis caching, achieving 92% hit rate with 7-day TTL",
      "Built geospatial scoring system using Shapely for school district boundary intersection and PostGIS spatial queries",
      "Integrated LLM-based parser using GPT-4 API for structured PDF extraction, improving data quality",
      "Deployed on AWS EC2 with Docker containerization and automated CI/CD pipeline using GitHub Actions"
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
    icon: "🎮",
    title: "Gaming",
    description: "Strategy games enthusiast. Civilization VI, Factorio, and chess puzzles are my go-to brain workouts."
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
  }
]

export const lifePhotos = [
  { src: "/self.jpg", alt: "Personal" },
  { src: "/cat.png", alt: "Cat" },
  { src: "/coffee_art.png", alt: "Coffee" }
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
  "websocket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
}
