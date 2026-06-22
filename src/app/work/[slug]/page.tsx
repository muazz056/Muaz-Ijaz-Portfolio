import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ImageGallery } from '@/components/ui/ImageGallery';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  
  return {
    title: `${project.title} — Muaz Ijaz Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/work"
            className="focus-outline mb-6 inline-flex items-center gap-2 text-sm text-brand-600 hover:underline dark:text-brand-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to work
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              {project.category}
            </span>
            <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
              project.status === 'Deployed Live' 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            }`}>
              {project.status}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-sm font-medium text-white hover:bg-brand-700"
              >
                View Live
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-300">{project.description}</p>

          <div className="backdrop-glass mb-8 grid grid-cols-2 gap-4 rounded-2xl p-6 md:grid-cols-4">
            <div>
              <div className="text-xs text-zinc-500">Client</div>
              <div className="font-semibold">{project.client}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500">Year</div>
              <div className="font-semibold">{project.year}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500">Role</div>
              <div className="font-semibold">{project.role}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500">Technologies</div>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className={`${
                project.image.startsWith('http')
                  ? 'object-cover'
                  : 'object-contain p-4'
              }`}
              priority
            />
          </div>

          {/* Application Screenshots Gallery with Lightbox */}
          {project.gallery && project.gallery.length > 0 && (
            <ImageGallery images={project.gallery} title={project.title} />
          )}

          <div className="backdrop-glass mb-8 rounded-2xl p-6">
            <h2 className="mb-3 text-2xl font-bold">The Challenge</h2>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{project.problem}</p>
          </div>

          <div className="backdrop-glass mb-8 rounded-2xl p-6">
            <h2 className="mb-3 text-2xl font-bold">The Solution</h2>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{project.solution}</p>
          </div>

          <div className="backdrop-glass mb-8 rounded-2xl p-6">
            <h2 className="mb-4 text-2xl font-bold">Impact</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.impact.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-black/5 p-4 dark:bg-white/5">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="backdrop-glass rounded-2xl p-6">
              <h2 className="mb-4 text-2xl font-bold">Client Testimonial</h2>
              <blockquote className="border-l-4 border-brand-500 pl-4 italic text-zinc-700 dark:text-zinc-300">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 text-sm">
                <div className="font-semibold">{project.testimonial.author}</div>
                <div className="text-zinc-600 dark:text-zinc-400">{project.testimonial.role}</div>
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-black/10 pt-8 dark:border-white/10">
            <h2 className="mb-4 text-2xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-4 py-2 text-sm font-medium dark:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="focus-outline inline-block rounded-xl bg-brand-600 px-8 py-4 font-semibold text-white hover:bg-brand-700"
            >
              Start Your Project
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

