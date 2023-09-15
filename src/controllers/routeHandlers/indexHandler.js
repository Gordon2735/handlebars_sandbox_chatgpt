'use strict';

import { generateResponse } from '../chatController.js';

async function indexHandler(_req, res) {
	try {
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('index', {
			title: 'Streaming the ChatGPT API',
			layout: 'main',
			response: ''
		});
	} catch (error) {
		console.error(`indexHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');
	}
}

async function indexPostHandler(req, res) {
	try {
		return;
	} catch (error) {
		console.error(`indexPostHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');
	}
}

async function chatGPTPostHandler(req, res) {
	try {
		return generateResponse(req, res);
	} catch (error) {
		console.error(`indexPostHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');
	}
}

export { indexHandler as default, indexPostHandler, chatGPTPostHandler };
