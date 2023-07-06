const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
let wordList = [];

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get('/hello', (req, res) => {
    res.json({msg: "Hello world"})
});

app.get('/echo/:id', (req, res) => {
    res.json({id: req.params.id})
});

app.post('/sum', (req, res) => {
    let array = Array.from(req.body.numbers);
    let total = 0;
    
    for(let i = 0; i < array.length; i++){
        total = total + array[i];
    }
    res.json({sum: total});
});

app.post("/list", (req, res) => {
    let payload = req.body.text;
    if (payload.includes(" ")){
        wordList = wordList.concat(payload.split(" "));
    }
    else {
        wordList = wordList.concat(payload);
    }
    res.json({list: wordList});
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));