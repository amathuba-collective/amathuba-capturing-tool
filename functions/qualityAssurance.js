exports.handler = async (event, context) => {
  return {
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Allow-Headers": "Authorization, Content-Type",
    },
    message: "hello world! quality Assurance",
    body: "for now",
  };
};
