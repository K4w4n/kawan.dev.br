import { codeToHtml } from 'shiki'
import CopyButton from './CopyButton'

type CodeBlockProps = {
  code: string
  filename?: string
  language?: string
}

export default async function CodeBlock({
  code,
  filename,
  language = 'ts',
}: CodeBlockProps) {
  const highlighted = await codeToHtml(code, {
    lang: language,
    theme: 'dark-plus',
  })

  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-favo bg-[#1E1E1E]">
      <figcaption className="flex items-center justify-between gap-4 border-b border-favo bg-abelha/60 px-4 py-2">
        <span className="truncate font-mono text-xs text-gray-400">
          {filename ?? `snippet.${language}`}
        </span>

        <CopyButton code={code} />
      </figcaption>

      <div
        className="overflow-x-auto text-[13px] leading-relaxed [&_pre]:p-4"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </figure>
  )
}
