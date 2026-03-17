'use client'

import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function InquiryCTA() {
  const [state, handleSubmit] = useForm('xpzvqjkl')

  return (
    <section className="py-28 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark/50 to-cream" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brass/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — messaging */}
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-brass mb-6">
              Start Your Project
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[0.95] mb-8">
              Have a space
              <br />
              in mind?
            </h2>
            <p className="text-ink-light text-base lg:text-lg leading-relaxed max-w-lg mb-10">
              Whether it&apos;s a new home, office renovation, or commercial fitout — share your vision and I&apos;ll get back to you within 48 hours with initial thoughts and availability.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-ink/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brass">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-ink-muted">Free consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brass">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-ink-muted">48-hour response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brass">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-ink-muted">No obligation</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — inline lead gen form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/60 backdrop-blur-sm p-8 lg:p-10 border border-ink/5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-sage">
                      <path d="M6 14L11.5 19.5L22 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-serif text-2xl text-ink mb-3">Thank you</p>
                  <p className="text-sm text-ink-light">
                    I&apos;ll review your inquiry and get back to you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cta-name" className="block text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-2">
                        Name *
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-ink/15 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:border-brass focus:outline-none transition-colors input-glow"
                        placeholder="Your name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className="block text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-2">
                        Email *
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-ink/15 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:border-brass focus:outline-none transition-colors input-glow"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cta-type" className="block text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-2">
                      Project Type
                    </label>
                    <select
                      id="cta-type"
                      name="project-type"
                      className="w-full bg-transparent border-b border-ink/15 py-3 text-sm text-ink focus:border-brass focus:outline-none transition-colors"
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
                    <label htmlFor="cta-budget" className="block text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-2">
                      Budget Range
                    </label>
                    <select
                      id="cta-budget"
                      name="budget"
                      className="w-full bg-transparent border-b border-ink/15 py-3 text-sm text-ink focus:border-brass focus:outline-none transition-colors"
                    >
                      <option value="">Select range...</option>
                      <option value="below-50k">Below RM 50,000</option>
                      <option value="50k-100k">RM 50,000 - 100,000</option>
                      <option value="100k-200k">RM 100,000 - 200,000</option>
                      <option value="200k-500k">RM 200,000 - 500,000</option>
                      <option value="above-500k">Above RM 500,000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cta-message" className="block text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-2">
                      Tell me about your project
                    </label>
                    <textarea
                      id="cta-message"
                      name="message"
                      rows={3}
                      className="w-full bg-transparent border-b border-ink/15 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:border-brass focus:outline-none transition-colors resize-none input-glow"
                      placeholder="Location, size, style preferences..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-ink text-cream text-xs font-medium tracking-[0.2em] uppercase py-4 hover:bg-brass transition-colors duration-300 disabled:opacity-50 mt-2"
                  >
                    {state.submitting ? 'Sending...' : 'Request Free Consultation'}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
