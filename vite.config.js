import { defineConfig } from 'vite'; 
import preact from '@preact/preset-vite'; 
// https://vitejs.dev/config/ 
export default defineConfig({ 
	plugins: [ 
		preact({ 
			prerender: { renderTarget: '#app', prerenderScript: '/src/index.jsx' } 
		}) ], 
	server: { 
		allowedHosts: ['ozy.pp.ua'], 
		host: true, 
		port: 3000,
		hmr: {
			protocol: 'wss',  // secure websocket
			host: 'randomname.cloudflareTunnel.com', // твоє URL Cloudflare Tunnel
			port: 443      
		}, 
	},
	build: {
      	sourcemap: false, 
    },
});