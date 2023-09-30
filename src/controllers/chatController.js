'use strict';

// import openAi from '../../config/config.js';
import openAi from '../../config/config.js';
import mongoose from 'mongoose';
import ChatQuestion, {
	ChatCompletion,
	ChatInstance
} from '../models/schemas/ChatCompletionSchema.js';

async function generateResponse(req, res) {
	try {
		const { contents } = req.body;

		let message = new Object();

		message = [
			{
				role: 'system',
				content: contents
			}
		];

		const chatQuestion = new ChatQuestion({
			role: 'user',
			content: contents
		});

		const chatSession = [];

		chatSession.push(message);

		const messagePersistency = [];

		const completion = await openAi.chat.completions.create({
			model: 'gpt-3.5-turbo-0613',
			messages: message,
			max_tokens: 700
		});

		const responses = completion.choices[0].message.content;

		const botMessage = {
			role: 'assistant',
			content: responses
		};

		messagePersistency.push(botMessage);

		await res.status(200).json({
			response: responses
			// response: messagePersistency
		});

		const chatCompletion = new ChatCompletion(botMessage);
		let ID = new mongoose.Types.ObjectId();

		const chatInstance = new ChatInstance({
			id: ID,
			question: chatQuestion,
			completion: chatCompletion
		});

		ID = chatInstance._id;
		console.log(ID);

		await chatInstance.save();
	} catch (error) {
		console.error(`
		The generateResponse() function produced an error in the Try/Catch Block as follows:
			ERROR: ${await error}
	`);
	}
}
export { generateResponse };
