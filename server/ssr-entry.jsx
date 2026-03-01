
import { h } from 'preact';
import render from 'preact-render-to-string';
import  {App}  from '../src/App.jsx';
import { locationStub } from 'preact-iso/prerender';

export function renderPage(url, data) {
  const location = locationStub(url);
  const html = render(h(App, {data} ));
       
  return { html };
}

