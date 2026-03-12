import { defineCollection} from "astro:content";
import { z } from 'astro/zod';

import { glob } from 'astro/loaders';

const proyects = defineCollection({
    loader: glob({ base: '../../src/content/proyects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title:z.string(),
        img: z.url(),
        description:z.string(),
        tecs:z.array(z.string()),
        repo_url: z.url(),
    })
})

export const collections = {proyects}