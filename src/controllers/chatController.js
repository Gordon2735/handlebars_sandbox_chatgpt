'use strict';

import openAi from '../../config/config.js';

const dataCompletionPersistance = [];

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
		max_tokens: 700
	});

	const responses = completion.choices[0].message;

	const currentResponse = completion.choices;
	dataCompletionPersistance.push(responses);

	let completionLastIndex = dataCompletionPersistance.length - 1;

	for (let responding of dataCompletionPersistance) {
		if (dataCompletionPersistance.length <= 0) {
			return res.status(200).json({
				response: currentResponse[0].message
			});
		} else if (dataCompletionPersistance.length > 0) {
			return res.status(200).json({
				response: dataCompletionPersistance[completionLastIndex]
			});
		} else {
			res.status(500).json({ response: 'Server Error' }, () => {
				console.error(
					`
						response: dataCompletionPersistance[completionLastIndex] had ERROR:
						${error}
					`
				);
				return;
			});
		}
	}
}
export { generateResponse };
