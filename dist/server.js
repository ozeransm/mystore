import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "vite";
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("mystore", "root", "1", {
  host: "localhost",
  dialect: "mariadb",
  logging: false
});
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: "user"
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    tableName: "users",
    timestamps: true
  }
);
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    description: DataTypes.STRING
  },
  {
    tableName: "products",
    timestamps: true
  }
);
const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    quantity: DataTypes.STRING,
    description: DataTypes.STRING,
    id_product: DataTypes.STRING,
    contacts: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    tableName: "orders",
    timestamps: true
  }
);
try {
  await sequelize.authenticate();
  console.log("✅ Database connected");
} catch (error) {
  console.error("❌ DB connection error:", error);
}
const __dirname$1 = path.dirname(fileURLToPath(import.meta.url));
await sequelize.sync();
async function start() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  const vite = await createServer({
    server: { middlewareMode: true },
    root: path.join(__dirname$1, "..")
  });
  app.post("/addcard", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  });
  app.put("/editproduct/:id", async (req, res) => {
    const id = req.params.id;
    await Product.update(req.body, { where: { id } });
    res.status(200).json({ message: "Product updated" });
  });
  app.post("/delproduct/:id", async (req, res) => {
    const id = req.params.id;
    await Product.destroy({ where: { id } });
    res.status(200).json({ message: "Product deleted" });
  });
  app.post("/adduser", async (req, res) => {
    const user = await User.create(req.body);
    res.status(200).json(user);
  });
  app.put("/edituser/:id", async (req, res) => {
    const id = req.params.id;
    await User.update(req.body, { where: { id } });
    res.status(200).json({ message: "User updated" });
  });
  app.post("/deluser/:id", async (req, res) => {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.status(200).json({ message: "User deleted" });
  });
  app.post("/addorder", async (req, res) => {
    const order = await Order.create(req.body);
    res.status(200).json(order);
  });
  app.put("/editorder/:id", async (req, res) => {
    const id = req.params.id;
    await Order.update(req.body, { where: { id } });
    res.status(200).json({ message: "Order updated" });
  });
  app.post("/delorder/:id", async (req, res) => {
    const id = req.params.id;
    await Order.destroy({ where: { id } });
    res.status(200).json({ message: "Order deleted" });
  });
  app.use(async (req, res, next) => {
    try {
      const accept = req.headers.accept || "";
      const isHtml = req.method === "GET" && accept.includes("text/html") && !req.originalUrl.match(/\.(js|css|png|jpg|jpeg|svg|ico|map)$/);
      if (!isHtml) {
        return next();
      }
      const users = await User.findAll({ raw: true });
      const products = await Product.findAll({ raw: true });
      const orders = await Order.findAll({ raw: true });
      let template = await fs.readFile(path.resolve(__dirname$1, "../index.html"), "utf-8");
      template = await vite.transformIndexHtml(req.url, template);
      const { renderPage } = await vite.ssrLoadModule("/server/ssr-entry.jsx");
      const { html } = renderPage(req.url, { users, products, orders });
      const finalHtml = template.replace("<!--app-html-->", html).replace("<!--app-data-->", `window.__SSR_DATA__ = ${JSON.stringify({ users, products, orders })};`);
      res.status(200).set({ "Content-Type": "text/html" }).end(finalHtml);
    } catch (e) {
      vite.ssrFixStacktrace?.(e);
      next(e);
    }
  });
  app.use(vite.middlewares);
  app.listen(3e3, () => {
    console.log("SSR server running at http://localhost:3000");
  });
}
start();
