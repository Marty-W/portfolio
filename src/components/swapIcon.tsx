import { motion, useAnimate } from "framer-motion"
interface Props {
  handleClick: () => void
}

export const SwapIcon = ({ handleClick }: Props) => {
  const [scope, animate] = useAnimate()

  const handlePhraseSwap = () => {
    animate(
      ".down-arrow",
      { y: [0, 10, -10, 0], opacity: [1, 0, 0, 1] },
      { duration: 1.2, ease: "backInOut" },
    )
    animate(
      ".up-arrow",
      { y: [0, -10, 10, 0], opacity: [1, 0, 0, 1] },
      { duration: 1.2, ease: "backInOut" },
    )
    handleClick()
  }

  return (
    <button onClick={handlePhraseSwap} className="absolute right-0">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        ref={scope}
      >
        <motion.path
          d="M8 3.5L8 16.5M8 3.5L3.5 7.83333M8 3.5L12.5 7.83333"
          stroke="#000000"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="up-arrow"
        ></motion.path>
        <motion.path
          d="M17 20.5L17 7.5M17 20.5L21.5 16.1667M17 20.5L12.5 16.1667"
          stroke="#000000"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="down-arrow"
        ></motion.path>
      </svg>
    </button>
  )
}
