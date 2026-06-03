'use client'

import Image from 'next/image'
import { useState } from 'react'
import { fetchGuests, type Guest } from '@/app/actions/get-guests'

export function Headline() {
  const [clickCount, setClickCount] = useState(0)
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(false)
  const [showList, setShowList] = useState(false)
  const [error, setError] = useState('')

  const handleHeadlineClick = async () => {
    const nextCount = clickCount + 1
    setClickCount(nextCount)
    if (nextCount >= 10 && !showList) {
      setLoading(true)
      setError('')
      const res = await fetchGuests()
      setLoading(false)
      if (res.success && res.data) {
        setGuests(res.data)
        setShowList(true)
      } else {
        setError(res.message || 'Error al cargar invitados.')
      }
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
        onClick={handleHeadlineClick}
        className="text-center font-blackletter text-7xl md:text-9xl leading-none text-ink mb-1 text-balance cursor-pointer select-none hover:opacity-90 active:scale-[0.99] transition-all"
        title="Haz clic 10 veces para ver la lista de invitados"
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

      {/* Easter Egg Guests List Section */}
      {loading && (
        <div className="my-6 border-2 border-dashed border-ink p-4 text-center bg-paper-dark">
          <p className="font-serif text-sm animate-pulse">Abriendo el archivo secreto de invitados...</p>
        </div>
      )}

      {error && (
        <div className="my-6 border-2 border-ink p-4 text-center bg-destructive/10 text-destructive">
          <p className="font-serif text-sm">{error}</p>
        </div>
      )}

      {showList && (
        <div className="my-6 border-2 border-ink bg-paper-dark p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4 border-b border-ink pb-2">
            <h3 className="font-blackletter text-3xl text-ink">Lista Secreta de Invitados</h3>
            <button 
              onClick={() => setShowList(false)}
              className="text-xs uppercase tracking-wider font-serif px-2 py-1 border border-ink bg-paper hover:bg-ink hover:text-paper transition-colors"
            >
              Cerrar
            </button>
          </div>
          
          {guests.length === 0 ? (
            <p className="font-serif text-sm italic text-ink-muted text-center py-4">Aún no hay invitados confirmados.</p>
          ) : (
            <div className="max-h-60 overflow-y-auto pr-2">
              <table className="w-full font-serif text-sm text-left">
                <thead>
                  <tr className="border-b border-ink-light text-xs uppercase tracking-widest text-ink-light">
                    <th className="py-2">Nombre</th>
                    <th className="py-2 text-right">Personas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-light/30">
                  {guests.map((g) => (
                    <tr key={g.id} className="hover:bg-paper/50">
                      <td className="py-2 font-medium text-ink">{g.nombre}</td>
                      <td className="py-2 text-right text-ink-light font-bold">{g.num_invitados}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 pt-3 border-t border-ink-light flex justify-between items-center text-xs text-ink-muted">
                <span>Total de registros: {guests.length}</span>
                <span className="font-bold">Total Invitados: {guests.reduce((acc, curr) => acc + curr.num_invitados, 0)}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Divider with ornament */}
      <div className="flex items-center gap-3 my-5 px-4">
        <div className="flex-1 h-px bg-ink" />
        <span className="font-blackletter text-2xl text-ink-light">❧</span>
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
            cada detalle con dedicación y cariño. Por eso, los novios extienden su más cálida invitación
            a todos sus seres queridos para que los acompañen en este día tan esperado.
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
