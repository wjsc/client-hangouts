const fetch = require('node-fetch');

const SLEEP_TIME_MAX = 6000;
const SLEEP_TIME_MIN = 2000;
const random = () => Math.round(Math.random());
const sleep = ms => new Promise(resolve => setTimeout(resolve ,ms));


const miliseconds = random() ? SLEEP_TIME_MAX : SLEEP_TIME_MIN;

console.log(`The connection will hangout if is not resolved in ${miliseconds} miliseconds`);

Promise.race([fetch('http://localhost:3000/hello'), sleep(miliseconds)])
    .then(result => {
        console.log(result ? 'Request completed' : 'Request closed');
        process.exit(0);
    });