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

    data.forEach((element, i) => {
        let recordId = document.createElement('li');
        let recordIdBtn = document.createElement('button')

        recordId.textContent = element.record.fields.Name;

        recordIdBtn.id = 'btnId' + i;

        recordIdBtn.addEventListener('click', Button1Handler);

        recordIdBtn.style.width = "100px";
        recordIdBtn.style.height = "20px";

        document.getElementById('ulRecordId').appendChild(recordId);
        document.getElementById('ulRecordId').appendChild(recordIdBtn);
        // For each element in data an li and button is created
        // The textcontent of that li is whatever the Name of the current record is
        // record is a variable created in homeController when adding items to the array recordArr
        // Showing the current li and button in ulRecords
    });
};
const Button1Handler = () => {
    const data = req.response;

    console.log('This is buttonhandler1' + data[0].record.fields.Name)

    data.forEach((element, i) => {
        let recordIdBtn = document.getElementById('btnId' + i);
        console.log(recordIdBtn.id);
    });
}