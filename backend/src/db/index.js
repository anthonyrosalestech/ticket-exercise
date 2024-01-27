import pg from "pg";

const credentials = {
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
};

const db = new pg.Pool({
  ...credentials
});

export { db };
