import { hydrate, prerender as ssr } from 'preact-iso';
import {App} from './App.jsx';

if (typeof window !== 'undefined') {
// @ts-ignore
	hydrate(<App data={window.__SSR_DATA__ ?? []}/>, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
