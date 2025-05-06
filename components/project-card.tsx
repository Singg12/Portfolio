"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { StaticImageData } from "next/image";
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  // demoUrl: string
  imageUrl: string | StaticImageData
  index: number
  inView: boolean
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  // demoUrl,
  imageUrl,
  index,
  inView,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        delay: 0.1 * index,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/30"
            asChild
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          {/* <Button size="sm" className="rounded-full bg-indigo-600 text-white hover:bg-indigo-700" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" />
              Live Demo
            </Link>
          </Button> */}
        </div>
      </div>
    </motion.div>
  )
}
