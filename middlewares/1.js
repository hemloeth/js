// 👉 A middleware is a function that runs between request and response.

const express = require('express');
const app = express();
const port = 3003;

// Middleware function to log request details



app.use((req, res, next) => {
    console.log("1");
    next();
    console.log("2");
});

app.get("/", (req, res) => {
    console.log("3");
    res.send("Done");
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})