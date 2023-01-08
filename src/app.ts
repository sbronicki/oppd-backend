import express from "express";
import config from "config";
import dbConnect from "./utils/connect";
import routes from "./routes";
import cors from "cors";

const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, async () => {
  console.log("listening on port 4000");

  await dbConnect();

  routes(app);
});
