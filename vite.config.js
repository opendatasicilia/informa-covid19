import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

const isTravisCi = process.env.TRAVIS === true
const base = isTravisCi ? 'informacovid.opendatasicilia.it' : '/'

export default defineConfig({
  base,
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: process.env.NODE_ENV !== 'production',
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      }),
    }),
  ],
})
