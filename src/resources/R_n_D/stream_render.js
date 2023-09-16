'use strict';

res.render('template', {
	data: data,
	stream: true
});

// The Handlebars template would then be able to access
// the data using the data object. For example,
// the following code would render the value of the
// name property in the data object:
// {{ name }}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::

const express = require('express');
const handlebars = require('handlebars');
const typescript = require('typescript');

const app = express();

app.get('/', (req, res) => {
	// Get the text from the request body
	const text = req.body.text;

	// Create a new ChatGPT 3.5 instance
	const chatGPT = new ChatGPT3();

	// Generate a response
	const response = chatGPT.generate(text);

	// Render the response with Handlebars
	const html = handlebars.render(response, { text });

	// Send the response
	res.send(html);
});

// Start the server
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
