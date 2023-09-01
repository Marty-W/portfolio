import { PROJECTS } from "@/conts/projects"
import { ArrowLeft, Github, Link2 } from "lucide-react"
import Link from "next/link"
import {
  Dotfiles,
  HabitSync,
  OldPortfolio,
  Portfolio,
  SwissKnife,
} from "@/components/projectsPages"
import Gallery from "@/components/gallery"

const SLUG_DICT = {
  dotfiles: <Dotfiles />,
  habitsync: <HabitSync />,
  "old-portfolio": <OldPortfolio />,
  portfolio: <Portfolio />,
  "swiss-knife": <SwissKnife />,
}

const Project = ({ params }: { params: { name: string } }) => {
  const { name, githubUrl, websiteUrl, carouselImgs } = PROJECTS[params.name]

  return (
    <>
      <div className="flex justify-between items-center mb-6 px-4 py-2">
        <Link
          href="/projects"
          className="hover:text-slate-400 transition duration-300"
        >
          <ArrowLeft className="w-8 h-8" />
        </Link>
        <h1 className="text-2xl font-semibold text-slate-800">{name}</h1>
        <div className="flex space-x-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition duration-300"
          >
            <Github className="w-8 h-8" />
          </Link>
          {websiteUrl && (
            <Link
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition duration-300"
            >
              <Link2 className="w-8 h-8" />
            </Link>
          )}
        </div>
      </div>
      <div className="px-8 pb-8">
        <div className="mx-auto">
          {carouselImgs && <Gallery images={carouselImgs} />}
          <div className="text-gray-600 text-lg leading-relaxed mt-6">
            {SLUG_DICT[params.name as keyof typeof SLUG_DICT]}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
