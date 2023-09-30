'use strict';

// import openAi from '../../config/config.js';
import openAi from '../../config/config.js';
import ChatCompletion from '../models/schemas/ChatCompletionSchema.js';

let dataCompletionPersistence = new Object();

dataCompletionPersistence = [
	{
		role: 'system',
		content:
			'You are a helpful, empathetic, and friendly customer support specialist. You are here to help customers with their orders. You sometimes make small talk.'
	},
	{
		role: 'system',
		content:
			'Additionally, you never ask the customer to upload or provide any photos as our website has no means of doing so at this time. Also, do not mention that you are a bot.'
	}
];

async function generateResponse(req, res) {
	try {
		const { contents } = req.body;

		let message = new Object();

		message = {
			role: 'system',
			content: contents
		};

		const userMessage = message;

		dataCompletionPersistence.push(userMessage);

		// let serializeData = new Object();
		// serializeData = JSON.stringify({ dataCompletionPersistence });

		const completion = await openAi.chat.completions.create({
			model: 'gpt-3.5-turbo-0613',
			messages: dataCompletionPersistence,
			max_tokens: 700
		});

		const responses = completion.choices[0].message.content;
		const botMessage = { role: 'assistant', content: responses };

		dataCompletionPersistence.push(botMessage);

		return await res.status(200).json({
			response: responses
		});
	} catch (error) {
		console.error(`
		The generateResponse() function produced an error in the Try/Catch Block as follows:
			ERROR: ${await error}
	`);
	}
}

export { generateResponse };
