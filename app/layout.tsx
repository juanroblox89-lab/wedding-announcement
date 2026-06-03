import type { Metadata } from 'next'
import { Cinzel_Decorative, Lora } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel_Decorative({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif-display',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Jesús y Katherine se casan',
  description: 'Invitación de boda de Jesús y Katherine — 7 de Agosto 2026 en Villa Cielo, La Unión, Antioquia. Confirma tu asistencia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${lora.variable} bg-paper`}>
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  )
}
