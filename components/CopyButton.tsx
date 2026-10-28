'use client'

import { useState } from 'react'

type CopyButtonProps = {
  code: string
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = code
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copyCode}
      className="shrink-0 rounded-md border border-favo px-2.5 py-1 font-mono text-xs text-gray-400 transition-colors duration-200 hover:border-mel hover:text-mel focus:outline-none focus-visible:ring-2 focus-visible:ring-mel"
    >
      {copied ? 'Copiado!' : 'Copiar'}
    </button>
  )
}
