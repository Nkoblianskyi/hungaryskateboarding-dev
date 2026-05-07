import Image from "next/image"

const items = [
  {
    cat: "Deszkalap",
    points: [
      "Szélesség: 7.5 – 8.75 hüvelyk",
      "Anyag: 7 rétegű juharfa préselt lemez",
      "Forma: popsicle, old school, cruiser",
      "Concave (íveltség): enyhe, közepes, mély",
    ],
  },
  {
    cat: "Truckok",
    points: [
      "Alumínium vagy titánötvözet kialakítás",
      "Alap, közepes és magas magasság",
      "A deszka szélességéhez igazított méret",
      "Kingpin szög: fordulékonyságot befolyásol",
    ],
  },
  {
    cat: "Kerekek",
    points: [
      "Átmérő: 49 – 60 mm (street), 60 – 75 mm (cruiser)",
      "Keménység (durometer): 78A – 101A",
      "Kemény: trükkös gördeszkázás, sima felület",
      "Puha: szabadidős gurulás, egyenetlen terep",
    ],
  },
  {
    cat: "Csapágyak",
    points: [
      "608-as méretszabvány (univerzális méret)",
      "ABEC értékelés: 1-től 9-ig",
      "Acél vagy kerámiaalapú kivitelezés",
      "Rendszeres tisztítás és kenés szükséges",
    ],
  },
  {
    cat: "Védőfelszerelés",
    points: [
      "Kemény héjú sisak – kötelező elem",
      "Csuklóvédő – kitámaszkodás ellen",
      "Könyökvédő – csúszást segíti",
      "Térdvédő – vert és ramp gördeszkázáshoz",
    ],
  },
  {
    cat: "Cipő",
    points: [
      "Vastag, tapadós gumitalp",
      "Erős vászon vagy bőr felsőrész",
      "Alacsony profilú talp (board feel)",
      "Speciális ollie-terület erősítés",
    ],
  },
]

export default function Equipment() {
  return (
    <section className="border-b border-border" aria-labelledby="equipment-heading">
      {/* Header */}
      <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
            07 / Felszerelés
          </p>
          <h2
            id="equipment-heading"
            className="font-display text-[12vw] md:text-[7vw] leading-none uppercase text-foreground"
          >
            FELSZERELÉS
            <br />
            <span className="text-primary">ÉS ESZKÖZÖK</span>
          </h2>
        </div>
        <p className="md:max-w-xs text-sm text-muted-foreground leading-relaxed">
          A megfelelő felszerelés kiválasztása alapvetően befolyásolja a gördeszkázás élményét és biztonságát.
        </p>
      </div>

      {/* 2-col layout: image + grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left image panel */}
        <div className="lg:col-span-2 relative min-h-[320px] lg:min-h-0 border-b lg:border-b-0 border-r-0 lg:border-r border-border overflow-hidden bg-foreground">
          <Image
            src="/images/equipment.jpg"
            alt="Gördeszkás felszerelés és eszközök"
            fill
            className="object-cover opacity-50 mix-blend-luminosity"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-condensed mb-2">
              Felszerelés
            </p>
            <p className="font-display text-white/80 text-4xl uppercase leading-none">
              Minden
              <br />
              amire
              <br />
              szükséged
              <br />
              van
            </p>
          </div>
        </div>

        {/* Right: 3x2 grid of categories */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.cat}
              className="p-6 md:p-8 border-b border-r-0 md:border-r border-border group hover:bg-muted/30 transition-colors last:border-b-0"
              style={{
                borderRight: (i + 1) % 3 === 0 ? "none" : undefined,
                borderBottom: i >= items.length - 3 ? "none" : undefined,
              }}
            >
              <h3 className="font-display text-xl uppercase text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.cat}
              </h3>
              <ul className="space-y-2">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-1.5 block w-1 h-1 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground leading-relaxed font-sans">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
