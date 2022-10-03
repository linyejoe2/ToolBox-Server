// 引入
import { Router } from 'express';
const R = Router();

import { Database } from './database/database';
const database = new Database();

R.post("/test", async (req, res) => {
  let data = await database.select("SELECT * FROM users WHERE name = 'andy'");
  res.json(data.length?data[0]:[]);
});

export { R };
