const { makeConn } = require('../resources/dbUtils');

exports.getTemplateById = async idEmpresa => {
	const pool = await makeConn();
	const result = await pool
		.request()
		.input('id_empresa', idEmpresa)
		.query('SELECT * FROM empresa WHERE id_empresa=@id_empresa');
	pool.close();
	return result.recordSets;
};
