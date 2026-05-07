import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Edzések, taktikák és tippek | Hungary Skateboarding",
  description:
    "Gördeszkás edzéstervek, technika-fejlesztési módszerek, heti programok és bevált taktikák minden szintű gördeszkásnak.",
}

const sections = [
  {
    id: "01",
    title: "Bemelegítés és regeneráció",
    sub: "Az edzés keretrendszere",
    content: [
      "Minden gördeszkás szesszió előtt legalább 10 perc dinamikus bemelegítésre van szükség. Az ízületek fokozatos terhelése – boka, térd, csípő és váll körözések – csökkenti a sérülésveszélyt és javítja a mozgáshatékonyságot.",
      "A statikus nyújtást inkább az edzés végére érdemes hagyni. Edzés után a combhajlítók, a quadriceps és a vádli aktív nyújtása felgyorsítja a regenerációt és csökkenti az izomfeszültséget.",
      "Az aktív pihenőnapok – könnyű séta, úszás, jóga – segítenek fenntartani a mozgékonyságot anélkül, hogy a gördeszkázás által terhelt izomcsoportokat tovább fárasztanák.",
    ],
  },
  {
    id: "02",
    title: "Alaptechnikák fejlesztése",
    sub: "Az alapoktól a haladóig",
    content: [
      "A gördeszkás fejlődés lineáris: nincs trükk, amely átugorható lenne a megelőző készség elsajátítása nélkül. Az egyensúlygyakorlatok, a semleges nyomda és a biztonságos lassítás megelőzik az ollie és a flip-trükkök tanulását.",
      "Az ollie tökéletesítéséhez három elemet kell szinkronban elsajátítani: a farok ütéses lecsapása, az első láb csúsztatása az orra felé és a két láb szimultán emelkedése. Álló helyzetben érdemes kezdeni, majd mozgásban folytatni.",
      "A manual – a deszka farán vagy orrán való egyensúlyozás – látszólag egyszerű, de a core stabilitás és a fine motor control kiemelkedő fejlesztője. Napi 10 perces manual-edzés látványos eredménnyel jár.",
    ],
  },
  {
    id: "03",
    title: "Heti edzésprogram – kezdők",
    sub: "0 – 6 hónapos szint",
    content: [
      "Hétfő: 45 perces egyensúlygyakorlat sík felületen, gurulás és megállás. Szerda: 60 perces edzés – ollie-próbák álló helyzetben, irányváltások. Péntek: Szabadon gurulás, barátokkal.",
      "A kezdő programban a legfontosabb, hogy minden edzésen legyenek sikeres pillanatok. Ha az ollie még nem sikerül, a gurulás és a fordulás is értékes fejlődés. A türelem és a következetesség fontosabb, mint az intenzitás.",
      "Az első hat hónapban az elesések garantáltak és tanulságosak. A helyes esési technika – oldalra és előre gurulva, nem kézzel kitámasztva – elsajátítása az egyik legelső készség, amelyet érdemes megtanítani.",
    ],
  },
  {
    id: "04",
    title: "Haladó edzéstervek",
    sub: "6+ hónapos szint",
    content: [
      "Haladó szinten az edzés céltudatossá válik: minden szesszionnak legyen konkrét fókusza, például egy adott trükk konzisztens végrehajtása vagy egy új kombináció elsajátítása. A véletlenszerű gördeszkázás fejleszt, de a tudatos gyakorlás gyorsabban vezet eredményre.",
      "A videóelemzés rendkívül hatékony eszköz haladók számára. Az okostelefonos felvételek segítségével a lábpozíció, az ugrás magassága és a landing pontossága visszanézhető és elemzett. A leglátványosabb fejlődés gyakran kis technikai kiigazításokból fakad.",
      "Az erőnléti kiegészítő edzés – guggolás, egyensúlyozó lapok, plank variációk – közvetlenül javítja a gördeszkás teljesítményt. Heti két kiegészítő edzés elegendő a core és az alsóvégtag megerősítéséhez.",
    ],
  },
  {
    id: "05",
    title: "Rampán és parkban való edzés",
    sub: "Transition technikák",
    content: [
      "A transition gördeszkázás – vagyis az ívelt felületeken való mozgás – teljesen más egyensúlyérzéket és testtartást igényel, mint a sík felületi gördeszkázás. Az első lépés a kis íveken való lazaság kialakítása, mielőtt a nagyobb rampákra lépünk.",
      "A drop-in – a coping tetejéről való belépés a rampára – az egyik legijesztőbb, de legfontosabb kezdeti készség. Kisebb, alacsonyabb rampán érdemes elkezdeni, és csak fokozatosan haladni a nagyobb struktúrák felé.",
      "A pump technika – a rampán generált lendület testmozgással való erősítése – az egyik leghasználhatóbb skill: truckok és extra gyorsítás nélkül is fenntartható az iram egy jól kivitelezett pump-sorozattal.",
    ],
  },
  {
    id: "06",
    title: "Street gördeszkázás stratégiái",
    sub: "Az urbánus tér olvasása",
    content: [
      "A street gördeszkázás lényege a tér kreatív értelmezése. A tapasztalt street gördeszkások egy új helyszínre érkezve nem csupán az akadályokat látják, hanem azok kombinálhatóságát, a felületek minőségét és a mozgástér lehetőségeit is.",
      "A közeledési szög és a sebesség alapvetően meghatározza egy street trükk kimenetelét. Minden egyes helyszínen érdemes néhány gurulással felmérni a terep sajátosságait, mielőtt a trükköket megpróbálják.",
      "A street gördeszkázás közösségi dimenziója meghatározó: a barátokkal együtt végzett szesszionok inspirálják a kreativitást, a kölcsönös visszajelzések pontosítják a technikát, és a közösségi élmény erősíti az elkötelezettséget.",
    ],
  },
]

