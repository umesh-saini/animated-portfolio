"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Learning from "@/components/learning";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeQuiz from "@/components/code-quiz";
import ChatBot from "@/components/chat-bot";
import { ThemeProvider } from "@/components/theme-provider";
import ParticlesBackground from "@/components/particles-background";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen bg-background">
        <ParticlesBackground />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
          style={{ width: progressBarWidth }}
        />
        <Navbar />
        <main className="container mx-auto px-4 pt-16 pb-24 relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Learning />
          <CodeQuiz />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}
