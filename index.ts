import express from 'express';

const app = express()
const port = 3000

const hostname = typeof process.env.HOSTNAME !== 'undefined' ? process.env.HOSTNAME : 'hostname is not set'
app.get('/', (req, res) => res.send(`Hostname: ${hostname}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));