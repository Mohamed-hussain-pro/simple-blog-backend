const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// set up express server

const app = express();
app.use(cors());
app.use(express.json())

const port = process.env.port || 5000
console.log("Starting server...")
app.listen(port, () => console.log(`Server started on port: ${port}`));
 //set up routes
 app.use("/posts", require("./routes/postRoutes"))

 
// setup mongoose
console.log("connecting to mongoDB")
mongoose.connect(process.env.mongoDB_URL,{useNewUrlParser: true, useUnifiedTopology: true},
   err => {
  if(err) return console.error(err);
  console.log("MongoDB connection established")
})