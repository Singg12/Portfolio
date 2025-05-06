"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { ArrowUp, Download, Github, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { SkillIcon } from "@/components/skill-icon"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const isMobile = useMobile()

  // Hero section refs and animations
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: false, amount: 0.2 })

  // About section refs and animations
  const aboutRef = useRef<HTMLDivElement>(null)
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.2 })

  // Projects section refs and animations
  const projectsRef = useRef<HTMLDivElement>(null)
  const projectsInView = useInView(projectsRef, { once: false, amount: 0.1 })

  // Skills section refs and animations
  const skillsRef = useRef<HTMLDivElement>(null)
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.1 })

  // Contact section refs and animations
  const contactRef = useRef<HTMLDivElement>(null)
  const contactInView = useInView(contactRef, { once: false, amount: 0.1 })

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen bg-background font-sans">
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-50 origin-left" style={{ scaleX }} />

      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300"
              >
                Java Developer
              </motion.div> */}
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Hi, I&apos;m <span className="text-indigo-500">Chhaysing</span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
               I build robust backend systems that power fast, accessible, and scalable digital experiences always with best practices in mind.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-indigo-600 px-8 text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg"
                  asChild
                >
                  <Link href="#projects">
                    <span className="flex items-center gap-2">Explore Work</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-indigo-600 px-8 text-indigo-600 shadow-md transition-all hover:bg-indigo-50 hover:shadow-lg dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/30"
                  asChild
                >
                  {/* <Link href="#" download>
                    <span className="flex items-center gap-2">
                      Download CV <Download className="h-4 w-4" />
                    </span>
                  </Link> */}
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/pic.jpg?height=400&width=400"
                  alt="Profile"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.2,
            }}
          >
            <Link
              href="#about"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition-all hover:bg-indigo-700 hover:scale-110"
              aria-label="Scroll to about section"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <ArrowUp className="h-6 w-6 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section ref={aboutRef} id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
              ABOUT ME
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
          </motion.div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <Image src="/pic3.jpg?height=400&width=400" alt="About me" className="object-cover" fill />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg text-muted-foreground">
                Hello! I&apos;m Chhaysing, a passionate software developer with hands-on experience building  
                applications and digital experiences through real-world projects.
              </p>
              <p className="text-lg text-muted-foreground">
              I started my tech journey in college and have since built backend systems with a focus on APIs, databases, and scalability.
              </p>
              <p className="text-lg text-muted-foreground">
              I specialize in backend development with Spring Boot, building secure APIs with JWT authentication and testing workflows 
              using tools like Postman.
              </p>
              <p className="text-lg text-muted-foreground">
                When I&apos;m not coding, you can find me Cycling, reading, or drink coffee.
              </p>
              <div className="pt-4">
                <Button
                  className="rounded-full bg-indigo-600 px-8 text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg"
                  asChild
                >
                  <Link href="#contact">
                    <span className="flex items-center gap-2">Get In Touch</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section ref={projectsRef} id="projects" className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300">
              PORTFOLIO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A collection of my recent work and personal projects
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           
            <ProjectCard
              title="E-commerce Backend"
              description="E-commerce Backend With Spring Boot "
              techStack={["SpringBoot", "PosgreSQL", "JWT", "PayPal"]}
              githubUrl="https://github.com/Singg12/e-commerce"
              // demoUrl="https://demo.com"
              imageUrl="/commerce.png?height=300&width=500"
              index={1}
              inView={projectsInView}
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative backend task management application with real-time updates ."
              techStack={["SpringBoot", "PosgreSQL", "Post Man", "Git"]}
              githubUrl="https://github.com/Singg12/task_management_Project"
              // demoUrl="https://demo.com"
              imageUrl="/task.png?height=300&width=500"
              index={2}
              inView={projectsInView} 
            />
            <ProjectCard
              title="Blog Platform Backend"
              description="A blogging platform with user authentication"
              techStack={["SpringBoot", "JWT", "PosgreSQL", "REST API"]}
              githubUrl="https://github.com/Singg12/blog"
              // demoUrl="https://demo.com"
              imageUrl="/blogs.png?height=300&width=500"
              index={3}
              inView={projectsInView}
            />
             {/* <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce platform with payment processing and inventory management."
              techStack={["React", "PayPal", "Fake Store API", "Git"]}
              githubUrl="https://github.com"
              // demoUrl="https://demo.com"
              imageUrl="/placeholder.svg?height=300&width=500"
              index={0}
              inView={projectsInView}
            /> */}
            {/* <ProjectCard
              title="Weather Dashboard"
              description="A real-time weather dashboard with location-based forecasts."
              techStack={["Vue.js", "Weather API", "Chart.js", "Netlify"]}
              githubUrl="https://github.com"
              demoUrl="https://demo.com"
              imageUrl="/placeholder.svg?height=300&width=500"
              index={4}
              inView={projectsInView}
            /> */}
            {/* <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website built with modern web technologies."
              techStack={["Next.js", "Tailwind CSS", "Framer Motion"]}
              githubUrl="https://github.com"
              demoUrl="https://demo.com"
              imageUrl="/placeholder.svg?height=300&width=500"
              index={5}
              inView={projectsInView}
            /> */}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section ref={skillsRef} id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
              EXPERTISE
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">Technologies and tools I work with</p>
          </motion.div>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <SkillIcon name="JavaScript" icon="/javascript-icon.png?height=60&width=60" index={0} inView={skillsInView} />
            {/* <SkillIcon name="TypeScript" icon="/placeholder.svg?height=60&width=60" index={1} inView={skillsInView} /> */}
            <SkillIcon name="React" icon="/React-icon.png?height=60&width=60" index={2} inView={skillsInView} />
            {/* <SkillIcon name="Next.js" icon="/placeholder.svg?height=60&width=60" index={3} inView={skillsInView} /> */}
            <SkillIcon name="SpringBoot" icon="/springboot-icon.png?height=60&width=60" index={4} inView={skillsInView} />
            {/* <SkillIcon name="Express" icon="/placeholder.svg?height=60&width=60" index={5} inView={skillsInView} /> */}
            {/* <SkillIcon name="MongoDB" icon="/placeholder.svg?height=60&width=60" index={6} inView={skillsInView} /> */}
            <SkillIcon name="PostgreSQL" icon="/posgres-icon.png?height=60&width=60" index={7} inView={skillsInView} />
            {/* <SkillIcon name="GraphQL" icon="/placeholder.svg?height=60&width=60" index={8} inView={skillsInView} /> */}
            <SkillIcon name="Docker" icon="/Docker-icon.png?height=60&width=60" index={9} inView={skillsInView} />
            <SkillIcon name="AWS" icon="/aws-icon.png?height=60&width=60" index={10} inView={skillsInView} />
            <SkillIcon name="Git" icon="/git-icon.png?height=60&width=60" index={11} inView={skillsInView} />
            <SkillIcon
              name="Bootstrap"
              icon="/bootstrap-icon.png?height=60&width=60"
              index={12}
              inView={skillsInView}
            />
            {/* <SkillIcon name="Redux" icon="/placeholder.svg?height=60&width=60" index={13} inView={skillsInView} /> */}
            {/* <SkillIcon name="Jest" icon="/placeholder.svg?height=60&width=60" index={14} inView={skillsInView} /> */}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section ref={contactRef} id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300">
              CONTACT
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <motion.div
              className="rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-800"
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Let&apos;s Connect</h3>
                <p className="text-muted-foreground">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
              </div>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="mailto:mengchhaysing@example.com"
                    className="flex items-center space-x-3 text-lg font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <Mail className="h-6 w-6" />
                    <span>mengchhaysing@gmail.com</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-lg font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <Github className="h-6 w-6" />
                    <span>github.com/Singg12</span>
                  </Link>
                </motion.div>
              </div>
              <div className="pt-6">
                <p className="text-muted-foreground">Based in Phnom Penh, Cambodia</p>
                <p className="text-muted-foreground">Available for remote work worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Chhaysing Dev. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="github.com/Singg12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:mengchhaysing@example.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all hover:bg-indigo-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </div>
  )
}
