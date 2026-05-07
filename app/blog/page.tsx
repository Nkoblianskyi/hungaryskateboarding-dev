import type { Metadata } from "next"
import Link from "next/link"
import { articles } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog – Cikkek és elemzések | Hungary Skateboarding",
  description:
    "Gördeszkás cikkek, technika-útmutatók, kultúrtörténet és felszerelési tanácsok. Minden, amit a gördeszkázásról tudni érdemes.",
}

const categories = ["Összes", ...Array.from(new Set(articles.map((a) => a.category)))]

export default function BlogPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-[57px] md:pt-[65px] border-b border-border">
        <div className="px-6 md:px-12 py-14 md:py-20 flex flex-col md:flex-row md:items-end gap-6 md:gap-0">
          <div className="flex-1">
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-4">
              Blog / Cikkek
            </p>
            <h1 className="font-display text-[15vw] md:text-[10vw] leading-none uppercase text-foreground">
              GÖRDESZKÁS
              <br />
              <span className="text-primary">CIKKEK</span>
            </h1>
          </div>
          <div className="md:max-w-xs">
            <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-4">
              Összesen {articles.length} cikk. Technikától a kultúráig, felszereléstől a versenyekig.
            </p>
            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] tracking-widest uppercase font-condensed px-2 py-1 border border-border text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article list */}
      <div>
        {articles.map((article, i) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col md:flex-row items-start md:items-center border-b border-border px-6 md:px-12 py-7 md:py-8 hover:bg-muted/30 transition-colors gap-4 md:gap-8"
          >
            {/* Index */}
            <span className="font-display text-4xl md:text-5xl text-foreground/12 group-hover:text-primary/25 transition-colors w-14 shrink-0 leading-none tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Category badge */}
            <span className="text-[10px] uppercase tracking-widest font-condensed text-primary border border-primary/30 px-2 py-1 shrink-0 w-28 text-center">
              {article.category}
            </span>

            {/* Title + preview */}
            <div className="flex-1 min-w-0">
              <h2 className="font-condensed text-lg md:text-xl uppercase tracking-wide text-foreground group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5 line-clamp-1 md:line-clamp-none font-sans">
                {article.preview}
              </p>
            </div>

            {/* Arrow */}
            <span
              className="font-display text-2xl text-muted-foreground group-hover:text-primary transition-colors shrink-0"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      {/* Bottom label */}
      <div className="px-6 md:px-12 py-8 border-t border-border flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-condensed uppercase tracking-widest">
          {articles.length} cikk
        </p>
        <p className="text-xs text-muted-foreground font-condensed uppercase tracking-widest">
          hungaryskateboarding.com / blog
        </p>
      </div>
    </>
  )
}
