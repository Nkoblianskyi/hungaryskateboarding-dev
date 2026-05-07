import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Adatvédelmi irányelvek | Hungary Skateboarding",
  description: "A Hungary Skateboarding adatvédelmi irányelvei és adatkezelési tájékoztatója.",
}

const UPDATED = new Date().toLocaleDateString("hu-HU", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

const sections = [
  {
    title: "Adatkezelő azonosítása",
    content:
      "Adatkezelő: Hungary Skateboarding. Elérhetőség: info@hungaryskateboarding.com. Weboldal: hungaryskateboarding.com. Az adatkezelő kizárólag általános tájékoztató tartalmú weboldalt üzemeltet, és nem folytat kereskedelmi tevékenységet.",
  },
  {
    title: "Milyen adatokat gyűjtünk?",
    content:
      "Weboldalunk önkéntes kapcsolatfelvétel esetén az Ön által megadott adatokat (név, e-mail cím, üzenet tárgya és tartalma) tárolja és kezeli kizárólag a kapcsolatfelvétel megválaszolásának céljából. Ezen túlmenően az oldal látogatásával kapcsolatos technikai adatokat (pl. böngésző típusa, IP-cím töredéke) automatikusan naplózzuk az oldal biztonságos üzemeltetéséhez.",
  },
  {
    title: "Az adatkezelés jogalapja",
    content:
      "Kapcsolatfelvételi adatok esetén az adatkezelés jogalapja az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont). A technikai naplóadatok kezelésének jogalapja a jogos érdek (GDPR 6. cikk (1) bekezdés f) pont), amely az oldal biztonságos üzemeltetéséhez fűződik.",
  },
  {
    title: "Adatmegőrzési idő",
    content:
      "A kapcsolatfelvételi adatokat legfeljebb 12 hónapig őrizzük meg, a megkeresés megválaszolásához szükséges ideig. A technikai naplóadatokat 30 napig tároljuk. Az Ön kérésére az adatokat ennél hamarabb is töröljük.",
  },
  {
    title: "Adattovábbítás harmadik feleknek",
    content:
      "Az Ön személyes adatait harmadik félnek nem adjuk át, értékesítjük vagy adjuk bérbe. Az adatokat kizárólag a közvetlen kapcsolatfelvétel keretében kezeljük, és azok nem kerülnek marketing vagy elemzési célokra felhasználásra.",
  },
  {
    title: "Az Ön jogai",
    content:
      "Az alkalmazandó adatvédelmi jogszabályok alapján Ön jogosult: hozzáférni a személyes adataihoz, azok helyesbítését kérni, törlésüket kérni, az adatkezelés korlátozását kérni, tiltakozni az adatkezelés ellen, valamint adathordozhatósághoz való jogát érvényesíteni. Ezeket a jogokat az info@hungaryskateboarding.com e-mail címen keresztül gyakorolhatja.",
  },
  {
    title: "Panasz benyújtása",
    content:
      "Ha úgy véli, hogy adatainak kezelése megsérti a vonatkozó adatvédelmi jogszabályokat, jogosult panaszt benyújtani a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH), amely Magyarország illetékes adatvédelmi hatósága. Elérhetőség: naih.hu.",
  },
  {
    title: "Irányelvek módosítása",
    content:
      "Fenntartjuk a jogot ezen irányelvek módosítására. A módosításokat a weboldalon tesszük közzé, és az utolsó frissítés dátumát automatikusan frissítjük. A weboldal további használata a módosított irányelvek elfogadását jelenti.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="pt-[57px] md:pt-[65px] border-b border-border">
        <div className="px-6 md:px-12 py-14 md:py-20">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-4">
            Jogi információk
          </p>
          <h1 className="font-display text-[10vw] md:text-[7vw] leading-none uppercase text-foreground">
            ADATVÉDELMI
            <br />
            <span className="text-primary">IRÁNYELVEK</span>
          </h1>
          <p className="mt-6 text-sm text-muted-foreground font-condensed uppercase tracking-widest">
            Utolsó frissítés: {UPDATED}
          </p>
        </div>
      </div>

      <div className="max-w-3xl px-6 md:px-12 py-14 md:py-20 space-y-12">
        {sections.map((section, i) => (
          <div key={section.title} className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="md:w-8 shrink-0">
              <span className="font-display text-4xl text-foreground/10 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex-1 border-b border-border pb-12 last:border-b-0">
              <h2 className="font-display text-2xl uppercase text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
