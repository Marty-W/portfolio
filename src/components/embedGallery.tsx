import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import ImageModal from "./imageModal"
import { useCallback, useEffect, useState } from "react"
import type { ImageMetadata } from "astro"

interface Image {
  src: ImageMetadata
  description: string
}

interface Props {
  images: Image[]
}

export default function EmbedGallery({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({})])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const handleImageClick = (clickedImageIndex: number) => {
    setActiveImage(clickedImageIndex)
    setDialogOpen(true)
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const navigateImage = (direction: -1 | 1) => {
    if (activeImage === null) return

    const newIndex = (activeImage + direction + images.length) % images.length
    setActiveImage(newIndex)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!dialogOpen) return

      switch (event.key) {
        case "ArrowLeft":
          navigateImage(-1)
          break
        case "ArrowRight":
          navigateImage(1)
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeImage])

  return (
    <div className="animate-fadein flex flex-col space-y-4">
      <div className="max-h-[40vh] overflow-hidden" ref={emblaRef}>
        <div className="grid auto-cols-[60%] grid-flow-col">
          {images.map((image, index) => (
            <div
              key={index}
              className={`px-2 ${index === 0 ? "pl-2" : ""} ${index === images.length - 1 ? "pr-2" : ""}`}
            >
              <img
                src={image.src.src}
                alt={image.description}
                onClick={() => handleImageClick(index)}
                className="h-auto w-full"
                style={{
                  minWidth: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="group h-8 w-8 cursor-pointer fill-neutral-100 hover:fill-neutral-800 active:translate-y-[0.4px]"
          onClick={scrollPrev}
        >
          <g
            strokeLinejoin="round"
            strokeWidth="4"
            className="stroke-neutral-800"
          >
            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
            <path
              strokeLinecap="round"
              d="m27 33l-9-9l9-9"
              className="group-hover:stroke-neutral-100"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="group h-8 w-8 cursor-pointer fill-neutral-100 hover:fill-neutral-800 active:translate-y-[0.4px]"
          viewBox="0 0 48 48"
          onClick={scrollNext}
        >
          <g
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="4"
            className="stroke-neutral-800"
          >
            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
            <path
              strokeLinecap="round"
              d="m21 33l9-9l-9-9"
              className="group-hover:stroke-neutral-100"
            />
          </g>
        </svg>
      </div>
      <ImageModal
        open={dialogOpen}
        closeDialog={() => setDialogOpen(false)}
        src={images[activeImage as number]?.src.src}
        alt={images[activeImage as number]?.description}
      />
    </div>
  )
}
