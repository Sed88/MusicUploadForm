import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./SongRow.css"
import { faCaretDown, faCheck, faHeart, faList, faPlay, faShare } from "@fortawesome/free-solid-svg-icons"


const SongRow = ({ song }) => {  // song is object which comes from misucArray
    return (
        <>
            <div className="music">
                <div className="drag">
                    <div className="dragicons">
                        <FontAwesomeIcon icon={faList} />
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <div className="dragname">
                        <p>{song.songName.replace('.mp3', '')}</p>
                    </div>
                </div>
                <div className="artist">
                    <p>{song.artistName}</p>
                </div>
                <div className="trackk">
                    <p>{song.trackNumber}</p>
                    <div className="icons">
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faCheck} />
                        <FontAwesomeIcon icon={faShare} />
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SongRow