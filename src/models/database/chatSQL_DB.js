'use strict';
/*  npm install --save mysql2 */
/*  npm install --save-dev @types/node */

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'chatSQL_DB',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
	enableKeepAlive: true,
	keepAliveInitialDelay: 20000
});

async function createDatabase() {
	try {
		await pool.query(`CREATE DATABASE IF NOT EXISTS chatSQL_DB;`);
	} catch (error) {
		console.error(`createDatabase had an ERROR: ${error}`);
	}
}

async function createTable() {
	try {
		await pool.query(`
            CREATE TABLE IF NOT EXISTS chatSQL_DB.chatSQL_Table (
                id INT NOT NULL AUTO_INCREMENT,
                role VARCHAR(255) NOT NULL,
                content VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
            );
        `);
	} catch (error) {
		console.error(`createTable had an ERROR: ${error}`);
	}
}

async function insertData(role, content) {
	try {
		await pool.query(`
            INSERT INTO chatSQL_DB.chatSQL_Table (role, content)
            VALUES ('${role}', '${content}');
        `);
	} catch (error) {
		console.error(`insertData had an ERROR: ${error}`);
	}
}

async function selectData() {
	try {
		const [rows] = await pool.query(`
            SELECT * FROM chatSQL_DB.chatSQL_Table;
        `);
		return rows;
	} catch (error) {
		console.error(`selectData had an ERROR: ${error}`);
	}
}

async function deleteData() {
	try {
		await pool.query(`
            DELETE FROM chatSQL_DB.chatSQL_Table;
        `);
	} catch (error) {
		console.error(`deleteData had an ERROR: ${error}`);
	}
}

async function dropTable() {
	try {
		await pool.query(`
            DROP TABLE IF EXISTS chatSQL_DB.chatSQL_Table;
        `);
	} catch (error) {
		console.error(`dropTable had an ERROR: ${error}`);
	}
}

async function dropDatabase() {
	try {
		await pool.query(`
            DROP DATABASE IF EXISTS chatSQL_DB;
        `);
	} catch (error) {
		console.error(`dropDatabase had an ERROR: ${error}`);
	}
}

export {
	createDatabase,
	createTable,
	insertData,
	selectData,
	deleteData,
	dropTable,
	dropDatabase
};
