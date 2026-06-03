import type { Metadata } from 'next'
import { UnifrakturMaguntia, Lora } from 'next/font/google'
import './globals.css'

const unifraktur = UnifrakturMaguntia({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif-display',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Las Noticias - Jesus y Katherine se casan',
  description: 'Invitacion de boda de Jesus y Katherine — 7 de Agosto 2026 en Villa Cielo. Confirma tu asistencia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${unifraktur.variable} ${lora.variable} bg-paper`}>
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  )
}
