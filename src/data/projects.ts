export const projects = [
  {
    id: "1",
    title: "StudyPal — Learning Companion App",
    description:
      "A cross-platform Flutter app that helps students organize study sessions, track progress, and collaborate with peers in real time.",
    longDescription:
      "Built with Flutter and Dart, StudyPal features flashcard decks, a Pomodoro timer, peer group rooms backed by Firebase Realtime Database, and offline-first SQLite caching. Push notifications remind users of upcoming sessions.",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite", "Provider"],
    githubUrl: "https://github.com/Osuald/studypal",
    liveUrl: "",
    image: "",
    featured: true,
    category: "Mobile App",
    color: "from-violet-600 to-purple-800",
    icon: "📚",
  },
  {
    id: "2",
    title: "AutoPrice Rwanda — Car Value Predictor",
    description:
      "A machine-learning web app that predicts used-car prices in Rwanda based on make, model, mileage, and condition.",
    longDescription:
      "Python/FastAPI backend trains a Random Forest regression model on scraped local market data. A React + Tailwind frontend lets users input car specs and receive an instant price estimate with confidence intervals and comparable listings.",
    technologies: ["Python", "FastAPI", "Scikit-learn", "React", "PostgreSQL"],
    githubUrl: "https://github.com/Osuald/autoprice-rw",
    liveUrl: "",
    image: "",
    featured: true,
    category: "ML / Web",
    color: "from-cyan-600 to-teal-700",
    icon: "🚗",
  },
  {
    id: "3",
    title: "Campus Connect — Social Network",
    description:
      "A university social platform for the University of Rwanda community — events, clubs, announcements, and chat.",
    longDescription:
      "Flutter mobile app backed by a Node.js REST API and MongoDB. Supports role-based access (student/admin), real-time group chats via Socket.io, event calendars, and club management dashboards.",
    technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/Osuald/campus-connect",
    liveUrl: "",
    image: "",
    featured: true,
    category: "Mobile App",
    color: "from-emerald-600 to-green-700",
    icon: "🏫",
  },
  {
    id: "4",
    title: "PyTask — CLI Productivity Tool",
    description:
      "A powerful command-line task manager with tags, deadlines, priorities, and Markdown export.",
    longDescription:
      "Written in pure Python with SQLite storage. Supports recurring tasks, bulk operations, CSV/Markdown export, and a beautiful Rich-based TUI. Installable as a pip package.",
    technologies: ["Python", "SQLite", "Rich", "Click", "PyPI"],
    githubUrl: "https://github.com/Osuald/pytask",
    liveUrl: "",
    image: "",
    featured: false,
    category: "CLI Tool",
    color: "from-amber-600 to-orange-700",
    icon: "⚡",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description:
      "This very site — a modern, animated developer portfolio built with Next.js 16 and Tailwind CSS v4.",
    longDescription:
      "Dark-theme portfolio featuring smooth Framer Motion animations, EmailJS contact form, dark/light toggle, scroll progress indicator, and full mobile responsiveness.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Osuald/portfolio-website",
    liveUrl: "",
    image: "",
    featured: false,
    category: "Web",
    color: "from-pink-600 to-rose-700",
    icon: "🌐",
  },
  {
    id: "6",
    title: "Expense Tracker — Flutter App",
    description:
      "A beautifully designed personal finance tracker with charts, budgets, and multi-currency support.",
    longDescription:
      "Flutter app with Hive local storage for offline-first experience. Features animated pie/bar charts via fl_chart, monthly budget alerts, receipt photo capture, and PDF export.",
    technologies: ["Flutter", "Dart", "Hive", "fl_chart", "Firebase"],
    githubUrl: "https://github.com/Osuald/expense-tracker",
    liveUrl: "",
    image: "",
    featured: false,
    category: "Mobile App",
    color: "from-indigo-600 to-blue-700",
    icon: "💸",
  },
];

// ── Replace GitHub URLs with your actual repositories ──
// ── Add liveUrl when you deploy a project            ──
