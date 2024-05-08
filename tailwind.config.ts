import { join } from 'path';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { beach } from './src/beach';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		colors: {
			quarternary: {
				50: 'rgb(var(--color-quarternary-50))',
				100: 'rgb(var(--color-quarternary-100))',
				200: 'rgb(var(--color-quarternary-200))',
				300: 'rgb(var(--color-quarternary-300))',
				400: 'rgb(var(--color-quarternary-400))',
				500: 'rgb(var(--color-quarternary-500))',
				600: 'rgb(var(--color-quarternary-600))',
				700: 'rgb(var(--color-quarternary-700))',
				800: 'rgb(var(--color-quarternary-800))',
				900: 'rgb(var(--color-quarternary-900))'
			}
		},
		extend: {}
	},
	plugins: [
		typography,
		containerQueries,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					}
				],
				custom: [beach]
			}
		})
	]
} satisfies Config;
