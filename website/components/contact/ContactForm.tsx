'use client'

import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xpzvqjkl')

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cream-white p-10 lg:p-14 text-center border border-ink/5"
      >
        <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-sage">
            <path d="M6 14L11.5 19.5L22 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="font-serif text-2xl text-ink mb-3">Thank you</p>
        <p className="text-sm text-ink-light">
          Your message has been sent. I&apos;ll get back to you within 48 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="bg-cream-white p-8 lg:p-10 border border-ink/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-[0.2em] text-ink-muted mb-2"
            >
              Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-b border-ink/15 py-4 text-sm text-ink placeholder:text-ink-muted/40 focus:border-brass focus:outline-none transition-colors input-glow"
              placeholder="Your name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-[0.2em] text-ink-muted mb-2"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-ink/15 py-4 text-sm text-ink placeholder:text-ink-muted/40 focus:border-brass focus:outline-none transition-colors input-glow"
              placeholder="your@email.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="project-type"
              className="block text-xs uppercase tracking-[0.2em] text-ink-muted mb-2"
            >
              Project Type
            </label>
            <select
              id="project-type"
              name="project-type"
              className="w-full bg-transparent border-b border-ink/15 py-4 text-sm text-ink focus:border-brass focus:outline-none transition-colors"
            >
              <option value="">Select type...</option>
              <option value="residential-new">New Home / Condo</option>
              <option value="residential-reno">Renovation</option>
              <option value="commercial">Commercial / Office</option>
              <option value="design-build">Design & Build</option>
              <option value="consultation">Consultation Only</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-xs uppercase tracking-[0.2em] text-ink-muted mb-2"
            >
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full bg-transparent border-b border-ink/15 py-4 text-sm text-ink focus:border-brass focus:outline-none transition-colors"
            >
              <option value="">Select range...</option>
              <option value="below-50k">Below RM 50,000</option>
              <option value="50k-100k">RM 50,000 - 100,000</option>
              <option value="100k-200k">RM 100,000 - 200,000</option>
              <option value="200k-500k">RM 200,000 - 500,000</option>
              <option value="above-500k">Above RM 500,000</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-xs uppercase tracking-[0.2em] text-ink-muted mb-2"
          >
            Project Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            className="w-full bg-transparent border-b border-ink/15 py-4 text-sm text-ink placeholder:text-ink-muted/40 focus:border-brass focus:outline-none transition-colors input-glow"
            placeholder="City, area, or development name"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-[0.2em] text-ink-muted mb-2"
          >
            Tell me about your project *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full bg-transparent border-b border-ink/15 py-4 text-sm text-ink placeholder:text-ink-muted/40 focus:border-brass focus:outline-none transition-colors resize-none input-glow"
            placeholder="Size, style, timeline, any references or inspiration..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
        </div>

        <div className="flex flex-col items-end gap-3 mt-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-ink text-cream text-xs font-medium tracking-[0.2em] uppercase px-10 py-4 hover:bg-brass transition-colors duration-300 disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Send Inquiry'}
          </button>
          <p className="text-xs text-ink-muted">
            Your information is kept confidential and never shared.
          </p>
        </div>
      </form>
    </div>
  )
}
