import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Modal from "./Modal";

const MusicPlayer = ({ songs, close, trackIndex, setTrackIndex }) => {
    const [musicTracks, setMusicTracks] = useState([])

    useEffect(() => {
        if (songs) {
            let all = songs.map(s => {
                return {
                    name: s.songName,
                    src: s.src
                }
            })
            console.log(all)
            setMusicTracks(all)
        }
    }, [songs])

    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
    };

    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
    };

    if (!musicTracks.length) {
        return null
    }


    return (
        <Modal close={close}>
            <AudioPlayer
                // style={{ width: "300px" }}
                style={{ borderRadius: "1rem" }}
                autoPlay
                // layout="horizontal"
                src={musicTracks[trackIndex].src}
                onPlay={(e) => console.log("onPlay")}
                showSkipControls={true}
                showJumpControls={false}
                header={`Now playing: ${musicTracks[trackIndex].name}`}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
            // other props here
            />
        </Modal>
    );
}


export default MusicPlayer