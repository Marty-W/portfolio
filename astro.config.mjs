import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import remarkToc from "remark-toc"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
})
