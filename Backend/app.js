require('dotenv').config();
const express = require('express');
const userRoutes = require("./routes/User");
const mongoose = require("mongoose");

//express app 
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//forwared /api/user to useRoutes
app.use("/api/user", userRoutes);

//connecting to a DB
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("connected to MongoDB!");
  }).catch((err) => {
    console.log(err);
  });

  
app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
});