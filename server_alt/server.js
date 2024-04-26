import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/router.js";
import { connectDatabase } from "./config/database.js";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // handling json input
app.use(express.urlencoded({ extended: true})); // handling x-www-form-urlencoded
app.use(router);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
