import Link from "next/link"
import { articles } from "@/lib/blog-data"

export default function BlogPreview() {
  const preview = articles.slice(0, 4)

  return (
    <section className="border-b border-border" aria-labelledby="blog-heading">
      {/* Header */}
      <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
            09 / Blog
          </p>
          <h2
            id="blog-heading"
            className="font-display text-[12vw] md:text-[7vw] leading-none uppercase text-foreground"
          >
            LEGÚJABB
            <br />
            <span className="text-primary">CIKKEK</span>
          </h2>
        </div>
        <p className="md:max-w-xs text-sm text-muted-foreground leading-relaxed">
          Technikák, kultúra, felszerelés és helyszínek. Minden, amit a gördeszkázásról tudni kell.
        </p>
      </div>

      {/* Articles – editorial row layout */}
      <div>
        {preview.map((article, i) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col md:flex-row items-start md:items-center border-b border-border px-6 md:px-12 py-7 md:py-8 hover:bg-muted/30 transition-colors gap-4 md:gap-8"
          >
            {/* Index */}
            <span className="font-display text-5xl text-foreground/15 group-hover:text-primary/30 transition-colors w-16 shrink-0 leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Category */}
            <span className="text-[10px] uppercase tracking-widest font-condensed text-primary border border-primary/30 px-2 py-1 shrink-0 w-28 text-center">
              {article.category}
            </span>
            {/* Title */}
            <h3 className="font-condensed text-lg md:text-xl uppercase tracking-wide text-foreground flex-1 group-hover:text-primary transition-colors leading-tight">
              {article.title}
            </h3>
            {/* Preview text */}
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm hidden lg:block line-clamp-2">
              {article.preview}
            </p>
            {/* Arrow */}
            <span
              className="font-display text-2xl text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-auto"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 md:px-12 py-8 flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-condensed uppercase tracking-widest">
          {articles.length} cikk összesen
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-4 bg-foreground text-background px-6 py-3 text-xs tracking-widest uppercase font-condensed hover:bg-primary transition-colors"
        >
          Összes cikk
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
