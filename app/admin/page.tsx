import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createClient()

  const { data: invitados, error } = await supabase
    .from('wedding_rsvp')
    .select('*')
    .order('created_at', { ascending: false })

  const totalPersonas = invitados?.reduce((acc, inv) => acc + (inv.num_invitados || 1), 0) || 0

  return (
    <main className="min-h-screen bg-paper p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-blackletter text-4xl text-ink">Lista de Invitados</h1>
          <Link 
            href="/" 
            className="text-sm text-ink-muted hover:text-ink underline"
          >
            Volver a la invitación
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="border-2 border-ink p-4 text-center bg-paper-dark">
            <p className="text-5xl font-blackletter text-ink">{invitados?.length || 0}</p>
            <p className="text-sm text-ink-muted mt-1">Confirmaciones</p>
          </div>
          <div className="border-2 border-ink p-4 text-center bg-paper-dark">
            <p className="text-5xl font-blackletter text-ink">{totalPersonas}</p>
            <p className="text-sm text-ink-muted mt-1">Total de personas</p>
          </div>
        </div>

        {error && (
          <p className="text-red-600 mb-4">Error al cargar invitados: {error.message}</p>
        )}

        {invitados && invitados.length > 0 ? (
          <div className="border-2 border-ink">
            <table className="w-full">
              <thead className="bg-ink text-paper">
                <tr>
                  <th className="text-left p-3 font-serif text-sm">Nombre</th>
                  <th className="text-center p-3 font-serif text-sm">Personas</th>
                  <th className="text-right p-3 font-serif text-sm">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-light">
                {invitados.map((inv) => (
                  <tr key={inv.id} className="hover:bg-paper-dark">
                    <td className="p-3 font-serif">{inv.nombre}</td>
                    <td className="p-3 font-serif text-center">{inv.num_invitados || 1}</td>
                    <td className="p-3 font-serif text-right text-ink-muted text-sm">
                      {new Date(inv.created_at).toLocaleDateString('es-CO', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-ink-muted italic font-serif py-8">
            Aún no hay confirmaciones de asistencia.
          </p>
        )}
      </div>
    </main>
  )
}
