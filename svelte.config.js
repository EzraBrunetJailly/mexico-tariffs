
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Keep the preprocessor from B
    preprocess: vitePreprocess(),

    kit: {
        // Keep the docs output from B for GitHub Pages
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: '404.html'
        }),
        paths: {
            // This is useful for GitHub Pages
            base: '', 
        }
    }
};

export default config;