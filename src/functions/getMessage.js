const { app } = require("@azure/functions");
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

app.http("getMessage", {
  methods: ["GET"],
  authLevel: "anonymous",

  handler: async (request, context) => {
    try {
      const credential = new DefaultAzureCredential();

      const client = new SecretClient(
        process.env.KEY_VAULT_URL,
        credential
      );

      const secret = await client.getSecret(
        process.env.SECRET_NAME
      );

      return {
        status: 200,
        jsonBody: {
          message: "Taxi service API working",
    service: "TM Lowcarbon Service AB",
    city: "Stockholm",
    available: true,
          secretLoaded: true
        }
      };

    } catch (error) {
      context.log(error);

      return {
        status: 500,
        jsonBody: {
          message: "Could not read secret from Key Vault"
        }
      };
    }
  }
});
