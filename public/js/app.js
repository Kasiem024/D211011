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
        let allRecordData = document.createElement('p');
        // For each element in data an li, button and p is created

        recordId.textContent = element.record.fields.Name;
        // The textcontent of li is whatever the Name of the current record/element is
        // record is a variable created in homeController when adding items to the array recordArr

        recordIdBtn.textContent = element.record.fields.Name;
        recordIdBtn.className = 'btnClass';

        recordIdBtn.style.width = "100px";
        recordIdBtn.style.height = "50px";

        document.getElementById('ulRecordId').appendChild(recordId);
        document.getElementById('ulRecordId').appendChild(recordIdBtn);
        // Showing the current li and button in ulRecords

        const divEvent = document.getElementById('ulRecordId');

        divEvent.addEventListener('click', (e) => {
            // Added a click eventListener for all elements in div ulRecordId

            if (e.target.classList.contains('btnClass')) {
                // If the element being clicked is part of class btnClass

                if (e.target.textContent == element.record.fields.Name) {
                    // If the textContent of the clicked element matches the Name of an element 

                    allRecordData.textContent = JSON.stringify(element.record.fields);
                    // element.record.fields is a JSON object, stringify makes it a string

                    document.getElementById('ulRecord').appendChild(allRecordData);
                }
            }
        });
    });
};