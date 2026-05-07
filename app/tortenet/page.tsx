import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Gördeszkázás Magyarországon – Történet | Hungary Skateboarding",
  description:
    "A gördeszkázás magyarországi történelme az első deszkák megjelenésétől az olimpiai szintig. Teljes kultúrtörténeti áttekintés.",
}

const eras = [
  {
    id: "01",
    period: "1950-es – 1970-es évek",
    title: "Gyökerek és eredetmítosz",
    content: [
      "A gördeszkázás az ötvenes évek Kaliforniájában született meg, amikor a szörfösök kerestek egy szárazföldi alternatívát a lapos napokra. Az első deszkák egyszerű falapok voltak kerekekkel a talpán – a mai felszereléshez képest kezdetleges, de forradalmi eszközök.",
      "A hatvanas évek elejére az első kereskedelmi gördeszkák is megjelentek, és a sport gyorsan terjedt a tengerparti városokban. Az úttörő gördeszkások felfedezték a lejtők, a füves dombok és az utcák nyújtotta lehetőségeket.",
      "A hetvenes évek a gördeszkázás első aranykorát hozták: a polietilén kerekek megjelenésével a sport ugrásszerű fejlődésnek indult. A gördeszkások elkezdtek rampákat és medencéket felfedezni, ami a vert gördeszkázás megszületéséhez vezetett.",
    ],
  },
  {
    id: "02",
    period: "1978 – A fordulópont",
    title: "Az ollie forradalma",
    content: [
      "1978 a gördeszkázás legfontosabb dátuma: ebben az évben fejlesztette ki egy floridai gördeszkás azt az ugrástechnikát, amelyet ma ollienak nevezünk. Ez az egyetlen mozdulat teljesen átalakította a gördeszkázás lehetőségeit.",
      "Az ollie előtt a gördeszkások kizárólag rampákon és medencékben hajthattak végre levegőben lévő trükköket – kézzel fogva a deszkát. Az ollie-val a puszta lábmozgás segítségével emelkedhetett fel a deszka, és ezzel megnyílt az utcai gördeszkázás teljes tere.",
      "Az ollie hatása ma is érezhető: szinte minden modern trükk valamilyen formában az ollie elvén alapul. Ez az egy mozdulat egy teljesen új sportágat teremtett, amelyet ma gördeszkázásnak nevezünk.",
    ],
  },
  {
    id: "03",
    period: "1980-as évek",
    title: "Magyarország és a gördeszkázás első érintkezése",
    content: [
      "Magyarországra a gördeszkázás a nyolcvanas évek közepén érkezett el, elsősorban a Nyugatról beszivárgó kulturális hatások révén. Azok, akik külföldön jártak vagy kapcsolatban álltak a nyugati kultúrával, hozták be az első deszkákat az országba.",
      "Kezdetben a gördeszkázás szimbolikus értékkel bírt: a nyugati szabadság, az ifjúsági kultúra és az alternatív életstílus jelképeként tekintett rá a fiatal generáció. A sport tényleges kultúrájáról és technikájáról keveset tudtak, de a deszka vonzó tárgy volt.",
      "Az első gördeszkások improvizált módon tanultak: külföldi folyóiratok képeiből, videokazetták töredékeiből és egymástól. Nem volt edzőjük, nem volt infrastruktúrájuk – mégis összetartó kis közösségek alakultak ki a városokban.",
    ],
  },
  {
    id: "04",
    period: "1990-es évek",
    title: "Közösségek és kultúra kialakulása",
    content: [
      "A rendszerváltást követő nyitás új lehetőségeket teremtett: a nyugati deszkás cikkek elérhetőbbé váltak, és az első hazai gördeszkás közösségek formalizálódni kezdtek. A nagyobb városokban rendszeres találkozók szerveződtek.",
      "A kilencvenes évek a hazai gördeszkás kultúra szempontjából a legintenzívebb formáló időszak volt. A vizuális kultúra – a graffiti, a zene, a ruházat – összefonódott a gördeszkázással, és komplex identitást hozott létre.",
      "Az első generáció, amely már Magyarországon nőtt fel a deszkával, sajátos helyi stílust és hagyományokat alakított ki. Ezek az úttörők ma a hazai gördeszkás kultúra legfontosabb emlékezethordozói és átadói.",
    ],
  },
  {
    id: "05",
    period: "2000-es – 2010-es évek",
    title: "Intézményesülés és infrastruktúra",
    content: [
      "A kétezres évek elejétől a hazai gördeszkázás fokozatosan szervezett keretek közé kerülve fejlődött. Az első épített skateparkok megjelenése a nagyobb városokban radikálisan megváltoztatta az edzési lehetőségeket.",
      "Az önkormányzatok egyre inkább felismerték, hogy a gördeszkás parkok értékes közösségi tereket alkotnak, amelyek csökkentik a vandalizmus kockázatát és pozitív közösségi aktivitást generálnak. Ez a szemléletváltás több tucat park építéséhez vezetett az ország egész területén.",
      "A tízes évek hozták a legjelentősebb infrastrukturális fejlődést: fedett, téli gördeszkázásra is alkalmas helyszínek nyíltak, és a sport egyre inkább bekerült a szabadidős tevékenységek mainstream kínálatába.",
    ],
  },
  {
    id: "06",
    period: "2020 és tovább",
    title: "Olimpiai elismerés és a jövő",
    content: [
      "A gördeszkázás 2020-ban bekerült az olimpiai programba Tokióban, ami alapvetően megváltoztatta a sport státuszát és megítélését világszerte – és Magyarországon is. Az olimpiai láthatóság növelte az érdeklődést és a befektetési hajlandóságot.",
      "Magyarország egyre aktívabban vesz részt a kelet-európai gördeszkás versenyek rendszerében, és a hazai tehetségek felkutatása és fejlesztése egyre szervezettebb keretek között zajlik.",
      "A hazai gördeszkás kultúra ma egy érett, sokszínű és dinamikus közösség. Három évtized alatt óriási utat tett meg: az első behozott deszkáktól az olimpiai ambíciókig. A következő fejezet még éppen most íródik.",
    ],
  },
]

