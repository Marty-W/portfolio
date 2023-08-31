import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PropsWithChildren } from "react"

//
interface Props {
  animated?: boolean
  href: string
}

const ArrowLink = ({ children, animated, href }: PropsWithChildren<Props>) => {
  return (
    <Link
      href={href}
      className="group flex items-center justify-center px-3 py-3"
    >
      <span className="mr-1 group-hover:underline underline-offset-2">
        {children}
      </span>
      <ArrowRight className="w-7 h-7 transition-transform group-hover:transform group-hover:translate-x-2 group-active:translate-x-4" />
    </Link>
  )
}

export default ArrowLink
