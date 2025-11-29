const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

// Middleware
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

// Server
app.listen(8800, () => {
  console.log("Backend server is running!");
});