export default function TortenetPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-[57px] md:pt-[65px] bg-secondary text-secondary-foreground border-b border-secondary-foreground/10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 px-6 md:px-12 py-14 md:py-20 border-b lg:border-b-0 lg:border-r border-secondary-foreground/10">
            <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-secondary-foreground/40 mb-4">
              Gördeszkázás Magyarországon / Történet
            </p>
            <h1 className="font-display text-[15vw] md:text-[10vw] leading-none uppercase text-secondary-foreground">
              GÖRDESZKÁZÁS
              <br />
              <span className="text-primary">TÖRTÉNELME</span>
            </h1>
            <p className="mt-8 text-base text-secondary-foreground/70 leading-relaxed max-w-xl font-sans">
              Az első deszkáktól az olimpiai arénáig. A magyarországi gördeszkás kultúra több évtizedes útjának teljes áttekintése.
            </p>
          </div>
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0 overflow-hidden">
            <Image
              src="/images/hist-sk8.jpg"
              alt="A gördeszkázás történelme"
              fill
              priority
              className="object-cover opacity-40"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-secondary/40" aria-hidden="true" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-secondary-foreground/20 text-[8vw] lg:text-[5vw] leading-none uppercase">
                1980 – 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline content */}
      <div>
        {eras.map((era, i) => (
          <div
            key={era.id}
            className={`border-b border-border grid grid-cols-1 lg:grid-cols-12 ${
              i % 2 === 1 ? "bg-muted/30" : ""
            }`}
          >
            {/* Left: meta */}
            <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-4">
              <span className="font-display text-7xl md:text-8xl leading-none text-foreground/8">
                {era.id}
              </span>
              <div>
                <p className="text-xs font-condensed uppercase tracking-widest text-primary mb-2">
                  {era.period}
                </p>
                <h2 className="font-display text-2xl md:text-3xl uppercase leading-tight text-foreground">
                  {era.title}
                </h2>
              </div>
              <div className="mt-auto pt-6 h-px w-12 bg-primary" aria-hidden="true" />
            </div>
            {/* Right: content */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col gap-5">
              {era.content.map((para, j) => (
                <p key={j} className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
