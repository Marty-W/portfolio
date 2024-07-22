import { defineCollection, z } from "astro:content"

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      ghLink: z.string().url(),
      siteLink: z.string().url(),
      description: z.string(),
      longDescription: z.string(),
      images: z.array(
        z.object({
          src: image(),
          description: z.string(),
        }),
      ),
    }),
})

export const collections = {
  project: projectCollection,
}
