const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/config');
const { urlencoded } = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();
const corsOption = {
    origin : 'http://localhost:8180'
};

app.use(express.json());
app.use(cors(corsOption));
app.use(express.urlencoded({extended:true}));

app.get('/', (err, req, res) => {
    res.status(200)
    res.json({
        message : "you are connected"
    })
});

app.listen(port, (req, res) =>{
    console.log('you are connected on port ' + port)
});