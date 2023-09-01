import ProjectCard from "@/components/projectCard"
import { PROJECTS } from "@/conts/projects"
const Projects = () => {
  const projectsArr = Object.values(PROJECTS)
  return (
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {projectsArr.map(({ name, techstack, description, imageUrl, slug }) => (
        <ProjectCard
          key={name}
          projectName={name}
          slug={slug}
          techstack={techstack}
          imgPreviewUrl={imageUrl}
          projectDescription={description}
          isHighlighted={name === "HabitSync"}
        />
      ))}
    </div>
  )
}

export default Projects
