'use strict';

console.info("Welcome to OpenAi's ChatGPT 3-5 turbo-0613");

const chatForm = document.querySelector('.form');
const scrollHeight = document.getElementById('responseSection').scrollHeight;
const clientHeight = document.getElementById('responseSection').clientHeight;

chatForm.addEventListener('submit', async event => {
	event.preventDefault();

	const paraUL = document.querySelector('.para-UL');
	const inputChunk = document.querySelector('.chatgpt');

	const response = await fetch('/chatGPT/meta', {
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			contents: chatForm.contents.value,
			temperature: 1.0,
			max_tokens: 700,
			n: 1,
			stream: true,
			stop: ['\n', ' Role:', ' Content:']
		}),
		method: 'POST'
	});

	const data = await response.json();

	const responseLi = document.createElement('li');
	paraUL.appendChild(responseLi);

	responseLi.classList.add('response-li');
	responseLi.textContent = data.response.content;

	await scrollbarReveal(scrollHeight, clientHeight);

	// Clear the input field
	inputChunk.value = '';
});

async function scrollbarReveal(sHeight, secHeight) {
	try {
		switch (sHeight > secHeight) {
			case true:
				document.querySelector('.response-section').style.overflowY =
					'scroll';
				break;
			case false:
				document.querySelector('.response-section').style.overflowY =
					'hidden';
				break;
			default:
				console.error('Error in scrollbarReveal() && switch statement');
				break;
		}
	} catch (error) {
		console.error(
			`Error in the scrollbarReveal()'s asynchronous-try-catch || ERROR: ${error}`
		);
	}
}
