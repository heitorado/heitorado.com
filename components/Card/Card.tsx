import { Project } from '../../types'
import Image from 'next/image'
import { GithubLogo } from 'phosphor-react'

type Props = {
  project: Project
}

const Card: React.FC<Props> = ({ project }: Props) => {
  return(
    <div className="card w-96 h-96 bg-base-300 shadow-xl m-2">
      <figure>
        <div className="badge badge-info z-10 absolute right-4 top-4">
          {project.mainLanguageUsed}
        </div>
        <a href={project.previewUrl}> 
          <Image className="hover:scale-110 transition-transform" src={project.screenshotURL} alt={`A screenshot from the project ${project.name}`}  width="480" height="300"/>
        </a>
      </figure>
      <div className="card-body overflow-y-auto px-4 py-3">
        <a href={project.repositoryUrl} className="hover:underline">
          <h2 className="card-title">
            <GithubLogo className='text-xl'/> {project.name}
          </h2>
        </a>
        <p className="overflow-y-auto text-xs">{project.description}</p>
        <div className="card-actions justify-end">
          {project.tags.map((tag, i) => <div key={i} className="badge badge-accent badge-outline">{tag}</div>)}
        </div>
      </div>
    </div>
  )
}

export default Card