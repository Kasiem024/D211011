'use strict';

exports.index = (req, res) => {

    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: 'keyAlLLzNbI6dhsd1' }).base('appoIX6ThocYXfAlx');

    base('Design projects').find('recoXn3k9wwghAGwd', function(err, record) {
        if (err) { console.error(err); return; }
        console.log('Retrieved', record.id);
    });

    res.sendfile('public/index.html');
};