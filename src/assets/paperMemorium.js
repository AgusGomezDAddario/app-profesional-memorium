import AWS from 'aws-sdk';

// Configurar AWS con las variables de entorno
AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

const s3 = new AWS.S3();

export const handleClickMemoriumPaper = async () => {
  try {
    const params = {
      Bucket: 'mybuckets3appprofesionalesmemorium',
      Key: 'paper_memoria_trabajo.pdf', 
      Expires: 60 // Tiempo de expiración del URL
    };

    const data = await s3.getSignedUrlPromise('getObject', params);
    window.open(data, '_blank', 'noopener noreferrer');
  } catch (err) {
    console.error('Error obteniendo el archivo:', err);
  }
};
