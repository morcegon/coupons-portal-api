const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

async function startServer() {
  const app = express();

  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.error(err);
    }

    console.log('Server running');
  });
}

startServer();
