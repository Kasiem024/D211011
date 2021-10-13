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
        recordIdBtn.className = 'btnClass';
        recordIdBtn.textContent = element.record.fields.Name;

        const container = document.getElementById('ulRecordId');

        recordIdBtn.style.width = "100px";
        recordIdBtn.style.height = "50px";

        document.getElementById('ulRecordId').appendChild(recordId);
        document.getElementById('ulRecordId').appendChild(recordIdBtn);
        // For each element in data an li and button is created
        // The textcontent of that li is whatever the Name of the current record is
        // record is a variable created in homeController when adding items to the array recordArr
        // Showing the current li and button in ulRecords
        let btnPressed;
        // Click handler for entire DIV container
        container.addEventListener('click', function(e) {
            // But only alert for elements that have an alert-button class
            if (e.target.classList.contains('btnClass')) {
                if (e.target.innerHTML == element.record.fields.Name) {
                    console.log(element.record.id);
                    btnPressed = element.record.id;
                    btnPressed = element.record.id.find();
                    console.log(btnPressed)
                }
            }
        });

    });
};