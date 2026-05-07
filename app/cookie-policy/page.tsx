import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sütik szabályzata | Hungary Skateboarding",
  description: "A Hungary Skateboarding weboldal sütikre vonatkozó szabályzata.",
}

const UPDATED = new Date().toLocaleDateString("hu-HU", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

const sections = [
  {
    title: "Mi az a süti?",
    content:
      "A sütik (cookies) kis méretű szöveges fájlok, amelyeket a weboldal az Ön eszközén (számítógép, tablet, okostelefon) tárol, amikor meglátogatja azt. A sütik lehetővé teszik, hogy a weboldal emlékezzen az Ön preferenciáira és beállításaira a következő látogatásig.",
  },
  {
    title: "Milyen sütiket használunk?",
    content:
      "Weboldalunk kizárólag funkcionális sütiket alkalmaz, amelyek az oldal alapvető működéséhez szükségesek. Ezek közé tartozik a sütihozzájárulás tárolása, amely biztosítja, hogy az Ön döntését megjegyezzük, és ne kelljen azt minden egyes látogatáskor megismételni. Nem alkalmazunk analitikai, marketing- vagy követési sütiket.",
  },
  {
    title: "Sütik kezelése és törlése",
    content:
      "Az Ön böngészője lehetővé teszi a sütik kezelését, törlését és letiltását. A böngésző beállításaiban megtalálja a sütikre vonatkozó opciókat. Fontos tudni, hogy a funkcionális sütik letiltása esetén az oldal egyes funkciói nem működnek megfelelően.",
  },
  {
    title: "Hozzájárulás visszavonása",
    content:
      "A sütik elfogadásával kapcsolatos döntését bármikor visszavonhatja a böngésző sütitárolójának törlésével. Az oldal következő látogatásakor ismét megjelenik a sütihozzájárulást kérő értesítő.",
  },
  {
    title: "Kapcsolat",
    content:
      "Ha kérdése van a sütik kezelésével kapcsolatban, kérjük, vegye fel velünk a kapcsolatot az info@hungaryskateboarding.com e-mail címen vagy a Rólunk oldalon található kapcsolatfelvételi űrlapon keresztül.",
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <div className="pt-[57px] md:pt-[65px] border-b border-border">
        <div className="px-6 md:px-12 py-14 md:py-20">
          <p className="text-[10px] tracking-[0.35em] uppercase font-condensed text-muted-foreground mb-4">
            Jogi információk
          </p>
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-none uppercase text-foreground">
            SÜTIK
            <br />
            <span className="text-primary">SZABÁLYZATA</span>
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
            <div className="flex-1">
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
