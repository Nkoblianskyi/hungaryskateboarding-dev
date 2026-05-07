import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Szabályok és diszciplínák | Hungary Skateboarding",
  description:
    "A gördeszkázás versenyrendszere, szabályai és diszciplínái részletesen. Street, Park és Vert versenyek értékelési rendszere.",
}

const disciplines = [
  {
    id: "01",
    name: "Street",
    desc: "Városi akadályokon végzett gördeszkázás",
    rules: [
      {
        title: "Pályakialakítás",
        text: "A street pályák kifejezetten erre a célra épített, városias elemeket – lépcsőket, korlátokat, padokat, falakat és rámpákat – tartalmaznak. A pálya szimmetrikus kialakítású, hogy minden gördeszkás azonos lehetőségekkel induljon.",
      },
      {
        title: "Futamszerkezet",
        text: "A versenyek két fázisból állnak: a futamok (run) és az egyszeri kijelölt trükkök (best tricks) fázisából. A futamok során a gördeszkás 45 másodperc alatt teljesíti a pályát, majd a zsűri azonnali pontszámot ad.",
      },
      {
        title: "Értékelési szempontok",
        text: "A zsűri a trükkök nehézségét, a végrehajtás minőségét, a pálya különböző részeinek kihasználását és a kreativitást értékeli. A legmagasabb és legalacsonyabb pontszámot elhagyják, és a maradékból átlag számítódik.",
      },
      {
        title: "Best Trick fázis",
        text: "Minden versenyzőnek öt lehetősége van egyedi, kiemelkedő trükkök bemutatására adott akadályokon. Ezek a kísérletek a legmagasabb pontszámot eredményezhetik, és gyakran a verseny leglátványosabb pillanatait adják.",
      },
    ],
  },
  {
    id: "02",
    name: "Park",
    desc: "Épített, tálszerű pályán végzett gördeszkázás",
    rules: [
      {
        title: "Pályajellemzők",
        text: "A park pályák gömbölyített, tálszerű felszíneket és görbült elemeket kombinálnak. A folyékony mozgás, a váltakozó irányok és a különböző magasságú átmenetek lehetővé teszik az összetett, kreatív vonalakat.",
      },
      {
        title: "Futamidő és szerkezet",
        text: "Minden versenyző 45 másodperces futamokat teljesít, amelyek során maximálisan ki kell használni a pálya minden területét. A zsűri a teljes menet alapján ad pontszámot, nem csupán az egyes trükkökre.",
      },
      {
        title: "Vonalak és folyékonyság",
        text: "A park gördeszkázásban különösen fontos a folyékonyság és a vonalak kreativitása. Azok a gördeszkások nyerik a legmagasabb pontszámot, akik a pálya különböző részeit összekötve egységes, lendületes menetet mutatnak be.",
      },
      {
        title: "Levegős trükkök értékelése",
        text: "Az aerial trükkök – vagyis a levegőben végrehajtott mozdulatok – magasabb pontszámot kapnak, ha azok a pálya legmagasabb pontjain, a lip-en hajtják végre. A levegőidő, a magasság és a landing minősége mind beleszámít az értékelésbe.",
      },
    ],
  },
  {
    id: "03",
    name: "Vert",
    desc: "Függőleges rampán végzett gördeszkázás",
    rules: [
      {
        title: "A vert rámpa",
        text: "A vert rampák két egymással szemben elhelyezett, függőleges falú struktúrából állnak. A falak fokozatosan válnak teljesen függőlegessé, és a tetején a coping – egy fémsíp – zárja le a struktúrát. A rampák magassága általában 3-5 méter.",
      },
      {
        title: "Értékelési rendszer",
        text: "Különálló pontszámokat adnak a végrehajtás minőségéért, a trükkök nehézségéért és a levegőidőért. A következetesség – vagyis a megbízható landing – nagyobb súllyal esik latba, mint a kockázatos, de elesett kísérlet.",
      },
      {
        title: "Aerial trükkök",
        text: "A vert gördeszkázás legértékesebb elemei a coping feletti, levegőben végrehajtott trükkök. Ezek nehézségi foka, a levegőidő hossza és a landing biztonsága mind értékelési szempont. A legmagasabb pontszámot az újszerű és technikailag bonyolult kombinációk kapják.",
      },
      {
        title: "Egymás utáni menetek",
        text: "A versenyzők több egymást követő menetet teljesítenek, és a legjobb eredmény számít a végső besorolásnál. Ez lehetővé teszi, hogy egy kisebb hiba ne végzetes hatással legyen az összesített teljesítményre.",
      },
    ],
  },
]

