const express = require('express');
const cors = require('cors');
const postsRouter = require('./routers/postsRouter');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/posts', postsRouter);


server.get('/', (req, res) => {
    res.send(`
      Server up and running!
    `);
  });

module.exports = server;