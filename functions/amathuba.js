const { Axios } = require("axios");

exports.handler = async (event, context) => {
  Axios({
    method: "post",
    url: "",
    data: { name: "imiss" },
  })
    .then((response) => {
      console.log(response);

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorizaton, Content-Type",
        },
        body: "hello world! entry",
      };
    })
    .catch((err) => {
      return {
        statusCode: 404,
        message: err.message,
      };
    });
};
