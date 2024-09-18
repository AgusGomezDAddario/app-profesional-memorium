import React, { useRef } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
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

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <VolumeUpIcon
        style={{
          fontSize: "5rem",
          color: "white",
          paddingTop: "0",
          cursor: "pointer",
        }}
        onClick={handlePlayAudio}
      />
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;