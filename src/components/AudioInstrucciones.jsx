import React, { useRef } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AWS from 'aws-sdk';

// Configurar AWS con las variables de entorno
AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

const s3 = new AWS.S3();

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div>
      <VolumeUpIcon
        style={{
          paddingRight: "2rem",
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
