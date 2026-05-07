const types = [
  {
    id: "01",
    name: "Street",
    sub: "Utcai gördeszkázás",
    desc: "Az urbánus tér elemeit – lépcsőket, korlátokat, padokat – kreatívan kihasználó stílus. A street gördeszkázás a technikai precizitás és az improvizáció tökéletes ötvözete.",
    tags: ["Ledge", "Rail", "Gap", "Stair"],
  },
  {
    id: "02",
    name: "Vert",
    sub: "Függőleges rampás gördeszkázás",
    desc: "A nagyméretű, függőleges falú rampákon végzett gördeszkázás, amelynek célja a magasság, a sebesség és a levegőidő maximalizálása. A látványos aerial trükkök szülőhelye.",
    tags: ["Half-pipe", "Quarter-pipe", "Air", "Coping"],
  },
  {
    id: "03",
    name: "Park",
    sub: "Épített pályán gördeszkázás",
    desc: "A gördeszkás parkok gondosan megtervezett akadályrendszerei lehetővé teszik a legkülönfélébb elemek kombinálását. Folyékony vonalak, változatos nehézségű akadályok.",
    tags: ["Bowl", "Funbox", "Pyramid", "Manual pad"],
  },
  {
    id: "04",
    name: "Longboard",
    sub: "Hosszú deszka, nagy távolság",
    desc: "A hosszabb, szélesebb deszkákon végzett gördeszkázás elsősorban a szabadidős közlekedésre, a carving-ra és a downhill haladásra fókuszál. Kiváló belépési pont a sportba.",
    tags: ["Carving", "Cruising", "Downhill", "Dancing"],
  },
  {
    id: "05",
    name: "Freestyle",
    sub: "Kreatív flatground technikák",
    desc: "A flatground trükkök és kreatív mozdulatok világa, amely a tánctól a technikai footwork-ig terjed. A gördeszkázás leginkább koreografált és vizuálisan leggazdagabb ága.",
    tags: ["Footwork", "Spinning", "Flatground", "Handstands"],
  },
  {
    id: "06",
    name: "Mini ramp",
    sub: "Kisebb rampás gördeszkázás",
    desc: "A kisebb méretű, alacsonyabb rampákon végzett gördeszkázás ideális köztes szint a street és a vert között. Gyors fejlődési lehetőséget biztosít a transition technikák terén.",
    tags: ["Mini half-pipe", "Kickturn", "Rock'n'roll", "Smith grind"],
  },
]

export default function SkateboardTypes() {
  return (
    <section className="border-b border-border" aria-labelledby="types-heading">
      {/* Section header */}
      <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border flex flex-col md:flex-row md:items-end gap-4 md:gap-0">
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
            04 / Stílusok
          </p>
          <h2
            id="types-heading"
            className="font-display text-[12vw] md:text-[7vw] leading-none uppercase text-foreground"
          >
            GÖRDESZKÁZÁS
            <br />
            <span className="text-primary">TÍPUSOK</span>
          </h2>
        </div>
        <p className="md:max-w-xs text-sm text-muted-foreground font-sans leading-relaxed">
          A gördeszkázásnak számos irányzata és alstílusa létezik, mindegyik egyedi technikákkal,
          helyszínekkel és kultúrával.
        </p>
      </div>

      {/* Types grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {types.map((type, i) => (
          <div
            key={type.id}
            className="border-b border-r-0 md:border-r border-border p-8 md:p-10 flex flex-col gap-4 hover:bg-muted/30 transition-colors group"
            style={{
              borderRight:
                i === 2 || i === 5 ? "none" : undefined,
            }}
          >
            {/* Number + name */}
            <div className="flex items-start justify-between">
              <div>
                <span className="font-display text-5xl md:text-6xl leading-none text-foreground/15 group-hover:text-primary/20 transition-colors">
                  {type.id}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-none text-foreground">
                {type.name}
              </h3>
              <p className="text-xs font-condensed uppercase tracking-wide text-primary mt-1">
                {type.sub}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans flex-1">
              {type.desc}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {type.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wider uppercase font-condensed px-2 py-1 border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
