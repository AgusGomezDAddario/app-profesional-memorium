import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";

// Configurar el cliente de S3 con las variables de entorno
const s3Client = new S3Client({
  region: 'us-east-2',
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: 'us-east-2' }),
    identityPoolId: import.meta.env.VITE_AWS_IDENTITY_POOL_ID,
  }),
});

export const handleClickMemoriumPaper = async () => {
  try {
    const params = {
      Bucket: 'mybuckets3appprofesionalesmemorium',
      Key: 'paper_memoria_trabajo.pdf',
      Expires: 60,
    };

    const command = new GetObjectCommand(params);
    const url = await s3Client.getSignedUrl(command);
    window.open(url, '_blank', 'noopener noreferrer');
  } catch (err) {
    console.error('Error obteniendo el archivo:', err);
  }
};