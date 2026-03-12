import { defineCollection} from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const proyects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/proyects" }),
    schema: z.object({
        title:z.string(),
        img: z.url(),
        description:z.string(),
        tecs:z.array(z.string()),
        repo_url: z.url(),
    })
})

export const collections = {proyects}