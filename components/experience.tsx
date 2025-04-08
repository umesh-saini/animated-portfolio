"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  duration: string
  description: string
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences: ExperienceItem[] = [
    {
      title: "Software Developer",
      company: "Lanet Info Tech",
      duration: "2 Years",
      description:
        "Worked on various projects including HRMS, cross-platform tracking systems, and mobile applications. Led development teams and implemented complex features.",
    },
    {
      title: "Software Development Intern",
      company: "Lanet Info Tech",
      duration: "6 Months",
      description:
        "Gained hands-on experience with frontend and backend technologies. Contributed to real-world projects and learned industry best practices.",
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20">
      <SectionHeading title="Work Experience" subtitle="My professional journey" />

      <div ref={ref} className="mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 pb-8 md:pb-0">
                <Card className="w-full max-w-md border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 hidden md:block">
                <div className="w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
              </div>

              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
