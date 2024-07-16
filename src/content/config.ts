import { defineCollection, z, reference } from "astro:content"

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      ghLink: z.string().url(),
      siteLink: z.string().url(),
      description: z.string(),
      coverImage: image(),
    }),
})

export const collections = {
  project: projectCollection,
}
