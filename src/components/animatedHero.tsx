"use client"
import { useAnimatedHero } from "@/hooks/useAnimatedHero"
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"
import { useEffect } from "react"

const AnimatedHero = () => {
  const { rive, RiveComponent } = useRive({
    src: "/guy.riv",
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.BottomRight,
    }),
  })
  const { isLinkActive } = useAnimatedHero()

  useEffect(() => {
    if (rive) {
      if (isLinkActive) {
        rive.play("amuse enter")
      } else if (!isLinkActive) {
        rive.play("amuse exit")
      }
    }
  }, [rive, isLinkActive])

  return <RiveComponent className="w-full h-48" />
}

export default AnimatedHero
