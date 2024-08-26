import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-2'
});

const s3 = new AWS.S3();

export const handleClickMemoriumPaper = async () => {
  try {
    const params = {
      Bucket: 'mybuckets3appprofesionalesmemorium',
      Key: 'paper_memoria_trabajo.pdf', // Solo la ruta del archivo
      Expires: 60
    };

    const data = await s3.getSignedUrlPromise('getObject', params);
    window.open(data, '_blank', 'noopener noreferrer');
  } catch (err) {
    console.error(err);
  }
};