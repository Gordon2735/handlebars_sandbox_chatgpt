'use strict';

import formattedDateTime from './date_time.js';

console.info("Welcome to OpenAi's ChatGPT 3-5 turbo-0613");

const chatForm = document.querySelector('.form');
const scrollHeight = document.getElementById('responseSection').scrollHeight;
const height = document.getElementById('responseSection').height;

chatForm.addEventListener('submit', async event => {
	try {
		event.preventDefault();

		const paraUL = document.querySelector('.para-UL');
		const inputChunk = document.querySelector('.chatgpt');
		const question = chatForm.contents.value;

		const response = await fetch('/chatGPT/meta', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				contents: question
			})
		});

		const data = await response.json();
		const dataCompletion = data.response;

		const responseLi = document.createElement('li');
		const dividerHR = document.createElement('hr');

		responseLi.classList.add('response-li');
		dividerHR.classList.add('divider-HR');

		paraUL.appendChild(responseLi);
		responseLi.textContent = dataCompletion;
		responseLi.insertAdjacentHTML('afterend', '<hr class="divider-HR" />');

		await scrollbarReveal(scrollHeight, height);

		// Clear the input field
		inputChunk.value = '';

		console.log(formattedDateTime);

		//gm TEST ON API DATA PERSISTENCY
		let message = [
			{
				spans: '',
				dates: '',
				contents: ''
			}
		];

		const APIQuestionData = question;
		const body = document.querySelector('body');

		if (!document.querySelector('.request-section')) {
			const section = document.createElement('section');
			section.classList.add('request-section');
			section.classList.add('test-scroll');
			body.appendChild(section);
		}

		const spanText = 'User Question Event: ';
		const dateQuoteText = formattedDateTime;

		const contentData = {
			spans: spanText,
			dates: dateQuoteText,
			contents: APIQuestionData
		};
		message.push(contentData);

		for (let queryContents of message) {
			const querySection = document.querySelector('.request-section');
			const article = document.createElement('article');
			const span = document.createElement('span');
			const dateQuote = document.createElement('q');
			const testParagraph = document.createElement('p');

			article.classList.add('article');
			span.classList.add('span');
			dateQuote.classList.add('date-quote');
			testParagraph.classList.add('test-data');

			span.textContent = queryContents.spans;
			span.insertAdjacentElement('beforeend', dateQuote);
			dateQuote.textContent = queryContents.dates;
			testParagraph.textContent = queryContents.contents;

			//dm ==== Research a way to reveal proper code formatting within a ChatGPT Completion ====

			if (queryContents.contents === '') {
				testParagraph.textContent = 'No data to display';
			} else {
				querySection.appendChild(article);
				article.appendChild(span);
				article.appendChild(testParagraph);
			}
			querySection.appendChild(dividerHR);
		}
		return;
	} catch (error) {
		console.error(
			`Error in the chatForm's EventListener asynchronous-try-catch || ERROR: ${await error}`
		);
		return;
	}
});

async function scrollbarReveal(sHeight, secHeight) {
	try {
		switch (sHeight > secHeight) {
			case true:
				document.querySelector('.response-section').style.overflowY =
					'hidden';
				break;
			case false:
				document.querySelector('.response-section').style.overflowY =
					'scroll';
				break;
			default:
				console.error('Error in scrollbarReveal() && switch statement');
				break;
		}
		return;
	} catch (error) {
		console.error(
			`Error in the scrollbarReveal()'s asynchronous-try-catch || ERROR: ${await error}`
		);
		return;
	}
}
