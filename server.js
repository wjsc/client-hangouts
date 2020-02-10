const express = require('express');
const app = express();
const createError = require('http-errors');
const SLEEP_TIME = 5000;

const sleep = ms => new Promise(resolve => setTimeout(resolve ,ms));

console.log(`The server will delay ${SLEEP_TIME} miliseconds every request`);


app.get('/hello', async (req, res, next) => {

    console.log('Request received');
    req.on("close", () => {
        console.log('request closed unexpectedly');
    });

    await sleep(SLEEP_TIME);
    if(!res.connection.pending) { 
        console.log('response sent');
        res.sendStatus(200);
    }
    else{
        console.log('Push notification');
    }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});