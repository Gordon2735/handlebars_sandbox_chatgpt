'use strict';

import {
	generateResponse
	// dataCompletionPersistance
} from '../chatController.js';

// const aggragate = [];

// async function aggragateResponse() {
// 	for (const responses of dataCompletionPersistance) {
// 		aggragate.push(responses);
// 	}
// 	return aggragate;
// }

// const aggragation = console.info(aggragateResponse());

async function indexHandler(_req, res) {
	try {
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('index', {
			title: 'Streaming the ChatGPT API',
			layout: 'main',
			response: ``
		});
	} catch (error) {
		console.error(`indexHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');
	}
}

// async function indexPostHandler(req, res) {
// 	try {
// 		// await generateResponse(req, res);
// 		// return aggragateResponse();
// 	} catch (error) {
// 		console.error(`indexPostHandler had an ERROR: ${error}`);
// 		res.status(500).send('Server Error');
// 	}
// }

async function chatGPTPostHandler(req, res) {
	try {
		return generateResponse(req, res);
		// return aggragateResponse();
	} catch (error) {
		console.error(`indexPostHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');
	}
}

export { indexHandler as default, chatGPTPostHandler };
