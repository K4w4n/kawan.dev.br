import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import logo from "../img/logo.svg";

const spaceGrotesk = localFont({
  src: [
    { path: '../fonts/space-grotesk-latin-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/space-grotesk-latin-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/space-grotesk-latin-600.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/space-grotesk-latin-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = localFont({
  src: [
    { path: '../fonts/inter-latin-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/inter-latin-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/inter-latin-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kawan Araújo — Desenvolvedor Fullstack',
  description:
    'Portfólio de Kawan Araújo, Desenvolvedor Fullstack especializado em Next.js, NestJS e TypeScript.',
  icons: {
    icon: logo.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-colmeia text-gray-100 font-corpo antialiased`}
      >
        {children}

        <Script
          src="https://kit.fontawesome.com/e728814d1c.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
