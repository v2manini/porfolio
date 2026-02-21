import { defineCollection,z} from "astro:content";


const proyects = defineCollection({
    schema: z.object({
        title:z.string(),
        img: z.string().url(),
        description:z.string(),
        tecs:z.array(z.string()),
        repo_url: z.string().url(),
    })
})

export const collections = {proyects}