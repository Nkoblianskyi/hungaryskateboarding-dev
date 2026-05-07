const facts = [
  {
    num: "1958",
    label: "Első kereskedelmi gördeszkák megjelenése az Egyesült Államokban.",
  },
  {
    num: "1978",
    label: "Az ollie feltalálása, amely a modern gördeszkázás alapkövévé vált.",
  },
  {
    num: "2020",
    label: "A gördeszkázás bekerült az olimpiai programba Tokióban.",
  },
  {
    num: "70+",
    label: "Ország rendelkezik aktív, szervezett gördeszkás közösséggel.",
  },
  {
    num: "85+",
    label: "Különböző elismert trükkkombináció létezik versenyrendszer szinten.",
  },
  {
    num: "40%",
    label: "A gördeszkások aránya a 25 év alattiak körében globálisan.",
  },
]

export default function FunFacts() {
  return (
    <section className="border-b border-border overflow-hidden" aria-labelledby="facts-heading">
      {/* Header row */}
      <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
            06 / Tények
          </p>
          <h2
            id="facts-heading"
            className="font-display text-[12vw] md:text-[7vw] leading-none uppercase text-foreground"
          >
            ÉRDEKES
            <br />
            <span className="text-primary">TÉNYEK</span>
          </h2>
        </div>
        <p className="md:max-w-xs text-sm text-muted-foreground leading-relaxed">
          Tudtad? A gördeszkázás rövid, de rendkívül gazdag kultúrtörténettel rendelkezik.
        </p>
      </div>

      {/* Facts grid – alternating layout */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {facts.map((fact, i) => (
          <div
            key={fact.num}
            className="flex flex-col justify-between p-8 md:p-12 border-b border-r-0 md:border-r border-border last:border-b-0 group hover:bg-muted/40 transition-colors"
            style={{
              borderRight: (i + 1) % 3 === 0 ? "none" : undefined,
              borderBottom: i >= facts.length - (facts.length % 3 || 3) ? "none" : undefined,
            }}
          >
            <p
              className="font-display text-[min(15vw,6rem)] leading-none text-primary/20 group-hover:text-primary/40 transition-colors"
              aria-hidden="true"
            >
              {fact.num}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-6 font-sans">
              {fact.label}
            </p>
            <div className="mt-6 h-px w-8 bg-primary transition-all group-hover:w-16" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  )
}
