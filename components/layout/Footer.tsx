import Link from "next/link"

const mainLinks = [
  { label: "Főoldal", href: "/" },
  { label: "Történet", href: "/tortenet" },
  { label: "Edzések", href: "/edzesek" },
  { label: "Szabályok", href: "/szabalyok" },
  { label: "Blog", href: "/blog" },
  { label: "Rólunk", href: "/rolunk" },
]

const legalLinks = [
  { label: "Sütik szabályzata", href: "/cookie-policy" },
  { label: "Adatvédelmi irányelvek", href: "/privacy-policy" },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      {/* Top section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: about */}
          <div className="md:col-span-1">
            <p className="text-xs tracking-widest uppercase text-secondary-foreground/50 font-condensed mb-4">
              Magyar Gördeszkás Kultúra
            </p>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed max-w-xs">
              Magyarország átfogó gördeszkás portálja. Ismeretek, technikák és közösség mindenki számára.
            </p>
            <div className="mt-8">
              <p className="text-xs text-secondary-foreground/40 uppercase tracking-widest font-condensed mb-1">
                Kapcsolat
              </p>
              <p className="text-sm text-secondary-foreground/80">
                info@hungaryskateboarding.com
              </p>
            </div>
          </div>

          {/* Col 2: nav links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-secondary-foreground/50 font-condensed mb-4">
              Navigáció
            </p>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: legal */}
          <div>
            <p className="text-xs tracking-widest uppercase text-secondary-foreground/50 font-condensed mb-4">
              Jogi információk
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-secondary-foreground/40 leading-relaxed">
              Minden jog fenntartva.
              <br />
              Kizárólag általános tájékoztató célra készült.
            </p>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="overflow-hidden py-4 md:py-6">
        <p
          className="font-display text-[13vw] leading-none tracking-tight text-secondary-foreground/10 whitespace-nowrap px-6 md:px-12"
          aria-hidden="true"
        >
          HUNGARYSKATEBOARDING
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10 px-6 md:px-12 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="text-xs text-secondary-foreground/40 font-condensed tracking-wide">
          hungaryskateboarding.com
        </p>
        <p className="text-xs text-secondary-foreground/40 font-condensed tracking-wide">
          Általános tájékoztató oldal
        </p>
      </div>
    </footer>
  )
}
