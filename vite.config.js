import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/mexico.tariffs.io/",
	plugins: [sveltekit()]
});
