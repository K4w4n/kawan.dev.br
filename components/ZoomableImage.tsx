'use client'

import { useEffect, useState, type ImgHTMLAttributes } from 'react'

type ZoomableImageProps = ImgHTMLAttributes<HTMLImageElement>

export default function ZoomableImage({ alt = '', className = '', ...props }: ZoomableImageProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={alt ? `Ampliar imagem: ${alt}` : 'Ampliar imagem'}
        className="group relative block w-full cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-mel"
      >
        <img {...props} alt={alt} className={className} />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl bg-colmeia/0 transition-colors duration-200 group-hover:bg-colmeia/30"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 bottom-3 flex items-center gap-1.5 rounded-lg border border-mel/30 bg-colmeia/90 px-3 py-1.5 text-xs font-bold text-mel opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3.5"
          >
            <path d="M15 3h6v6" />
            <path d="M9 21H3v-6" />
            <path d="M21 3l-7 7" />
            <path d="M3 21l7-7" />
          </svg>
          Ampliar
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt ? `Imagem ampliada: ${alt}` : 'Imagem ampliada'}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-colmeia/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar imagem ampliada"
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border border-favo bg-abelha text-gray-200 transition-colors duration-200 hover:border-mel hover:text-mel focus:outline-none focus-visible:ring-2 focus-visible:ring-mel"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>

          <img
            src={props.src}
            alt={alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">
            Clique fora ou pressione Esc para fechar
          </p>
        </div>
      ) : null}
    </>
  )
}
