const { getTemplate } = require('./service/lambdaService');
exports.lambdaFunction = async (event, context) => {
	try {
		const template = await getTemplate(event.body);
		return answerApi(template, 200);
	} catch (e) {
		console.log('Erro inesperado: ', e);
		return answerApi(
			{
				message: 'Um erro inesperado aconteceu contate o suporte.',
			},
			500,
		);
	}
};

const answerApi = (body, statusCode) => ({
	statusCode,
	body: JSON.stringify(body),
});

const checkBody = body => {
	if (body || body.id_empresa) {
		return answerApi(
			{
				message: 'id_empresa é necessário',
			},
			400,
		);
	}
};
