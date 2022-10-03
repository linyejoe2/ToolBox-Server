// app.ts
import express from 'express';
import { R } from './router';

const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});


app.all('/tool-box', (req, res) => {
  res.send('The server is working!');
});

app.use('/tool-box/api', R);
