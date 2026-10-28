import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Serviço Certo — Kawan Araújo',
}

export default function ServicoCertoArticle() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16" />
      </main>

      <footer className="bg-colmeia border-t border-favo py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Feito com ☕ por Kawan Araújo · 2026
          </p>
        </div>
      </footer>
    </>
  )
}
