"use client"
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

interface AninamtedHeroContext {
  isLinkActive: boolean
  setIsLinkActive: Dispatch<SetStateAction<boolean>>
}

const AnimatedHeroContext = createContext<AninamtedHeroContext | null>(null)

export const AnimatedHeroProvider = ({ children }: PropsWithChildren) => {
  const [isLinkActive, setIsLinkActive] = useState(false)

  // TODO consider useMemo

  return (
    <AnimatedHeroContext.Provider value={{ isLinkActive, setIsLinkActive }}>
      {children}
    </AnimatedHeroContext.Provider>
  )
}

export const useAnimatedHero = () => {
  const context = useContext(AnimatedHeroContext)

  if (context === null) {
    throw new Error(
      "useAnimatedHero must be used within a AnimatedHeroProvider",
    )
  }

  return context
}
