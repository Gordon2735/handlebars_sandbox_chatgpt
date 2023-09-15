'use strict';

import express from 'express';
import indexHandler, {
	indexPostHandler,
	chatGPTPostHandler
} from '../routeHandlers/indexHandler.js';

const router = express.Router();

const indexRoute = router.get('/', indexHandler).post('/', indexPostHandler);

const chatGPTRoute = router.post('/chatGPT/meta', chatGPTPostHandler);

export { indexRoute as default, chatGPTRoute };
