import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$userStore: 'src/userStore'
		}
	},
	vitePlugin: {
		inspector: true
	}
};

export default config;
