// exports.handler = async (event, context) => {
// 	return {
// 		statusCode: 200,
// 		body: "hello world! entry register",
// 	};
// };

exports.handler = async (event, context) => {
	return {
		method: "POST",
		statusCode: 201,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Allow-Headers": "Authorization, Content-Type",
		},
		body: "hello world! entry register",
	};
};
