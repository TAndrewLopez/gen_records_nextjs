import { useState } from "react";
import { PlayIcon, StopIcon } from "../../components/assets";

const TrackList = ({ vinyl }) => {
  const [currTrackPlaying, setCurrTrackPlaying] = useState(-1);

  const stopPreview = (trackId) => {
    const track = document.getElementById(trackId);
    track.pause();
    track.currentTime = 0;
    setCurrTrackPlaying(-1);
  };
  const playPreview = (id) => {
    if (currTrackPlaying > -1) {
      stopPreview(currTrackPlaying);
    }
    const currentTrack = document.getElementById(id);
    currentTrack.volume = 0.3;
    currentTrack.play();
  };

  return (
    <div className="mx-5 p-5">
      <div className="mb-3 flex flex-col sm:flex-row item-center gap-3">
        <h2 className="text-lg font-semibold text-shade-1">Track List:</h2>
        <p className="text-sm text-shade-4 flex items-center">
          {"("}
          Select <PlayIcon twClass={"w-4 h-4 mx-1.5 fill-green-400"} /> to
          preview song.
        </p>{" "}
        <p className="text-sm text-shade-4 flex items-center">
          Select <StopIcon twClass={"w-4 h-4 mx-1.5 fill-shade-1"} /> to stop
          preview.
          {")"}
        </p>
      </div>
      <ul className="text-shade-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        {vinyl?.tracks.map((track) => (
          <li key={track.id} className="flex items-center my-2">
            {track.preview ? (
              <>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    if (currTrackPlaying > -1) {
                      return stopPreview(currTrackPlaying);
                    }
                    setCurrTrackPlaying(track.id);
                    playPreview(track.id);
                  }}>
                  {currTrackPlaying === track.id ? (
                    <StopIcon twClass={"w-4 h-4 mr-1.5 fill-shade-1"} />
                  ) : (
                    <PlayIcon twClass={"w-4 h-4 mr-1.5 fill-green-400"} />
                  )}
                  <audio
                    preload="auto"
                    src={track.preview}
                    id={track.id}></audio>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="w-full flex items-center justify-between ">
              {track.name}
              {track.explicit && (
                <span className="px-2 py-px ml-2 font-light text-sm text-shade-1 rounded border border-errorRed">
                  Explicit
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
