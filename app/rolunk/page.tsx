import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Rólunk | Hungary Skateboarding",
  description:
    "A Hungary Skateboarding portálról. Küldetésünk, értékeink és kapcsolatfelvételi lehetőségek. Írj nekünk: info@hungaryskateboarding.com",
}

const values = [
  {
    id: "01",
    title: "Nyitottság",
    desc: "A gördeszkázás mindenkié. Koroktól, tapasztalati szinttől és háttértől függetlenül mindenki számára elérhető és befogadó közösséget kívánunk bemutatni.",
  },
  {
    id: "02",
    title: "Hitelesség",
    desc: "Csak hiteles, ellenőrzött és általánosan érvényes információkat közlünk. Nem képviseljük sem kereskedelmi érdekeket, sem egyedi szervezeteket.",
  },
  {
    id: "03",
    title: "Közösségiség",
    desc: "A gördeszkás kultúra alapja a közösség. Portálunk célja, hogy ezt a közösségi szellemet digitálisan is megjelenítse és erősítse.",
  },
  {
    id: "04",
    title: "Fejlődés",
    desc: "Folyamatosan bővítjük és frissítjük tartalmainkat, hogy a legpontosabb és leghasznosabb információkat nyújtsuk a hazai gördeszkás közösségnek.",
  },
]

export default function RolunkPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-[57px] md:pt-[65px] border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[50vh]">
          <div className="lg:col-span-7 px-6 md:px-12 py-14 md:py-20 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground">
              Rólunk / Kapcsolat
            </p>
            <div>
              <h1 className="font-display text-[15vw] md:text-[10vw] leading-none uppercase text-foreground">
                KIK
                <br />
                <span className="text-primary">VAGYUNK</span>
              </h1>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl font-sans">
                A Hungary Skateboarding Magyarország átfogó gördeszkás információs portálja. Célunk a hazai gördeszkás kultúra dokumentálása, bemutatása és népszerűsítése egy hiteles, általános tájékoztató forrás formájában.
              </p>
            </div>
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
          </div>
          <div className="lg:col-span-5 relative min-h-[280px] overflow-hidden bg-foreground">
            <Image
              src="/images/about.jpg"
              alt="Hungary Skateboarding portál"
              fill
              priority
              className="object-cover opacity-50 mix-blend-luminosity"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute top-0 left-0 w-12 h-12 bg-primary" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Mission statement */}
      <div className="border-b border-border grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 bg-secondary text-secondary-foreground p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-secondary-foreground/10 flex flex-col justify-between">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-secondary-foreground/40 mb-6">
              Küldetésünk
            </p>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-secondary-foreground">
              TÁJÉKOZTATÁS
              <br />
              <span className="text-primary">INSPIRÁCIÓ</span>
              <br />
              KÖZÖSSÉG
            </h2>
          </div>
          <div className="mt-12 h-px w-12 bg-primary" aria-hidden="true" />
        </div>
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col gap-6">
          <p className="text-base text-muted-foreground leading-relaxed font-sans">
            A Hungary Skateboarding portál kizárólag általános tájékoztató célból jött létre. Nem kötődik egyetlen szervezethez, szponzorhoz vagy kereskedelmi érdekeltséghez sem. Tartalmainkat szakszerűen, de közérthetően állítjuk össze.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed font-sans">
            Portálunkon nem jelennek meg márkák, szponzorok, termékajánlók vagy fizetett tartalmak. Minden információnk általánosan érvényes, a gördeszkás kultúra egészéről szól, és semmilyen kereskedelmi célból nem keletkezett.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed font-sans">
            Ha kérdésed, javaslatod vagy megjegyzésed van, írj nekünk az alábbi kapcsolatfelvételi űrlapon keresztül, vagy közvetlenül e-mailen a{" "}
            <span className="text-foreground font-condensed">info@hungaryskateboarding.com</span>{" "}
            címre.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="border-b border-border">
        <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
            Értékeink
          </p>
          <h2 className="font-display text-[10vw] md:text-[6vw] leading-none uppercase text-foreground">
            AMIBEN
            <br />
            <span className="text-primary">HISZÜNK</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => (
            <div
              key={val.id}
              className="border-b md:border-b-0 border-r-0 md:border-r border-border last:border-r-0 p-8 md:p-10 flex flex-col gap-4 group hover:bg-muted/30 transition-colors"
            >
              <span className="font-display text-6xl leading-none text-foreground/10 group-hover:text-primary/20 transition-colors">
                {val.id}
              </span>
              <h3 className="font-display text-2xl uppercase text-foreground leading-none">
                {val.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="border-b border-border grid grid-cols-1 lg:grid-cols-12">
        {/* Left: info */}
        <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-8">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-4">
              Kapcsolat
            </p>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-foreground">
              ÍRJ
              <br />
              <span className="text-primary">NEKÜNK</span>
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground mb-1">
                E-mail
              </p>
              <p className="text-sm font-condensed text-foreground tracking-wide">
                info@hungaryskateboarding.com
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground mb-1">
                Domain
              </p>
              <p className="text-sm font-condensed text-foreground tracking-wide">
                hungaryskateboarding.com
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground mb-1">
                Elérhetőség
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Üzenetedre általában 2 munkanapon belül válaszolunk.
              </p>
            </div>
          </div>
          <div className="mt-auto h-px w-10 bg-primary" aria-hidden="true" />
        </div>

        {/* Right: form */}
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-16">
          <ContactForm />
        </div>
      </div>
    </>
  )
}
