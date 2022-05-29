// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Project as ProjectData } from '../../../types'
import projectsSampleData from '../../projects.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData>
) {
  const { projectId } = req.query

  const projects: ProjectData[] = projectsSampleData

  console.log(projectId)
  console.log(projects.filter((p) => p.id === projectId)[0])

  res.status(200).json(projects.filter((p) => p.id === projectId)[0])
}
