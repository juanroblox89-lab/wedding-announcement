export function Masthead() {
  return (
    <header className="newspaper-texture border-b-4 border-ink pb-2">
      {/* Top rule */}
      <div className="h-1 bg-ink mb-1" />
      <div className="h-px bg-ink mb-3" />

      {/* Masthead title */}
      <div className="text-center py-2">
        <h1 className="font-blackletter text-6xl md:text-8xl tracking-tight text-ink leading-none">
          Las Noticias
        </h1>
      </div>

      {/* Subtitle bar */}
      <div className="h-px bg-ink mt-3 mb-2" />
      <div className="grid grid-cols-3 text-xs text-ink-light px-1">
        <span className="text-left font-serif italic">Edicion Especial · 2026</span>
        <span className="text-center font-serif tracking-widest uppercase text-[10px]">
          Invitacion de Boda
        </span>
        <span className="text-right font-serif italic">Una sola edicion</span>
      </div>
      <div className="h-px bg-ink mt-2" />
      <div className="h-1 bg-ink mt-1" />
    </header>
  )
}
