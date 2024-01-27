import 'dotenv/config'
import app from "./app.js";

const start = async () => {
  const port = process.env.HOST || 4000;
  app.listen(port, () => {
    console.log('Running on port ', port);
  });
}

start();