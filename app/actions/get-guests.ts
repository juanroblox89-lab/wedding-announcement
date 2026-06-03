'use server'

import { createClient } from '@/lib/supabase/server'

export type Guest = {
  id: string
  nombre: string
  num_invitados: number
  created_at: string
}

export async function fetchGuests(): Promise<{ success: boolean; data?: Guest[]; message?: string }> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('wedding_rsvp')
      .select('id, nombre, num_invitados, created_at')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching guests:', error)
      return { success: false, message: 'No se pudo obtener la lista de invitados.' }
    }

    return { success: true, data: data as Guest[] }
  } catch (error) {
    console.error('Unexpected error fetching guests:', error)
    return { success: false, message: 'Ocurrió un error inesperado.' }
  }
}
