'use client'

import { useActionState } from 'react'
import { submitRSVP, type RSVPState } from '@/app/actions/rsvp'

const initialState: RSVPState = { success: false, message: '' }

export function RSVPForm() {
  const [state, formAction, pending] = useActionState(submitRSVP, initialState)

  if (state.success) {
    return (
      <div className="border-2 border-ink p-8 text-center newspaper-texture bg-paper-dark">
        <div className="border border-ink p-6">
          <p className="font-blackletter text-4xl text-ink mb-3">¡Recibido!</p>
          <p className="font-serif text-base text-ink leading-relaxed">{state.message}</p>
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-ink-light" />
            <span className="font-serif text-ink-muted text-xs italic">con amor</span>
            <div className="flex-1 h-px bg-ink-light" />
          </div>
          <p className="font-serif text-xs text-ink-muted italic">
            Si necesitas modificar tu respuesta, comunicate con los novios directamente.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} className="border-2 border-ink newspaper-texture bg-paper-dark">
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
            placeholder="Tu nombre y apellido"
            className="border border-ink bg-paper px-3 py-2 font-serif text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-ink w-full"
          />
          {state.errors?.nombre && (
            <p className="text-xs text-destructive font-serif">{state.errors.nombre}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-serif text-xs uppercase tracking-widest text-ink-light font-bold">
            Correo electronico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            className="border border-ink bg-paper px-3 py-2 font-serif text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-ink w-full"
          />
        </div>

        {/* Telefono */}
        <div className="flex flex-col gap-1">
          <label htmlFor="telefono" className="font-serif text-xs uppercase tracking-widest text-ink-light font-bold">
            Telefono (opcional)
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="+54 11 1234-5678"
            className="border border-ink bg-paper px-3 py-2 font-serif text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-ink w-full"
          />
        </div>

        {/* Confirmacion */}
        <div className="flex flex-col gap-2">
          <p className="font-serif text-xs uppercase tracking-widest text-ink-light font-bold">
            ¿Confirmas tu asistencia? *
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="confirmado"
                value="si"
                defaultChecked
                className="accent-ink w-4 h-4"
              />
              <span className="font-serif text-sm text-ink">Si, alli estare</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="confirmado"
                value="no"
                className="accent-ink w-4 h-4"
              />
              <span className="font-serif text-sm text-ink">No podre ir</span>
            </label>
          </div>
        </div>

        {/* Numero de invitados */}
        <div className="flex flex-col gap-1">
          <label htmlFor="num_invitados" className="font-serif text-xs uppercase tracking-widest text-ink-light font-bold">
            Numero de personas (incluido vos)
          </label>
          <select
            id="num_invitados"
            name="num_invitados"
            defaultValue="1"
            className="border border-ink bg-paper px-3 py-2 font-serif text-sm text-ink focus:outline-none focus:ring-1 focus:ring-ink w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'persona' : 'personas'}
              </option>
            ))}
          </select>
          {state.errors?.num_invitados && (
            <p className="text-xs text-destructive font-serif">{state.errors.num_invitados}</p>
          )}
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-1">
          <label htmlFor="mensaje" className="font-serif text-xs uppercase tracking-widest text-ink-light font-bold">
            Mensaje para los novios (opcional)
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={3}
            placeholder="Un mensaje, deseo o algun requerimiento especial..."
            className="border border-ink bg-paper px-3 py-2 font-serif text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-ink w-full resize-none"
          />
        </div>

        {/* Error general */}
        {!state.success && state.message && !state.errors && (
          <p className="text-sm text-destructive font-serif text-center border border-destructive p-2">
            {state.message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-ink text-paper font-serif text-sm uppercase tracking-widest py-3 border-2 border-ink hover:bg-ink-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {pending ? 'Enviando...' : 'Confirmar Asistencia'}
        </button>

        <p className="text-center text-xs text-ink-muted italic font-serif">
          Tu respuesta es muy importante para nosotros — gracias por tomarte el tiempo.
        </p>
      </div>
    </form>
  )
}
