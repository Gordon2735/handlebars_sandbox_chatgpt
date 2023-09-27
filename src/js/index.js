'use strict';

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
				// temperature: 1.0,
				// max_tokens: 700
				// n: 1,
				// stream: true,
				// stop: ['\n', ' Role:', ' Content:']
			})
		});

		const data = await response.json();
		const dataCompletion = data.response;

		const dividerHR = document.createElement('hr');
		dividerHR.classList.add('divider-HR');

		const responseLi = document.createElement('li');
		responseLi.classList.add('response-li');

		paraUL.appendChild(responseLi);

		responseLi.textContent = dataCompletion;

		await scrollbarReveal(scrollHeight, height);

		responseLi.appendChild(dividerHR);

		// Clear the input field
		inputChunk.value = '';

		// Get the current date and time
		const now = new Date();

		// Create an options object for formatting the date and time
		const options = {
			weekday: 'long', // Full weekday name
			month: 'long', // Full month name
			day: 'numeric', // Day of the month
			year: 'numeric', // 4-digit year
			hour: '2-digit', // 2-digit hours (12-hour format)
			minute: '2-digit', // 2-digit minutes
			second: '2-digit', // 2-digit seconds
			hour12: true, // Use 12-hour format
			timezone: 'EST'
		};

		// Format the date and time according to the options
		const dateTimeFormatter = new Intl.DateTimeFormat('en-US', options);
		const formattedDateTime = dateTimeFormatter.format(now);

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

		if (!document.querySelector('.section')) {
			const section = document.createElement('section');
			section.classList.add('section');
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
			const querySection = document.querySelector('.section');
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

			querySection.appendChild(article);
			article.appendChild(span);
			article.appendChild(testParagraph);
			article.appendChild(dividerHR);

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
