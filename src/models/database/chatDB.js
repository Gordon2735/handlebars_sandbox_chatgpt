'use strict';

const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/401-2018-auth';

async function mongooseConnection(goose) {
	try {
		const mongoose = goose;
		mongoose
			.connect(MONGODB_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
			.then(() => {
				console.log('Connected to MongoDB Atlas Database Server');
			})
			.catch(error => {
				console.error(
					'Error connecting to MongoDB Atlas Database Server',
					error.message
				);
			});
	} catch (error) {
		console.error(
			'Error connecting to MongoDB Atlas Database Server',
			await error.message
		);
	}
}

export default mongooseConnection;
