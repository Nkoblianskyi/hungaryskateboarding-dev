import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden pt-[57px] md:pt-[65px]"
      aria-label="Főoldal hős szekció"
    >
      {/* Background number watermark */}
      <span
        className="absolute top-16 md:top-20 right-0 font-display text-[30vw] leading-none text-foreground/[0.04] select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </span>

      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-65px)]">
        {/* Left vertical label */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center border-r border-border">
          <span
            className="rotate-[-90deg] text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-condensed whitespace-nowrap"
            aria-hidden="true"
          >
            GÖRDESZKÁZÁS MAGYARORSZÁGON
          </span>
        </div>

        {/* Content column */}
        <div className="lg:col-span-7 flex flex-col justify-between px-6 md:px-10 lg:px-12 py-10 lg:py-16">
          {/* Top label */}
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-primary" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-condensed text-primary">
              Magyar Gördeszkás Kultúra
            </span>
          </div>

          {/* Main heading */}
          <div className="my-auto pt-8 lg:pt-0">
            <h1 className="font-display text-[17vw] md:text-[13vw] lg:text-[10vw] leading-[0.9] tracking-tight uppercase text-foreground">
              GÖRDESZKÁZÁS
              <br />
              <span className="text-primary">MAGYAROR</span>
              <br />
              SZÁGON
            </h1>
            <p className="mt-6 md:mt-8 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm font-sans">
              A gördeszkás kultúra, amit élsz. Technikák, történelem, trükkök és a hazai közösség egy helyen.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-10">
              <Link
                href="/edzesek"
                className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 text-xs tracking-widest uppercase font-condensed hover:bg-primary transition-colors"
              >
                Edzések
                <span className="text-primary group-hover:text-background" aria-hidden="true">
                  /
                </span>
              </Link>
              <Link
                href="/tortenet"
                className="inline-flex items-center gap-3 border border-border text-foreground px-6 py-3 text-xs tracking-widest uppercase font-condensed hover:border-foreground transition-colors"
              >
                Történet
              </Link>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
            {[
              { num: "3+", label: "Évtizednyi kultúra" },
              { num: "9+", label: "Fő stílus" },
              { num: "100+", label: "Technika és trükk" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl text-foreground">{stat.num}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-condensed mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image panel */}
        <div className="lg:col-span-4 relative bg-foreground min-h-[45vh] lg:min-h-0 border-l border-border overflow-hidden">
          <Image
            src="/images/hero-sk8.jpg"
            alt="Gördeszkázás Magyarországon"
            fill
            priority
            className="object-cover opacity-60 mix-blend-luminosity"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          {/* Overlay info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-[10px] tracking-widest uppercase text-white/50 font-condensed mb-1">
                Mozgás. Tér. Stílus.
              </p>
              <p className="text-sm text-white/80 font-sans leading-relaxed">
                Fedezd fel a gördeszkázás minden dimenzióját
              </p>
            </div>
          </div>
          {/* Orange corner accent */}
          <div
            className="absolute top-0 right-0 w-12 h-12 bg-primary"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="border-t border-border bg-muted/50 py-3 overflow-hidden">
        <div className="flex animate-marquee gap-0 w-max" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-12 font-display text-base tracking-wider text-foreground/40 uppercase whitespace-nowrap">
              Gördeszkázás Magyarországon
              <span className="text-primary text-xs">*</span>
              Street Gördeszkázás
              <span className="text-primary text-xs">*</span>
              Vert Gördeszkázás
              <span className="text-primary text-xs">*</span>
              Park Gördeszkázás
              <span className="text-primary text-xs">*</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-16 right-6 md:right-10 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground font-condensed rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-10 bg-border" />
      </div>
    </section>
  )
}
