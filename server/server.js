import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

import  sequelize from './db.js';
import { User } from './models/Users.js';
import { Product } from './models/Products.js';
import { Order } from './models/Orders.js';

try {
  await sequelize.authenticate();
  console.log("✅ Database connected");
} catch (error) {
  console.error("❌ DB connection error:", error);
}
const __dirname = path.dirname(fileURLToPath(import.meta.url));

await sequelize.sync();

async function start() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    root: path.join(__dirname, '..')
  });

app.use(async (req, res, next) => { 
  try { 
    const accept = req.headers.accept || ''; 
    const isHtml = req.method === 'GET' && accept.includes('text/html') && !req.originalUrl.match(/\.(js|css|png|jpg|jpeg|svg|ico|map)$/); 
    if (!isHtml) { 
      return next();
    } 
     
      const users = await User.findAll({ raw: true });
      const products = await Product.findAll({ raw: true });
      const orders = await Order.findAll({ raw: true }); 
      let template = await fs.readFile( path.resolve(__dirname, '../index.html'), 'utf-8' ); 
      template = await vite.transformIndexHtml(req.url, template); 
      const { renderPage } = await vite.ssrLoadModule('/server/ssr-entry.jsx'); 
      const { html } = renderPage(req.url, { users, products, orders }); 
      const finalHtml = template 
                          .replace('<!--app-html-->', html) 
                          .replace( '<!--app-data-->', `<script>window.__SSR_DATA__ = ${JSON.stringify({ users, products, orders })};</script>` );
      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml); 
    }
    catch (e) 
              { vite.ssrFixStacktrace?.(e); 
                next(e); 
              } 
  });

  app.use(vite.middlewares);

  app.listen(3000, () => {
    console.log('SSR server running at http://localhost:3000');
  });

}

start();
