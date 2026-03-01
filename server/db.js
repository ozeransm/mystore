
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mystore", "root", "1", {
  host: "localhost",
  dialect: "mariadb",   
  logging: false,
});
export default sequelize;

