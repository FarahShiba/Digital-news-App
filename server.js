const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
console.log(process.env.MONGO_URL);
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("MONGO_URL is not defined");
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error", error);
  });

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // add route here
  server.use("/api/postitems", require("./src/pages/api/postitems/route"));

  server.use("/api/contact", require("./src/pages/api/contact/route"));

  // Handle all other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3011;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
