import Image from "next/image"
import Link from "next/link"

interface Props {
  isHighlighted?: boolean
  imgPreviewUrl: string
  projectName: string
  techstack: string[]
  projectDescription: string
  slug: string
}
const ProjectCard = ({
  isHighlighted,
  imgPreviewUrl,
  projectName,
  techstack,
  projectDescription,
  slug,
}: Props) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className={`block bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-0.5 ${
        isHighlighted && "border-2 border-blue-500"
      }`}
    >
      <Image
        src={imgPreviewUrl}
        alt="placeholder image"
        className="rounded-t-lg w-full mb-4 object-cover h-48"
        width={500}
        height={300}
      />
      <div className="flex flex-col justify-between space-y-4">
        <h3 className="text-2xl font-semibold mb-2">{projectName}</h3>
        <div className="flex flex-wrap gap-x-2 gap-y-2 mb-4">
          {techstack.map((tech: string) => (
            <div
              className="bg-slate-50 text-slate-800 px-2 flex items-center h-8 rounded-md"
              key={tech}
            >
              <span className="text-sm">{tech}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600">{projectDescription}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
