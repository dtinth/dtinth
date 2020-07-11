import { NowRequest, NowResponse } from '@vercel/node'
import { renderImage } from '../images'

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const result = await renderImage(String(req.query.name))
    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(result)
  } catch (error) {
    res.send('Error')
    console.error(error)
  }
}
