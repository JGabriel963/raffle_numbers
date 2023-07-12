import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { useState, useRef, useEffect, useContext } from "react";
import audioFile from "../../assets/vinheta.mp3";
import { VolumeContext } from "../VolumeContext";

export default function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const { volume } = useContext(VolumeContext);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <div className="px-4 h-14 md:h-16 w-full flex flex-row-reverse items-center bg-body-color">
      {isPlaying ? (
        <FaCirclePause
          className="text-5xl fill-primary-color border-2 rounded-full bg-white"
          onClick={toggleAudio}
        />
      ) : (
        <FaCirclePlay
          className="text-5xl fill-primary-color border-2 rounded-full bg-white"
          onClick={toggleAudio}
        />
      )}
      <audio ref={audioRef} src={audioFile} loop />
    </div>
  );
}
