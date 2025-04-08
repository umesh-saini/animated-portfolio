"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import SectionHeading from "@/components/section-heading"
import { BookOpen } from "lucide-react"

interface LearningItem {
  title: string
  progress: number
  description: string
}

export default function Learning() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const learningItems: LearningItem[] = [
    {
      title: "Advanced Node.js",
      progress: 75,
      description: "Building REST APIs, microservices, and real-time applications",
    },
    {
      title: "TypeScript",
      progress: 60,
      description: "For better type safety in JavaScript projects",
    },
    {
      title: "Docker",
      progress: 40,
      description: "For containerization and deployment",
    },
    {
      title: "AWS",
      progress: 30,
      description: "For cloud computing and serverless architecture",
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
    <section id="learning" className="py-20">
      <SectionHeading title="What I'm Learning" subtitle="Always expanding my skill set" />

      <div ref={ref} className="mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {learningItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
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
