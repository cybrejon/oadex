import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $userStore: "src/userStore",
      $utils: "src/utils",
      $assets: "src/lib/assets",
    },
  },
  // vitePlugin: {
  // 	inspector: true
  // }
};

export default config;
