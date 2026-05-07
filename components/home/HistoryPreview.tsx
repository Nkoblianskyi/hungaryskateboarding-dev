import Image from "next/image"
import Link from "next/link"

const milestones = [
  { year: "1950-es", label: "Eredetek", desc: "Szörfözőkből gördeszkások" },
  { year: "1980-as", label: "Magyarország", desc: "Az első deszkák megjelenése" },
  { year: "1990-es", label: "Robbanás", desc: "Közösségek szerveződése" },
  { year: "2020", label: "Olimpia", desc: "Olimpiai sportág lett" },
]

export default function HistoryPreview() {
  return (
    <section className="border-b border-border bg-secondary text-secondary-foreground" aria-labelledby="history-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image side */}
        <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-secondary-foreground/10 overflow-hidden">
          <Image
            src="/images/hist-sk8.jpg"
            alt="A gördeszkázás történelme"
            fill
            className="object-cover opacity-40"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          {/* Overlaid text */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-secondary-foreground/50 mb-3">
              03 / Történet
            </p>
            <h2
              id="history-heading"
              className="font-display text-[15vw] md:text-[9vw] lg:text-[7vw] leading-none uppercase text-secondary-foreground"
            >
              GÖRDESZKÁZÁS
              <br />
              <span className="text-primary">MAGYAROR</span>
              <br />
              SZÁGON
            </h2>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <p className="text-sm text-secondary-foreground/70 leading-relaxed max-w-md font-sans">
            A gördeszkázás Magyarországra a nyolcvanas évek közepén érkezett el, és azóta folyamatosan fejlődő,
            önálló kultúrává vált. Ismerd meg a hazai gördeszkás mozgalom útját az első deszkáktól az olimpiai szintig.
          </p>

          {/* Timeline strip */}
          <div className="mt-10 md:mt-14">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-secondary-foreground/10" aria-hidden="true" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative pt-0 pr-6">
                    {/* Dot */}
                    <div
                      className="w-3 h-3 bg-primary mb-4 shrink-0"
                      aria-hidden="true"
                    />
                    <p className="font-display text-lg text-primary leading-none mb-1">{m.year}</p>
                    <p className="text-xs font-condensed uppercase tracking-wide text-secondary-foreground mb-1">
                      {m.label}
                    </p>
                    <p className="text-xs text-secondary-foreground/50 font-sans">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/tortenet"
            className="mt-10 inline-flex items-center gap-4 group self-start"
            aria-label="Teljes történelem oldal megtekintése"
          >
            <span className="h-px w-10 bg-primary shrink-0 group-hover:w-16 transition-all duration-300" aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-condensed text-secondary-foreground/70 group-hover:text-primary transition-colors">
              Teljes történelem
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
