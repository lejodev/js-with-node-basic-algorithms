const express = require('express');
const app = express();
const morgan = require('morgan');

// Middlewares
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("Working");
});

app.listen(8006, ()=> {
    console.log("Listening on port 8006");
});