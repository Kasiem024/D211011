'use strict';

console.log('app.js is alive!')

const req = new XMLHttpRequest();
req.open('GET', 'data');
req.responseType = 'json';
req.send();

// Making an XMLHttpRequest, XHR retrieves data from servers without refreshing the webpage
// Setting the request method to GET and the request url to data, data is the name of the function in homeController
// send() makes the request

req.onload = () => {
    // When the above file/data is loaded this function runs

    const data = req.response;
    // data is now whatever the response from the request was

    data.forEach(element => {
        let recordItem = document.createElement('li');

        recordItem.textContent = element.record.id;

        document.getElementById('ulRecords').appendChild(recordItem);
        // For each element in data an li is created
        // The textcontent of that li is whatever the id of the current record is
        // record is a variable created in homeController when adding items to the array recordArr
        // Showing the current li in ulRecords
    });
};