import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

// Configura la región y el ID del Identity Pool de Cognito
const region = "us-east-2";
const identityPoolId = "us-east-2:7767831a-cc38-47cd-98e3-eb8192d843b8"; // Reemplaza con tu ID de Identity Pool

// Configura el cliente de DynamoDB con credenciales de Cognito
const client = new DynamoDBClient({
  region,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region }),
    identityPoolId,
  }),
});

// Configura el cliente de DynamoDB Document
const ddbDocClient = DynamoDBDocumentClient.from(client);

export { ddbDocClient, PutCommand };
