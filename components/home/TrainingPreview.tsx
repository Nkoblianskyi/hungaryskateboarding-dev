import Link from "next/link"

const tips = [
  {
    num: "01",
    title: "Alapok és testtartás",
    desc: "A helyes lábpozíció és egyensúly az összes technika alapköve.",
  },
  {
    num: "02",
    title: "Ollie és alaptechnikák",
    desc: "Az ollie a legtöbb trükk kiindulópontja. Lépésről lépésre sajátítsd el.",
  },
  {
    num: "03",
    title: "Rampán és parkban",
    desc: "A transition gördeszkázás speciális készségeket és edzést igényel.",
  },
  {
    num: "04",
    title: "Street edzésmódszerek",
    desc: "Az utcai helyszínek kreatív kihasználása és biztonsági elvek.",
  },
]

export default function TrainingPreview() {
  return (
    <section className="border-b border-border" aria-labelledby="training-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: big label */}
        <div className="bg-muted border-b lg:border-b-0 lg:border-r border-border p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-8">
              02 / Technika
            </p>
            <h2
              id="training-heading"
              className="font-display text-[14vw] md:text-[9vw] lg:text-[7vw] leading-none uppercase text-foreground"
            >
              EDZÉSEK
              <br />
              <span className="text-primary italic">TIPPEK</span>
              <br />
              TAKTIKÁK
            </h2>
          </div>
          <div className="mt-10 md:mt-14">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-sans">
              A gördeszkázás fejlesztéséhez strukturált edzéstervre, célzott technikára és türelemre van szükség.
            </p>
            <Link
              href="/edzesek"
              className="inline-flex items-center gap-4 mt-8 group"
              aria-label="Teljes edzéstartalom megtekintése"
            >
              <span className="text-xs tracking-widest uppercase font-condensed text-foreground border-b border-foreground pb-0.5 group-hover:border-primary group-hover:text-primary transition-colors">
                Teljes edzéstartalom
              </span>
              <span className="text-primary font-display text-lg" aria-hidden="true">
                /
              </span>
            </Link>
          </div>
        </div>

        {/* Right: list of tips */}
        <div className="divide-y divide-border">
          {tips.map((tip) => (
            <div
              key={tip.num}
              className="flex items-start gap-6 p-6 md:p-8 hover:bg-muted/40 transition-colors group"
            >
              <span className="font-display text-4xl md:text-5xl text-foreground/20 leading-none shrink-0 group-hover:text-primary/40 transition-colors">
                {tip.num}
              </span>
              <div>
                <h3 className="font-condensed font-bold text-base md:text-lg uppercase tracking-wide text-foreground mb-1">
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
