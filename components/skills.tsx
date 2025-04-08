"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { Code, Database, Server, Layout, Terminal, GitBranch, Trello } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React", "Next.js", "HTML & CSS", "JavaScript", "Electron"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Django", "Python", "Node.js"],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["JavaScript", "Python", "TypeScript"],
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Linux Command Line", "Git & GitLab", "Jira"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitLab", "GitHub"],
    },
    {
      title: "Project Management",
      icon: <Trello className="h-8 w-8 text-primary" />,
      skills: ["Jira", "Agile Methodology"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <SectionHeading title="My Skills" subtitle="What I bring to the table" />

      <div ref={ref} className="mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
