// @ts-check
import { defineConfig } from 'astro/config';
import { starlightKatex } from 'starlight-katex';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import starlightThemeFlexoki from 'starlight-theme-flexoki'
// https://astro.build/config
export default defineConfig({
	markdown: {
		processor: unified(),
	},
	integrations: [
		starlight({
			plugins: [
				starlightThemeFlexoki({ accentColor: 'orange' }),
				starlightKatex(),
			],
			title: 'LaundromatCat',
			customCss: [
				'./src/styles/hero.css',
				'./src/styles/colors.css'
			],
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [

				{
					label: 'Posts',
					items: [{ autogenerate: { directory: 'posts' } }],
				},
			],
			favicon: '/src/assets/favicon.png',
		}),
		react(),
	],
});
