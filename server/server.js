const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;
const dbo = require("./db/conn");

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.log(err);
  });
  console.log(`Server is running on port: ${port}`);
});
