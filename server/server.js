const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/user', userRoutes);

mongoose.connect("mongodb://localhost:27017/your_database_name")
  .then(() => {
    // listen for requests
    app.listen(3000, () => {
      console.log('connected to db & listening on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  });

