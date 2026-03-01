// import { Sequelize } from 'sequelize'; 
// import path from 'path'; import { fileURLToPath } from 'url'; 
// const __filename = fileURLToPath(import.meta.url); 
// const __dirname = path.dirname(__filename); 
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: path.join(__dirname, 'mystore.sqlite'),
  
// });

// export default sequelize;

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mystore", "root", "1", {
  host: "localhost",
  dialect: "mariadb",   
  logging: false,
});
export default sequelize;

