'use strict';

import openAi from '../../config/config.js';

async function generateResponse(req, res) {
	const { contents } = req.body;

	const message = [
		{
			role: 'user',
			content: `${contents}`
		}
	];

	const completion = await openAi.chat.completions.create({
		model: 'gpt-3.5-turbo-0613',
		messages: message,
		max_tokens: 100
	});

	const responses = completion.choices[0].message;
	console.log(responses);

	res.status(200).json({ response: completion.choices[0].message });
}

export { generateResponse };
