import React from 'react';
import "./Songs.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCheck, faHeart, faList, faPlay, faShare} from "@fortawesome/free-solid-svg-icons";

const Songs = ({songs, player, play, setTrackIndex}) => {

    return (
        <table>
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Song Name</th>
                <th scope="col">Artist Name</th>
                <th scope="col">Track</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {
                songs.map((song, index) => {

                    return <tr key={song.id}>
                        <td>
                            <FontAwesomeIcon icon={faList} className="faList"/>
                            {
                                !player && <FontAwesomeIcon
                                    icon={faPlay}
                                    onClick={() => {
                                        play()
                                        setTrackIndex(index)
                                    }}
                                />
                            }
                        </td>
                        <td data-label="Song Name">
                            {song.songName.replace('.mp3', '')}
                        </td>
                        <td data-label="Artist Name">
                            {song.artistName}
                        </td>
                        <td data-label="Track">
                            {song.trackNumber}
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faHeart}/>
                            <FontAwesomeIcon icon={faCheck}/>
                            <FontAwesomeIcon icon={faShare}/>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    );
};

export default Songs;