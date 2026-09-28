import { Fragment, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FmtProps {
  text: string
  /** Extra classes for <strong> segments (e.g. ember accent inside the Słabość box). */
  strongClassName?: string
}

/**
 * Tiny safe inline formatter: converts `**...**` segments into <strong> elements.
 * Splits on the delimiter and maps — no dangerouslySetInnerHTML, no raw HTML.
 */
export function Fmt({ text, strongClassName }: FmtProps): ReactNode {
  const parts = text.split('**')
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={cn('font-bold text-[#1f1409]', strongClassName)}>
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}
