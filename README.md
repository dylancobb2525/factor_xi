# Factor XI Learning Center

A comprehensive educational resource platform focused on Factor XI/XIa pathway inhibition for healthcare professionals.

## 🚀 Quick Start

```bash
cd AlzDiseaseLC
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Deployment to Vercel

### Important: Configure Root Directory

Since the Next.js app is in the `AlzDiseaseLC` subdirectory, you need to configure Vercel properly:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project" or "Import Project"
3. Import this repository: `https://github.com/dylancobb2525/factor_xi.git`
4. **IMPORTANT**: Before deploying, click on "Edit" next to "Root Directory"
5. Set **Root Directory** to: `AlzDiseaseLC`
6. Vercel will automatically detect Next.js framework
7. Click "Deploy"

### Alternative: Deploy via Vercel CLI
```bash
npm install -g vercel
cd AlzDiseaseLC
vercel --prod
```

## 🏗️ Build Verification

The project has been verified to build successfully:
```bash
cd AlzDiseaseLC
npm run build
```

All TypeScript errors have been resolved and the build passes without issues.

## ✨ Features

- **Statistics Section**: Animated counters showing key thrombosis and bleeding statistics
- **Hero Section**: Factor XI/XIa pathway visualization
- **Educational Activities**: CME programs for healthcare professionals
- **Expert Faculty**: Showcase of leading authorities in cardiology and thrombosis research
- **Resource Center**: Clinical practice guidelines and resources
- **Responsive Design**: Optimized for all screen sizes with widened layouts (1600px max-width)

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.30
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📝 Notes

- The main application code is in the `AlzDiseaseLC` directory
- Root-level `vercel.json` handles subdirectory deployment
- All images are optimized using Next.js Image component
- Build output is fully static and optimized for production

## 🔗 Repository

[https://github.com/dylancobb2525/factor_xi.git](https://github.com/dylancobb2525/factor_xi.git)

## 📄 License

All rights reserved © 2025 Factor XI Learning Center

