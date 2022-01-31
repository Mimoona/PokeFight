const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002;
require("dotenv").config();


app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
    res.send('hello home');
  }); 
 
const usersRouter = require("./routers/usersRouter");

app.use("/api/users", usersRouter);
 

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
