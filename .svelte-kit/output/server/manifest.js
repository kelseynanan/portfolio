export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"app/immutable/entry/start.BUL4YSKc.js",app:"app/immutable/entry/app.6FcZZ2pN.js",imports:["app/immutable/entry/start.BUL4YSKc.js","app/immutable/chunks/R-ctGxO3.js","app/immutable/chunks/CFVaXq-p.js","app/immutable/chunks/QNSWQJMG.js","app/immutable/entry/app.6FcZZ2pN.js","app/immutable/chunks/CFVaXq-p.js","app/immutable/chunks/pcvDETT8.js","app/immutable/chunks/DUyotZ0w.js","app/immutable/chunks/QNSWQJMG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
