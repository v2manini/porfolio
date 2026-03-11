// @ts-check
import { defineConfig,envField } from 'astro/config'
import svelte from '@astrojs/svelte';
import { loadEnv } from "vite";

// import { getContext } from 'svelte';
// const { BASE,SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), ""); 

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({ extensions: ['.svelte'] })],
  env:{
    schema:{
      SITE:envField.string({context : "client" , access:"public"} ),
      BASE:envField.string({context : "client" , access:"public"} )
    }
  },
  site:"porfolio",
  base: "https://v2manini.github.io",
  
});