'use strict';

console.log('app.js is alive!')

const req = new XMLHttpRequest();
req.open('GET', '/data');
req.responseType = 'json';
req.send();

req.onload = () => { //Runs when JSON data file is loaded
    const data = req.response;
    console.log(data);

    let dataArr = [data];
    console.log(data[0]);
    console.log(data[0].id);






};