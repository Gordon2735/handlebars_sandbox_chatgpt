/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const { MongoClient } = require('mongodb');
const CoinAPI = require('../CoinAPI');

class MongoBackend {
	constructor() {
		this.coinAPI = new CoinAPI();
		this.mongoUrl = 'mongodb://localhost:37017/maxcoin';
		this.client = null;
		this.collection = null;
	}

	async connect() {
		const mongoClient = new MongoClient(this.mongoUrl, {
			monitorCommands: true
		});
		this.client = await mongoClient.connect();
		this.collection = this.client.db('maxcoin').collection('values');
		return this.client;
	}

	async disconnect() {
		if (this.client) {
			await this.client.close();
			return true;
		}
		return false;
	}

	async insert() {
		const data = await this.coinAPI.fetch();
		const documents = [];
		Object.entries(data.bpi).forEach(entry => {
			documents.push({
				date: entry[0],
				value: entry[1]
			});
		});
		return this.collection.insertMany(documents);
	}

	async getMax() {}

	async max() {
		console.info('Connecting to MongoDB...');
		console.time('mongodb-connect');
		const client = await this.connect();
		if (client) {
			console.info('Successfully connected to MongoDB');
		} else {
			throw new Error('Could not connect to MongoDB');
		}
		console.timeEnd('mongodb-connect');

		console.info('Inserting data into MongoDB...');
		console.time('mongodb-insert');
		const insertResult = await this.insert();
		console.timeEnd('mongodb-insert');

		console.info(
			`Inserted ${insertResult.insertedCount} documents into MongoDB`
		);

		console.info('Disconnecting from MongoDB...');
		console.time('mongodb-disconnect');
		await this.disconnect();
		console.timeEnd('mongodb-disconnect');
	}
}

module.exports = MongoBackend;
