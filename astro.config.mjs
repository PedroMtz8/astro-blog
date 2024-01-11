import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { loadEnv } from 'vite';
import auth from 'auth-astro'
import Google from "@auth/core/providers/google"

const env = loadEnv('production', process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), 
    auth({
      providers: [
        Google({
          clientId: env.GOOGLE_ID,
          clientSecret: env.GOOGLE_SECRET
        })
      ]
    })
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
  })
});