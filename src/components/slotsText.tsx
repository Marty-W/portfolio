import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { SwapIcon } from "./swapIcon"
import { cn } from "src/utils"
import { getGradient } from "src/utils"

interface Props {
  phrases: string[]
}

const ANIMATION_DURATION = 0.6

export const SlotsText = ({ phrases }: Props) => {
  const ref = useRef(null)
  const [phraseIndex, setPhraseIndex] = useState(0)

  const individualWords = phrases[phraseIndex].split(" ")

  const changePhrase = () => {
    setPhraseIndex((phraseIndex + 1) % phrases.length)
  }

  return (
    <div className="relative flex text-center">
      <p className="flex-1">
        <AnimatePresence mode="wait">
          <motion.span
            aria-hidden
            className={cn(
              "inline-block bg-clip-text text-2xl text-transparent lg:text-3xl",
              getGradient(),
            )}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              duration: ANIMATION_DURATION,
              ease: "backInOut",
            }}
            ref={ref}
            key={phraseIndex}
          >
            {individualWords.map((word, index) => (
              <>
                <motion.span className={cn("bg-clip-text")} key={word}>
                  {word}
                </motion.span>
                <span>&nbsp;</span>
              </>
            ))}
          </motion.span>
        </AnimatePresence>
      </p>
      <SwapIcon handleClick={changePhrase} />
    </div>
  )
}
