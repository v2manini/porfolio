import { defineCollection} from "astro:content";
import { z } from 'astro/zod';

const proyects = defineCollection({
    schema: z.object({
        title:z.string(),
        img: z.url(),
        description:z.string(),
        tecs:z.array(z.string()),
        repo_url: z.url(),
    })
})

export const collections = {proyects}