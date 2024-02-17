require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
