// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid({
			autoTheme: true,
		}),
		starlight({
			title: 'GDG Sucre',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es'
				}
			},
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
