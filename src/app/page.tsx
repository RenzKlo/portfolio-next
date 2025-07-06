import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

// Lazy load heavy components for better mobile performance
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
  ),
  ssr: true
});

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
  ),
  ssr: true
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
  ),
  ssr: true
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
