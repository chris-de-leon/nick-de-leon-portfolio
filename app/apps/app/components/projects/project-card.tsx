/* eslint-disable @next/next/no-img-element */
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'

interface ProjectCardProps {
  readonly animationDelay: number
  readonly title: string
  readonly projectUrl: string
  readonly description: string
  readonly imgSrc: string
  readonly imgAlt: string
  readonly tags: string[]
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-col p-4 border-2 bg-secondary rounded-xl lg:col-span-1">
      <div className="flex items-center justify-center">
        <img
          className="h-32 mb-4"
          loading="lazy"
          src={props.imgSrc}
          alt={props.imgAlt}
        />
      </div>
      <h1 className="mb-4 text-3xl font-bold text-primary">{props.title}</h1>
      <Link
        className="flex flex-row items-center p-2 mb-4 transition-all ease-linear border rounded-lg border-primary text-primary max-w-max hover:text-black hover:bg-primary"
        href={props.projectUrl}
        target="_blank"
      >
        <BsGithub />
        <p className="ml-2">Source Code</p>
      </Link>
      <p className="mb-4 text-justify text-primary">{props.description}</p>
      <div className="flex flex-wrap mt-auto gap-x-5 text-primary">
        {props.tags.map((t, i) => {
          return <p key={i}>{`#${t}`}</p>
        })}
      </div>
    </div>
  )
}
