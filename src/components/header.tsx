import Link from "next/link"
import AnimatedHero from "./animatedHero"
import Nav from "./nav"

const Header = () => {
  return (
    <header className="font-['Raleway Variable'] container py-4">
      <div className="py-6 flex justify-between">
        <div className="basis-1/2 md:self-center">
          <Link href="/">
            <h1 className="text-4xl font-bold mb-2">Martin Weber</h1>
          </Link>
          <h2 className="text-2xl bg-gradient-to-r bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            crafting digital experiences
          </h2>
        </div>
        <div className="flex-1">
          <AnimatedHero />
        </div>
      </div>
      <div className="md:px-20">
        <Nav />
      </div>
    </header>
  )
}

export default Header
