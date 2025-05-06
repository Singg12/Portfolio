"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SkillIconProps {
  name: string
  icon: string
  index: number
  inView: boolean
}

export function SkillIcon({ name, icon, index, inView }: SkillIconProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        delay: 0.05 * index,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-4 shadow-md transition-all duration-300 dark:bg-slate-800">
        <Image src={icon || "/placeholder.svg"} alt={name} width={60} height={60} className="object-contain" />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  )
}
