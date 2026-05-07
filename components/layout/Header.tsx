"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { label: "Főoldal", href: "/" },
  { label: "Történet", href: "/tortenet" },
  { label: "Edzések", href: "/edzesek" },
  { label: "Szabályok", href: "/szabalyok" },
  { label: "Blog", href: "/blog" },
  { label: "Rólunk", href: "/rolunk" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="flex items-stretch h-14 md:h-16">
          <Image src="/favicon.ico" alt="Hungary Skateboarding" width={32} height={32} />
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center pl-5 md:pl-8 pr-6 border-r border-border group shrink-0"
            aria-label="Hungary Skateboarding – Főoldal"
          >

            <div className="leading-none">
              <span className="block font-display text-xl md:text-2xl tracking-tight text-foreground">
                HUNGARY
              </span>
              <span className="block font-display text-xl md:text-2xl tracking-tight text-primary">
                SKATEBOARDING
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-stretch ml-auto" aria-label="Főnavigáció">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-5 text-xs tracking-widest uppercase font-sans transition-colors border-l border-border",
                  pathname === item.href
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <span className="text-[10px] text-muted-foreground mr-1.5 font-condensed">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="ml-auto md:hidden flex flex-col justify-center items-end gap-1.5 px-5 border-l border-border"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-all duration-300",
                menuOpen && "rotate-45 translate-y-[5px]"
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-all duration-300",
                menuOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </button>
        </div>

        {/* Orange accent line */}
        <div className="h-px bg-primary w-full" />
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background flex flex-col justify-center transition-all duration-500 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="px-8 py-16 flex flex-col gap-0" aria-label="Mobilnavigáció">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-baseline gap-4 py-5 border-b border-border transition-colors",
                pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              <span className="font-display text-3xl">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-4xl tracking-wide uppercase">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-8 left-8 right-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground tracking-widest uppercase font-condensed">
            info@hungaryskateboarding.com
          </p>
        </div>
      </div>
    </>
  )
}
