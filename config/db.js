const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://tambunanfarahshiba:fgMEvxKXZyzELAVX@courses.dbex1kq.mongodb.net/digital-news";

if (!MONGO_URL) {
  throw new Error("MONGO_URL is not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

async function dbConnect() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URL).then((mongoose) => {
      return mongoose;
    });
  }

  cached.connection = await cached.promise;
  return cached.connection;
}

module.exports = dbConnect;
