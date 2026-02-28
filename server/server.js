import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

import  sequelize from './db.js';
import { User } from './models/Users.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const users = await User.findAll({ raw: true });

async function start() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    root: path.join(__dirname, '..')
  });

  await sequelize.sync();

  app.get('/users', async (req, res) => {
    
    
    let template = await fs.readFile(
      path.resolve(__dirname, '../index.html'),
      'utf-8'
    );
    template = await vite.transformIndexHtml(req.url, template);
    const fullUrl = `${req.protocol}://${req.get('host')}${req.url}`;
    const { renderPage } = await vite.ssrLoadModule('/server/ssr-entry.jsx');
    const { html } = renderPage(fullUrl, {users});
    const finalHtml = template
                            .replace(`<!--app-html-->`, html) 
                            .replace(`<!--app-data-->`, 
                                     `<script>window.__SSR_DATA__ = ${JSON.stringify( {users} )};</script>`);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
  });

  app.use(vite.middlewares);

  app.get(/.*/, async (req, res) => {
    let template = await fs.readFile(
      path.resolve(__dirname, '../index.html'),
      'utf-8'
    );

    template = await vite.transformIndexHtml(req.url, template);

    const { renderPage } = await vite.ssrLoadModule('/server/ssr-entry.jsx');
    const { html } = renderPage(req.url);

    const finalHtml = template.replace(`<!--app-html-->`, html);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
  });

  app.listen(3000, () => {
    console.log('SSR server running at http://localhost:3000');
  });
}

start();
