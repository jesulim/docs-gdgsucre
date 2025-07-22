// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'GDG Sucre',
			sidebar: [
				{
					label: 'Guías',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Referencia',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Road to Build with AI 2025',
					autogenerate: { directory: 'road-to-2025' },
				},
			],
		}),
	],
});
