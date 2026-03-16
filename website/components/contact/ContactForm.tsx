'use client'

import { useForm, ValidationError } from '@formspree/react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xpzvqjkl')

  if (state.succeeded) {
    return (
      <div className="bg-sage/10 p-8 lg:p-12 text-center">
        <p className="font-serif text-2xl text-ink mb-3">Thank you</p>
        <p className="text-ink-light text-sm">
          Your message has been sent. I&apos;ll get back to you within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-[0.15em] text-ink-muted mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full bg-transparent border-b border-ink/20 py-3 text-sm text-ink placeholder:text-ink-muted/50 focus:border-brass focus:outline-none transition-colors"
            placeholder="Your name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.15em] text-ink-muted mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-ink/20 py-3 text-sm text-ink placeholder:text-ink-muted/50 focus:border-brass focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
        </div>
      </div>

      <div>
        <label
          htmlFor="project-type"
          className="block text-xs uppercase tracking-[0.15em] text-ink-muted mb-2"
        >
          Project Type
        </label>
        <select
          id="project-type"
          name="project-type"
          className="w-full bg-transparent border-b border-ink/20 py-3 text-sm text-ink focus:border-brass focus:outline-none transition-colors"
        >
          <option value="">Select a project type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="design-build">Design &amp; Build</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.15em] text-ink-muted mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-ink/20 py-3 text-sm text-ink placeholder:text-ink-muted/50 focus:border-brass focus:outline-none transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
