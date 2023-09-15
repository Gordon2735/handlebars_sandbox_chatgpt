'use strict';

import express from 'express';
import { create, ExpressHandlebars } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import cors from 'cors';
import router from './controllers/router.js';
import helper from '../views/helpers/helpers.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 9080;
const HOST = process.env.HOST || '127.0.0.1';

const handlebars = create({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, '..', 'views', 'layouts'),
	partialsDir: path.join(__dirname, '..', 'views', 'partials'),
	helpers: { ...helper }
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '..', 'views'));
app.enable('view cache');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('src'));
app.use(express.static('views'));

app.use('/', router);
app.use(morgan('dev'));
app.use(cors());

// set Global Variables
app.use(function (_req, res, next) {
	if (res.locals.partials) res.locals.partials = {};
	next();
});

app.listen(PORT, () => {
	console.log(`Server running at http://${HOST}:${PORT}/`);
});
