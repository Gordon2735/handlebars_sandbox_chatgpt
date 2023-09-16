'use strict';

console.info("Welcome to OpenAi's ChatGPT 3-5 turbo-0613");

const chatForm = document.querySelector('.form');

chatForm.addEventListener('submit', async event => {
	event.preventDefault();

	const formPara = document.querySelector('.form-para');
	const inputChunk = document.querySelector('.chatgpt');

	const response = await fetch('/chatGPT/meta', {
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			contents: chatForm.contents.value,
			temperature: 1.0,
			max_tokens: 100,
			n: 1,
			stream: true,
			stop: ['\n', ' Human:', ' AI:']
		}),
		method: 'POST'
	});

	const data = await response.json();
	console.log(data);
	formPara.textContent = data.response.content;
});
