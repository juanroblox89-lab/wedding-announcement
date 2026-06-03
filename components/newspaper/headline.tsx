'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function Headline() {
  const [clickCount, setClickCount] = useState(0)
  const router = useRouter()

  const handleSecretClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    if (newCount >= 10) {
      router.push('/admin')
    }
  }

  return (
    <section className="border-b-2 border-ink py-6">
      {/* Kicker */}
      <p className="text-center text-xs font-serif tracking-[0.3em] uppercase text-ink-light mb-3">
        — Anuncio de máximo interés —
      </p>

      {/* Main headline */}
      <h2 
        className="text-center font-blackletter text-7xl md:text-9xl leading-none text-ink mb-1 text-balance cursor-default select-none"
        onClick={handleSecretClick}
      >
        ¡Nos Casamos!
      </h2>

      {/* Names */}
      <p className="text-center font-blackletter text-4xl md:text-5xl text-ink mt-4">
        Jesús & Katherine
      </p>

      {/* Deck */}
      <p className="text-center font-serif text-base md:text-lg text-ink-light italic mt-3 text-pretty px-4">
        Tras años de amor, aventuras compartidas y mil razones para celebrar,<br className="hidden md:block" />
        los novios anuncian la gran noticia que el mundo esperaba
      </p>

      {/* Divider with ornament */}
      <div className="flex items-center gap-3 my-5 px-4">
        <div className="flex-1 h-px bg-ink" />
        <span className="font-blackletter text-2xl text-ink-light">✦</span>
        <div className="flex-1 h-px bg-ink" />
      </div>

      {/* Hero image */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-ink-light">
        <Image
          src="/couple-hero.jpg"
          alt="Jesús y Katherine en el momento de su compromiso"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink/5" />
      </div>
      <p className="text-center text-xs text-ink-muted italic mt-1 font-serif">
        Foto: Jesús y Katherine en el momento de su compromiso. — Archivo personal
      </p>

      {/* Two-column story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-1">
        <p className="drop-cap text-justify-newspaper font-serif text-sm leading-relaxed text-ink">
          Después de compartir innumerables momentos que quedaron grabados en sus corazones, la pareja
          ha decidido dar el paso más importante de sus vidas. La boda promete ser una celebración
          memorable rodeada de quienes más los quieren, en un ambiente de alegría, emoción y mucho amor.
          Los invitados tendrán la oportunidad de ser parte de este hito histórico en la vida de ambos.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-justify-newspaper font-serif text-sm leading-relaxed text-ink">
            La ceremonia se llevará a cabo en una fecha muy especial para la pareja, quienes han elegido
            cada detalle con dedicación y cariño. No habrá fiesta más grande ni razón más bella para reunirse.
            Por eso, los novios extienden su más cálida invitación a todos sus seres queridos para que los
            acompañen en este día tan esperado.
          </p>
          <div className="relative w-full aspect-video overflow-hidden border border-ink-light">
            <Image
              src="/couple-rings.jpg"
              alt="El anillo de compromiso de Katherine"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-ink-muted italic font-serif text-center">
            El anillo que selló el compromiso. — Archivo personal
          </p>
        </div>
      </div>
    </section>
  )
}
