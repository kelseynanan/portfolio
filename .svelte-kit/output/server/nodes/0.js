

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["app/immutable/nodes/0.iNoOEu36.js","app/immutable/chunks/DUyotZ0w.js","app/immutable/chunks/CFVaXq-p.js"];
export const stylesheets = [];
export const fonts = [];
