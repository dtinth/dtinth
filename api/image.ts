import { NowRequest, NowResponse } from '@vercel/node'
import { renderImage } from '../images'

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(renderImage(String(req.query.name)))
}
