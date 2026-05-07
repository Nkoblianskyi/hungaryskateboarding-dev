import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/blog-data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} | Hungary Skateboarding`,
    description: article.preview,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(slug, 3)

  return (
    <>
      {/* Article header */}
      <div className="pt-[57px] md:pt-[65px] bg-secondary text-secondary-foreground border-b border-secondary-foreground/10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Content side */}
          <div className="lg:col-span-7 px-6 md:px-12 py-12 md:py-20 border-b lg:border-b-0 lg:border-r border-secondary-foreground/10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8" aria-label="Navigációs útvonal">
              <Link
                href="/blog"
                className="text-[10px] tracking-widest uppercase font-condensed text-secondary-foreground/40 hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <span className="text-secondary-foreground/20 text-xs" aria-hidden="true">/</span>
              <span className="text-[10px] tracking-widest uppercase font-condensed text-primary">
                {article.category}
              </span>
            </nav>

            <h1 className="font-display text-[8vw] md:text-[5vw] leading-[0.95] uppercase text-secondary-foreground text-balance">
              {article.title}
            </h1>

            <p className="mt-6 text-sm text-secondary-foreground/60 leading-relaxed max-w-lg font-sans">
              {article.preview}
            </p>

            <div className="mt-10 h-px w-12 bg-primary" aria-hidden="true" />
          </div>

          {/* Image side */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-0 overflow-hidden">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover opacity-40"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            ) : null}
            <div className="absolute inset-0 bg-secondary/50" aria-hidden="true" />
            {/* Category label */}
            <div className="absolute top-8 right-8">
              <span className="text-[10px] tracking-widest uppercase font-condensed text-secondary-foreground/50 border border-secondary-foreground/20 px-2 py-1">
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left sidebar */}
          <div className="hidden lg:flex lg:col-span-1 border-r border-border items-start pt-16 justify-center">
            <span
              className="rotate-[-90deg] text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-condensed whitespace-nowrap"
              aria-hidden="true"
            >
              {article.category}
            </span>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8 px-6 md:px-12 py-12 md:py-16 border-r-0 lg:border-r border-border">
            <div className="space-y-7">
              {article.content.map((para, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-foreground/80 leading-relaxed font-sans"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: index */}
          <div className="lg:col-span-3 px-6 md:px-8 py-12 border-t lg:border-t-0 border-border">
            <p className="text-[10px] tracking-widest uppercase font-condensed text-muted-foreground mb-4">
              Kapcsolódó cikkek
            </p>
            <div className="space-y-0">
              {related.map((rel, i) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col py-5 border-b border-border last:border-b-0 gap-1 hover:text-primary transition-colors"
                >
                  <span className="font-display text-2xl text-foreground/15 group-hover:text-primary/30 transition-colors leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-condensed uppercase tracking-wide text-primary mt-1">
                    {rel.category}
                  </span>
                  <span className="text-sm font-condensed uppercase tracking-wide text-foreground group-hover:text-primary transition-colors leading-tight">
                    {rel.title}
                  </span>
                </Link>
              ))}
            </div>

            {/* Back to blog */}
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-condensed text-muted-foreground hover:text-primary transition-colors"
              >
                <span aria-hidden="true">←</span>
                Vissza a bloghoz
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
