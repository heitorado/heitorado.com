// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Project as ProjectData } from '../../types'
import projectsSampleData from '../projects.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData[]>
) {
  res.status(200).json(projectsSampleData)
}
