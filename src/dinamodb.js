import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

// Configura la región y el ID del Identity Pool de Cognito
const region = "us-east-2";
const identityPoolId = import.meta.env.VITE_AWS_IDENTITY_POOL_ID; // Reemplaza con tu ID de Identity Pool


console.log(import.meta.env.VITE_AWS_IDENTITY_POOL_ID);

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
console.log(ddbDocClient);

export { ddbDocClient, PutCommand, ScanCommand };