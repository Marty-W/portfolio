import { Github, Linkedin, File, Mail } from "lucide-react"
const LINKS = [
  {
    name: "github",
    href: "https://github.com/Marty-W",
    icon: Github,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/martin-weber-4871341b3/",
    icon: Linkedin,
  },
  {
    name: "email",
    href: "mailto:martin8weber@gmail.com",
    icon: Mail,
  },
  {
    name: "resume",
    href: "https://rxresu.me/r/MHWFQe1t",
    icon: File,
  },
]

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white px-6 py-5 w-full mt-auto shadow-2xl">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-6">
          {LINKS.map(({ href, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center mt-4 text-sm">in 2023 by Martin Weber</p>
      </div>
    </footer>
  )
}

export default Footer
