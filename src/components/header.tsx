import AnimatedHero from "./animatedHero"
import Nav from "./nav"

const Header = () => {
  return (
    <header className="font-['Raleway Variable'] container py-4">
      <div className="py-6 flex justify-between">
        <div className="basis-1/2 md:self-center">
          <h1 className="text-4xl font-bold mb-2">Martin Weber</h1>
          <h2 className="text-2xl bg-gradient-to-r from-stone-800 via-blue-700 to-stone-800 inline-block text-transparent bg-clip-text">
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