const generalRules = [
  {
    title: "Biztonsági előírások",
    text: "Minden versenyen kötelező a védőfelszerelés viselése. A sisak minden esetben kötelező, a térd- és könyökvédő a vert és a park diszciplínáknál kötelező, street versenyek esetén ajánlott.",
  },
  {
    title: "Pályahasználati rend",
    text: "A bemelegítési és versenyidőszakokban meghatározott sorrendben és jelzésre lépnek pályára a versenyzők. A többi versenyző pályán lévő kísérletét nem szabad megzavarni.",
  },
  {
    title: "Sportszerűség",
    text: "A gördeszkás versenyeken alapelvárás a kölcsönös tisztelet és a sportszerű magatartás. A más versenyzők teljesítményét bátorítani és elismerni kell, a zsűri döntését elfogadni.",
  },
  {
    title: "Zsűrizés és fellebbezés",
    text: "A zsűri döntése általában végleges. Technikai hiba esetén – például idő előtti stop vagy pályaakadály – a versenyző ismételhet. A fellebbezési lehetőség a verseny szabályzatától függ.",
  },
]

export default function SzabalyokPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-[57px] md:pt-[65px] border-b border-border">
        <div className="px-6 md:px-12 py-14 md:py-20">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-4">
            Szabályok / Diszciplínák / Versenyek
          </p>
          <h1 className="font-display text-[15vw] md:text-[10vw] leading-none uppercase text-foreground">
            SZABÁLYOK
            <br />
            <span className="text-primary">ÉS VERSENY</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl font-sans">
            A gördeszkás versenyrendszer három fő diszciplínára épül: Street, Park és Vert. Minden diszciplína egyedi pályát, szabályrendszert és értékelési szempontokat alkalmaz.
          </p>
        </div>
      </div>

      {/* Disciplines */}
      {disciplines.map((disc, i) => (
        <div key={disc.id} className={`border-b border-border ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
          {/* Discipline header */}
          <div className="px-6 md:px-12 py-8 md:py-12 border-b border-border flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex-1">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[10vw] md:text-[6vw] leading-none text-foreground/10">
                  {disc.id}
                </span>
                <h2 className="font-display text-[8vw] md:text-[5vw] leading-none uppercase text-foreground">
                  {disc.name}
                </h2>
              </div>
              <p className="text-xs font-condensed uppercase tracking-widest text-primary mt-2">
                {disc.desc}
              </p>
            </div>
          </div>
          {/* Rules grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {disc.rules.map((rule, j) => (
              <div
                key={rule.title}
                className="p-8 md:p-10 border-b border-r-0 md:border-r border-border"
                style={{
                  borderRight: (j + 1) % 2 === 0 ? "none" : undefined,
                  borderBottom: j >= disc.rules.length - 2 ? "none" : undefined,
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-1.5 w-2 h-2 shrink-0 bg-primary block" aria-hidden="true" />
                  <h3 className="font-condensed text-base uppercase tracking-wide font-bold text-foreground">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans pl-5">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* General rules */}
      <div className="border-b border-border">
        <div className="px-6 md:px-12 py-10 md:py-14 border-b border-border">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-3">
            Általános szabályok
          </p>
          <h2 className="font-display text-[10vw] md:text-[6vw] leading-none uppercase text-foreground">
            KÖZÖS
            <br />
            <span className="text-primary">ELŐÍRÁSOK</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {generalRules.map((rule, i) => (
            <div
              key={rule.title}
              className="p-8 md:p-10 border-b border-r-0 md:border-r border-border"
              style={{
                borderRight: (i + 1) % 2 === 0 ? "none" : undefined,
                borderBottom: i >= generalRules.length - 2 ? "none" : undefined,
              }}
            >
              <h3 className="font-display text-xl uppercase text-foreground mb-4">
                {rule.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {rule.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
