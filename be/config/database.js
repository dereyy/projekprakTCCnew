import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

// Log the current directory and .env file path
console.log('Current directory:', process.cwd());
console.log('.env file path:', path.resolve(process.cwd(), '.env'));

// Load environment variables
dotenv.config();

// Log all environment variables (for debugging)
console.log('All environment variables:', {
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD ? '****' : undefined,
  NODE_ENV: process.env.NODE_ENV
});

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Set to console.log to see SQL queries
  }
);

export default sequelize;
// bisa yuk