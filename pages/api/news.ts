import type { NextApiRequest, NextApiResponse } from 'next'
import { news } from 'utils/mock/news'

// @ts-ignore
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(news)
}
