import TextToSVG from 'text-to-svg'

export const ArimoBold = TextToSVG.loadSync(
  require.resolve('typeface-arimo/files/arimo-latin-700.woff')
)

// This will make Prettier format the CSS.
export const css = String.raw
