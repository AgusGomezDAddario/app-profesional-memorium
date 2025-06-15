import { React, useRef } from "react";
import { VolumeUpIcon } from "@mui/icons-material/VolumeUp";

export const AudioPlayer = ({ audioSrc }) => {
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

