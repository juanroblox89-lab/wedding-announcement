import { Headline } from '@/components/newspaper/headline'
import { EventDetails } from '@/components/newspaper/event-details'
import { RSVPForm } from '@/components/newspaper/rsvp-form'
import { NewspaperFooter } from '@/components/newspaper/newspaper-footer'

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-paper newspaper-texture">
      {/* Newspaper container */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 bg-paper shadow-2xl shadow-ink/20 min-h-screen">
        <div className="py-2">
          <Headline />
        </div>

        <div className="py-2">
          <EventDetails />
        </div>

        {/* RSVP Section */}
        <section className="py-6 border-b-2 border-ink">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-ink" />
            <h3 className="font-blackletter text-3xl md:text-4xl text-ink whitespace-nowrap px-2">
              Gaceta de Confirmación
            </h3>
            <div className="flex-1 h-px bg-ink" />
          </div>

          <p className="font-serif text-sm text-ink-light italic text-center mb-6 text-pretty">
            Rogamos a todos los invitados completar el siguiente formulario
            <br className="hidden md:block" />
            para poder organizar la celebración.
          </p>

          <RSVPForm />
        </section>

        {/* Classified ad — decorative */}
        <section className="py-6 border-b-2 border-ink">
          <div className="border-2 border-ink p-4 text-center bg-paper-dark">
            <p className="font-blackletter text-xl text-ink mb-1">Aviso Clasificado</p>
            <div className="h-px bg-ink-light my-2" />
            <p className="font-serif text-sm text-ink italic leading-relaxed">
              &ldquo;Se buscan: amigos y familia dispuestos a compartir
              <br />
              abrazos, sonrisas y crear recuerdos que duren para siempre.&rdquo;
            </p>
            <div className="h-px bg-ink-light my-2" />
            <p className="font-serif text-xs text-ink-muted">
              Presentarse el Viernes 7 de Agosto en Villa Cielo la unión Antioquia
            </p>
          </div>
        </section>

        <NewspaperFooter />
      </div>
    </main>
  )
}
