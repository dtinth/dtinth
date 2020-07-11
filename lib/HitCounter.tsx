import React from 'react'
import { Cousine } from './Fonts'
import axios from 'axios'
import { WaitFor } from './WaitFor'

export let hitCache: { value: number | null; expires: number } | null = null
export let hitPromise: Promise<any> | null = null

export function HitCounter() {
  const hits = readHits()
  const text = hits == null ? '----' : hits.toString().padStart(4, '0')
  return (
    <path
      d={Cousine.getD(text, { anchor: 'center middle', fontSize: 72 })}
      fill="#8b8685"
    />
  )
}

async function fetchHits() {
  const url = process.env.HITS_URL_BASE
  if (!url) return null
  const currentHits =
    (await axios.get<number | null>(url + '/hits.json')).data || 0
  const value = currentHits + 1
  axios.patch(url + '/.json', { hits: value })
  return value
}
function readHits() {
  if (hitCache && Date.now() < hitCache.expires) {
    return hitCache.value
  }
  if (hitPromise) {
    throw new WaitFor(hitPromise)
  }
  hitPromise = (async () => {
    try {
      const value = await fetchHits()
      hitCache = { value, expires: Date.now() + 1e3 }
    } catch (error) {
      hitCache = { value: null, expires: Date.now() + 1e3 }
    }
  })()
  hitPromise.finally(() => {
    hitPromise = null
  })
  throw new WaitFor(hitPromise)
}
