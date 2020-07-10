import { NowRequest, NowResponse } from '@vercel/node'
import { hello } from '../lib/dtinth'

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(hello())
}
