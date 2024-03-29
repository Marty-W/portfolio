"use client"
import { useState, useCallback, useEffect, useRef } from "react"
import { flushSync } from "react-dom"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Dialog, DialogTrigger, DialogContent } from "./modal"
import { MoveLeft, MoveRight } from "lucide-react"
import { CarouselImg } from "@/conts/projects"

interface Props {
  images: CarouselImg[]
}

const TWEEN_FACTOR = 1.5

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const Gallery = ({ images }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })
  const [tweenValues, setTweenValues] = useState<number[]>([])
  const [currImgIndex, setCurrImgIndex] = useState<number>(0)

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      const newIndex = (currImgIndex - 1) % images.length
      setCurrImgIndex(newIndex > 0 ? newIndex : images.length - 1)
    }
  }, [emblaApi, images.length, currImgIndex])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      const newIndex = (currImgIndex + 1) % images.length
      setCurrImgIndex(newIndex < images.length ? newIndex : 0)
    }
  }, [emblaApi, images.length, currImgIndex])

  useEffect(() => {
    //add keyboard scroll functionality
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev()
      } else if (e.key === "ArrowRight") {
        scrollNext()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [scrollPrev, scrollNext])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll())
    })
    emblaApi.on("reInit", onScroll)
  }, [emblaApi, onScroll])

  const handleImageClick = (index: number) => {
    setCurrImgIndex(index)
  }

  return (
    <Dialog>
      <div className="flex flex-col">
        <div className="overflow-hidden px-4 border-b-2 py-6" ref={emblaRef}>
          <div className="grid grid-flow-col auto-cols-max gap-2">
            {images.map(({ src, alt }, index) => (
              <DialogTrigger
                asChild
                key={index}
                className="cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div
                  style={{
                    ...(tweenValues.length && { opacity: tweenValues[index] }),
                  }}
                  className="min-w-0 pl-4 relative"
                >
                  <Image
                    src={src}
                    alt={alt ?? "project image"}
                    className="h-64 object-cover w-full block"
                    width={300}
                    height={300}
                    priority
                  />
                  <figcaption className="text-center text-sm mt-2">
                    {alt}
                  </figcaption>
                </div>
              </DialogTrigger>
            ))}
          </div>
          <div className="flex justify-center space-x-4 pt-6 transition-all">
            <button
              className="active:scale-95 hover:opacity-70"
              onClick={scrollPrev}
            >
              <MoveLeft size={30} />
            </button>
            <button
              className="embla__next active:scale-95 hover:opacity-70"
              onClick={scrollNext}
            >
              <MoveRight size={30} />
            </button>
          </div>
        </div>
      </div>
      <DialogContent>
        <figure className="h-full w-full relative">
          <Image
            src={images[currImgIndex].src}
            alt={images[currImgIndex].alt ?? "project image"}
            className="object-contain"
            fill
            priority
          />
          <figcaption className="text-center text-sm inset-x-0 top-0 z-10">
            {images[currImgIndex].alt}
          </figcaption>
        </figure>
      </DialogContent>
    </Dialog>
  )
}

export default Gallery
