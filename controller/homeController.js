'use strict';

exports.index = (req, res) => {
    res.sendfile('public/home.html');
}

exports.data = (req, res) => {

    const Airtable = require('airtable');
    const base = new Airtable({
        apiKey: 'keyAlLLzNbI6dhsd1'
    }).base('appoIX6ThocYXfAlx');

    let recordList = [];

    base('Design projects').select({
        view: "All projects"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            let recordRaw = record._rawJson;
            recordList.push({
                "record": recordRaw
            });
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        res.send(recordList);

        if (err) {

            console.error(err);
            return;
        }
    });
};