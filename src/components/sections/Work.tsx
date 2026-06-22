'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const categories = ['All', 'Custom Development & AI', 'Shopify', 'WordPress', 'Wix'];

export function Work() {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="scroll-mt-20 bg-white/20 py-20 dark:bg-zinc-900/20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
            Portfolio
          </span>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Selected Projects</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-300">
            Real projects with measurable impact, built for product teams, startups, and founders.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`focus-outline rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-white/60 text-zinc-600 hover:bg-white hover:text-zinc-900 hover:shadow-md dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                layout
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="backdrop-glass group block overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl focus-outline"
                >
                  <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      className={`h-full w-full transition duration-500 ${
                        project.image.startsWith('http')
                          ? 'object-cover group-hover:scale-110'
                          : 'object-contain p-2 group-hover:scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute right-3 top-3 flex gap-2">
                      <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                        project.status === 'Deployed Live' 
                          ? 'bg-green-500/80 text-white' 
                          : 'bg-blue-500/80 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur-sm">
                        View Project →
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold group-hover:text-brand-600 dark:group-hover:text-brand-400">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs dark:bg-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs dark:bg-white/10">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    {project.liveUrl && (
                      <div className="mt-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                          View Live
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/work"
            className="focus-outline group inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-6 py-3 font-medium transition-all hover:border-brand-200 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/60 dark:hover:border-brand-800 dark:hover:bg-zinc-900"
          >
            View All Projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

