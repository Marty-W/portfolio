import Header from "@/components/header"
import "./globals.css"
import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import Footer from "@/components/footer"
import { AnimatedHeroProvider } from "@/hooks/useAnimatedHero"
import { Analytics } from "@vercel/analytics/react"

const font = Instrument_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Martin Weber",
  description: "Martin Weber's portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="bg-neutral-50 flex flex-col justify-between min-h-screen">
        <AnimatedHeroProvider>
          <div className="shadow-sm">
            <Header />
          </div>
          <main className={`py-16 container flex-1 ${font.className}`}>
            {children}
          </main>
          <Footer />
        </AnimatedHeroProvider>
        <Analytics />
      </body>
    </html>
  )
}
