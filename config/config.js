const env = process.env;

module.exports = {
	port: env.PORT || 8080,
	host: env.HOST || 'localhost',
	serverUrl: function() {
		return `http://${this.host}:${this.port}`;
	}
};
