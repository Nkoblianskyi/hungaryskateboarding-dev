import Link from "next/link"

const disciplines = [
  {
    num: "01",
    name: "Street",
    rule: "Az olimpiai street formátum egy kifejezetten erre a célra épített, városias elemeket tartalmazó pályán zajlik. A versenyzők előre meghatározott futamokat és egyszeri, kijelölt trükköket teljesítenek.",
  },
  {
    num: "02",
    name: "Park",
    rule: "A park versenyek tálszerű kialakítású, görbült felületű pályán zajlanak. A gördeszkás folyékony és gyors vonalakat kombinálva, levegős trükkökkel szerzi meg a pontokat.",
  },
  {
    num: "03",
    name: "Vert",
    rule: "A vert versenyek nagyméretű, függőleges falú rampán zajlanak. A zsűri a végrehajtás minőségét, a trükkök nehézségét és a levegőidőt értékeli.",
  },
]

export default function RulesPreview() {
  return (
    <section className="border-b border-border" aria-labelledby="rules-heading">
      {/* Header */}
      <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
            08 / Szabályok
          </p>
          <h2
            id="rules-heading"
            className="font-display text-[12vw] md:text-[7vw] leading-none uppercase text-foreground"
          >
            SZABÁLYOK
            <br />
            <span className="text-primary">ÉS DISZCIPLÍNÁK</span>
          </h2>
        </div>
        <p className="md:max-w-xs text-sm text-muted-foreground leading-relaxed">
          A gördeszkázás versenyrendszere összetett és sokszínű. Három fő diszciplína adja a versenyek gerincét.
        </p>
      </div>

      {/* Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {disciplines.map((d) => (
          <div
            key={d.num}
            className="border-b md:border-b-0 border-r-0 md:border-r border-border last:border-r-0 p-8 md:p-12 flex flex-col gap-6 group hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-end justify-between">
              <span className="font-display text-7xl leading-none text-foreground/10 group-hover:text-primary/20 transition-colors">
                {d.num}
              </span>
              <div className="w-6 h-px bg-primary" aria-hidden="true" />
            </div>
            <h3 className="font-display text-4xl uppercase leading-none text-foreground">
              {d.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {d.rule}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 md:px-12 py-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Részletes versenyszabályok, értékelési rendszer és diszciplína-útmutatók a teljes oldalon.
        </p>
        <Link
          href="/szabalyok"
          className="inline-flex items-center gap-4 border border-foreground text-foreground px-6 py-3 text-xs tracking-widest uppercase font-condensed hover:bg-foreground hover:text-background transition-colors shrink-0"
        >
          Szabályok megtekintése
          <span className="font-display text-sm text-primary" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
