'use server'

import { createClient } from '@/lib/supabase/server'

export type RSVPState = {
  success: boolean
  message: string
  errors?: Record<string, string>
}

export async function submitRSVP(
  _prevState: RSVPState,
  formData: FormData
): Promise<RSVPState> {
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const telefono = formData.get('telefono') as string
  const numInvitados = parseInt(formData.get('num_invitados') as string, 10) || 1
  const confirmado = formData.get('confirmado') === 'si'
  const mensaje = formData.get('mensaje') as string

  // Validation
  const errors: Record<string, string> = {}
  if (!nombre || nombre.trim().length < 2) {
    errors.nombre = 'Por favor ingresa tu nombre completo.'
  }
  if (numInvitados < 1 || numInvitados > 10) {
    errors.num_invitados = 'El numero de invitados debe ser entre 1 y 10.'
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Por favor corrige los errores.', errors }
  }

  try {
    const supabase = await createClient()

    const { error } = await supabase.from('wedding_rsvp').insert({
      nombre: nombre.trim(),
      email: email?.trim() || null,
      telefono: telefono?.trim() || null,
      num_invitados: numInvitados,
      confirmado,
      mensaje: mensaje?.trim() || null,
    })

    if (error) {
      console.error('[v0] Supabase insert error:', error)
      return {
        success: false,
        message: 'Hubo un error al enviar tu confirmacion. Intenta nuevamente.',
      }
    }

    return {
      success: true,
      message: confirmado
        ? `¡Gracias, ${nombre.trim()}! Tu asistencia fue confirmada. ¡Te esperamos!`
        : `Gracias por avisarnos, ${nombre.trim()}. Lamentamos que no puedas asistir.`,
    }
  } catch (err) {
    console.error('[v0] Unexpected error:', err)
    return {
      success: false,
      message: 'Error inesperado. Por favor intenta nuevamente.',
    }
  }
}
