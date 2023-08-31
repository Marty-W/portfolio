"use client"
import { useAnimatedHero } from "@/hooks/useAnimatedHero"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname()
  const { isLinkActive, setIsLinkActive } = useAnimatedHero()

  const isLinkHighlighted =
    href === "/projects" ? pathname.includes(href) : pathname === href

  const handleMouseEnter = () => {
    if (!isLinkActive && pathname !== href) {
      setIsLinkActive(true)
    }
  }

  const handleMouseLeave = () => {
    setIsLinkActive(false)
  }

  return (
    <li
      className={`${
        isLinkHighlighted ? "font-bold text-blue-600" : "hover:text-blue-500"
      } text-lg underline-offset-4 decoration-zinc-800 decoration-2 transition-colors duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href}>{children}</Link>
    </li>
  )
}

export default NavLink
