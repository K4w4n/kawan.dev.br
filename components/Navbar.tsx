'use client'

import { useState, useEffect, useCallback } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) closeMenu()
    }
    const handleClickOutside = (e: MouseEvent) => {
      const navbar = document.getElementById('navbar')
      if (menuOpen && navbar && !navbar.contains(e.target as Node)) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuOpen, closeMenu])

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-favo ${
        scrolled ? 'bg-colmeia' : 'bg-colmeia/80'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo KA */}
          <a
            href="/#hero"
            className="font-titulo font-bold text-2xl text-mel tracking-widest select-none"
          >
            K4W4N
          </a>

          {/* Nav desktop */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
            <a href="/#sobre"       className="text-gray-400 hover:text-mel transition-colors duration-200 text-sm font-medio">Sobre</a>
            <a href="/#habilidades" className="text-gray-400 hover:text-mel transition-colors duration-200 text-sm">Habilidades</a>
            <a href="/#projetos"    className="text-gray-400 hover:text-mel transition-colors duration-200 text-sm">Projetos</a>
            <a href="/#experiencia" className="text-gray-400 hover:text-mel transition-colors duration-200 text-sm">Experiência</a>
            <a href="/#contato"     className="text-gray-400 hover:text-mel transition-colors duration-200 text-sm">Contato</a>
          </nav>

          {/* Botão hamburger mobile */}
          <button
            id="btn-menu"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-mel"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

        </div>
      </div>

      {/* Menu mobile */}
      <nav
        id="menu-mobile"
        aria-label="Navegação mobile"
        className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-abelha border-t border-favo`}
      >
        <ul className="flex flex-col px-4 py-4 gap-4">
          <li><a href="/#sobre"       onClick={closeMenu} className="block text-gray-300 hover:text-mel transition-colors py-1">Sobre</a></li>
          <li><a href="/#habilidades" onClick={closeMenu} className="block text-gray-300 hover:text-mel transition-colors py-1">Habilidades</a></li>
          <li><a href="/#projetos"    onClick={closeMenu} className="block text-gray-300 hover:text-mel transition-colors py-1">Projetos</a></li>
          <li><a href="/#experiencia" onClick={closeMenu} className="block text-gray-300 hover:text-mel transition-colors py-1">Experiência</a></li>
          <li><a href="/#contato"     onClick={closeMenu} className="block text-gray-300 hover:text-mel transition-colors py-1">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
