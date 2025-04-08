"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { ExternalLink, Github, Smartphone, Monitor, Server, FileCode } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
  type: "desktop" | "mobile" | "web" | "platform"
  featured?: boolean
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects: Project[] = [
    {
      title: "CodeExam Platform",
      description:
        "A comprehensive exam platform supporting various coding languages, frameworks (React, Next.js, etc.), database exams, and MCQ tests for developers. Features include real-time code execution, test case validation, and detailed performance analytics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "TypeScript"],
      type: "platform",
      featured: true,
    },
    {
      title: "Work Watch",
      description:
        "A cross-platform tracking system that monitors user activity and takes screenshots. Features include user idle activity detection, role-based access control, and live notifications via sockets.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Electron", "React", "Node.js", "Socket.io"],
      type: "desktop",
    },
    {
      title: "Fresh Basket",
      description:
        "A mobile app with integrated payment gateway, wallet functionality, and push notifications. Available on Google Play Store with role-based access for admin, sub-admin, delivery personnel, and users.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Node.js", "Push Notifications"],
      link: "https://play.google.com/store/apps/details?id=com.freshbasketvesu&hl=en_IN",
      type: "mobile",
    },
    {
      title: "HRMS System",
      description:
        "A comprehensive Human Resource Management System with employee management, project tracking, leave management, and integration with the desktop tracking app for monitoring user activity. Built with MongoDB for efficient data management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB"],
      type: "web",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const featuredVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "desktop":
        return <Monitor className="h-5 w-5" />
      case "mobile":
        return <Smartphone className="h-5 w-5" />
      case "web":
        return <Server className="h-5 w-5" />
      case "platform":
        return <FileCode className="h-5 w-5" />
      default:
        return <Monitor className="h-5 w-5" />
    }
  }

  // Filter out featured project
  const featuredProject = projects.find((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <SectionHeading title="My Projects" subtitle="What I've built" />

      <div ref={ref} className="mt-12">
        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            variants={featuredVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative overflow-hidden h-full">
                  <img
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-primary/10 p-1.5 rounded-full">{getProjectIcon(featuredProject.type)}</div>
                    <h3 className="text-xl font-semibold">{featuredProject.title}</h3>
                    <span className="px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs font-medium ml-auto">
                      Featured
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 flex-grow">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2">
                    {featuredProject.link && (
                      <Button variant="default" size="sm" className="gap-2" asChild>
                        <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </a>
                      </Button>
                    )}
                    {featuredProject.github && (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-primary/10 p-1.5 rounded-full">{getProjectIcon(project.type)}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  {project.link && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
