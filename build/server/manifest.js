const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-8ca5ac36.js","imports":["_app/immutable/start-8ca5ac36.js","_app/immutable/chunks/index-83802678.js","_app/immutable/chunks/singletons-982258d7.js","_app/immutable/chunks/index-4ca4e11a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-50c3c772.js'),
			() => import('./chunks/1-f2c363a7.js'),
			() => import('./chunks/2-850a1fad.js'),
			() => import('./chunks/3-e91ca300.js'),
			() => import('./chunks/4-d6c01bab.js'),
			() => import('./chunks/5-1bae8abe.js'),
			() => import('./chunks/6-fdd3d278.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/shikigami",
				pattern: /^\/api\/shikigami\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server-df180243.js')
			},
			{
				id: "/items",
				pattern: /^\/items\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/onmyodos",
				pattern: /^\/onmyodos\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/shikigami/[slug]",
				pattern: /^\/shikigami\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/spells",
				pattern: /^\/spells\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
