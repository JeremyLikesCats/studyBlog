// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import starlightThemeFlexoki from 'starlight-theme-flexoki'
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki({ accentColor: 'orange' })],
			title: 'LaundromatCat',
			customCss: [
				'./src/styles/hero.css',
				'./src/styles/colors.css'
			],
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [

				{
					label: 'Posts',
					items: [{ autogenerate: { directory: 'posts' } }],
				},
			],
			
		}),
		react(),
	],
});
