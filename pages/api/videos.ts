import type { NextApiRequest, NextApiResponse } from 'next'
import { videos } from 'utils/mock/videos'

// @ts-ignore
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(videos)
}
