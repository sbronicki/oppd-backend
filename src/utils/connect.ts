import mongoose from "mongoose";
import config from "config";

async function dbConnect() {
  const dbUri = config.get<string>("dbUri");
  const promise = async () => mongoose.connect(dbUri);

  mongoose.set("strictQuery", false);

  try {
    const conn = await promise();
    console.log("Connected to DB");
    return conn;
  } catch (error) {
    console.error("Could not conenct to DB");
    process.exit(1);
  }
}

export default dbConnect;
