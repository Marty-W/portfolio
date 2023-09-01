import NavLink from "./navLink"

const LINKS = [
  { href: "/", text: "about me" },
  { href: "/projects", text: "projects" },
  { href: "/my-journey", text: "my journey" },
  { href: "/contact", text: "contact" },
]

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-between py-2">
        {LINKS.map(({ href, text }) => {
          return (
            <NavLink href={href} key={href}>
              {text}
            </NavLink>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
