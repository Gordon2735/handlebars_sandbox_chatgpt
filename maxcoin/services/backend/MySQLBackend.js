/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const mysql = require('mysql2/promise');
const CoinAPI = require('../CoinAPI');

class MySQLBackend {
	constructor() {
		this.coinAPI = new CoinAPI();
		this.connection = null;
	}

	async connect() {
		this.connection = await mysql.createConnection({
			// const coinAPI = new CoinAPI();
			// return coinAPI.fetch();
			host: 'localhost',
			port: 3406,
			user: 'root',
			password: 'mypassword',
			database: 'maxcoin'
		});
		return this.connection;
	}

	async disconnect() {
		return this.connection.end();
	}

	async insert() {
		const data = await this.coinAPI.fetch();
		const sql = 'INSERT INTO coinvalues (valuedate, coinvalue) VALUES ?';
		const values = [];
		Object.entries(data.bpi).forEach((entry) => {
			values.push([entry[0], entry[1]]);
		});
		return this.connection.query(sql, [values]);
	}

	async getMax() {
		return this.connection.query(
			'SELECT * FROM coinvalues ORDER BY coinvalue DESC LIMIT 0, 1'
		);
	}

	async max() {
		console.info('Connecting to MySQL...');
		console.time('MySQL-connect');
		const connection = this.connect();
		if (connection) {
			console.info('Successfully connected to MySQL');
		} else {
			throw new Error('Could not connect to MySQL');
		}
		console.timeEnd('MySQL-connect');

		console.info('Inserting data into MySQL...');
		console.time('MySQL-insert');
		const insertResult = await this.insert();
		console.timeEnd('MySQL-insert');

		console.info(
			`Inserted ${insertResult[0].affectedRows} documents into MySQL`
		);

		console.info('Querying MySQL...');
		console.time('MySQL-find');
		const result = await this.getMax();
		const row = result[0][0];
		console.timeEnd('MySQL-find');

		console.info('Disconnecting from MySQL...');
		console.time('MySQL-disconnect');
		await this.disconnect();
		console.timeEnd('MySQL-disconnect');

		return row;
	}
}

module.exports = MySQLBackend;
