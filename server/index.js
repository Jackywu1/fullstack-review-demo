const express = require('express');
const path = require('path');

const { getSomething, getSomethingPost } = require('./controller/index.js');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());

app.get('/test', getSomething);
app.post('/test/:id/testing', getSomethingPost);

// /test/123/testing
// /test/abc/testing

module.exports = app;
