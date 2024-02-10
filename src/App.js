import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PlayAllButton from './components/playAll/PlayAllButton';
import TrackNumber from './components/track/TrackNumber';
import AddAllButton from './components/addAll/AddAllButton';
import SongList from './components/songList/SongList';
import { search } from './features/MusicUploadSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header>
        <div className='first'>
          <PlayAllButton />
          <AddAllButton />
        </div>
        <div className='second'>
          <TrackNumber />
          <div className='filter'>
            <FontAwesomeIcon icon={faSearch} className='iconsearch' />
            <input type='text' placeholder='Filter' value={searchValue} onChange={(event) => {
              dispatch(search(event.target.value))
              setSearchValue(event.target.value)
            }} />
          </div>
        </div>
      </header>
      <div className='song'>
        <div className='box1'></div>
        <div className='box2'>Song Name</div>
        <div className='box2'>Artist Name</div>
        <div className='box3'>Track</div>
        <div className='box4'></div>
      </div>
      <SongList />

    </div>
  );
}

export default App;
