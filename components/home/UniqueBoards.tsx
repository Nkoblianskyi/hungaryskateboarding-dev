const boards = [
  {
    id: "01",
    name: "Popsicle",
    detail: "Szimmetrikus forma",
    desc: "A legelterjedtebb modern gördeszkadeszka-forma. Azonos orrú és farkú kialakítása maximális sokoldalúságot biztosít minden stílusban.",
    width: "7.5 – 8.5\"",
    use: "Street / Park / Vert",
    accent: "bg-foreground",
  },
  {
    id: "02",
    name: "Old School",
    detail: "Klasszikus retró forma",
    desc: "Szélesebb farokkal és laposabb orral rendelkező vintage kialakítás. Pool és vert gördeszkázásra kifejezetten alkalmas, és a klasszikus gördeszkás esztétika ikonikus darabja.",
    width: "9.0 – 10.0\"",
    use: "Pool / Vert / Ramp",
    accent: "bg-primary",
  },
  {
    id: "03",
    name: "Longboard Drop-Through",
    detail: "Alacsony gravitációs pont",
    desc: "Az átszúrt truck-rögzítés következtében a deszka gravitációs pontja közelebb kerül a talajhoz, ami rendkívüli stabilitást biztosít nagy sebességeknél.",
    width: "9.0 – 10.5\"",
    use: "Downhill / Cruising",
    accent: "bg-foreground",
  },
  {
    id: "04",
    name: "Cruiser",
    detail: "Rövid, manőverező forma",
    desc: "Rövid és széles testű deszka, amely ideálisan ötvözi a gurulási kényelmet és a kompakt méretet. Tökéletes a városi közlekedéshez és rövid utazásokhoz.",
    width: "8.0 – 9.5\"",
    use: "Cruising / Carving",
    accent: "bg-primary",
  },
]

export default function UniqueBoards() {
  return (
    <section className="border-b border-border" aria-labelledby="boards-heading">
      {/* Header */}
      <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
              05 / Deszkák
            </p>
            <h2
              id="boards-heading"
              className="font-display text-[12vw] md:text-[7vw] leading-none uppercase text-foreground"
            >
              EGYEDI
              <br />
              <span className="text-primary">DESZKÁK</span>
            </h2>
          </div>
          <p className="md:max-w-xs text-sm text-muted-foreground leading-relaxed">
            Különböző deszkaformák különböző stílusokat és helyszíneket igényelnek. Ismerd meg a legelterjedtebb kialakításokat.
          </p>
        </div>
      </div>

      {/* Horizontal scroll band */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {boards.map((board, i) => (
          <div
            key={board.id}
            className="flex flex-col border-b lg:border-b-0 border-r-0 lg:border-r border-border last:border-r-0 group"
          >
            {/* Top color band */}
            <div className={`h-1.5 w-full ${board.accent} transition-all group-hover:h-3`} aria-hidden="true" />
            <div className="flex flex-col flex-1 p-8 md:p-10 gap-5">
              {/* Index + name */}
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl leading-none text-foreground/10 group-hover:text-primary/20 transition-colors">
                  {board.id}
                </span>
                <span className="text-[10px] font-condensed uppercase tracking-widest text-muted-foreground border border-border px-2 py-1">
                  {board.width}
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl uppercase leading-none text-foreground">
                  {board.name}
                </h3>
                <p className="text-xs font-condensed uppercase tracking-wide text-primary mt-1">
                  {board.detail}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {board.desc}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground mb-1">
                  Alkalmazás
                </p>
                <p className="text-xs font-condensed text-foreground tracking-wide">
                  {board.use}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
