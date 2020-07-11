import TextToSVG from 'text-to-svg'

// https://css-tricks.com/snippets/css/system-font-stack/
export const SYSTEM_FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export const ArimoBold = TextToSVG.loadSync(
  require.resolve('typeface-arimo/files/arimo-latin-700.woff')
)

export const Arimo = TextToSVG.loadSync(
  require.resolve('typeface-arimo/files/arimo-latin-400.woff')
)

// This will make Prettier format the CSS.
export const css = String.raw
