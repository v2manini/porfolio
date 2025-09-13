import { defineCollection,z} from "astro:content";


const proyects = defineCollection({
    schema: z.object({
        title:z.string(),
        img: z.string().url(),
        description:z.string(),
    })
})

export const collections = {proyects}