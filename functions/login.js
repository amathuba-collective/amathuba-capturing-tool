// const {Agents,validateAgent} = require("./models/agentModel")

exports.handler = async (event, context) => {
  console.log("BODY EB ELIKE", event.body);
  return {
    method: "GET",
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Allow-Headers": "Authorization, Content-Type",
    },
    body: "hello world! entry",
  };
};
