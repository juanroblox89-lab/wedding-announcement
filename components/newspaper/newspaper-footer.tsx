export function NewspaperFooter() {
  return (
    <footer className="border-t-4 border-ink pt-4 pb-8 newspaper-texture">
      <div className="h-1 bg-ink mb-4" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 px-1">
        <p className="font-blackletter text-2xl text-ink">Las Noticias</p>
        <p className="font-serif text-xs text-ink-muted italic text-center">
          Edicion especial unica · No hay suscripcion disponible — el amor no se vende
        </p>
        <p className="font-serif text-xs text-ink-light">
          &copy; Los Novios, 2026
        </p>
      </div>
      <div className="h-px bg-ink mt-4" />
    </footer>
  )
}
