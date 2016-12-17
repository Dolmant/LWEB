const express = require('express');
const path = require('path');

const app = express();

app.get('/string', (req, res) => {
	const strings = ['rad', 'bla', 'ska'];
	const n = Math.floor(Math.random() * strings.length);
	res.send(strings[n]);
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/Lweb.html'));
});

app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.listen(8001);
