const { config } = require('./dbConfig');
const sql = require('mssql');

exports.makeConn = () => {
	return sql.connect(config);
};
