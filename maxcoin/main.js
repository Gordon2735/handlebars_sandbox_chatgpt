// const CoinAPI = require('./services/CoinAPI');
// const MongoBackend = require('./services/backend/MongoBackend');
// const RedisBackend = require('./services/backend/RedisBackend.js');
const MySQLBackend = require('./services/backend/MySQLBackend.js');

// async function runMongo() {
// 	const mongoBackend = new MongoBackend();
// 	// const coinAPI = new CoinAPI();
// 	// return coinAPI.fetch();
// 	return mongoBackend.max();
// }

// async function runRedis() {	// const coinAPI = new CoinAPI();
// return coinAPI.fetch();

// 	return redisBackend.max();
// }

async function runMySQL() {
	const mySQLBackend = new MySQLBackend();

	return mySQLBackend.max();
}

// runMongo()
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => console.error(error));

// runRedis()
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => console.error(error));

runMySQL()
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.error(error));
