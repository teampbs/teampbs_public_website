import type { NextApiRequest, NextApiResponse } from 'next'
import { employees } from 'utils/mock/employees'

// @ts-ignore
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(employees)
}
