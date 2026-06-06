'use client'

import { useState } from 'react'

export function RSVPForm() {
  const [nombre, setNombre] = useState('')
  const [numInvitados, setNumInvitados] = useState('1')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nombre || nombre.trim().length < 2) {
      setError('Por favor ingresa tu nombre completo.')
      return
    }
    setError('')

    const messageText = `¡Hola Jesús y Katherine! Confirmo mi asistencia a la boda. Mi nombre completo es: ${nombre.trim()} y asistiré con ${numInvitados} ${numInvitados === '1' ? 'persona' : 'personas'}.`
    const encodedMessage = encodeURIComponent(messageText)
    
    // Redirect to WhatsApp
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/573011965757?text=${encodedMessage}`, '_blank')
    }
    
    setSubmitted(true)
  }

  if (submitted) {
    const messageText = `¡Hola Jesús y Katherine! Confirmo mi asistencia a la boda. Mi nombre completo es: ${nombre.trim()} y asistiré con ${numInvitados} ${numInvitados === '1' ? 'persona' : 'personas'}.`
    const encodedMessage = encodeURIComponent(messageText)

    return (
      <div className="border-2 border-ink p-8 text-center newspaper-texture bg-paper-dark">
        <div className="border border-ink p-6">
          <p className="font-blackletter text-4xl text-ink mb-3">¡Recibido!</p>
          <p className="font-serif text-base text-ink leading-relaxed">
            Hemos preparado tu confirmación para {numInvitados} {numInvitados === '1' ? 'persona' : 'personas'}.
          </p>
          
          <div className="mt-4">
            <a 
              href={`https://wa.me/573011965757?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white font-serif text-xs uppercase tracking-widest px-4 py-2 border-2 border-emerald-700 hover:bg-emerald-500 transition-colors mt-2"
            >
              Enviar por WhatsApp nuevamente
            </a>
          </div>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-ink-light" />
            <span className="font-serif text-ink-muted text-xs italic">con amor</span>
            <div className="flex-1 h-px bg-ink-light" />
          </div>
          <p className="font-serif text-xs text-ink-muted italic">
            Si necesitas modificar tu respuesta, comunícate con los novios directamente.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border-2 border-ink newspaper-texture bg-paper-dark">
      <div className="border-b-2 border-ink p-4 text-center bg-ink">
        <p className="font-blackletter text-3xl text-paper tracking-wide">
          Confirma Tu Asistencia
        </p>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Nombre */}
        <div className="flex flex-col gap-1">
          <label htmlFor="nombre" className="font-serif text-xs uppercase tracking-widest text-ink-light font-bold">
            Nombre completo *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre y apellido"
            className="border border-ink bg-paper px-3 py-2 font-serif text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-ink w-full"
          />
          {error && (
            <p className="text-xs text-destructive font-serif">{error}</p>
          )}
        </div>

        {/* Numero de invitados */}
        <div className="flex flex-col gap-1">
          <label htmlFor="num_invitados" className="font-serif text-xs uppercase tracking-widest text-ink-light font-bold">
            Número de personas (incluido tú)
          </label>
          <select
            id="num_invitados"
            name="num_invitados"
            value={numInvitados}
            onChange={(e) => setNumInvitados(e.target.value)}
            className="border border-ink bg-paper px-3 py-2 font-serif text-sm text-ink focus:outline-none focus:ring-1 focus:ring-ink w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'persona' : 'personas'}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-ink text-paper font-serif text-sm uppercase tracking-widest py-3 border-2 border-ink hover:bg-ink-light transition-colors mt-2 cursor-pointer"
        >
          Confirmar Asistencia
        </button>

        <p className="text-center text-xs text-ink-muted italic font-serif">
          Tu respuesta es muy importante para nosotros — gracias por tomarte el tiempo.
        </p>
      </div>
    </form>
  )
}
