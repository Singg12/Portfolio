"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (name: string) => {
    setFocusedField(name)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus("name")}
          onBlur={handleBlur}
          required
          className="peer w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 pt-6 text-slate-900 placeholder-transparent focus:border-indigo-600 focus:outline-none dark:border-slate-700 dark:text-white"
          placeholder="Name"
        />
        <motion.label
          htmlFor="name"
          className="absolute left-4 top-2 text-xs font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600 dark:text-slate-400 dark:peer-focus:text-indigo-400"
          animate={{
            color: focusedField === "name" ? "#6366F1" : "",
          }}
        >
          Name
        </motion.label>
      </motion.div>
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
          required
          className="peer w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 pt-6 text-slate-900 placeholder-transparent focus:border-indigo-600 focus:outline-none dark:border-slate-700 dark:text-white"
          placeholder="Email"
        />
        <motion.label
          htmlFor="email"
          className="absolute left-4 top-2 text-xs font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600 dark:text-slate-400 dark:peer-focus:text-indigo-400"
          animate={{
            color: focusedField === "email" ? "#6366F1" : "",
          }}
        >
          Email
        </motion.label>
      </motion.div>
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus("message")}
          onBlur={handleBlur}
          required
          rows={4}
          className="peer w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 pt-6 text-slate-900 placeholder-transparent focus:border-indigo-600 focus:outline-none dark:border-slate-700 dark:text-white"
          placeholder="Message"
        />
        <motion.label
          htmlFor="message"
          className="absolute left-4 top-2 text-xs font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600 dark:text-slate-400 dark:peer-focus:text-indigo-400"
          animate={{
            color: focusedField === "message" ? "#6366F1" : "",
          }}
        >
          Message
        </motion.label>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* <Button
          type="submit"
          className="w-full rounded-full bg-indigo-600 py-6 text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button> */}
      </motion.div>
      {isSubmitted && (
        <motion.div
          className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-950 dark:text-green-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Thank you for your message! I&apos;ll get back to you soon.
        </motion.div>
      )}
    </motion.form>
  )
}
