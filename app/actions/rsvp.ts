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
  const numInvitados = parseInt(formData.get('num_invitados') as string, 10) || 1

  // Validation
  const errors: Record<string, string> = {}
  if (!nombre || nombre.trim().length < 2) {
    errors.nombre = 'Por favor ingresa tu nombre completo.'
  }
  if (numInvitados < 1 || numInvitados > 10) {
    errors.num_invitados = 'El número de invitados debe ser entre 1 y 10.'
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Por favor corrige los errores.', errors }
  }

  try {
    const supabase = await createClient()

    const { error } = await supabase.from('wedding_rsvp').insert({
      nombre: nombre.trim(),
      num_invitados: numInvitados,
      confirmado: true,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return {
        success: false,
        message: 'Hubo un error al enviar tu confirmación. Intenta nuevamente.',
      }
    }

    return {
      success: true,
      message: `¡Gracias, ${nombre.trim()}! Tu asistencia fue confirmada para ${numInvitados} ${numInvitados === 1 ? 'persona' : 'personas'}. ¡Te esperamos el 7 de Agosto en Villa Cielo la unión Antioquia!`,
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    return {
      success: false,
      message: 'Error inesperado. Por favor intenta nuevamente.',
    }
  }
}
