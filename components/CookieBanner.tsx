"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const COOKIE_KEY = "hsk_cookie_consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY)
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted")
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined")
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Sütik kezelése"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground border-t border-secondary-foreground/20 transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-6 md:px-10 py-4 md:py-5">
        <p className="text-xs text-secondary-foreground/80 leading-relaxed flex-1 font-sans">
          Ez az oldal sütiket használ a felhasználói élmény javításához és az oldal működéséhez.
          A részletekért tekintsd meg{" "}
          <Link
            href="/cookie-policy"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            sütiszabályzatunkat
          </Link>{" "}
          és{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            adatvédelmi irányelveinket
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-xs tracking-widest uppercase font-condensed text-secondary-foreground/50 hover:text-secondary-foreground transition-colors px-4 py-2 border border-secondary-foreground/20 hover:border-secondary-foreground/40"
          >
            Elutasítom
          </button>
          <button
            onClick={handleAccept}
            className="text-xs tracking-widest uppercase font-condensed bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
