'use strict';

import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config({ path: './config/.env' });

const openAi = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY
});

console.log('OpenAi API: ', process.env.OPENAI_API_KEY);

export default openAi;