const plans = [
  {
    level: "Kezdő",
    freq: "Heti 3 alkalom",
    duration: "45 – 60 perc",
    focus: "Egyensúly, gurulás, ollie alapjai",
  },
  {
    level: "Középhaladó",
    freq: "Heti 4 alkalom",
    duration: "60 – 90 perc",
    focus: "Flip trükkök, grind alapok, manual",
  },
  {
    level: "Haladó",
    freq: "Heti 5 alkalom",
    duration: "90 – 120 perc",
    focus: "Kombinációk, versenyfelkészülés, vert",
  },
]

export default function EdzesekPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-[57px] md:pt-[65px] border-b border-border">
        <div className="px-6 md:px-12 py-14 md:py-20">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-4">
            Edzések / Technika / Taktika
          </p>
          <h1 className="font-display text-[15vw] md:text-[10vw] leading-none uppercase text-foreground">
            GÖRDESZKÁS
            <br />
            <span className="text-primary">EDZÉSEK</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl font-sans">
            Átfogó edzéstervek, bevált technikák és taktikák minden tapasztalati szintű gördeszkás számára. A haladás a türelem és a tudatos gyakorlás eredménye.
          </p>
        </div>
      </div>

      {/* Training plans strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border">
        {plans.map((plan, i) => (
          <div key={plan.level} className="p-8 md:p-10 border-b md:border-b-0 border-r-0 md:border-r border-border last:border-r-0">
            <p className="text-[10px] tracking-widest uppercase font-condensed text-primary mb-3">
              {String(i + 1).padStart(2, "0")} / {plan.level}
            </p>
            <p className="font-display text-3xl uppercase text-foreground mb-4">{plan.level}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 bg-primary shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground font-sans">{plan.freq}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 bg-primary shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground font-sans">{plan.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 bg-primary shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground font-sans">{plan.focus}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main content sections */}
      <div>
        {sections.map((section, i) => (
          <div key={section.id} className="border-b border-border grid grid-cols-1 lg:grid-cols-12">
            {/* Left number + title */}
            <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 border-r-0 lg:border-r border-border flex flex-col justify-between">
              <div>
                <span className="font-display text-[10vw] md:text-[6vw] leading-none text-foreground/10 block">
                  {section.id}
                </span>
                <h2 className="font-display text-2xl md:text-3xl uppercase leading-tight text-foreground mt-4">
                  {section.title}
                </h2>
                <p className="text-xs font-condensed uppercase tracking-wide text-primary mt-2">
                  {section.sub}
                </p>
              </div>
              <div className="mt-8 h-px w-10 bg-primary" aria-hidden="true" />
            </div>
            {/* Right content */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col gap-5">
              {section.content.map((para, j) => (
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
