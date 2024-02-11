import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PlayAllButton from './components/playAll/PlayAllButton';
import TrackNumber from './components/track/TrackNumber';
import AddAllButton from './components/addAll/AddAllButton';
import {getMusic, search} from './features/MusicUploadSlice';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MusicUploadModal from "./components/musicUpload/MusicUploadForm";

import Songs from './components/songlist/Songs';
import MusicPlayer from './components/musicUploadForm/MusicPlayer';

function App() {
    const dispatch = useDispatch()
    const {musicArray, searchedSongs} = useSelector(state => state.music)

    const [openModal, setOpenModal] = useState(false);
    const [openPlayer, setOpenPlayer] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);

    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        dispatch(getMusic())
    }, [dispatch])


    return (
        <div className="App">
            <header>
                <div className='first'>
                    <PlayAllButton open={() => setOpenPlayer(true)}/>
                    <AddAllButton open={() => setOpenModal(true)}/>
                </div>
                <div className='second'>
                    <TrackNumber/>
                    <div className='filter'>
                        <FontAwesomeIcon icon={faSearch} className='iconsearch'/>
                        <input
                            type='text'
                            placeholder='Filter'
                            value={searchValue}
                            onChange={(event) => {
                                setSearchValue(event.target.value)
                                dispatch(search(event.target.value))
                            }}
                        />
                    </div>
                </div>
            </header>
            <Songs
                songs={searchValue ? searchedSongs : musicArray}
                player={openPlayer}
                play={() => setOpenPlayer(true)}
                setTrackIndex={setTrackIndex}
                />
            {openModal && <MusicUploadModal close={() => setOpenModal(false)}/>}
            {openPlayer && <MusicPlayer
                songs={musicArray}
                close={() => setOpenPlayer(false)}
                trackIndex={trackIndex}
                setTrackIndex={setTrackIndex}
                />
            }
        </div>
    );
}

export default App;
