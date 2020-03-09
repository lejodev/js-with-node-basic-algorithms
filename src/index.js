const express = require('express');
const app = express();
const morgan = require('morgan');

// Middlewares
app.use(morgan("dev"));

// Routes
app.use('/api/types', require('./routes/index'));

app.listen(8006, ()=> {
    console.log("Listening on port 8006");
});