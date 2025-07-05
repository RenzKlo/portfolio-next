# 🚀 Kent Lorenz Daria - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with dark/light mode
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js 15 for optimal loading speeds
- 📧 **Working Contact Form**: Real email delivery using Resend API
- 🎯 **Interactive Elements**: Smooth animations and micro-interactions
- 🔍 **SEO Optimized**: Proper metadata and semantic HTML
- ♿ **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Resend API
- **Deployment**: Vercel

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd portfolio-next
npm install
```

### 2. Environment Setup
Create `.env.local` file:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Production Build
```bash
npm run build
npm start
```

## 📧 Contact Form Setup

### Get Free Resend API Key (3,000 emails/month FREE):
1. Sign up at [resend.com](https://resend.com)
2. Create API key
3. Add to `.env.local`: `RESEND_API_KEY=re_YourKey`
4. Deploy to Vercel and add environment variable

## 📝 Customization

### Personal Information
Edit `src/data/portfolio.ts`:
- Personal details and bio
- Skills and technologies
- Projects and experience
- Contact information

### Resume
Place your resume at: `public/assets/resume.pdf`

### Images
Add project images to: `public/images/`

## 🚀 Deployment

### Vercel (Recommended - FREE)
1. Connect GitHub repo to Vercel
2. Add `RESEND_API_KEY` environment variable
3. Deploy automatically on push

### Manual Build
```bash
npm run build
```
Upload `out/` or `.next/` folder to your hosting provider.

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components
├── data/            # Portfolio data
├── hooks/           # Custom React hooks
└── types/           # TypeScript definitions

public/
├── assets/          # Resume and documents
└── images/          # Project images
```

## 💰 Hosting Costs

- **Vercel**: FREE (100GB bandwidth/month)
- **Resend**: FREE (3,000 emails/month)
- **Total**: $0/month

## 🤝 Contact

**Kent Lorenz Daria**
- Email: kentlorenz.daria@gmail.com
- LinkedIn: [kent-daria](https://linkedin.com/in/kent-daria)
- GitHub: [renzklo](https://github.com/renzklo)

---

Built with ❤️ using Next.js and TypeScript
