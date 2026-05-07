import type { Metadata } from "next"
import { Inter, Bebas_Neue, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CookieBanner from "@/components/CookieBanner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Hungary Skateboarding – Magyar Gördeszkás Kultúra",
  description:
    "Magyarország egyedülálló gördeszkás portálja. Technikák, történelem, trükkök, felszerelés és a hazai gördeszkás kultúra minden részletéről.",
  keywords: ["gördeszkázás", "skateboarding", "Magyarország", "gördeszkás kultúra", "trükkök", "edzés"],
  authors: [{ name: "Hungary Skateboarding" }],
  metadataBase: new URL("https://hungaryskateboarding.com"),
  openGraph: {
    title: "Hungary Skateboarding",
    description: "Magyar Gördeszkás Kultúra",
    url: "https://hungaryskateboarding.com",
    siteName: "Hungary Skateboarding",
    locale: "hu_HU",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#F8F6F1",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${bebasNeue.variable} ${barlowCondensed.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
