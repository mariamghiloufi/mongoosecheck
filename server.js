const express= require ("express");
const app = express();
const port = 5000;

const DBconnect = require("./DBconnect");
app.use(express.json());
DBconnect();
app.use("/user", require("./routes/user"))

app.listen(port, console.log("server is running")
);