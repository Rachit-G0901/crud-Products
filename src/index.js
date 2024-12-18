const express = require('express');
const connectDatabase = require("./db");
const { router } = require('./Routes/productRoute');
const app = express();
app.use(express.json());
app.use(router);

app.listen(3000,async ()=>{
  await connectDatabase();
  console.log("server started");
})

app.use(express.json());