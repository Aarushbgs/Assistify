const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
require("dotenv").config();

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

const workerRoutes = require("./routes/workerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
   process.env.MONGODB_URI
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:", err);
  });
  

app.use("/api/workers", workerRoutes);

app.listen(5000, () => {
  console.log("Server Running");
});