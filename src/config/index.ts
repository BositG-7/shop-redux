const ENV = process.env;

console.log(ENV);

const config = {
	api: {
		baseURL: ENV.REACT_APP_BASE_URL,
	
	},
	
};

export default config;
