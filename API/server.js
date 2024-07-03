console.clear();
//importations
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import driverRouters from "./Routers/driverRouters.js";
import clientRouters from './Routers/clientRouters.js';
import adminRouters from "./Routers/adminRouters.js";
import registre from "./Routers/registre.js";

const app = express();
const port = process.env.PORT;
const URL = process.env.url_DB;

//connection to database
mongoose
  .connect(URL)
  .then(() => console.log("Database connected !!"))
  .catch((err) => console.log("error from database", err));
//end connection

//middleware
app.use(express.json()) 
//end
app.use("/driver", driverRouters);
app.use("/admin", adminRouters);
app.use("/client", clientRouters);
app.use("/sign", registre);
//server listening 
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running on http://localhost:${port}`);
});
//end
