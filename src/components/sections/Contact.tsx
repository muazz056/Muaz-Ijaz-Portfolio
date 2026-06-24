'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      project: formData.get('project'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
            Get in Touch
          </span>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Let&apos;s Build Something Great</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-300">
            Book a free 30-minute discovery call. No sales pitch&mdash;just a conversation about
            your project.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="backdrop-glass-strong space-y-5 rounded-3xl p-6 shadow-glass-lg md:p-8">
              <h3 className="text-lg font-semibold">Send Us a Message</h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="focus-outline w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-zinc-700 dark:bg-zinc-900/80 dark:focus:border-brand-700 dark:focus:bg-zinc-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="focus-outline w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-zinc-700 dark:bg-zinc-900/80 dark:focus:border-brand-700 dark:focus:bg-zinc-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Phone <span className="text-xs text-zinc-400 dark:text-zinc-500">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="focus-outline w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-zinc-700 dark:bg-zinc-900/80 dark:focus:border-brand-700 dark:focus:bg-zinc-900"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="project" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="focus-outline w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-zinc-700 dark:bg-zinc-900/80 dark:focus:border-brand-700 dark:focus:bg-zinc-900"
                  >
                    <option>Custom Development</option>
                    <option>AI & RAG Chatbot</option>
                    <option>Shopify Store</option>
                    <option>WordPress</option>
                    <option>Wix</option>
                    <option>API Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="focus-outline w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-zinc-700 dark:bg-zinc-900/80 dark:focus:border-brand-700 dark:focus:bg-zinc-900"
                  >
                    <option value="">Select</option>
                    <option value="5k">Under $5k</option>
                    <option value="5-10k">$5k - $10k</option>
                    <option value="10-20k">$10k - $20k</option>
                    <option value="20-50k">$20k - $50k</option>
                    <option value="50k+">$50k+</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="focus-outline w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-zinc-700 dark:bg-zinc-900/80 dark:focus:border-brand-700 dark:focus:bg-zinc-900"
                  >
                    <option value="">Select</option>
                    <option value="urgent">ASAP</option>
                    <option value="1month">1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message <span className="text-brand-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="focus-outline w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-zinc-700 dark:bg-zinc-900/80 dark:focus:border-brand-700 dark:focus:bg-zinc-900"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="focus-outline w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:shadow-xl hover:shadow-brand-500/30 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  className="overflow-hidden rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-3 text-sm font-medium text-green-800 dark:from-green-900/20 dark:to-emerald-900/20 dark:text-green-300"
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Message sent! We&apos;ll get back to you within 24 hours.
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="backdrop-glass rounded-3xl p-6">
              <h3 className="mb-5 text-lg font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:muaxijaz@gmail.com"
                  className="focus-outline group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-zinc-500 group-hover:text-brand-600 dark:text-zinc-400 dark:group-hover:text-brand-400">
                      muaxijaz@gmail.com
                    </div>
                  </div>
                </a>
                <a
                  href="#contact"
                  className="focus-outline group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Book a Call</div>
                    <div className="text-sm text-zinc-500 group-hover:text-brand-600 dark:text-zinc-400 dark:group-hover:text-brand-400">
                      Free 30-min discovery
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="backdrop-glass rounded-3xl p-6">
              <h3 className="mb-5 text-lg font-semibold">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  { text: 'Response within 24 hours', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                  { text: 'Free 30-min discovery call', icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
                  { text: 'Custom proposal & timeline', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
                  { text: 'No obligation, no pressure', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-sm text-zinc-600 dark:text-zinc-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

