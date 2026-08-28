const { app } = require("@azure/functions");

app.http("getMessage", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log("HTTP trigger function processed a request.");

    return {
      status: 200,
      jsonBody: {
        message: "Hello from Malar-FunctionApp",
        status: "Function is working"
      }
    };
  }
});
