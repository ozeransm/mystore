
import { h } from 'preact';
import render from 'preact-render-to-string';
import  {App}  from '../src/App.jsx';
import { locationStub } from 'preact-iso/prerender';
import '../src/goober.js';
export function renderPage(url, data) {
  const location = locationStub(url);
  const html = render(h(App, {data} ));
       
  return { html };
}

