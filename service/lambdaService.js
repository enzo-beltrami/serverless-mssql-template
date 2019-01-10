const { getTemplateById } = require('../dao/lambdaDao');

exports.getTemplate = async body => {
	return await getTemplateById(body.id_empresa);
};
