import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, target perfect audiences, and optimize performance.",
  keywords: ["AI marketing", "marketing automation", "content generation", "audience targeting", "marketing analytics"],
  authors: [{ name: "ADmyBRAND AI Suite" }],
  creator: "ADmyBRAND AI Suite",
  publisher: "ADmyBRAND AI Suite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://admybrand.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, target perfect audiences, and optimize performance.",
    url: "https://admybrand.com",
    siteName: "ADmyBRAND AI Suite",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADmyBRAND AI Suite Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, target perfect audiences, and optimize performance.",
    images: ["/og-image.jpg"],
    creator: "@admybrand",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <link rel="icon" type="image/png" href="/admybrand-logo.png" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
