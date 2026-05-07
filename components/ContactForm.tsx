"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = "A neved megadása kötelező."
    if (!form.email.trim()) {
      newErrors.email = "Az e-mail cím megadása kötelező."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Érvényes e-mail cím szükséges."
    }
    if (!form.subject.trim()) newErrors.subject = "A tárgy megadása kötelező."
    if (!form.message.trim()) newErrors.message = "Az üzenet megadása kötelező."
    if (!form.consent) newErrors.consent = "Az adatkezelési nyilatkozat elfogadása kötelező."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 800))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name + email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground"
            >
              Neved <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(
                "bg-transparent border-b py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary transition-colors",
                errors.name ? "border-destructive" : "border-border"
              )}
              placeholder="Teljes neved"
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-destructive font-sans" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground"
            >
              E-mail <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(
                "bg-transparent border-b py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary transition-colors",
                errors.email ? "border-destructive" : "border-border"
              )}
              placeholder="email@domain.com"
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-destructive font-sans" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground"
          >
            Tárgy <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={cn(
              "bg-transparent border-b py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary transition-colors",
              errors.subject ? "border-destructive" : "border-border"
            )}
            placeholder="Üzeneted tárgya"
          />
          {errors.subject && (
            <p id="subject-error" className="text-xs text-destructive font-sans" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[10px] uppercase tracking-widest font-condensed text-muted-foreground"
          >
            Üzenet <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(
              "bg-transparent border-b py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary transition-colors resize-none",
              errors.message ? "border-destructive" : "border-border"
            )}
            placeholder="Írd le üzenetedet..."
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-destructive font-sans" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Consent checkbox */}
        <div className="flex flex-col gap-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <span className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={form.consent}
                onChange={handleChange}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? "consent-error" : undefined}
                className="sr-only peer"
              />
              <span
                className={cn(
                  "block w-4 h-4 border transition-colors peer-focus-visible:ring-2 ring-primary ring-offset-1",
                  form.consent ? "bg-primary border-primary" : "bg-transparent border-border",
                  errors.consent ? "border-destructive" : ""
                )}
                aria-hidden="true"
              >
                {form.consent && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4 text-primary-foreground"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </span>
            <span className="text-xs text-muted-foreground leading-relaxed font-sans">
              Hozzájárulok, hogy a Hungary Skateboarding a megadott adataimat a kapcsolatfelvétel céljából kezelje, összhangban az{" "}
              <a
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-primary transition-colors"
              >
                adatvédelmi irányelvekkel
              </a>
              .{" "}
              <span className="text-primary" aria-hidden="true">*</span>
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="text-xs text-destructive font-sans pl-7" role="alert">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-xs tracking-widest uppercase font-condensed hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Küldés..." : "Üzenet küldése"}
            {!loading && (
              <span className="font-display text-sm text-primary group-hover:text-background" aria-hidden="true">
                →
              </span>
            )}
          </button>
        </div>
      </form>

      {/* Success popup overlay */}
      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm px-4"
        >
          <div className="bg-background border border-border max-w-sm w-full p-10 flex flex-col gap-6">
            {/* Orange accent bar */}
            <div className="h-1 w-12 bg-primary" aria-hidden="true" />
            <h2
              id="success-title"
              className="font-display text-4xl uppercase leading-none text-foreground"
            >
              ÜZENET
              <br />
              <span className="text-primary">ELKÜLDVE</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Köszönjük megkeresésed! Hamarosan felvesszük veled a kapcsolatot a megadott e-mail
              címen: <span className="text-foreground font-condensed">{form.email}</span>
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm({ name: "", email: "", subject: "", message: "", consent: false })
              }}
              className="self-start inline-flex items-center gap-3 border border-foreground text-foreground px-5 py-2.5 text-xs tracking-widest uppercase font-condensed hover:bg-foreground hover:text-background transition-colors"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
