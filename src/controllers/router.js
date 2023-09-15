'use strict';

import express from 'express';
import indexRoute, { chatGPTRoute } from './routes/routes.js';

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routing = [indexRoute, chatGPTRoute];

const currentRoute = router;

for (const route of routing) {
	currentRoute.use(route);
}

export default router;
