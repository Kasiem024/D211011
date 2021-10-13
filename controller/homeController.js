'use strict';

exports.index = (req, res) => {
    res.sendfile('public/home.html');
}

exports.data = (req, res) => {

    const Airtable = require('airtable');
    // Calling to Airtable module

    const base = new Airtable({
        apiKey: 'keyAlLLzNbI6dhsd1'
    }).base('appoIX6ThocYXfAlx');

    let recordArr = [];
    // Creating array here to be used later

    base('Design projects').select({
        sort: [{ field: "Name" }]
            // Sorts all items in property Name inside field by ascending order

    }).eachPage(function page(records, fetchNextPage) {
        // This function page will get called for each page of records
        // Calls for Desgin projects which is a table inside base() which is an application in Airtable

        records.forEach(function(record) {
            recordArr.push({
                "record": record._rawJson
            });
            // push() adds a new item to the array

        });

        // To fetch the next page of records, call fetchNextPage
        // If there are more records, page will get called again
        // If there are no more records, done will get called

        fetchNextPage();

    }, function done(err) {
        res.send(recordArr);
        // Enabling recordList to be called by XHR in other files

        if (err) {

            console.error(err);
            return;
        }
    });
};