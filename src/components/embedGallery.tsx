import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import ImageModal from "./imageModal"
import { useCallback, useState } from "react"
import Image from "astro:assets"
import type { ImageMetadata } from "astro"

interface Props {
  projectId: string
}

export default function EmbedGallery({ projectId }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [dialogOpen, setDialogOpen] = useState(false)
  const images = import.meta.glob<{ default: ImageMetadata }>(
    `/src/images/**.{png,jpg,jpeg,webp,avif}`,
  )
  const scrollPrev = () => useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = () => useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="grid auto-cols-[60%] grid-flow-col">
          {/* {images.map((image, index) => ( */}
          {/*   <div> */}
          {/*     <img src={image.src} alt={image.alt} /> */}
          {/*   </div> */}
          {/* ))} */}
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="group h-6 w-6 cursor-pointer fill-neutral-100 hover:fill-neutral-800"
          onClick={scrollPrev()}
        >
          <g
            stroke-linejoin="round"
            stroke-width="4"
            className="stroke-neutral-800"
          >
            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
            <path
              stroke-linecap="round"
              d="m27 33l-9-9l9-9"
              className="group-hover:stroke-neutral-100"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="group h-6 w-6 cursor-pointer fill-neutral-100 hover:fill-neutral-800 active:translate-y-[0.4px]"
          viewBox="0 0 48 48"
          onClick={scrollNext()}
        >
          <g
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="4"
            className="stroke-neutral-800"
          >
            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
            <path
              stroke-linecap="round"
              d="m21 33l9-9l-9-9"
              className="group-hover:stroke-neutral-100"
            />
          </g>
        </svg>
      </div>
      <ImageModal
        open={dialogOpen}
        closeDialog={() => setDialogOpen(false)}
        src="https://placehold.co/600x400"
        alt="placeholder"
      />
    </div>
  )
}
