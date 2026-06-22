import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Muaz Ijaz Portfolio',
  description: 'Browse the portfolio of custom development & AI, Shopify, WordPress, and Wix projects by Muaz Ijaz.',
};

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">Our Work</h1>
          <p className="mb-12 max-w-2xl text-zinc-600 dark:text-zinc-300">
            Real projects with measurable impact. From AI-powered platforms to e-commerce stores.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="backdrop-glass group block overflow-hidden rounded-2xl transition hover:shadow-2xl focus-outline"
              >
                <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition duration-500 ${
                      project.image.startsWith('http')
                        ? 'object-cover group-hover:scale-110'
                        : 'object-contain p-2 group-hover:scale-105'
                    }`}
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-brand-600 dark:group-hover:text-brand-400">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

