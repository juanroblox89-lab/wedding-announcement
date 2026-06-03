export function EventDetails() {
  const details = [
    { label: 'Fecha', value: 'Viernes, 7 de Agosto de 2026' },
    { label: 'Hora', value: '5:00 PM' },
    { label: 'Lugar', value: 'Villa Cielo' },
    { label: 'Regalo', value: 'Lluvia de sobres o regalo' },
  ]

  return (
    <section className="border-b-2 border-ink py-6">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-ink" />
        <h3 className="font-blackletter text-3xl md:text-4xl text-ink whitespace-nowrap px-2">
          Los Detalles del Gran Dia
        </h3>
        <div className="flex-1 h-px bg-ink" />
      </div>

      {/* Details grid — newspaper ad style box */}
      <div className="border-2 border-ink p-5 bg-paper-dark newspaper-texture">
        <div className="border border-ink-light p-4">
          <p className="text-center font-blackletter text-2xl text-ink mb-4">
            — Informacion Oficial —
          </p>
          <div className="divide-y divide-ink-light">
            {details.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row py-3 gap-1 sm:gap-4">
                <span className="font-serif font-bold text-xs uppercase tracking-widest text-ink-light w-28 shrink-0">
                  {item.label}
                </span>
                <span className="font-serif text-base text-ink">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-ink-light">
            <p className="text-center text-xs font-serif italic text-ink-muted text-pretty">
              Se ruega puntualidad. La ceremonia comenzara a la hora indicada.
            </p>
          </div>
        </div>
      </div>

      {/* Countdown teaser */}
      <p className="text-center font-serif text-xs text-ink-muted italic mt-4">
        Confirma tu asistencia con anticipacion — ver formulario mas abajo
      </p>
    </section>
  )
}
