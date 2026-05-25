import Image from 'next/image'

export function Headline() {
  return (
    <section className="border-b-2 border-ink py-6">
      {/* Kicker */}
      <p className="text-center text-xs font-serif tracking-[0.3em] uppercase text-ink-light mb-3">
        — Anuncio de maximo interes —
      </p>

      {/* Main headline */}
      <h2 className="text-center font-blackletter text-7xl md:text-9xl leading-none text-ink mb-1 text-balance">
        ¡Nos Casamos!
      </h2>

      {/* Deck */}
      <p className="text-center font-serif text-base md:text-lg text-ink-light italic mt-3 text-pretty px-4">
        Tras anos de amor, aventuras compartidas y mil razones para celebrar,<br className="hidden md:block" />
        los novios anuncian la gran noticia que el mundo esperaba
      </p>

      {/* Divider with ornament */}
      <div className="flex items-center gap-3 my-5 px-4">
        <div className="flex-1 h-px bg-ink" />
        <span className="font-blackletter text-2xl text-ink-light">❧</span>
        <div className="flex-1 h-px bg-ink" />
      </div>

      {/* Hero image */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-ink-light">
        <Image
          src="/couple-hero.jpg"
          alt="Los novios en su sesion de fotos"
          fill
          className="object-cover grayscale contrast-110"
          priority
        />
        <div className="absolute inset-0 bg-ink/5" />
      </div>
      <p className="text-center text-xs text-ink-muted italic mt-1 font-serif">
        Foto: Los novios en el momento de su compromiso. — Archivo personal
      </p>

      {/* Two-column story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-1">
        <p className="drop-cap text-justify-newspaper font-serif text-sm leading-relaxed text-ink">
          Despues de compartir innumerables momentos que quedaron grabados en sus corazones, la pareja
          ha decidido dar el paso mas importante de sus vidas. La boda promete ser una celebracion
          memorable rodeada de quienes mas los quieren, en un ambiente de alegria, emocion y mucho amor.
          Los invitados tendran la oportunidad de ser parte de este hito historico en la vida de ambos.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-justify-newspaper font-serif text-sm leading-relaxed text-ink">
            La ceremonia se llevara a cabo en una fecha muy especial para la pareja, quienes han elegido
            cada detalle con dedicacion y carino. No habra fiesta mas grande ni razon mas bella para reunirse.
            Por eso, los novios extienden su mas calida invitacion a todos sus seres queridos para que los
            acompanen en este dia tan esperado.
          </p>
          <div className="relative w-full aspect-video overflow-hidden border border-ink-light">
            <Image
              src="/couple-rings.jpg"
              alt="Los anillos de compromiso"
              fill
              className="object-cover grayscale contrast-110"
            />
          </div>
          <p className="text-xs text-ink-muted italic font-serif text-center">
            Los anillos que sellaron el compromiso. — Archivo personal
          </p>
        </div>
      </div>
    </section>
  )
}
