<p align="center">
  <img src="public/logo.svg" alt="AppForge Logo" width="80" height="80">
</p>

<h1 align="center">AppForge</h1>

<p align="center">
  <strong>🔥 Your Ultimate Open Source App Marketplace</strong>
</p>

<p align="center">
  Discover, explore, and download the best open-source applications from GitHub.
  <br />
  Built with Next.js 14, TypeScript, and Tailwind CSS.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

---

## ✨ Features

- **🔍 Intelligent Search** - Advanced GitHub API search with real-time results
- **📱 Real-Time Data** - Live fetching from GitHub with ISR (Incremental Static Regeneration)
- **🎨 Premium UI** - Glassmorphic design with smooth Framer Motion animations
- **🌓 Dark/Light Mode** - Seamless theme switching with system preference detection
- **📊 App Details** - Complete repository info including README, releases, and statistics
- **🎯 Smart Categories** - Browse apps by productivity, developer tools, media, and more
- **⚡ Blazing Fast** - Optimized with Next.js 14 App Router and edge caching
- **📱 Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- **🔄 Trending & Featured** - Discover popular and hand-picked applications
- **🚀 Direct Downloads** - One-click access to releases and source code

## 🖼️ Screenshots

<p align="center">
<img width="1919" height="958" alt="image" src="https://github.com/user-attachments/assets/87dc097f-42fa-484b-b942-783d389934b4" />

<img width="1872" height="961" alt="image" src="https://github.com/user-attachments/assets/d4f1276d-f509-41ab-a01f-57f2f5fc87c1" />

<img width="1787" height="949" alt="image" src="https://github.com/user-attachments/assets/9d02db95-da90-4b8e-83ae-6eeb2ae866ee" />
  
</p>

## 🚀 Demo

[**Live Demo**](open-market-three.vercel.app) 

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Lucide React** | Beautiful icons |
| **GitHub API** | Real-time data fetching |
| **react-markdown** | README rendering |

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- GitHub Personal Access Token (optional, for higher rate limits)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Code-Game-Ninja/Open-Market-.git
cd Open-Market-

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your GitHub token (optional)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# GitHub Personal Access Token (optional but recommended)
# Get yours at: https://github.com/settings/tokens
GITHUB_TOKEN=your_github_personal_access_token
```

> **Note:** Without a GitHub token, you'll be limited to 60 API requests per hour. With a token, this increases to 5,000 requests per hour.

## 📁 Project Structure

```
Open-Market-/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── apps/       # Apps listing & detail pages
│   │   ├── categories/ # Category browsing
│   │   ├── featured/   # Featured apps
│   │   ├── trending/   # Trending apps
│   │   └── ...
│   ├── components/     # React components
│   │   ├── apps/       # App-related components
│   │   ├── layout/     # Navbar, Footer
│   │   └── ui/         # Reusable UI components
│   ├── lib/            # Utilities & API functions
│   └── types/          # TypeScript type definitions
├── .env.example        # Environment variables template
├── tailwind.config.ts  # Tailwind CSS configuration
└── package.json
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Code-Game-Ninja**

- GitHub: [@Code-Game-Ninja](https://github.com/Code-Game-Ninja)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons
- [GitHub API](https://docs.github.com/en/rest) - Repository data

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Code-Game-Ninja">Code-Game-Ninja</a>
</p>

<p align="center">
  <a href="https://github.com/Code-Game-Ninja/Open-Market-/stargazers">⭐ Star this repo</a> •
  <a href="https://github.com/Code-Game-Ninja/Open-Market-/issues">🐛 Report Bug</a> •
  <a href="https://github.com/Code-Game-Ninja/Open-Market-/issues">✨ Request Feature</a>
</p>
