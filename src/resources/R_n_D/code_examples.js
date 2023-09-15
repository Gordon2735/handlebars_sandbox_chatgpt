'use strict';

const express = require('express');
const handlebars = require('handlebars');
const openai = require('openai');

const app = express();

app.get('/', async (req, res) => {
	const completions = await openai.complete('hello world', {
		temperature: 0.7,
		top_p: 0.9,
		frequency_penalty: 0.0,
		presence_penalty: 0.0
	});

	const template = handlebars.compile(`
    <ul>
      {{#each completions}}
        <li>{{.}}</li>
      {{/each}}
    </ul>
  `);

	res.render('index', {
		completions: template({
			completions
		})
	});
});
