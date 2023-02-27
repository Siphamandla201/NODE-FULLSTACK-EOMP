const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000;
const router = require('./controllers/dbcontrollers')

const app = express();
const corsOptions = {
    origin : "http://localhost:8080"
};

app.use(router);
app.use(
    cors(),
    express.json(),
express.urlencoded({ extended: true }));


app.listen(port, (req, res) => {
    console.log(`you are connected on port ${port}`);
    console.log("click here  http://localhost:8000");
})

