import type { CSSProperties } from 'react'

/**
 * Parse a CSS declaration string (as authored 1:1 in the Claude Design `.dc.html`
 * source) into a React style object. Lets ported components keep their inline
 * `style="..."` markup essentially verbatim, so future re-syncs from the design
 * project stay diffable.
 *
 * Pseudo-classes, media queries and keyframes cannot live inline — those are kept
 * in `src/styles/design.css`, keyed on the same `data-*` hooks the design uses.
 */
export function css(str: string): CSSProperties {
  const out: Record<string, string> = {}
  for (const decl of str.split(';')) {
    const i = decl.indexOf(':')
    if (i === -1) continue
    const rawProp = decl.slice(0, i).trim()
    const val = decl.slice(i + 1).trim()
    if (!rawProp || !val) continue
    // Custom properties (--x) are passed through untouched.
    const prop = rawProp.startsWith('--')
      ? rawProp
      : rawProp.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
    out[prop] = val
  }
  return out as CSSProperties
}
