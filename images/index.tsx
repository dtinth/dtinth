import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { Hello } from './Hello'
import { Marquee } from './Marquee'
import { SYSTEM_FONT } from '../lib'

const images: { [name: string]: React.FC } = { Hello, Marquee }

export function renderImage(imageName: string) {
  const start = Date.now()
  const markup = renderToStaticMarkup(<Image name={imageName} />)
  const finish = Date.now()
  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    markup +
    `<!-- rendered at ${new Date().toJSON()} in ${finish - start}ms -->`
  )
}

function Image(props: { name: string }) {
  const FoundImage = images.hasOwnProperty(props.name) && images[props.name]
  return FoundImage ? <FoundImage /> : <ImageNotFound name={props.name} />
}

function ImageNotFound(props: { name: string }) {
  return (
    <svg
      width="512px"
      height="128px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <text x="0" y="15" fill="red" fontFamily={SYSTEM_FONT}>
        Image not found: {props.name}
      </text>
    </svg>
  )
}
