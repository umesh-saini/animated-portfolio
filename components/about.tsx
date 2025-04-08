"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { User, Briefcase, Calendar, MapPin } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div ref={ref} className="mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate software developer with{" "}
              <span className="font-semibold text-primary">2.5 years of experience</span>, including a 6-month
              internship and 2 years of full-time work at
              <a
                href="https://lanetteam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {" "}
                Lanet Info Tech
              </a>
              .
            </p>
            <p className="text-lg leading-relaxed">
              I love building scalable, user-friendly applications and solving complex problems through code. I'm always
              eager to learn new technologies and collaborate on exciting projects!
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy watching anime, spending time with friends, and sometimes going on long
              rides. Life is all about balance!
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4">
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Full Name</h3>
                    <p className="font-semibold">Umesh Saini</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Current Position</h3>
                    <p className="font-semibold">Software Developer</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Experience</h3>
                    <p className="font-semibold">2.5 Years</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Email</h3>
                    <p className="font-semibold">umeshsaini8085@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
