require("dotenv").config();
const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./data");
const cors = require("cors");

mongoose.set("strictQuery", false);

const corsOptions = {
  origin: "https://fuhuahu-simple.onrender.com",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors());

app.use(json());

app.use("/api/v1/data", router);

main().catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
async function main() {
  await mongoose.connect(process.env.DATABASE_URI);
  app.listen(PORT);
  console.log("success");
}
