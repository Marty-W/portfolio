import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { GRADIENTS } from "./const"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getGradient = () => {
  return GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]
}
