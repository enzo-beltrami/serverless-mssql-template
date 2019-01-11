exports.config = {
	user: process.env.user,
	password: process.env.password,
	server: process.env.host,
	database: process.env.database,
	port: Number(process.env.port),
};
